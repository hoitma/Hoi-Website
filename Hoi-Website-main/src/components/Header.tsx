import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'Work Experience',
      href: '#experience'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Skills',
      href: '#skills'
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/95 backdrop-blur-sm shadow-sm border-b border-border' : 'bg-transparent'}`}>

      <div className="w-full max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-lg font-bold font-Bricolage_Grotesque text-foreground tracking-tight hover:text-muted-foreground transition-colors">

            Hoi.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium font-Google_Sans_Flex text-foreground hover:text-violet-600 transition-colors">
                {item.label}
              </a>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium font-Google_Sans_Flex text-foreground hover:text-violet-600 transition-colors px-4 py-2">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
