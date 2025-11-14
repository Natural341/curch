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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t('intro')}
          </p>
        </div>

        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-16">
          {/* Who Are Franciscans */}
          <section>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              {t('whoAreTitle')}
            </h2>
            <p className="text-base font-medium text-gray-700 leading-relaxed mb-6">
              {t('whoAreDesc1')}
            </p>
            <p className="text-base font-medium text-gray-700 leading-relaxed">
              {t('whoAreDesc2')}
            </p>
          </section>

          {/* Core Principles */}
          <section>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-12">
              {t('pillarsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-xl p-8 border border-gray-900 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('pillar1Title')}
                </h3>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  {t('pillar1Desc')}
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 border border-gray-900 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('pillar2Title')}
                </h3>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  {t('pillar2Desc')}
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 border border-gray-900 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('pillar3Title')}
                </h3>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  {t('pillar3Desc')}
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 border border-gray-900 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('pillar4Title')}
                </h3>
                <p className="text-base font-medium text-gray-700 leading-relaxed">
                  {t('pillar4Desc')}
                </p>
              </div>
            </div>
          </section>

          {/* Franciscans in Istanbul */}
          <section>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              {t('istanbulTitle')}
            </h2>
            <p className="text-base font-medium text-gray-700 leading-relaxed mb-6">
              {t('istanbulDesc1')}
            </p>
            <p className="text-base font-medium text-gray-700 leading-relaxed">
              {t('istanbulDesc2')}
            </p>

            {/* Timeline Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">1230</div>
                <p className="text-gray-700 font-medium">İstanbul'a Geliş</p>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">1724</div>
                <p className="text-gray-700 font-medium">Beyoğlu'nda Yerleşim</p>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">795+</div>
                <p className="text-gray-700 font-medium">Yıllık Hizmet</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              {t('servicesTitle')}
            </h2>
            <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service5')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 font-bold mr-3 text-xl">•</span>
                  <span className="text-base font-medium text-gray-700">{t('service6')}</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Franciscan Family */}
          <section>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              {t('communityTitle')}
            </h2>
            <p className="text-base font-medium text-gray-700 leading-relaxed">
              {t('communityDesc')}
            </p>
          </section>

          {/* St. Francis Bio */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {t('stFrancisTitle')}
            </h2>
            <p className="text-base font-medium text-gray-100 leading-relaxed">
              {t('stFrancisDesc')}
            </p>
          </section>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/kilise/sanat"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            ← Sanat ve Mimari
          </Link>
          <Link
            href="/"
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Ana Sayfa →
          </Link>
        </div>
      </div>
    </div>
  );
}
