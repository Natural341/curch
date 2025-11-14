'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense, useState } from 'react';

function ReaderContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file') || '';
  const title = searchParams.get('title') || 'Kutsal Kitap';
  const [zoom, setZoom] = useState(100);
  const [pageMode, setPageMode] = useState<'single' | 'double'>('single');

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/kutsal-kitap"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-lg font-semibold text-white">{title}</h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Zoom Controls */}
              <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-3 py-1">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 10))}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Zoom out"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-gray-300 text-sm font-medium w-12 text-center">{zoom}%</span>
                <button
                  onClick={() => setZoom(Math.min(200, zoom + 10))}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Zoom in"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              {/* Page Mode */}
              <div className="flex items-center space-x-2 bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setPageMode('single')}
                  className={`px-3 py-1 rounded ${pageMode === 'single' ? 'bg-red-900 text-white' : 'text-gray-300 hover:text-white'} transition-colors text-sm`}
                >
                  Tek Sayfa
                </button>
                <button
                  onClick={() => setPageMode('double')}
                  className={`px-3 py-1 rounded ${pageMode === 'double' ? 'bg-red-900 text-white' : 'text-gray-300 hover:text-white'} transition-colors text-sm`}
                >
                  Çift Sayfa
                </button>
              </div>

              {/* Download */}
              <a
                href={file}
                download
                className="bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>İndir</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer - Book Style */}
      <div className="flex-1 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="h-full flex items-center justify-center p-8">
          <div className={`relative ${pageMode === 'double' ? 'max-w-[1400px]' : 'max-w-4xl'} w-full h-full`}>
            {/* Book Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-lg pointer-events-none"></div>

            {/* PDF Container with Book Look */}
            <div className="relative h-full bg-white rounded-lg shadow-2xl overflow-hidden" style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'center' }}>
              {/* Book Spine Effect */}
              {pageMode === 'double' && (
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 shadow-lg z-10 transform -translate-x-1/2"></div>
              )}

              {/* PDF Embed */}
              <iframe
                src={`${file}#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-full"
                title={title}
              />
            </div>

            {/* Page Curl Effect (decorative) */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 opacity-30 pointer-events-none"
                 style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}></div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-800 border-t border-gray-700 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">F</kbd>
              <span>Arama</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">+/-</kbd>
              <span>Zoom</span>
            </div>
            <div className="flex items-center space-x-2">
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">←</kbd>
              <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">→</kbd>
              <span>Sayfa Değiştir</span>
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
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Yükleniyor...</p>
        </div>
      </div>
    }>
      <ReaderContent />
    </Suspense>
  );
}
