import Link from 'next/link';
import Image from 'next/image';

export default function HizmetlerimizPage() {
  const hizmetler = [
    {
      title: 'Ayinler ve İbadetler',
      description: 'Hafta içi ve hafta sonu farklı dillerde düzenli olarak ayinler gerçekleştiriyoruz. Türkçe, İtalyanca ve İngilizce ayinlerimiz vardır.',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    },
    {
      title: 'Sakramentler',
      description: 'Vaftiz, İlk Komünyon, Konfirmasyon, Evlilik ve diğer sakramentlerin kutlanması için kilisemiz her zaman hazırdır.',
      iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
    {
      title: 'Dua ve Maneviyat',
      description: 'Günlük dualar, özel dualar ve dönemlere göre dualarla maneviyatınızı destekliyoruz. Ruhani danışmanlık hizmeti de sunuyoruz.',
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      title: 'Eğitim ve Formasyon',
      description: 'Çocuklar, gençler ve yetişkinler için katekizm dersleri ve dini eğitim programları düzenliyoruz.',
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    },
    {
      title: 'Sosyal Hizmetler',
      description: 'Muhtaç aileler, yaşlılar ve toplumun ihtiyacı olan kesimlere yönelik sosyal yardım faaliyetleri yürütüyoruz.',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Müzik ve Koro',
      description: 'Kilisemiz korosu ve müzik topluluğu, özel günlerde ve ayinlerde görkemli müzik performansları sergiler.',
      iconPath: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f5.jpeg"
            alt="Sent Antuan Bazilikası"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <nav className="text-sm mb-6 backdrop-blur-sm bg-black/20 inline-block px-3 py-2 rounded-full w-fit">
              <Link href="/" className="text-white hover:text-yellow-300 transition-colors">Ana Sayfa</Link>
              <span className="mx-2 text-white">/</span>
              <Link href="/kilise/tarih" className="text-white hover:text-yellow-300 transition-colors">Kilise</Link>
              <span className="mx-2 text-white">/</span>
              <span className="text-yellow-300">Hizmetlerimiz</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Hizmetlerimiz
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Sent Antuan Bazilikası'nda cemaatimize ve topluma sunduğumuz hizmetler
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Giriş */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Topluma Hizmet</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kilisemiz, 1230 yılından bu yana İstanbul'da yaşayan Katolik cemaate ve tüm topluma
            çeşitli manevi ve sosyal hizmetler sunmaktadır.
          </p>
        </div>

        {/* Hizmet Kartları */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hizmetler.map((hizmet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="w-16 h-16 mb-4 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hizmet.iconPath} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {hizmet.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {hizmet.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detaylı Bilgi */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-8">Hizmetlerimiz Hakkında Detaylı Bilgi</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ayin Saatleri</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-red-900 mb-3">Hafta İçi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pazartesi - Cumartesi: 08:00</li>
                    <li>• İtalyanca Ayin: 18:00 (Salı)</li>
                    <li>• Türkçe Ayin: 18:00 (Çarşamba)</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-red-900 mb-3">Hafta Sonu</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Pazar: 09:00 (İtalyanca)</li>
                    <li>• Pazar: 10:30 (Türkçe)</li>
                    <li>• Pazar: 12:00 (İngilizce)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sakrament Hazırlıkları</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaftiz, İlk Komünyon, Konfigürmasyon ve Evlilik sakramentleri için özel hazırlık programlarımız vardır.
                Bu sakramentlerden birini almak istiyorsanız, lütfen kilise ofisi ile iletişime geçin.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Özel Günler ve Bayramlar</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Noel, Paskalya, Aziz Antuan Yortusu ve diğer önemli Katolik bayramlarında özel ayinler ve etkinlikler düzenliyoruz.
                Bu özel günlerde kilisemiz daha da kalabalık ve canlı olmaktadır.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-12 text-center border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Daha Fazla Bilgi İçin</h2>
          <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
            Hizmetlerimiz hakkında detaylı bilgi almak veya randevu almak için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/ayin/saatleri"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md border border-gray-300"
            >
              Ayin Saatleri
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/kilise/tarih"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            ← Tarihimiz
          </Link>
          <Link
            href="/kilise/sanat"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Sanat ve Mimari →
          </Link>
        </div>
      </div>
    </div>
  );
}
