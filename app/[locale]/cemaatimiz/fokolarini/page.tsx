import Link from 'next/link';
import Image from 'next/image';

export default function FokolariniPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/hero2.jpeg"
            alt="Fokolarini"
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
              <Link href="/cemaatimiz" className="text-white hover:text-yellow-300 transition-colors">Cemaatimiz</Link>
              <span className="mx-2 text-white">/</span>
              <span className="text-yellow-300">Fokolarini</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Fokolarini
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Birlik ruhuyla yaşayan uluslararası cemaat hareketi
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mb-4 mx-auto bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Herkes bir olsun" - İsa'nın son duası
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Fokolarini Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fokolarini, 1943 yılında İtalya'nın Trento kentinde Chiara Lubich tarafından kurulan uluslararası
              bir ruhani harekettir. Hareket, İsa'nın "Herkes bir olsun" (Yuhanna 17:21) duasından ilham alarak,
              toplumda karşılıklı sevgi ve birliği yaygınlaştırmayı amaçlar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Fokolarini kelimesi İtalyanca "focolare" (ocak, aile ocağı) kelimesinden gelir ve sıcak, davetkar
              bir topluluk ruhunu simgeler. Hareket bugün dünya çapında 182 ülkede milyonlarca insanı bir araya getirmektedir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Temel İlkeler</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Karşılıklı Sevgi:</strong> İsa'nın yeni emri olan "birbirinizi sevin" ilkesini yaşamak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Birlik:</strong> Farklılıkları zenginlik olarak görerek toplumda birliği oluşturmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>İncil'i Yaşamak:</strong> Her gün İncil'den bir kelimeyi hayata geçirmek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Terk Edilmiş İsa:</strong> Acı çeken İsa'nın sırrını kucaklayarak zorlukları aşmak</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sent Antuan'da Fokolarini</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fokolarini hareketi, Sent Antuan Bazilikası'nda aktif olarak faaliyet göstermektedir. Cemaatimiz,
              düzenli toplantılarla bir araya gelerek İncil'i birlikte okur, paylaşımlarda bulunur ve birlik
              ruhunu yaşama gayretiyle hareket eder.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Faaliyetlerimiz</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Haftalık Toplantılar</h4>
                <p className="text-gray-700">
                  Her hafta düzenli olarak bir araya gelerek İncil'i okur, deneyimlerimizi paylaşır ve birlik
                  ruhunu güçlendiririz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">İncil Paylaşımı</h4>
                <p className="text-gray-700">
                  Ayın İncil kelimesini her gün yaşamaya çalışır ve deneyimlerimizi birbirimizle paylaşırız.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Sosyal Projeler</h4>
                <p className="text-gray-700">
                  Ekonomi of Communion projesi ile iş dünyasında da karşılıklı sevgi ve paylaşımı yaygınlaştırırız.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Gençlik Çalışmaları</h4>
                <p className="text-gray-700">
                  Gençler için özel programlar, yaz kampları ve formasyonlar düzenleyerek gelecek nesilleri destekleriz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Nasıl Katılabilirsiniz?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fokolarini hareketine katılmak için herhangi bir ön şart yoktur. Herkes, yaşı, mesleği ve arka planı
              ne olursa olsun aramıza katılabilir. Toplantılarımıza gelerek hareketi tanıyabilir, sorularınızı
              sorabilir ve birlik ruhunu deneyimleyebilirsiniz.
            </p>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Bize Katılın</h2>
          <p className="text-lg mb-6 text-gray-700">
            Fokolarini hakkında daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
          >
            İletişime Geçin
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/cemaatimiz"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Cemaatlerimiz
          </Link>
          <Link
            href="/cemaatimiz/vincent-de-paul"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Vincent De Paul →
          </Link>
        </div>
      </div>
    </div>
  );
}
