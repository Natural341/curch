'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function GaleriPage() {
  const t = useTranslations('gallery');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const galleryImages = [
    { src: '/photos/f5.jpeg', alt: 'Kilise Görünümü' },
    { src: '/photos/f6.jpeg', alt: 'Kilise Görünümü' },
    { src: '/photos/f7.jpeg', alt: 'Kilise Görünümü' },
    { src: '/photos/f9.jpeg', alt: 'Kilise Görünümü' },
    { src: '/photos/f11.png', alt: 'Kilise İç Mekan' },
    { src: '/photos/f12.png', alt: 'Kilise Mimarisi' },
    { src: '/photos/f13.png', alt: 'Kilise Detayları' },
    { src: '/photos/f14.png', alt: 'Kilise Sanat Eserleri' },
    { src: '/photos/f15.png', alt: 'Kilise Atmosferi' },
    { src: '/photos/hero.jpeg', alt: 'Kilise Ana Görünüm' },
    { src: '/photos/hero2.jpeg', alt: 'Kilise Dış Görünümü' },
    { src: '/photos/istockphoto-1197938241-612x612.jpg', alt: 'Kilise İç Mekan' },
    { src: '/photos/istockphoto-157772955-612x612.jpg', alt: 'Kilise İç Mekan' },
    { src: '/photos/1634553019494.jpg', alt: 'Kilise İç Mimarisi' },
    { src: '/photos/images.jpg', alt: 'Kilise Detay' },
    { src: '/photos/images (2).jpg', alt: 'Kilise Görünümü' },
    { src: '/photos/s-e43a35fcef3e540c98010c1505e134cfaf677e19.jpg', alt: 'Kilise Cephesi' },
    { src: '/photos/Sent-Antuan-Kilisesi-06.jpg', alt: 'Sent Antuan Kilisesi' },
    { src: '/photos/Sent-Antuan-Kilisesii-e1592989274354.jpg', alt: 'Sent Antuan Kilisesi' },
    { src: '/photos/StAntoine-Hero.jpg', alt: 'Sent Antuan Bazilikası' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f5.jpeg"
            alt="Galeri"
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
            <p className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed font-semibold tracking-wide">
              {t('subtitle')}
            </p>

            {/* Gallery Info Box */}
            <div className="backdrop-blur-lg bg-white/10 border-2 border-white/30 rounded-xl px-8 py-6 shadow-xl max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-semibold mb-1">{t('totalPhotos')}</p>
                  <p className="text-2xl font-bold">{galleryImages.length}+</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-sm font-semibold mb-1">{t('categories')}</p>
                  <p className="text-2xl font-bold">4</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-semibold mb-1">{t('since')}</p>
                  <p className="text-2xl font-bold">1906</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Description */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">{t('architecture')}</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('architectureDescription')}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">{t('collection')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              aria-label="Kapat"
            >
              ×
            </button>

            {/* Navigation Buttons */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 text-white text-5xl hover:text-gray-300 transition-colors z-10"
                aria-label="Önceki"
              >
                ‹
              </button>
            )}

            {selectedImage < galleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 text-white text-5xl hover:text-gray-300 transition-colors z-10"
                aria-label="Sonraki"
              >
                ›
              </button>
            )}

            <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        )}


        {/* Historical Photos Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('historical')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
            {t('historicalDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6"></div>
              <p className="text-xl font-bold text-gray-900 mb-2">{t('construction')}</p>
              <p className="text-base font-medium text-gray-600">{t('constructionDescription')}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6"></div>
              <p className="text-xl font-bold text-gray-900 mb-2">{t('restoration')}</p>
              <p className="text-base font-medium text-gray-600">{t('restorationDescription')}</p>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12 border border-gray-200">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">{t('videos')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium mb-8">
            {t('videosDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('virtualTour')}</h3>
              <p className="text-base font-medium text-gray-600">{t('virtualTourDescription')}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('specialDays')}</h3>
              <p className="text-base font-medium text-gray-600">{t('specialDaysDescription')}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-12 md:p-16 text-center border border-gray-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t('share')}
          </h2>
          <Link
            href="/iletisim"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('shareButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
