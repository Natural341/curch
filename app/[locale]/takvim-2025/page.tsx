import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Takvim2025Page() {
  const t = useTranslations('calendar');

  const months = [
    {
      name: 'Ocak',
      events: [
        { date: '1', name: 'Meryem Ana Tanrı Anneliği', type: 'feast' },
        { date: '6', name: 'Epifani (Üç Krallar)', type: 'feast' },
        { date: '25', name: 'Aziz Paulus\'un Tebliği', type: 'feast' }
      ]
    },
    {
      name: 'Şubat',
      events: [
        { date: '2', name: 'Meryem Ana\'nın Mabede Takdimi', type: 'feast' },
        { date: '14', name: 'Aziz Kiril ve Metodios', type: 'memorial' },
        { date: '22', name: 'Aziz Petrus\'un Başpapazlığı', type: 'feast' }
      ]
    },
    {
      name: 'Mart',
      events: [
        { date: '19', name: 'Aziz Yusuf', type: 'solemnity' },
        { date: '25', name: 'Müjde (Meryem Ana)', type: 'solemnity' }
      ]
    },
    {
      name: 'Nisan',
      events: [
        { date: '13', name: 'Palmiye Pazarı', type: 'feast' },
        { date: '17', name: 'Büyük Perşembe', type: 'feast' },
        { date: '18', name: 'Büyük Cuma', type: 'feast' },
        { date: '20', name: 'Paskalya Pazarı', type: 'solemnity' }
      ]
    },
    {
      name: 'Mayıs',
      events: [
        { date: '1', name: 'Aziz Yusuf İşçi', type: 'memorial' },
        { date: '29', name: 'Göğe Yükseliş', type: 'solemnity' }
      ]
    },
    {
      name: 'Haziran',
      events: [
        { date: '8', name: 'Pentekost (Kutsal Ruh)', type: 'solemnity' },
        { date: '13', name: 'Aziz Antuan (Padovalı)', type: 'memorial' },
        { date: '29', name: 'Aziz Petrus ve Paulus', type: 'solemnity' }
      ]
    },
    {
      name: 'Temmuz',
      events: [
        { date: '16', name: 'Karmel Dağı\'nın Meryem Ana\'sı', type: 'memorial' },
        { date: '22', name: 'Mecdelli Meryem', type: 'feast' },
        { date: '26', name: 'Aziz Yahya ve Anna', type: 'memorial' }
      ]
    },
    {
      name: 'Ağustos',
      events: [
        { date: '6', name: 'İsa\'nın Değişimi', type: 'feast' },
        { date: '15', name: 'Meryem Ana\'nın Göğe Alınışı', type: 'solemnity' },
        { date: '22', name: 'Meryem Ana Kraliçe', type: 'memorial' }
      ]
    },
    {
      name: 'Eylül',
      events: [
        { date: '8', name: 'Meryem Ana\'nın Doğumu', type: 'feast' },
        { date: '14', name: 'Haçın Yüceltilmesi', type: 'feast' },
        { date: '29', name: 'Aziz Mikail, Cebrail, Rafael', type: 'feast' }
      ]
    },
    {
      name: 'Ekim',
      events: [
        { date: '2', name: 'Koruyucu Melekler', type: 'memorial' },
        { date: '4', name: 'Aziz Fransua (Assisi)', type: 'memorial' },
        { date: '7', name: 'Tesbih Meryem Ana', type: 'memorial' }
      ]
    },
    {
      name: 'Kasım',
      events: [
        { date: '1', name: 'Tüm Azizler', type: 'solemnity' },
        { date: '2', name: 'Ölü Sadıklar', type: 'feast' },
        { date: '30', name: 'Aziz Andreas', type: 'feast' }
      ]
    },
    {
      name: 'Aralık',
      events: [
        { date: '8', name: 'Meryem Ana\'nın Tertemiz Kalışı', type: 'solemnity' },
        { date: '25', name: 'Noel (İsa\'nın Doğumu)', type: 'solemnity' },
        { date: '26', name: 'Aziz Stefan', type: 'feast' }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'solemnity':
        return 'bg-gray-100 text-gray-900 border-gray-300';
      case 'feast':
        return 'bg-yellow-100 text-yellow-900 border-yellow-300';
      case 'memorial':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-900 border-gray-300';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Renk Açıklaması */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-20 border border-gray-200">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            {t('importanceLevels')}
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
              <span className="text-base font-medium text-gray-700">
                <strong>{t('solemnity')}:</strong> {t('solemnityDesc')}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
              <span className="text-base font-medium text-gray-700">
                <strong>{t('feast')}:</strong> {t('feastDesc')}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
              <span className="text-base font-medium text-gray-700">
                <strong>{t('memorial')}:</strong> {t('memorialDesc')}
              </span>
            </div>
          </div>
        </div>

        {/* Aylar */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {months.map((month) => (
            <div key={month.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
                {month.name}
              </h3>
              <div className="space-y-3">
                {month.events.map((event, index) => (
                  <div
                    key={index}
                    className={`${getEventColor(event.type)} rounded-lg p-3 border-l-4 transition-all duration-200 hover:shadow-md`}
                  >
                    <div className="flex items-start">
                      <span className="font-bold text-lg mr-3 min-w-[2rem]">{event.date}</span>
                      <span className="text-sm font-medium">{event.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Özel Dönemler */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-gray-50 rounded-2xl shadow-xl p-8 mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 text-center">
            {t('liturgicalSeasons')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-purple-900 mb-2">
                {t('advent')}
              </h3>
              <p className="text-base font-medium text-gray-700 mb-2">
                <strong>{t('start')}:</strong> {t('adventDate')}
              </p>
              <p className="text-base font-medium text-gray-600">
                {t('adventDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-green-900 mb-2">
                {t('christmas')}
              </h3>
              <p className="text-base font-medium text-gray-700 mb-2">
                <strong>{t('christmasDates')}</strong>
              </p>
              <p className="text-base font-medium text-gray-600">
                {t('christmasDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-indigo-900 mb-2">
                {t('lent')}
              </h3>
              <p className="text-base font-medium text-gray-700 mb-2">
                <strong>{t('lentDates')}</strong>
              </p>
              <p className="text-base font-medium text-gray-600">
                {t('lentDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-yellow-900 mb-2">
                {t('easter')}
              </h3>
              <p className="text-base font-medium text-gray-700 mb-2">
                <strong>{t('easterDates')}</strong>
              </p>
              <p className="text-base font-medium text-gray-600">
                {t('easterDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* İndir Butonu */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {t('downloadTitle')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 max-w-2xl mx-auto mb-8">
            {t('downloadDesc')}
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            {t('downloadButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
