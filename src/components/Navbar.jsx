import { useEffect, useRef, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { label: "الصفحة الرئيسية", to: "/" },
  { label: " العطور الرجالية", to: "/category/men" },
  { label: " العطور النسائية", to: "/category/women" },
  { label: "تيستر", to: "/#testers", hash: "testers" },
  { label: "من نحن", to: "/#about", hash: "about" },
  { label: "تواصل معنا", to: "/#contact", hash: "contact" },
];

const activeClass =
  "font-label-md text-label-md text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300";
const inactiveClass =
  "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState(null);
  const lastScroll = useRef(0);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Scroll-based section tracking on home page only
  useEffect(() => {
    if (location.pathname !== "/") {
      setVisibleSection(null);
      return;
    }

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      const contactEl = document.getElementById("contact");
      const testersEl = document.getElementById("testers");
      const aboutEl = document.getElementById("about");

      if (contactEl && scrollY >= contactEl.offsetTop) {
        setVisibleSection("contact");
      } else if (testersEl && scrollY >= testersEl.offsetTop) {
        setVisibleSection("testers");
      } else if (aboutEl && scrollY >= aboutEl.offsetTop) {
        setVisibleSection("about");
      } else {
        setVisibleSection(null);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Hide/show nav on scroll direction
  useEffect(() => {
    const onScroll = () => {
      const current = window.pageYOffset;
      if (current <= 0) {
        setHidden(false);
      } else if (current > lastScroll.current) {
        setHidden(true);
      } else if (current < lastScroll.current) {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, link) => {
    if (link.hash && location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileMenuOpen(false);
  };

  // Single source of truth: one active label at a time
  const activeLabel = useMemo(() => {
    if (location.pathname === "/category/men") return " العطور الرجالية";
    if (location.pathname === "/category/women") return " العطور النسائية";
    if (location.pathname === "/") {
      if (location.hash === "#contact" || visibleSection === "contact")
        return "تواصل معنا";
      if (location.hash === "#testers" || visibleSection === "testers")
        return "تيستر";
      if (location.hash === "#about" || visibleSection === "about")
        return "من نحن";
      return "الصفحة الرئيسية";
    }
    return null;
  }, [location.pathname, visibleSection, location.hash]);

  return (
    <header
      className={`bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 glass-nav transition-transform duration-300 ${
        hidden ? "-translate-y-full" : ""
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/*  */}
        {/* <div className="flex items-center gap-4">
          <button className="scale-100 active:scale-95 transition-transform">
            <Icon name="search" className="text-primary" />
          </button>
          <button className="scale-100 active:scale-95 transition-transform">
            <Icon name="shopping_bag" className="text-primary" />
          </button>
        </div> */}
        <div className="flex items-center gap-6">
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="scale-100 active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Icon
                name={mobileMenuOpen ? "close" : "menu"}
                className="text-primary text-2xl"
              />
            </button>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = link.label === activeLabel;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={(e) => {
                    if (link.hash && location.pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById(link.hash);
                      if (el) {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                  className={isActive ? activeClass : inactiveClass}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <Link
          to="/"
          className="text-headline-lg font-display-lg tracking-widest text-primary text-center no-underline"
        >
          VIORA PERFUMES
        </Link>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-margin-mobile py-4 gap-1 border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md">
          {links.map((link) => {
            const isActive = link.label === activeLabel;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`font-label-md text-label-md transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-surface-container ${
                  isActive
                    ? "text-primary font-bold bg-surface-container-highest"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
