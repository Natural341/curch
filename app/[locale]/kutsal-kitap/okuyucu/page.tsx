'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useState } from 'react';

function ReaderContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file') || '';
  const title = searchParams.get('title') || 'Kutsal Kitap';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = file;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Modern Header */}
      <div className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center space-x-4">
              <Link
                href="/kutsal-kitap"
                className="text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div className="hidden sm:block h-6 w-px bg-gray-600"></div>
              <h1 className="text-base sm:text-lg font-semibold text-white truncate max-w-[200px] sm:max-w-none">{title}</h1>
            </div>

            {/* Right Side - Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-red-900 hover:bg-red-800 text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">İndir</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer - Using iframe with browser's native viewer */}
      <div className="flex-1 relative bg-gray-900">
        <iframe
          src={file}
          className="w-full h-full border-0"
          title={title}
          style={{ minHeight: 'calc(100vh - 64px)' }}
        />
      </div>

      {/* Modern Footer */}
      <div className="bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50 py-3 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Tarayıcının yerleşik PDF görüntüleyicisini kullanın</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>İndir butonuyla PDF'i kaydedin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReaderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-red-900/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-red-900 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-lg font-medium">Kutsal Kitap Yükleniyor...</p>
          <p className="text-sm text-gray-400 mt-2">Lütfen bekleyin</p>
        </div>
      </div>
    }>
      <ReaderContent />
    </Suspense>
  );
}
