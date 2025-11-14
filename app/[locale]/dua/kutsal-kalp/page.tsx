import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function KutsalKalpPage() {
  const t = useTranslations('sacredHeart');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f11.png"
            alt="Kutsal Kalp"
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
              İsa'nın Kutsal Kalbi
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              Sonsuz Sevgi ve Merhamet Kaynağı
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-6 tracking-tight font-serif">
            Kutsal Kalp'e Adanma
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            İsa'nın Kutsal Kalbi, O'nun insanlığa olan sonsuz sevgisinin ve merhametinin sembolüdür.
            Bu adanma, kendimizi tamamen İsa'nın sevgisine ve iradesine teslim etme sözüdür.
          </p>
        </div>

        {/* Prayer Section */}
        <div className="space-y-12 mb-20">
          {/* Main Prayer to Sacred Heart */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-900">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Kutsal Kalp'e Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="italic text-center text-xl mb-6">
                "İsa'nın en tatlı Kalbi, seni seviyorum!"
              </p>
              <p>
                Ey İsa'nın en sevgili Kutsal Kalbi, tüm insanlığın kurtuluşu için çarmıhta mızrakla
                delinmiş olan Kalp, senin sonsuz merhametine sığınıyoruz.
              </p>
              <p>
                Ey alev alev yanan Kutsal Kalp, bizi de senin ateşinle tutuştur. İnsanlara karşı
                olan sevgini bizlere de bahşet, sevgi ve adalet yolunda yürümeyi öğret.
              </p>
              <p>
                Günahlarımızı affet, zaaflarımıza merhamet et. İman, umut ve sevgide güçlendir bizi.
                Senin Kutsal Kalbinin izinde, senin sevgini yaymak için yaşamayı nasip et.
              </p>
              <p className="text-center font-semibold">
                Ey İsa'nın en tatlı Kalbi, sana güveniyoruz. Bizi koru ve kurtar. Amin.
              </p>
            </div>
          </div>

          {/* Litany */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Kutsal Kalp Litanyası
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold mb-4">Rahip: Rab, bize merhamet et.</p>
              <p className="pl-8">Cemaat: Rab, bize merhamet et.</p>

              <p className="font-semibold mt-4">Rahip: Mesih, bize merhamet et.</p>
              <p className="pl-8">Cemaat: Mesih, bize merhamet et.</p>

              <div className="mt-6 space-y-2">
                <p className="font-semibold">Rahip:</p>
                <div className="pl-4 space-y-1">
                  <p>Ey Baba'nın Oğlu olan İsa'nın Kalbi,</p>
                  <p>Ey Kutsal Ruh tarafından Bakire Meryem'in rahminde oluşmuş Kutsal Kalp,</p>
                  <p>Ey Tanrı'nın Sözü ile esaslı şekilde birleşmiş Kutsal Kalp,</p>
                  <p>Ey sonsuz ihtişam sahibi Kutsal Kalp,</p>
                  <p>Ey Baba'nın kutsal mabedi olan Kutsal Kalp,</p>
                  <p>Ey en yüksek tanrının konutu olan Kutsal Kalp,</p>
                  <p>Ey Baba'nın evi ve cenneti olan Kutsal Kalp,</p>
                  <p>Ey sevgi ve iyilik hazinesi olan Kutsal Kalp,</p>
                  <p>Ey merhamet kaynağı olan Kutsal Kalp,</p>
                </div>
                <p className="pl-8 italic">Cemaat: Bize merhamet et.</p>
              </div>
            </div>
          </div>

          {/* Act of Consecration */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-900">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Kutsal Kalp'e Adanma Duası
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Ey İsa'nın en sevgili Kutsal Kalbi, kendimi tamamen sana adarım ve teslim ediyorum.
                Yaşamımı, tüm düşüncelerimi, sözlerimi ve eylemlerimi sana sunuyorum.
              </p>
              <p>
                Kalbimi senin Kutsal Kalbine göre şekillendir. Beni senin sevginle doldur,
                senin merhametinle sarmal. Günahlarımdan arın, zaaflarımı güçlendir.
              </p>
              <p>
                Ailemi, sevdiklerimi ve tüm insanlığı senin Kutsal Kalbine emanet ediyorum.
                Barış, adalet ve sevgi hüküm sürsün yeryüzünde.
              </p>
              <p>
                Senin Kutsal Kalbinin kraliyeti gelsin, senin iraden yapılsın yerde olduğu gibi
                gökte de. Senin sevginde yaşamayı ve bu sevgiyi yaymayı nasip et bana.
              </p>
              <p className="text-center font-semibold mt-6">
                Ey İsa'nın Kutsal Kalbi, sana güveniyorum. Amin.
              </p>
            </div>
          </div>

          {/* Promises */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md p-8 border border-red-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Kutsal Kalp'in 12 Vaadi
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              İsa, Kutsal Kalp'e adananlara şu vaadlerde bulunmuştur:
            </p>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">1.</span>
                <span>Onlara durumlarına göre gerekli bütün lütufları vereceğim.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">2.</span>
                <span>Ailelerine barış vereceğim.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">3.</span>
                <span>Üzüntülerinde onları teselli edeceğim.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">4.</span>
                <span>Hayatlarında ve özellikle ölüm anlarında onların sığınağı olacağım.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">5.</span>
                <span>Bütün işlerine bol bereketler saçacağım.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">6.</span>
                <span>Günahkarlar Kalbimde merhamet kaynağını bulacaklar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">7.</span>
                <span>İlgisiz olanlar, Kalbime olan adanma sayesinde hararetle yanacaklar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">8.</span>
                <span>Hararetli olanlar mükemmelliğe ulaşacaklar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">9.</span>
                <span>Kalbimin resmi bulunan evleri kutsayacağım.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">10.</span>
                <span>Rahiblere en inatçı kalpleri yumuşatma gücünü vereceğim.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">11.</span>
                <span>Bu adanmayı yayacak olanların isimleri Kalbimde yazılacak ve silinmeyecektir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-red-900 min-w-[2rem]">12.</span>
                <span>
                  Dokuz ay üst üste ayın ilk cumasında komünyon yapanlara, son pişmanlık lütfunu
                  vereceğim; ölüm çağında Sakramentler olmaksızın ölmeyecek ve nihayetinde
                  Kalbimin barış içinde kabulu olacaklardır.
                </span>
              </li>
            </ol>
          </div>

          {/* First Friday Devotion */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              İlk Cuma İbadeti
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Kutsal Kalp adanmasının özel bir şekli, her ayın ilk cumasında komünyon yapmaktır.
                Bu ibadeti 9 ay üst üste sürdürenler, İsa'nın özel vaadine layık olurlar.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">İlk Cuma Günü Yapılacaklar:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Günah çıkarma sakramentini alın</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Kutsal Komünyon'a katılın</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Kutsal Kalp'e özel dualar edin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Günahların telafisi için dua edin</span>
                  </li>
                </ul>
              </div>
            </div>
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
