import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AzizeCecilliaPage() {
  const t = useTranslations('stCecilia');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f14.png"
            alt="Azize Cecillia"
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
              Azize Cecillia
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              Müzisyenlerin ve Müziğin Koruyucu Azizesi
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-6 tracking-tight font-serif">
            Azize Cecillia Kimdir?
          </h2>
          <div className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
            <p>
              Azize Cecillia (MS 2. veya 3. yüzyıl), Roma'da yaşamış erken dönem Hristiyan şehididir.
              Müzik ve müzisyenlerin koruyucu azizesi olarak bilinir.
            </p>
            <p>
              Zengin ve asil bir ailede doğan Cecillia, genç yaşta İsa Mesih'e adadı kendini.
              Putperest bir erkekle evlendirildiğinde, kocası Valerianus'u ve kayınbiraderi Tiburtius'u
              Hristiyanlığa döndürmüş ve üçü de inançları uğruna şehit olmuşlardır.
            </p>
          </div>
        </div>

        {/* Why Patron of Musicians */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-8 mb-12 border border-purple-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
            Neden Müzisyenlerin Azizesi?
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              Gelenek, Cecillia'nın düğün töreninde orgların çalışı sırasında kalbinde Tanrı'ya
              ilahiler söylediğini anlatır. Müziği Tanrı'yı övmek için kullanmış, ses ve melodiyi
              dua aracı yapmıştır.
            </p>
            <p className="text-lg">
              Bu nedenle 5. yüzyıldan beri müzisyenler, şarkıcılar, besteciler ve org yapımcılarının
              koruyucu azizesi olarak kabul edilir. Birçok müzik konservatuarı, koro ve orkestra
              onun adını taşır.
            </p>
          </div>
        </div>

        {/* Prayers Section */}
        <div className="space-y-12 mb-20">
          {/* Main Prayer */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-900">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Azize Cecillia'ya Ana Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="italic text-center text-xl mb-6">
                "Ey mübarek Azize Cecillia, müziğin ve müzisyenlerin koruyucusu"
              </p>
              <p>
                Ey kutlu Azize Cecillia, sen ki göksel müziğin aracısısın, sesini ve kalbini
                Tanrı'yı övmek için kullandın. Bize de müzik ve sanat aracılığıyla Tanrı'yı
                yüceltmeyi öğret.
              </p>
              <p>
                Hayatın boyunca, evliliğinde bile saflığını korudun. İmanın uğruna şehit oldun.
                Kocana ve kayınbiraderin Tanrı'nın sevgisini gösterdin ve onları İsa'ya kazandırdın.
              </p>
              <p>
                Bizim için aracı ol. Müzisyenlere, şarkıcılara ve sanatçılara yeteneklerini
                Tanrı'nın şanına kullanma lütfunu bahşet. Müziği ve sanatı sevenlere ilham ver.
              </p>
              <p>
                Bize saflıkta yaşamayı, inançta sebat etmeyi ve sevgide büyümeyi öğret.
                Hayatımızın her anında Tanrı'ya ilahiler söyleyen bir kalp nasip et.
              </p>
              <p className="text-center font-semibold mt-6">
                Ey Azize Cecillia, bizim için dua et. Amin.
              </p>
            </div>
          </div>

          {/* Prayer for Musicians */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Müzisyenler İçin Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Ey Azize Cecillia, tüm müzisyenlerin koruyucusu, sana yakarıyoruz.
              </p>
              <p>
                Bize yeteneklerimizi Tanrı'nın şanı için kullanma lütfunu bahşet.
                Her notada, her melodide O'nun güzelliğini yansıtalım.
              </p>
              <p>
                Müziğimiz kalpleri Tanrı'ya yükseltsin, ruhları teselli etsin,
                acılara şifa versin. Sanatımız, sevginin ve barışın taşıyıcısı olsun.
              </p>
              <p>
                Pratik yaparken sabrımızı, performans ederken alçakgönüllülüğümüzü,
                yaratırken ilhamımızı koru. Başarıda gurura kapılmayalım,
                başarısızlıkta umudunu kaybetmeyelim.
              </p>
              <p className="text-center font-semibold">
                Senin aracılığınla, müziğimiz Tanrı'ya yükselen bir dua olsun. Amin.
              </p>
            </div>
          </div>

          {/* Responsorial Prayer */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Azize Cecillia Responsu
            </h3>
            <div className="space-y-3 text-gray-700 text-lg">
              <p className="font-semibold">R: Azize Cecillia için dua edelim.</p>
              <p className="pl-8 italic">C: İsa'nın vaatlerine layık olmamızı sağla.</p>

              <p className="font-semibold mt-6">R: Dua Edelim:</p>
              <p className="pl-8">
                Tanrım, mübarek Azize Cecillia'nın şefaati sayesinde, müzik ve sanat aracılığıyla
                seni yüceltmeyi öğren. Onun imanında sebat etmemizi ve saflığında yaşamamızı nasip et.
                Rabbimiz İsa Mesih aracılığıyla. Amin.
              </p>
            </div>
          </div>

          {/* Litany */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Azize Cecillia Litanyası
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Rahip: Rab, bize merhamet et.</p>
              <p className="pl-8 italic">Cemaat: Rab, bize merhamet et.</p>

              <div className="mt-4 space-y-1">
                <p className="font-semibold">Rahip:</p>
                <div className="pl-4 space-y-1">
                  <p>Ey Azize Cecillia, müziğin koruyucusu,</p>
                  <p>Ey Azize Cecillia, saflığın simgesi,</p>
                  <p>Ey Azize Cecillia, imanın şehidi,</p>
                  <p>Ey Azize Cecillia, göksel ilahilerin söyleyicisi,</p>
                  <p>Ey Azize Cecillia, orgların hamisi,</p>
                  <p>Ey Azize Cecillia, şarkıcıların rehberi,</p>
                  <p>Ey Azize Cecillia, bestecilerin ilham kaynağı,</p>
                  <p>Ey Azize Cecillia, sanatçıların örneği,</p>
                  <p>Ey Azize Cecillia, evlilerin koruyucusu,</p>
                  <p>Ey Azize Cecillia, körler ve müzik öğretmenlerinin yardımcısı,</p>
                </div>
                <p className="pl-8 italic mt-2">Cemaat: Bizim için dua et.</p>
              </div>
            </div>
          </div>

          {/* Prayer for Purity */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-8 border border-blue-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Saflık İçin Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Ey Azize Cecillia, sen ki evliliğinde bile saflığını korudun,
                bize de beden ve ruhta temiz yaşamayı öğret.
              </p>
              <p>
                Dünyada yaşarken, gönlümüzü Tanrı'ya adadığın gibi, bizler de
                kalbimizi O'na adayalım. Günün tüm işlerinde, O'nun huzurunda yaşadığımızı
                hatırlayalım.
              </p>
              <p>
                Evli olanlar için: Evliliklerinde sadakati, saygıyı ve sevgiyi korumalarını sağla.
              </p>
              <p>
                Bekar olanlar için: Saflıklarını korumalarına ve Tanrı'nın planına göre
                yaşamalarına yardım et.
              </p>
              <p className="text-center font-semibold">
                Ey Azize Cecillia, senin örneğinde beden ve ruhta saf yaşayalım. Amin.
              </p>
            </div>
          </div>
        </div>

        {/* Saint's Feast Day Info */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl shadow-xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Azize Cecillia Bayramı
          </h2>
          <p className="text-xl mb-2">📅 22 Kasım</p>
          <p className="text-lg opacity-90 mb-4">
            Her yıl 22 Kasım'da Azize Cecillia'nın bayramını özel müzikli ibadetlerle kutlarız.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-6">
            <p className="text-base opacity-90">
              🎵 Bu gün birçok kilisede özel konserler ve müzik şölenleri düzenlenir.
              Müzisyenler ve korolar Tanrı'yı övmek için özel programlar sunar.
            </p>
          </div>
        </div>

        {/* Related Pages */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/dua/ozel-dualar" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Diğer Özel Dualar →
              </h3>
              <p className="text-gray-700">
                Azizlere ve özel günlere ait duaları keşfedin
              </p>
            </div>
          </Link>
          <Link href="/ayin/saatleri" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Ayin Saatleri →
              </h3>
              <p className="text-gray-700">
                Haftalık ve özel gün ayin saatlerini görün
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
