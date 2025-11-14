import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function FransiskenlerPage() {
  const t = useTranslations('franciscans');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/StAntoine-Hero.jpg"
            alt="Fransiskenler"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight tracking-tight">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>

        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-12">
          {/* Who Are Franciscans */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {t('whoAreTitle')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t('whoAreDesc1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('whoAreDesc2')}
            </p>
          </section>

          {/* Core Principles */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              {t('pillarsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('pillar1Title')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('pillar1Desc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('pillar2Title')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('pillar2Desc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('pillar3Title')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('pillar3Desc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t('pillar4Title')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('pillar4Desc')}
                </p>
              </div>
            </div>
          </section>

          {/* Franciscans in Istanbul */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {t('istanbulTitle')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t('istanbulDesc1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {t('istanbulDesc2')}
            </p>

            {/* Timeline Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">1230</div>
                <p className="text-sm text-gray-600">İstanbul'a Geliş</p>
              </div>
              <div className="text-center p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">1724</div>
                <p className="text-sm text-gray-600">Beyoğlu'nda Yerleşim</p>
              </div>
              <div className="text-center p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-1">795+</div>
                <p className="text-sm text-gray-600">Yıllık Hizmet</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {t('servicesTitle')}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 text-lg">•</span>
                  <span className="text-sm text-gray-600">{t('service6')}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Franciscan Family */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {t('communityTitle')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('communityDesc')}
            </p>
          </section>

          {/* St. Francis Bio */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              {t('stFrancisTitle')}
            </h2>
            <p className="text-sm text-gray-100 leading-relaxed">
              {t('stFrancisDesc')}
            </p>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
          <Link
            href="/kilise/sanat"
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-300 text-sm border border-gray-200"
          >
            ← Sanat ve Mimari
          </Link>
          <Link
            href="/"
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-300 text-sm"
          >
            Ana Sayfa →
          </Link>
        </div>
      </div>
    </div>
  );
}
