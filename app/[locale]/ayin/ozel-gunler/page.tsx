import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OzelGunlerPage() {
  const t = useTranslations('specialDays');

  const specialDays = [
    {
      title: 'Noel (Kutsal Doğum)',
      date: '25 Aralık',
      description: 'İsa Mesih\'in doğuşunu kutlayan en önemli Hristiyan bayramlarından biridir.',
      masses: ['00:00 - Gece Ayini', '09:00 - İtalyanca Ayin', '10:30 - Türkçe Ayin', '12:00 - İngilizce Ayin', '18:00 - İtalyanca Akşam Ayini'],
      color: 'red-900'
    },
    {
      title: 'Paskalya (Diriliş Bayramı)',
      date: 'Nisan (Değişken)',
      description: 'İsa Mesih\'in ölümden dirilişini kutlayan Hristiyan inancının en önemli bayramıdır.',
      masses: ['06:00 - Şafak Ayini', '09:00 - İtalyanca Ayin', '10:30 - Türkçe Ayin', '12:00 - İngilizce Ayin', '18:00 - Akşam Ayini'],
      color: 'yellow-600'
    },
    {
      title: 'Kutsal Cuma',
      date: 'Paskalya\'dan Önceki Cuma',
      description: 'İsa Mesih\'in çarmıha gerilişini anma günüdür. Bu gün ayin yapılmaz, özel ibadetler düzenlenir.',
      masses: ['15:00 - Haç Yolu İbadeti', '18:00 - Tutku Anlatımı ve İbadet'],
      color: 'gray-900'
    },
    {
      title: 'Hamursuz Bayramı Öncesi (Kül Çarşambası)',
      date: 'Paskalya\'dan 46 Gün Önce',
      description: 'Paskalya öncesi 40 günlük oruç döneminin başlangıcıdır. Alınlara kül sürme töreni yapılır.',
      masses: ['08:00 - Sabah Ayini', '18:00 - Akşam Ayini (Kül Töreni ile)'],
      color: 'purple-900'
    },
    {
      title: 'Aziz Antuan Bayramı',
      date: '13 Haziran',
      description: 'Kilisemizin koruyucu azizi Padovalı Aziz Antuan\'ın bayramı. Özel törenler düzenlenir.',
      masses: ['08:00 - Sabah Ayini', '10:30 - Türkçe Özel Ayin', '12:00 - İngilizce Ayin', '18:00 - İtalyanca Kutlama Ayini'],
      color: 'brown-700'
    },
    {
      title: 'Meryem Ana\'nın Göğe Yükselişi',
      date: '15 Ağustos',
      description: 'Meryem Ana\'nın göğe alınışını kutlayan önemli bir bayramdır.',
      masses: ['08:00 - Sabah Ayini', '10:30 - Türkçe Ayin', '12:00 - İngilizce Ayin', '18:00 - İtalyanca Akşam Ayini'],
      color: 'blue-900'
    },
    {
      title: 'Aziz Fransua Bayramı',
      date: '4 Ekim',
      description: 'Fransisken tarikatının kurucusu Assisili Aziz Fransua\'nın bayramı.',
      masses: ['08:00 - Sabah Ayini', '18:00 - Akşam Ayini'],
      color: 'green-800'
    },
    {
      title: 'Tüm Azizler Günü',
      date: '1 Kasım',
      description: 'Tüm azizlerin anıldığı ve kutlandığı gündür.',
      masses: ['08:00 - Sabah Ayini', '10:30 - Türkçe Ayin', '12:00 - İngilizce Ayin', '18:00 - Akşam Ayini'],
      color: 'gold'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/hero2.jpeg"
            alt="Özel Günler"
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
              Özel Günler ve Bayramlar
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              Yıl boyunca kutladığımız özel günler ve ayin saatleri
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-6 tracking-tight font-serif">
            Liturgik Takvim
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Kilise yılı boyunca kutladığımız önemli günler ve bu günlerdeki özel ayin saatleri.
            Lütfen değişiklikler için kilise duyurularını takip ediniz.
          </p>
        </div>

        {/* Special Days Grid */}
        <div className="space-y-8 mb-20">
          {specialDays.map((day, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
              <div className="md:flex">
                <div className={`md:w-1/3 bg-gradient-to-br from-red-900 to-red-800 p-8 text-white flex flex-col justify-center`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">
                    {day.title}
                  </h3>
                  <p className="text-lg font-semibold mb-2 opacity-90">
                    📅 {day.date}
                  </p>
                </div>
                <div className="md:w-2/3 p-8">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    {day.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Ayin Saatleri:</h4>
                    <div className="space-y-2">
                      {day.masses.map((mass, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                          <span className="font-medium">{mass}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-gray-50 rounded-xl shadow-md p-8 mb-20 border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-900 mb-6 font-serif">
            Önemli Bilgiler
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl font-bold">•</span>
              <p className="text-base md:text-lg">
                <strong>Oruç ve Perhiz Günleri:</strong> Kül Çarşambası ve Kutsal Cuma günlerinde oruç tutulur.
                Paskalya öncesi tüm cumalar perhiz günüdür.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl font-bold">•</span>
              <p className="text-base md:text-lg">
                <strong>Değişken Tarihler:</strong> Paskalya tarihi her yıl değişir, bu nedenle Kül Çarşambası
                ve Kutsal Cuma tarihleri de değişkendir.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl font-bold">•</span>
              <p className="text-base md:text-lg">
                <strong>Güncel Bilgi:</strong> Özel günlerdeki ayin saatlerinde değişiklik olabilir.
                Lütfen haftalık bülteni veya kilise girişindeki duyuruları kontrol ediniz.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-900 text-xl font-bold">•</span>
              <p className="text-base md:text-lg">
                <strong>Rezervasyon:</strong> Noel ve Paskalya gibi yoğun günlerde erkenden gelmeniz önerilir.
              </p>
            </div>
          </div>
        </div>

        {/* Calendar Link */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif">
            Tam Takvim
          </h2>
          <p className="text-lg sm:text-xl mb-6 opacity-90">
            2025 yılı kilise takvimi ve tüm liturgik günler için detaylı takvimimizi inceleyin
          </p>
          <Link
            href="/takvim-2025"
            className="inline-block bg-white text-red-900 font-semibold py-4 px-10 rounded-lg hover:bg-gray-100 border-2 border-white shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl tracking-wide"
          >
            2025 Takvimi
          </Link>
        </div>
      </div>
    </div>
  );
}
