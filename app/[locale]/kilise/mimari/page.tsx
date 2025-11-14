import Link from 'next/link';
import Image from 'next/image';

export default function MimariPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f7.jpeg"
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
              <span className="text-yellow-300">Mimari</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Mimari ve Tasarım
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Neo-Gotik mimarisiyle İstanbul'un en görkemli yapılarından biri
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Mimarlar ve Tasarım</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sent Antuan Bazilikası, İstanbul doğumlu İtalyan mimarlar <strong>Giulio Mongeri</strong> ve
              <strong> Eduardo de Nari</strong> tarafından tasarlanmıştır. Mongeri, 20. yüzyılın başlarında
              İstanbul'da birçok önemli yapının mimarıdır ve Sent Antuan onun en önemli eserlerinden biridir.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kilise, Latin haç planıyla 20×50 metre ölçülerinde Neo-Gotik tarzda inşa edilmiştir. Bu plan,
              geleneksel Katolik kilise mimarisinin klasik bir örneğidir ve ibadet mekanının işlevselliğini
              maksimize etmek için tasarlanmıştır.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Neo-Gotik Mimari</h3>
              <p className="text-gray-700 leading-relaxed">
                Neo-Gotik mimari, 18. ve 19. yüzyıllarda ortaya çıkan ve Gotik mimarinin temel öğelerini
                yeniden canlandıran bir akımdır. Sent Antuan'da bu stil, sivri kemerler, yüksek tavanlar,
                ince sütunlar ve ışığın etkin kullanımı ile kendini gösterir.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Dış Cephe</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kilisenin ön cephesi, 14. yüzyıl Toskana tarzını yansıtmaktadır. Kırmızı tuğladan inşa edilen
              dış cephe, İstiklal Caddesi'nin kalabalığında bile göz kamaştıran bir varlık sergiler.
              Cephede yer alan detaylı süslemeler ve heykeller, İtalyan zanaat geleneğinin ustalığını gösterir.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ana girişin üzerinde yer alan büyük gül pencere (rose window), Gotik mimarinin en karakteristik
              öğelerinden biridir ve kilisenin içine muhteşem bir ışık oyunu yaratır.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">İç Mekan</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kilisenin iç kısmı, yüksek tavanları ve geniş nef yapısıyla ziyaretçilerde huşu uyandıran
              bir atmosfer yaratır. Betonarme yapının kullanılması, dönemin modern inşaat tekniklerinin
              geleneksel Gotik estetiğiyle başarılı bir şekilde birleştirildiğini gösterir.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Duvar Süslemeleri ve Mozaikler</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kilise duvarları yüksek ve kısmen mozaiklerle kaplıdır. Yan apsislerde, vaftiz ve son akşam
              yemeğini tasvir eden görkemli mozaik panolar bulunmaktadır. Bu mozaikler, İtalyan sanatçılar
              tarafından özenle yapılmış ve günümüze kadar orijinal güzelliğini korumuştur.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Heykeller</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              İtalyan heykeltıraş <strong>Luigi Bresciani</strong> tarafından yapılan İsa ve Aziz Antuan
              heykelleri, kilisede yan yana yerleştirilmiştir. Bu heykeller, dönemin en iyi mermer işçiliğinin
              örnekleridir ve dini sanatın yüceliğini temsil eder.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Işık ve Akustik</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Gotik mimarinin en önemli özelliklerinden biri, doğal ışığın etkin kullanımıdır. Sent Antuan'da
              yüksek pencerelerde yer alan vitraylar, gün içinde değişen ışık oyunları yaratarak iç mekanda
              manevi bir atmosfer oluşturur.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Kilisenin akustik tasarımı da son derece başarılıdır. Yüksek tavanlar ve özel olarak tasarlanmış
              mekansal düzen, hem konuşma seslerinin hem de müziğin mükemmel bir şekilde duyulmasını sağlar.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Restorasyon ve Koruma</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Yıllar içinde, binanın tarihi ve mimari değerini korumak için çeşitli restorasyon çalışmaları
              yapılmıştır. Bu çalışmalar, orijinal tasarıma saygılı kalarak, yapının hem estetik hem de
              yapısal bütünlüğünü korumayı amaçlamıştır.
            </p>

            {/* Mimari Özellikler Grid */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3 text-lg">Plan</h4>
                <p className="text-gray-700">Latin haç planı, 20×50m ölçülerinde</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3 text-lg">Stil</h4>
                <p className="text-gray-700">Neo-Gotik / 14. yy Toskana etkileri</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3 text-lg">Malzeme</h4>
                <p className="text-gray-700">Kırmızı tuğla dış cephe, betonarme yapı</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3 text-lg">İnşaat</h4>
                <p className="text-gray-700">1906-1912, Giulio Mongeri & Eduardo de Nari</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-8 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Ziyaret Bilgisi</h3>
              <p className="text-gray-700 leading-relaxed">
                Sent Antuan Bazilikası, İstiklal Caddesi üzerinde ziyarete açıktır. Kilisenin mimari güzelliğini
                keşfetmek için rehberli turlar düzenlenebilir. Detaylı bilgi için lütfen kilise ofisi ile
                iletişime geçin.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/kilise/sanat"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            ← Sanat
          </Link>
          <Link
            href="/kilise/ruhsal-degerlerimiz"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Ruhsal Değerlerimiz →
          </Link>
        </div>
      </div>
    </div>
  );
}
