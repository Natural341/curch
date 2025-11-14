import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DonemlereGoreDualarPage() {
  const t = useTranslations('prayers');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Dönemlere Göre Dualar"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight tracking-tight">
              {t('seasonal.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              {t('seasonal.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Katolik Kilisesi'nin litürjik yılı, İsa Mesih'in hayatındaki önemli olayları anma ve kutlama
            dönemlerinden oluşur. Her dönemin kendine özgü dua ve ayinleri vardır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Advent */}
          <Link href="/dua/donemlere-gore/advent" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t('seasonal.advent.title')}
              </h3>
              <p className="text-base font-medium text-gray-600 mb-4 leading-relaxed">
                İsa'nın gelişini bekleme ve hazırlık dönemi. Noel'den dört hafta önce başlar.
              </p>
              <div className="flex items-center text-gray-900 font-semibold">
                Duaları Görüntüle
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Noel */}
          <Link href="/dua/donemlere-gore/noel" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t('seasonal.christmas.title')}
              </h3>
              <p className="text-base font-medium text-gray-600 mb-4 leading-relaxed">
                İsa Mesih'in doğumunu kutlama dönemi. 25 Aralık'tan Epifani'ye kadar sürer.
              </p>
              <div className="flex items-center text-gray-900 font-semibold">
                Duaları Görüntüle
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Oruç Dönemi */}
          <Link href="/dua/donemlere-gore/oruc-donemi" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t('seasonal.lent.title')}
              </h3>
              <p className="text-base font-medium text-gray-600 mb-4 leading-relaxed">
                Kül Çarşambası'ndan Paskalya'ya kadar 40 günlük dua, oruç ve tevbe dönemi.
              </p>
              <div className="flex items-center text-gray-900 font-semibold">
                Duaları Görüntüle
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Paskalya */}
          <Link href="/dua/donemlere-gore/paskalya" className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 h-full">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                {t('seasonal.easter.title')}
              </h3>
              <p className="text-base font-medium text-gray-600 mb-4 leading-relaxed">
                İsa'nın dirilişini kutlama dönemi. 50 gün sürer ve Pentikost ile son bulur.
              </p>
              <div className="flex items-center text-gray-900 font-semibold">
                Duaları Görüntüle
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-20 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Litürjik Yıl Hakkında</h2>
          <p className="text-base font-medium text-gray-700 leading-relaxed mb-4">
            Katolik Kilisesi'nin litürjik yılı, sıradan zamanlar ve özel dönemlerden oluşur. Her dönem,
            İsa Mesih'in hayatının farklı bir yönünü vurgular ve bizim manevi yolculuğumuza rehberlik eder.
          </p>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            Bu dönemlere özgü dualar, ayinler ve gelenekler, inancımızı yaşamamıza ve derinleştirmemize
            yardımcı olur. Her dönemin renkli vestimentleri, özel okumalar ve ayinleri vardır.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            {t('seasonal.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-100">
            {t('seasonal.cta.description')}
          </p>
          <Link
            href="/dua/ozel-dualar"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            {t('seasonal.cta.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}
