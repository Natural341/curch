'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function KutsalKitapPage() {
  const t = useTranslations('bible');
  const books = [
    {
      id: 1,
      title: 'Kutsal İncil',
      description: 'Eski ve Yeni Ahit',
      pages: 1200,
      file: '/kutsal-kitap-1.pdf',
      cover: 'bg-gradient-to-br from-amber-900 to-amber-700',
    },
    {
      id: 2,
      title: 'Dualar ve İlahiler',
      description: 'Günlük Dualar ve Litürjik Metinler',
      pages: 450,
      file: '/kutsal-kitap-2.pdf',
      cover: 'bg-gradient-to-br from-blue-900 to-blue-700',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f7.jpeg"
            alt="Kutsal Kitap"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight tracking-tight">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed font-semibold tracking-wide">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">{t('library')}</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('libraryDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${book.cover} h-64 flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-40 bg-white/10 backdrop-blur-sm rounded-lg border-4 border-white/30 shadow-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>{book.pages} sayfa · PDF</span>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/kutsal-kitap/okuyucu?file=${encodeURIComponent(book.file)}&title=${encodeURIComponent(book.title)}`}
                    className="flex-1 bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Online Oku
                  </Link>
                  <a
                    href={book.file}
                    download
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    İndir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bilgi Kartları */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Okuma</h3>
            <p className="text-gray-700 leading-relaxed text-base font-medium">
              Tarayıcınızdan doğrudan okuyun, kitap görünümü ile rahat okuma deneyimi
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">İndirme</h3>
            <p className="text-gray-700 leading-relaxed text-base font-medium">
              PDF formatında cihazınıza indirin, internet olmadan okuyun
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Arama</h3>
            <p className="text-gray-700 leading-relaxed text-base font-medium">
              PDF okuyucuda arama yapın, istediğiniz ayeti veya metni hızlıca bulun
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-12 md:p-16 text-white text-center border border-gray-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Günlük İncil Okuma</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Her gün düzenli olarak Kutsal Kitap okumak, ruhsal gelişimimiz için önemlidir.
            Günlük okuma planınızı oluşturun ve Tanrı'nın sözünü keşfedin.
          </p>
          <Link
            href="/ayin/saatleri"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ayin Saatleri
          </Link>
        </div>
      </div>
    </div>
  );
}
