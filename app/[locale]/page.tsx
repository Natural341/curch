import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/Sent-Antuan-Kilisesi-06.jpg"
            alt="Sent Antuan Bazilikası"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={95}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-white drop-shadow-2xl leading-tight">
              {t('hero.title')}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link
                href="/ayin/saatleri"
                className="bg-white text-gray-900 font-medium py-2.5 px-7 rounded-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300 text-sm shadow-lg"
              >
                {t('hero.massTimesBtn')}
              </Link>
              <Link
                href="/kilise/tarih"
                className="bg-transparent text-white font-medium py-2.5 px-7 rounded-lg border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm shadow-lg"
              >
                {t('hero.aboutBtn')}
              </Link>
            </div>

            {/* Mass Times Info Box */}
            <div className="backdrop-blur-lg bg-white/10 border-2 border-white/30 rounded-xl px-5 py-3.5 shadow-xl max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                {t('hero.joinTitle')}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm">
                {t('hero.joinTimes')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              {t('welcome.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('welcome.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="mb-4 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('cards.history.title')}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {t('cards.history.description')}
              </p>
              <Link
                href="/kilise/tarih"
                className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300 text-sm"
              >
                {t('cards.history.readMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="mb-4 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('cards.art.title')}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {t('cards.art.description')}
              </p>
              <Link
                href="/kilise/sanat"
                className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300 text-sm"
              >
                {t('cards.art.readMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="mb-4 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('cards.community.title')}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {t('cards.community.description')}
              </p>
              <Link
                href="/cemaatimiz"
                className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300 text-sm"
              >
                {t('cards.community.readMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mass Times Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
              {t('massTimes.title')}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">{t('massTimes.weekdays.title')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekdays.schedule1')}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekdays.schedule2')}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekdays.schedule3')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-5 tracking-tight">{t('massTimes.weekend.title')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekend.schedule1')}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekend.schedule2')}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="text-gray-400 mr-3 text-lg">•</span>
                    <span>{t('massTimes.weekend.schedule3')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/ayin/saatleri"
                className="inline-block bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg text-sm"
              >
                {t('massTimes.viewAll')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              {t('prayers.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('prayers.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              href="/dua/ozel-dualar"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('prayers.special.title')}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {t('prayers.special.description')}
              </p>
              <span className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300 text-sm">
                {t('cards.history.readMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link
              href="/dua/donemlere-gore"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              <div className="mb-4 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {t('prayers.seasonal.title')}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {t('prayers.seasonal.description')}
              </p>
              <span className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center transition-colors duration-300 text-sm">
                {t('cards.history.readMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-gray-900 tracking-tight">
            {t('visit.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-600">
            {t('visit.address')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/iletisim"
              className="bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg text-sm"
            >
              {t('visit.contactBtn')}
            </Link>
            <Link
              href="/galeri"
              className="bg-white text-gray-700 font-medium py-3 px-8 rounded-lg border-2 border-gray-300 hover:bg-gray-50 shadow-md transition-all duration-300 text-sm"
            >
              {t('visit.galleryBtn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
