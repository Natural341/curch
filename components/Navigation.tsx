'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const menuItems = [
    {
      name: t('home'),
      href: '/',
    },
    {
      name: t('about'),
      submenu: [
        { name: t('aboutSubmenu.history'), href: '/kilise/tarih' },
        { name: t('aboutSubmenu.art'), href: '/kilise/sanat' },
        { name: t('aboutSubmenu.franciscans'), href: '/kilise/fransiskenler' },
      ],
    },
    {
      name: t('massAndPrayer'),
      submenu: [
        { name: t('massAndPrayerSubmenu.massTimes'), href: '/ayin/saatleri' },
        { name: t('massAndPrayerSubmenu.prayers'), href: '/dua/ozel-dualar' },
        { name: t('massAndPrayerSubmenu.calendar'), href: '/takvim-2025' },
      ],
    },
    {
      name: t('communities'),
      href: '/cemaatimiz',
    },
    {
      name: t('bible'),
      href: '/kutsal-kitap',
    },
    { name: t('gallery'), href: '/galeri' },
    { name: t('contact'), href: '/iletisim' },
  ];

  // Get current locale from pathname
  const getCurrentLocale = () => {
    if (pathname?.startsWith('/en')) return 'en';
    if (pathname?.startsWith('/it')) return 'it';
    return 'tr';
  };
  const currentLocale = getCurrentLocale();

  // Switch locale in URL
  const switchLocale = (newLocale: string) => {
    if (!pathname) return `/${newLocale}`;
    const pathWithoutLocale = pathname.replace(/^\/(tr|en|it)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    return newPath;
  };

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/hac.png"
              alt="Sant Antuan Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <Link href="/">
              <div className="text-2xl font-bold tracking-tight" style={{fontFamily: 'var(--font-inter)'}}>
                <span className="text-gray-900">Sent </span>
                <span className="text-red-900">Antuan</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="px-4 py-2 text-gray-800 hover:text-red-800 transition-colors duration-300 font-semibold text-[15px]">
                      {item.name}
                      <svg className="inline-block w-3 h-3 ml-1 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-5 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-800 transition-all duration-300 text-sm font-semibold"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="px-4 py-2 text-gray-800 hover:text-red-800 transition-colors duration-300 font-semibold text-[15px]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher - Dropdown */}
            <div className="relative group ml-4 border-l border-gray-200 pl-4">
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <span className="text-2xl">{currentLanguage.flag}</span>
                <svg className="w-3 h-3 text-gray-600 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white/98 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                <div className="py-1.5">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocale(lang.code)}
                      className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 text-sm font-medium ${
                        currentLocale === lang.code
                          ? 'bg-[#8B1538] text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-2 bg-white border-t border-gray-200">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-base font-semibold flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 bg-gray-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-red-800 hover:bg-white transition-colors text-sm font-semibold"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-base font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Language Switcher */}
            <div className="border-t border-gray-200 mt-2 pt-2">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'language' ? null : 'language')}
                className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors text-base font-medium flex items-center justify-between rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{currentLanguage.flag}</span>
                  <span>{currentLanguage.name}</span>
                </div>
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'language' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'language' && (
                <div className="px-2 mt-1">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocale(lang.code)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium mb-1 ${
                        currentLocale === lang.code
                          ? 'bg-[#8B1538] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
