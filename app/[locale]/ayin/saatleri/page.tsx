import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AyinSaatleriPage() {
  const t = useTranslations('massTimes');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/1634553019494.jpg"
            alt="Sent Antuan Bazilikası Ayin"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Hafta İçi */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              {t('weekdayMasses')}
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2">
                  {t('mondayToSaturday')}
                </h3>
                <div className="space-y-2">
                  <p className="text-base font-medium text-gray-700 flex items-center">
                    <span className="w-20 font-semibold">08:00</span>
                    <span>{t('morningMass')}</span>
                  </p>
                  <p className="text-base font-medium text-gray-700 flex items-center">
                    <span className="w-20 font-semibold">18:00</span>
                    <span>{t('eveningMass')}</span>
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <h4 className="text-base font-medium text-gray-900 mb-2">{t('specialDays')}</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>{t('tuesday')}:</strong> {t('tuesdayMass')}</p>
                  <p><strong>{t('wednesday')}:</strong> {t('wednesdayMass')}</p>
                  <p><strong>{t('thursday')}:</strong> {t('thursdayMass')}</p>
                  <p><strong>{t('friday')}:</strong> {t('fridayMass')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hafta Sonu */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              {t('sundayMasses')}
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2">
                  {t('sunday')}
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                    <p className="text-base font-medium text-gray-700 flex items-center">
                      <span className="w-20 font-bold text-lg text-gray-900">09:00</span>
                      <span className="font-semibold">{t('italianMass')}</span>
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                    <p className="text-base font-medium text-gray-700 flex items-center">
                      <span className="w-20 font-bold text-lg text-gray-900">10:30</span>
                      <span className="font-semibold">{t('turkishMass')}</span>
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                    <p className="text-base font-medium text-gray-700 flex items-center">
                      <span className="w-20 font-bold text-lg text-gray-900">12:00</span>
                      <span className="font-semibold">{t('englishMass')}</span>
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                    <p className="text-base font-medium text-gray-700 flex items-center">
                      <span className="w-20 font-bold text-lg text-gray-900">18:00</span>
                      <span className="font-semibold">{t('italianEveningMass')}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-700 italic">
                  {t('sundayNote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Önemli Notlar */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-20 border border-gray-200">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            {t('importantInfo')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{t('address')}</h3>
                <p className="text-base font-medium text-gray-700">{t('addressText')}</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{t('transportation')}</h3>
                <p className="text-base font-medium text-gray-700">{t('transportationText')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{t('duration')}</h3>
                <p className="text-base font-medium text-gray-700">{t('durationText')}</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-1">{t('dress')}</h3>
                <p className="text-base font-medium text-gray-700">{t('dressText')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Özel Günler CTA */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-8 text-center border border-gray-200">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            {t('specialDaysTitle')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6">
            {t('specialDaysDesc')}
          </p>
          <Link
            href="/ayin/ozel-gunler"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
          >
            {t('specialDaysButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
