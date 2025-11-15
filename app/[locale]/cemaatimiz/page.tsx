import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function CemaatimizPage() {
  const t = useTranslations('communities');
  const cemaatler = [
    {
      name: 'Fokolarini',
      description: 'Birlik ruhuyla yaşayan ve toplumda karşılıklı sevgiyi yaygınlaştırmayı amaçlayan uluslararası cemaat hareketi.',
      href: '/cemaatimiz/fokolarini',
      iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
    },
    {
      name: 'Vincent De Paul',
      description: 'Yoksullara, yaşlılara ve muhtaçlara hizmet eden hayırsever cemaat. Sosyal dayanışma ve yardımlaşma odaklı.',
      href: '/cemaatimiz/vincent-de-paul',
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      name: 'Legion of Mary',
      description: 'Meryem Ana\'nın manevi rehberliğinde, dua ve aktif apostolat çalışmalarıyla hizmet eden cemaat.',
      href: '/cemaatimiz/legion-of-mary',
      iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    },
    {
      name: 'Couples for Christ',
      description: 'Evli çiftlere yönelik, aile değerlerini güçlendirmeyi ve İsa Mesih\'in öğretileriyle aileleri desteklemeyi amaçlayan cemaat.',
      href: '/cemaatimiz/couples-for-christ',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      name: 'Karizmatikler',
      description: 'Kutsal Ruh\'un armağanları ile yaşayan, dua ve tapınma odaklı dinamik cemaat hareketi.',
      href: '/cemaatimiz/karizmatikler',
      iconPath: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
    },
    {
      name: 'Meryem Ana Cemiyeti',
      description: 'Meryem Ana\'ya adanmış dua ve hizmet toplluluğu. Manevi gelişim ve cemaat içi dayanışmaya odaklanır.',
      href: '/cemaatimiz/meryem-ana-cemiyeti',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] lg:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/Sent-Antuan-Kilisesi-06.jpg"
            alt="Communities"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-white drop-shadow-2xl leading-tight">
              {t('title')}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/90 mb-4 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Communities Info Box - Compact */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/30 rounded-lg px-4 py-3 shadow-xl">
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold">{t('total')}</p>
                    <p className="text-lg font-bold">6</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold">{t('languages')}</p>
                    <p className="text-lg font-bold">3+</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold">{t('service')}</p>
                    <p className="text-lg font-bold">{t('active')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Giriş */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#8B1538] tracking-wide mb-6
                       bg-gradient-to-r from-[#8B1538] via-[#A91D3A] to-[#8B1538] bg-clip-text text-transparent
                       drop-shadow-sm"
              style={{fontFamily: 'var(--font-geist-sans)'}}>
            {t('stronger')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('strongerDescription')}
          </p>
        </div>

        {/* Cemaat Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cemaatler.map((cemaat) => (
            <Link
              key={cemaat.name}
              href={cemaat.href}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-all duration-300 border border-gray-200">
                <div className="w-10 h-10 mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d={cemaat.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cemaat.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {cemaat.description}
                </p>
                <div className="text-gray-700 font-medium text-sm">
                  {t('learnMore')} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bilgi Bölümü */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('howToJoin')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t('howToJoinText1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('howToJoinText2')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('meetings')}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t('meetingsText1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('meetingsText2')}
            </p>
          </div>
        </div>

      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#8B1538] tracking-wide mb-4
                       bg-gradient-to-r from-[#8B1538] via-[#A91D3A] to-[#8B1538] bg-clip-text text-transparent
                       drop-shadow-sm"
              style={{fontFamily: 'var(--font-geist-sans)'}}>
            {t('joinUs')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-700 font-medium">
            {t('joinUsDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/iletisim"
              className="relative overflow-hidden bg-[#8B1538] text-white font-medium py-3 px-8 rounded-lg shadow-md text-sm
                        before:absolute before:inset-0 before:bg-gradient-to-b before:from-black before:to-gray-900 before:-translate-y-full
                        before:transition-transform before:duration-500 hover:before:translate-y-0 hover:shadow-lg"
            >
              <span className="relative z-10">{t('contact')}</span>
            </Link>
            <Link
              href="/ayin/saatleri"
              className="relative overflow-hidden bg-transparent text-[#8B1538] font-medium py-3 px-8 rounded-lg border-2 border-[#8B1538] shadow-md text-sm
                        before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#8B1538] before:to-[#6B0F28] before:-translate-y-full
                        before:transition-transform before:duration-500 hover:before:translate-y-0
                        hover:text-white transition-colors duration-500"
            >
              <span className="relative z-10">{t('massTimes')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
