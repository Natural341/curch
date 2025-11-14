import Link from 'next/link';
import Image from 'next/image';

export default function VincentDePaulPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f5.jpeg"
            alt="Vincent De Paul Cemiyeti"
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
              <span className="text-yellow-300">Vincent De Paul</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Vincent De Paul Cemiyeti
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Yoksullara hizmet eden hayırsever cemaat
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
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Yoksullara hizmet etmek, İsa'ya hizmet etmektir"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Vincent De Paul Kimdir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aziz Vincent de Paul (1581-1660), 17. yüzyıl Fransa'sında yaşamış bir Katolik rahibidir.
              Hayatını yoksullara, hastaları ve muhtaçlara hizmet etmeye adamıştır. 1833 yılında Paris'te
              kurulan Vincent de Paul Cemiyeti, onun adını ve ruhunu yaşatmaktadır.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Cemiyetin Misyonu</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vincent de Paul Cemiyeti, dini, ırkı, cinsi veya etnik kökeni ne olursa olsun, ihtiyaç
              içindeki tüm insanlara yardım etmeyi amaçlayan uluslararası bir hayır kurumudur. Cemiyetin
              temel ilkesi, yoksulları evlerinde ziyaret ederek onların gerçek ihtiyaçlarını anlamak ve
              kişisel teması koruyarak yardım etmektir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Temel Değerlerimiz</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Basitlik:</strong> Sade ve samimi bir şekilde hizmet etmek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Alçakgönüllülük:</strong> Kibirden uzak, tevazu ile yaklaşmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Sevgi:</strong> Her insana İsa'nın sevgisiyle bakmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Adalet:</strong> Toplumsal adaletsizliğe karşı mücadele etmek</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sent Antuan'da Faaliyetlerimiz</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vincent de Paul Cemiyeti olarak Sent Antuan Bazilikası'nda aktif bir şekilde çalışıyoruz.
              İstanbul'daki muhtaç aileleri düzenli olarak ziyaret ediyor, onların maddi ve manevi
              ihtiyaçlarına yardımcı oluyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Yardım Alanlarımız</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Ev Ziyaretleri</h4>
                <p className="text-gray-700">
                  Muhtaç aileleri evlerinde düzenli olarak ziyaret ediyor, ihtiyaçlarını dinliyor ve
                  destek oluyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Gıda Yardımı</h4>
                <p className="text-gray-700">
                  Gıda kolileri hazırlayıp ihtiyaç sahibi ailelere ulaştırıyor, temel besin
                  ihtiyaçlarını karşılıyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Eğitim Desteği</h4>
                <p className="text-gray-700">
                  Öğrencilere kırtasiye, kitap ve eğitim materyali yardımında bulunuyor, eğitimlerine
                  devam etmelerini destekliyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Sağlık Yardımı</h4>
                <p className="text-gray-700">
                  Sağlık sorunları yaşayan ailelere ilaç ve tedavi masraflarında yardımcı oluyoruz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Nasıl Yardımcı Olabilirsiniz?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vincent de Paul Cemiyeti'ne üye olarak aktif çalışmalara katılabilir, ev ziyaretlerinde
              gönüllü olarak bulunabilir veya bağış yaparak yoksullara yardım edebilirsiniz. Her türlü
              katkı, muhtaç ailelerin hayatında önemli fark yaratmaktadır.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Gönüllü Olmak</h3>
              <p className="text-gray-700 leading-relaxed">
                Cemiyetimize gönüllü olarak katılmak istiyorsanız, haftalık toplantılarımıza katılabilir
                ve ev ziyaretlerinde bizimle birlikte hareket edebilirsiniz. Yoksullara hizmet etmenin
                manevi zenginliğini birlikte yaşayabiliriz.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Yardım Etmek İster misiniz?</h2>
          <p className="text-lg mb-6 text-gray-700">
            Vincent de Paul Cemiyeti hakkında daha fazla bilgi almak ve yardım etmek için bizimle iletişime geçin.
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
            href="/cemaatimiz/fokolarini"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Fokolarini
          </Link>
          <Link
            href="/cemaatimiz/legion-of-mary"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Legion of Mary →
          </Link>
        </div>
      </div>
    </div>
  );
}
