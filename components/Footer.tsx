import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-3">
              {/* Logo and Title */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image
                    src="/beyaz_hac.png"
                    alt={t('churchName')}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-wide text-white">
                    {t('churchName')}
                  </h3>
                  <div className="w-12 h-0.5 bg-red-900 mt-1"></div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-xs">
                {t('description')}
              </p>

              {/* Contact Info */}
              <div className="space-y-1.5 pt-1">
                <a
                  href="tel:+902122440935"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 text-red-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs">+90 212 244 09 35</span>
                </a>

                <a
                  href="mailto:info@sentantuan.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <svg className="w-4 h-4 text-red-900 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">info@sentantuan.com</span>
                </a>

                <div className="flex items-start text-gray-400">
                  <svg className="w-4 h-4 text-red-900 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-xs">
                    <div>{t('addressLine1')}</div>
                    <div className="text-gray-500">{t('addressLine2')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Quick Links */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold border-b border-gray-800 pb-1.5">
                    {t('quickAccess')}
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: '/ayin/saatleri', label: t('massTimes') },
                      { href: '/dua/ozel-dualar', label: t('prayers') },
                      { href: '/cemaatimiz', label: t('communities') },
                      { href: '/takvim-2025', label: t('calendar') },
                      { href: '/galeri', label: t('gallery') },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-0.5 bg-red-900 mr-0 group-hover:mr-1.5 transition-all duration-200"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Community */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold border-b border-gray-800 pb-1.5">
                    {t('community')}
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: '/cemaatimiz/fokolarini', label: 'Focolare' },
                      { href: '/cemaatimiz/vincent-de-paul', label: 'Vincent De Paul' },
                      { href: '/cemaatimiz/legion-of-mary', label: 'Legion of Mary' },
                      { href: '/cemaatimiz/couples-for-christ', label: 'Couples for Christ' },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-0.5 bg-red-900 mr-0 group-hover:mr-1.5 transition-all duration-200"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discover */}
                <div className="space-y-2.5">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold border-b border-gray-800 pb-1.5">
                    {t('discover')}
                  </h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: '/kilise/tarih', label: t('history') },
                      { href: '/kilise/sanat', label: t('art') },
                      { href: '/kutsal-kitap/okuyucu', label: t('bible') },
                      { href: '/iletisim', label: t('contact') },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                        >
                          <span className="w-0 group-hover:w-1.5 h-0.5 bg-red-900 mr-0 group-hover:mr-1.5 transition-all duration-200"></span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                <Image
                  src="/beyaz_hac.png"
                  alt={t('churchName')}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} {t('churchName')}. {t('allRightsReserved')}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/iletisim"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-200"
              >
                {t('contact')}
              </Link>
              <Link
                href="/galeri"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-200"
              >
                {t('gallery')}
              </Link>
              <Link
                href="/ayin/saatleri"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-200"
              >
                {t('massTimes')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
