'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function KutsalKitapPage() {
  const t = useTranslations('bible');
  const books = [
    {
      id: 1,
      title: 'Kutsal İncil (Türkçe)',
      description: 'Eski ve Yeni Ahit',
      pages: 1200,
      file: '/books/incil_TR.pdf',
      cover: 'bg-gradient-to-br from-amber-900 to-amber-700',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Compact */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f7.jpeg"
            alt="Kutsal Kitap"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl leading-tight font-serif">
            {t('title')}
          </h1>

          <p className="text-base sm:text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="#kutuphane"
              className="bg-white text-gray-900 font-medium py-3 px-8 rounded-lg hover:bg-white/90 shadow-lg transition-all duration-300 text-sm"
            >
              Kitapları Keşfet
            </Link>
            <Link
              href="/kutsal-kitap/okuyucu?file=/books/incil_TR.pdf&title=Kutsal%20%C4%B0ncil"
              className="bg-white/10 backdrop-blur-md text-white font-medium py-3 px-8 rounded-lg border-2 border-white/30 hover:bg-white hover:text-gray-900 shadow-lg transition-all duration-300 text-sm"
            >
              Hemen Oku
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Library Section */}
      <section id="kutuphane" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              {t('library')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('libraryDescription')}
            </p>
          </div>

          {/* Book Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {books.map((book) => (
              <div
                key={book.id}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
              >
                {/* Book Cover */}
                <div className={`${book.cover} h-80 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="w-40 h-52 bg-white/20 backdrop-blur-md rounded-lg border-4 border-white/40 shadow-2xl mx-auto flex items-center justify-center">
                      <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    PDF
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{book.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>{book.pages} sayfa</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Ücretsiz</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/kutsal-kitap/okuyucu?file=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.title)}`}
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Oku</span>
                    </Link>
                    <a
                      href={book.file}
                      download
                      className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border border-gray-300 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>İndir</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Okuma</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Tarayıcınızdan doğrudan okuyun. Modern kitap görünümü ile rahat okuma deneyimi, çift sayfa modu ve zoom özellikleri.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">PDF İndirme</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                PDF formatında cihazınıza indirin. İnternet olmadan okuyun, notlar alın ve istediğiniz zaman erişin.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-200">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Gelişmiş Arama</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                PDF okuyucuda arama yapın. İstediğiniz ayeti, kelimeyi veya metni hızlıca bulun ve işaretleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Bible Reading CTA - Full Width Slim */}
      <section className="py-12 bg-gradient-to-r from-red-900 to-red-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white font-serif">
              Günlük İncil Okuma
            </h2>

            <p className="text-sm sm:text-base mb-6 text-white/90">
              Her gün düzenli olarak Kutsal Kitap okumak, ruhsal gelişimimiz için önemlidir.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/kutsal-kitap/okuyucu?file=/books/incil_TR.pdf&title=Kutsal%20%C4%B0ncil"
                className="bg-white text-red-900 font-semibold py-3 px-8 rounded-lg hover:bg-red-50 shadow-lg transition-all duration-300 text-sm"
              >
                Online Oku
              </Link>
              <Link
                href="/ayin/saatleri"
                className="bg-red-800 text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 hover:bg-red-700 shadow-lg transition-all duration-300 text-sm"
              >
                Ayin Saatleri
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
