import Link from 'next/link';
import Image from 'next/image';

export default function LegionOfMaryPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f6.jpeg"
            alt="Legion of Mary"
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
              <span className="text-yellow-300">Legion of Mary</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Legion of Mary
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Meryem Ana'nın manevi rehberliğinde hizmet eden cemaat
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Meryem Ana'nın askerleri olarak dünyaya hizmet"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Legion of Mary Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Legion of Mary (Meryem Lejyonu), 1921 yılında Dublin'de Frank Duff tarafından kurulan
              uluslararası bir Katolik meryemci apostolik dernektir. Dernek üyeleri, Meryem Ana'nın ruhsal
              rehberliği ve himayesi altında, İsa Mesih'in misyonunu dünyaya yaymak için çalışırlar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Legion kelimesi, Roma ordusunun temel birimi olan lejyondan gelir. Bu isim, Meryem Ana'nın
              askerleri olarak organize ve disiplinli bir şekilde ruhani mücadeleye katılmayı simgeler.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Temel Prensipleri</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Meryem Ana'ya Adanma:</strong> Tüm çalışmaların Meryem Ana'nın rehberliğinde yapılması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Haftalık Toplantılar:</strong> Düzenli lejyon toplantılarına katılım</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Aktif Apostolat:</strong> Haftada en az 2 saat apostolik çalışma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Günlük Dualar:</strong> Tesseranın günlük olarak okunması</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Organizasyon</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Legion of Mary, askeri bir organizasyon yapısına benzer şekilde düzenlenmiştir. En küçük
              birim "Praesidium" (grup) olarak adlandırılır ve her grup haftalık olarak toplanır. Her
              toplantı belirli bir düzen içinde gerçekleşir: dua, raporlar, tartışma ve dua ile son bulur.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sent Antuan'da Legion of Mary</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sent Antuan Bazilikası'nda Legion of Mary praesidiumu aktif olarak faaliyet göstermektedir.
              Üyelerimiz düzenli olarak toplanarak dua eder, apostolik çalışmalar planlar ve Meryem Ana'nın
              örnekliğinde topluma hizmet eder.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Faaliyetlerimiz</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Ev Ziyaretleri</h4>
                <p className="text-gray-700">
                  Hastalara ve yaşlılara ev ziyaretleri yaparak manevi destek sağlıyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Dua Grupları</h4>
                <p className="text-gray-700">
                  Tesbih duası grupları düzenleyerek Meryem Ana'ya dua ediyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Yeni Üye Kazanımı</h4>
                <p className="text-gray-700">
                  İmanlarını kaybetmiş kişilere ulaşarak onları Kilise'ye geri davet ediyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Eğitim ve Formasyon</h4>
                <p className="text-gray-700">
                  Katekizm dersleri ve dini eğitim programları düzenliyoruz.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Nasıl Üye Olunur?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Legion of Mary'ye katılmak isteyen her Katolik, praesidium toplantılarına katılarak başvuruda
              bulunabilir. Birkaç hafta boyunca toplantılara katıldıktan sonra, üyelik için başvuru yapılır
              ve kabul edilen kişi Legion'un aktif bir üyesi olur.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Beklentilerimiz</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Legion üyeleri, haftalık toplantılara düzenli katılım, haftada en az 2 saat apostolik çalışma
                ve günlük Legion dualarını okuma taahhüdünde bulunurlar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bu disiplin, üyelerin manevi gelişimini ve apostolik çalışmaların etkinliğini sağlar.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Meryem Ana'nın Askerleri Arasına Katılın</h2>
          <p className="text-lg mb-6 text-gray-700">
            Legion of Mary hakkında daha fazla bilgi almak için bizimle iletişime geçin.
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
            href="/cemaatimiz/vincent-de-paul"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Vincent De Paul
          </Link>
          <Link
            href="/cemaatimiz/couples-for-christ"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Couples for Christ →
          </Link>
        </div>
      </div>
    </div>
  );
}
