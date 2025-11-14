import Link from 'next/link';
import Image from 'next/image';

export default function KarizmatiklerPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f9.jpeg"
            alt="Katolik Karizmatik Yenilenme"
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
              <span className="text-yellow-300">Karizmatikler</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Katolik Karizmatik Yenilenme
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Kutsal Ruh'un armağanlarıyla yaşayan dinamik cemaat
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
                  <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Kutsal Ruh'la dolun!" - Efesliler 5:18
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Katolik Karizmatik Yenilenme Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Katolik Karizmatik Yenilenme (KKY), 1960'ların sonunda Amerika Birleşik Devletleri'nde başlayan
              ve Katolik Kilisesi içinde Kutsal Ruh'un armağanlarını yeniden keşfetmeyi amaçlayan bir
              ruhani harekettir. Hareket, Pentikost deneyimini günümüzde yaşamayı ve Kutsal Ruh'un gücüyle
              İsa Mesih'i tanıklık etmeyi vurgular.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Papa II. Jean-Paul, Papa XVI. Benedikt ve Papa Francis, KKY'yi Kilise için büyük bir lütuf
              ve nimet olarak nitelendirmişlerdir. Bugün dünya çapında 120 milyondan fazla Katolik,
              Karizmatik Yenilenme hareketine dahildir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Kutsal Ruh'un Armağanları</h3>
              <p className="text-gray-700 mb-3">
                Karizmatik Yenilenme, Yeni Ahit'te bahsedilen Kutsal Ruh'un çeşitli armağanlarını
                (charismata) vurgular:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>Peygamberlik sözleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>Şifa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>Dillerde konuşma (glosolali)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>Dillerin yorumlanması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>Ruhları ayırt etme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span>İman, bilgelik ve bilgi sözleri</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sent Antuan'da Karizmatik Dua Grubu</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sent Antuan Bazilikası'nda Karizmatik dua grubu düzenli olarak toplanmaktadır. Toplantılarımız
              dinamik ibadet, spontan dualar, İncil paylaşımı ve Kutsal Ruh'un armağanlarının kullanımı ile
              karakterize edilir.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dua Toplantılarımız</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">İbadet ve Övgü</h4>
                <p className="text-gray-700">
                  Canlı müzik eşliğinde içten gelen övgü ve tapınma ile Tanrı'yı yüceltiriz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Şifa Duası</h4>
                <p className="text-gray-700">
                  Hasta ve acı çeken kardeşlerimiz için özel şifa duaları yapar, Kutsal Ruh'un
                  şifa gücüne güveniriz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">İncil Öğretisi</h4>
                <p className="text-gray-700">
                  Kutsal Yazılar'dan öğretiler alır, bunları hayatımıza uygularız.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Paylaşım</h4>
                <p className="text-gray-700">
                  Tanrı'nın hayatımızda yaptığı muhteşem işleri birbirimizle paylaşırız.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Ruh'ta Vaftiz</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Karizmatik Yenilenmenin merkezinde "Ruh'ta Vaftiz" deneyimi vardır. Bu, Kutsal Ruh'un gücünü
              kişisel olarak deneyimleme, O'nunla daha derin bir ilişkiye girme ve Ruh'un armağanlarına
              açılma anlamına gelir. Bu deneyim, birçok kişinin imanını canlandırmış ve İsa ile daha yakın
              bir yürüyüş sürdürmelerine yardımcı olmuştur.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Life in the Spirit Seminar</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Yılda birkaç kez "Ruh'ta Yaşam Semineri" (Life in the Spirit Seminar) düzenliyoruz. Bu 7 haftalık
              program, katılımcıların Kutsal Ruh ile daha derin bir ilişki kurmasını, Ruh'un armağanlarını
              keşfetmesini ve Karizmatik Yenilenmenin temel öğretilerini öğrenmesini sağlar.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Kimler Katılabilir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Karizmatik dua grubuna katılmak için özel bir ön şart yoktur. İmanını derinleştirmek,
              Kutsal Ruh'u daha yakından tanımak ve canlı bir topluluk deneyimi yaşamak isteyen herkes
              aramıza katılabilir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Açık Davetimiz</h3>
              <p className="text-gray-700 leading-relaxed">
                Eğer maneviyatınızı canlandırmak, Kutsal Ruh'un gücünü deneyimlemek ve sıcak bir toplulukta
                dua etmek istiyorsanız, dua toplantılarımıza bekleriz. İlk kez gelen misafirlere özel ilgi
                gösterir ve onları sıcak bir şekilde karşılarız.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Kutsal Ruh'un Gücünü Deneyimleyin</h2>
          <p className="text-lg mb-6 text-gray-700">
            Karizmatik dua grubu ve etkinliklerimiz hakkında daha fazla bilgi için bizimle iletişime geçin.
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
            href="/cemaatimiz/couples-for-christ"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Couples for Christ
          </Link>
          <Link
            href="/cemaatimiz/meryem-ana-cemiyeti"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Meryem Ana Cemiyeti →
          </Link>
        </div>
      </div>
    </div>
  );
}
