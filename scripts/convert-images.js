import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");
const MAX_DIMENSION = 1000;
const QUALITY = 85;

const supportedExtensions = [".png", ".jpg", ".jpeg"];

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

async function convertImages() {
  try {
    console.log("Scanning assets directory:", ASSETS_DIR);
    const allFiles = await getFiles(ASSETS_DIR);
    const imageFiles = allFiles.filter((file) =>
      supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    console.log(`Found ${imageFiles.length} images to convert.`);

    let totalBeforeBytes = 0;
    let totalAfterBytes = 0;
    let convertedCount = 0;

    for (const filePath of imageFiles) {
      const ext = path.extname(filePath);
      const outputFilePath = filePath.substring(0, filePath.length - ext.length) + ".webp";
      const relativePath = path.relative(ASSETS_DIR, filePath);

      try {
        const stats = await fs.stat(filePath);
        const beforeBytes = stats.size;
        totalBeforeBytes += beforeBytes;

        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = image;

        // Resize if width or height exceeds MAX_DIMENSION
        if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
          const isLandscape = metadata.width > metadata.height;
          pipeline = pipeline.resize({
            width: isLandscape ? MAX_DIMENSION : undefined,
            height: !isLandscape ? MAX_DIMENSION : undefined,
            fit: "inside",
          });
        }

        // Convert to webp
        await pipeline.webp({ quality: QUALITY }).toFile(outputFilePath);

        const afterStats = await fs.stat(outputFilePath);
        const afterBytes = afterStats.size;
        totalAfterBytes += afterBytes;

        const savingsPercent = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1);
        console.log(
          `Converted: ${relativePath} (${(beforeBytes / 1024 / 1024).toFixed(2)} MB -> ${(afterBytes / 1024 / 1024).toFixed(2)} MB, -${savingsPercent}%)`
        );

        // Delete the original file
        await fs.unlink(filePath);
        convertedCount++;
      } catch (err) {
        console.error(`Error processing ${relativePath}:`, err);
      }
    }

    const beforeMB = totalBeforeBytes / 1024 / 1024;
    const afterMB = totalAfterBytes / 1024 / 1024;
    const savedMB = beforeMB - afterMB;
    const savedPercent = beforeMB > 0 ? ((savedMB / beforeMB) * 100).toFixed(1) : 0;

    console.log("\n================ SUMMARY ================");
    console.log(`Total files converted: ${convertedCount}`);
    console.log(`Total size before:     ${beforeMB.toFixed(2)} MB`);
    console.log(`Total size after:      ${afterMB.toFixed(2)} MB`);
    console.log(`Total space saved:     ${savedMB.toFixed(2)} MB (${savedPercent}%)`);
    console.log("=========================================\n");
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

convertImages();
