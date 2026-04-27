import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-[#0a0f1a]/90 backdrop-blur-lg shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-slate-800/80' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-md">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Yari<span className="text-blue-600">Tech</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Login
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-md shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0f1a] border-t border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-1">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-slate-200 dark:border-slate-800 mt-3">
            <Link to="/login" className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Login
            </Link>
            <a href="#contact" className="flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
