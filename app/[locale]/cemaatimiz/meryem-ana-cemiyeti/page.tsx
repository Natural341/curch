import Link from 'next/link';
import Image from 'next/image';

export default function MeryemAnaCemiyetiPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/hero.jpeg"
            alt="Meryem Ana Cemiyeti"
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
              <span className="text-yellow-300">Meryem Ana Cemiyeti</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Meryem Ana Cemiyeti
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Meryem Ana'ya adanmış dua ve hizmet topluluğu
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
                <svg className="w-12 h-12 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Meryem Ana, dua edenler ve hizmet edenlerin annesi"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Cemiyetimiz Hakkında</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Meryem Ana Cemiyeti, Sent Antuan Bazilikası'nda Meryem Ana'ya özel bir adanma ile kurulmuş
              dua ve hizmet topluluğudur. Üyelerimiz, Meryem Ana'nın örnekliğinde yaşayarak, alçakgönüllülük,
              itaat ve hizmet ruhunu benimsemeyi amaçlar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Cemiyetimiz, Meryem Ana'nın İsa'ya olan bağlılığını ve hizmetini model alarak, topluma ve
              kilisemize hizmet etmeyi, dua hayatını güçlendirmeyi ve birlik ruhu içinde yaşamayı hedefler.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Meryem Ana'nın Erdemleri</h3>
              <p className="text-gray-700 mb-3">
                Cemiyetimizin üyeleri, Meryem Ana'nın erdemlerini yaşamaya çalışır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Alçakgönüllülük:</strong> "İşte Rabbin cariyesi" - Tanrı'nın iradesine tam teslimiyet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Saflık:</strong> Kalp, düşünce ve eylemde saflık</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>İman:</strong> Her durumda Tanrı'ya güven</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Hizmet:</strong> İhtiyaç sahiplerine sevgiyle hizmet etme</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Faaliyetlerimiz</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tesbih Duası (Rosary)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Her hafta düzenli olarak bir araya gelerek tesbih duasını birlikte okuruz. Tesbih, Meryem Ana
              ile İsa'nın hayatının gizemlerini tefekkür etmemizi sağlayan güçlü bir duadır. Sevinç, Işık,
              Acı ve Şan gizemleri üzerinde meditasyon yaparak maneviyatımızı derinleştiririz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meryem Ana'nın Özel Günleri</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Müjde Bayramı (25 Mart)</h4>
                <p className="text-gray-700">
                  Melek Cebrail'in Meryem'e İsa'yı doğuracağını müjdelediği günü özel bir ayin ile kutlarız.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Meryem Ana'nın Göğe Alınması (15 Ağustos)</h4>
                <p className="text-gray-700">
                  Meryem Ana'nın ruh ve bedeniyle göğe alınışını kutlayan en önemli Meryemsi bayram.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Lourdes Meryem Anası (11 Şubat)</h4>
                <p className="text-gray-700">
                  Meryem Ana'nın Lourdes'da Bernadette'e görünmesinin anısına özel dualar ve ayin.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Fatima Meryem Anası (13 Mayıs)</h4>
                <p className="text-gray-700">
                  Fatima'da Meryem Ana'nın çocuklara görünmesini anarak özel tesbih duası oturumları.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hizmet Faaliyetleri</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Meryem Ana'nın Kana düğününde ve diğer durumlarda gösterdiği şefkat ve yardımseverliği örnek
              alarak, cemiyetimiz çeşitli sosyal hizmet faaliyetleri yürütür:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span>Hastane ziyaretleri ve hastalara manevi destek</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span>Yaşlı ve yalnız cemaatimiz üyelerine düzenli ziyaretler</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span>Kilise temizliği ve çiçek düzenleme hizmeti</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span>Yeni doğan bebeklerin vaftiz törenlerine yardım</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span>Kilise etkinliklerinde organizasyon ve misafir ağırlama</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Manevi Gelişim</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cemiyetimiz, üyelerinin manevi gelişimini desteklemek için çeşitli programlar düzenler:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span><strong>Aylık Formasyon:</strong> Meryem Ana'nın hayatı ve erdemleri üzerine öğretiler</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span><strong>Yıllık Rekoleksiyon:</strong> Sessizlik ve dua ile manevi yenilenme günü</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-900 mr-3 mt-1">•</span>
                <span><strong>İncil Çalışması:</strong> Meryem Ana'nın İncil'deki yeri üzerine düşünme</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Nasıl Üye Olunur?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Meryem Ana Cemiyeti'ne katılmak isteyen her kadın kardeşimiz aramıza hoş gelir. Üyelik için
              özel bir ön şart yoktur, sadece Meryem Ana'ya karşı özel bir sevgi ve hizmet etme arzusu
              yeterlidir. İlgileniyorsanız, toplantılarımızdan birine katılarak cemiyetimizi tanıyabilirsiniz.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Meryem Ana'nın Çağrısı</h3>
              <p className="text-gray-700 leading-relaxed">
                Meryem Ana, tüm çocuklarını sevgiyle kucaklar ve onları İsa'ya götürür. Eğer siz de
                Meryem Ana'nın sıcak ve şefkatli topluluğunda yer almak istiyorsanız, cemiyetimize
                katılmayı düşünün. Birlikte dua eder, hizmet eder ve Meryem Ana'nın örneğinde yürürüz.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Meryem Ana'nın Ailesine Katılın</h2>
          <p className="text-lg mb-6 text-gray-700">
            Meryem Ana Cemiyeti hakkında daha fazla bilgi almak için bizimle iletişime geçin.
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
            href="/cemaatimiz/karizmatikler"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Karizmatikler
          </Link>
          <Link
            href="/cemaatimiz"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Tüm Cemaatler →
          </Link>
        </div>
      </div>
    </div>
  );
}
