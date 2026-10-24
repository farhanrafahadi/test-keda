import { useEffect, useState } from "react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PRICING", href: "#pricing" },
  { label: "CONTACT", href: "#contact" },
];

const Header = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleLogin = () => {
    setOpen(false);
    onLoginClick?.();
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full">
      <header
        className={`relative w-full flex items-center justify-between px-4 sm:px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "h-16 md:h-20 bg-white/60 backdrop-blur-md shadow-sm"
            : "h-20 md:h-24 bg-transparent"
        }`}
      >
        <a
          href="#"
          className={`flex items-center gap-2 font-bold text-lg sm:text-xl ${scrolled ? "text-cyan-500 " : "text-white"}`}
        >
          <span className="tracking-wider">HOME</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 font-bold text-gray-900 tracking-wide">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-cyan-500 transition"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onLoginClick}
            className="border border-cyan-400 text-cyan-400 px-8 py-1.5 rounded-sm hover:bg-cyan-50 transition font-semibold tracking-wide text-sm"
          >
            LOGIN
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden p-2 -mr-2 text-gray-900 rounded-md hover:bg-gray-100/70 transition"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`md:hidden absolute top-full inset-x-0 overflow-hidden bg-white/80 backdrop-blur-md shadow-md transition-all duration-300 ${
          open ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 gap-1 font-bold text-gray-900 tracking-wide">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-gray-200/70 hover:text-cyan-500 transition"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={handleLogin}
            className="mt-3 w-full border border-cyan-400 text-cyan-500 py-2.5 rounded-sm hover:bg-cyan-50 transition font-semibold tracking-wide text-sm"
          >
            LOGIN
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
