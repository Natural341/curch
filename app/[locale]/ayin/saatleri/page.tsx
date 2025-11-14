import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AyinSaatleriPage() {
  const t = useTranslations('massTimes');

  const summerSchedule = [
    {
      day: 'Pazar',
      masses: ['10:00 English', '11:30 Italiano', '11:30 Po Polsku (Alt Kilise)', '19:00 Türkçe'],
      opening: '09:00',
      closing: '19:30'
    },
    {
      day: 'Pazartesi',
      masses: ['08:00 English'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Salı',
      masses: ['08:00 English', '11:30 Türkçe (İlahiler ve Org eşliğinde)', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30',
      special: 'Günah Çıkarma: 10:00-11:30 ve 15:00-17:00'
    },
    {
      day: 'Çarşamba',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Perşembe',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Cuma',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Cumartesi',
      masses: ['08:00 English', '19:00 English-Italiano'],
      opening: '08:00',
      closing: '19:30'
    }
  ];

  const winterSchedule = [
    {
      day: 'Pazar',
      masses: ['10:00 English', '11:30 Italiano', '11:30 Po Polsku (Alt Kilise)', '18:00 Türkçe'],
      opening: '09:00',
      closing: '19:30'
    },
    {
      day: 'Pazartesi',
      masses: ['08:00 English'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Salı',
      masses: ['08:00 English', '11:30 Türkçe (İlahiler ve Org eşliğinde)', '19:00 Türkçe'],
      opening: '07:00',
      closing: '19:30',
      special: 'Günah Çıkarma: 10:00-11:30 ve 15:00-17:00'
    },
    {
      day: 'Çarşamba',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Perşembe',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Cuma',
      masses: ['08:00 English', '19:00 Türkçe'],
      opening: '08:00',
      closing: '19:30'
    },
    {
      day: 'Cumartesi',
      masses: ['08:00 English', '19:00 English-Italiano'],
      opening: '09:00',
      closing: '19:30'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-2xl leading-tight tracking-tight font-serif">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Summer Schedule */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-2 font-serif">{t('summerSchedule')}</h2>
            <div className="h-1 w-24 bg-red-900"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('day')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('massTimesColumn')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('openingClosing')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {summerSchedule.map((schedule, index) => (
                    <tr key={schedule.day} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-5">
                        <span className="text-base font-semibold text-gray-900">{schedule.day}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-1.5">
                          {schedule.masses.map((mass, i) => (
                            <div key={i} className="text-sm text-gray-700">{mass}</div>
                          ))}
                          {schedule.special && (
                            <div className="text-xs text-red-900 font-semibold mt-2 pt-2 border-t border-gray-200">
                              {schedule.special}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-700">
                          <div>{schedule.opening} - {schedule.closing}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Winter Schedule */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-2 font-serif">{t('winterSchedule')}</h2>
            <div className="h-1 w-24 bg-red-900"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('day')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('massTimesColumn')}</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">{t('openingClosing')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {winterSchedule.map((schedule, index) => (
                    <tr key={schedule.day} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-5">
                        <span className="text-base font-semibold text-gray-900">{schedule.day}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="space-y-1.5">
                          {schedule.masses.map((mass, i) => (
                            <div key={i} className="text-sm text-gray-700">{mass}</div>
                          ))}
                          {schedule.special && (
                            <div className="text-xs text-red-900 font-semibold mt-2 pt-2 border-t border-gray-200">
                              {schedule.special}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-700">
                          <div>{schedule.opening} - {schedule.closing}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-20 border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-red-900 mb-6 font-serif">
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

        {/* Special Days CTA */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-serif">
            {t('specialDaysTitle')}
          </h2>
          <p className="text-base sm:text-lg mb-6 text-white opacity-90">
            {t('specialDaysDesc')}
          </p>
          <Link
            href="/ayin/ozel-gunler"
            className="inline-block bg-white hover:bg-gray-100 text-red-900 font-semibold py-4 px-10 rounded-lg transition-all duration-500 ease-in-out shadow-xl hover:shadow-2xl"
          >
            {t('specialDaysButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
