import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SanatPage() {
  const t = useTranslations('art');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f6.jpeg"
            alt="Sent Antuan Bazilikası"
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
        <article className="bg-white rounded-xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {t('architecturalStyle')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {t('architecturalStyleDesc')}
            </p>

            <div className="bg-gray-50 rounded-lg p-5 my-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('facade')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {t('facadeDesc1')}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('facadeDesc2')}
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              {t('interiorArt')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {t('interiorArtDesc')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-10">
              {t('sculptures')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {t('sculpturesDesc')}
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-10">
              {t('mosaics')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t('mosaicsDesc')}
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-900">{t('baptismScene')}:</strong> {t('baptismSceneDesc')}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3">•</span>
                <span className="text-sm text-gray-600">
                  <strong className="text-gray-900">{t('lastSupper')}:</strong> {t('lastSupperDesc')}
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-10">
              {t('paintingsFrescoes')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              {t('paintingsFrescoesDesc')}
            </p>

            <div className="bg-gray-50 rounded-lg p-5 my-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('lightSpace')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('lightSpaceDesc')}
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              {t('architecturalFeatures')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {t('latinCross')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('latinCrossDesc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {t('concrete')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('concreteDesc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {t('redBrick')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('redBrickDesc')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {t('tuscanStyle')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('tuscanStyleDesc')}
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 mt-12">
              {t('culturalSignificance')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t('culturalSignificanceDesc1')}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('culturalSignificanceDesc2')}
            </p>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-between">
          <Link
            href="/kilise/tarih"
            className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-300 text-sm border border-gray-200"
          >
            {t('previousPage')}
          </Link>
          <Link
            href="/kilise/ruhsal-degerlerimiz"
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-6 rounded-lg shadow-sm transition-colors duration-300 text-sm"
          >
            {t('nextPage')}
          </Link>
        </div>
      </div>
    </div>
  );
}
