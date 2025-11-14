import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OzelDualarPage() {
  const t = useTranslations('prayers');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Sent Antuan Bazilikası Dualar"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight tracking-tight">
              {t('specialPrayers.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              {t('specialPrayers.description')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Aziz Antuan'a Dua */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.stAnthony.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Ey Aziz Antuan, kayıpların bulucusu ve Tanrı'nın hizmetkarı,<br/>
              Senin büyük gücüne ve mucizelerine güvenerek yalvarıyorum:<br/>
              Benim kaybettiğim [isteğinizi belirtin] bulunması için dua et.<br/>
              Senin sevgin ve şefkatinle, kaybolmuş olanı bulmamda bana yardım et.<br/>
              Amin."
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            Aziz Antuan, kayıp eşyaların ve kayıp ruhların azizi olarak bilinir. Onun duaları ve müdahalesiyle
            birçok kişi kayıplarını bulmuş, manevi ve fiziksel yardım görmüştür.
          </p>
        </div>

        {/* Kutsal Kalp Duası */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.sacredHeart.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Ey İsa'nın En Kutsal Kalbi,<br/>
              Senin sonsuz sevginin kaynağı, merhamet ve şefkat pınarı,<br/>
              Sana kendimi tamamen adıyorum.<br/>
              Beni sevginle doldur, kalbimi seninkiyle birleştir,<br/>
              Ve her zaman senin yolunda yürümeme yardım et.<br/>
              En Kutsal Kalp, sana güveniyorum ve seni seviyorum.<br/>
              Amin."
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            İsa'nın Kutsal Kalbi'ne adanmış bu dua, O'nun sınırsız sevgisine ve merhametine olan inancımızı ifade eder.
            Her ay ayın ilk Cuma günü, Kutsal Kalp'e özel ibadet yapılır.
          </p>
        </div>

        {/* Meryem Ana'ya Dua */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.aveMaria.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Selâm sana, ey Meryem, lütuf dolu,<br/>
              Rab seninledir.<br/>
              Sen kadınlar arasında mübareksin,<br/>
              Ve rahminin ürünü İsa mübarek.<br/>
              Ey Kutsal Meryem, Allah'ın Anası,<br/>
              Bizim günahkarlar için şimdi ve ölüm saatimizde dua et.<br/>
              Amin."
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            Meryem Ana'ya yapılan bu geleneksel dua, Katolik inancının temel dualarından biridir. Tesbih duasının
            ana unsurunu oluşturur ve günlük dua hayatımızda önemli bir yer tutar.
          </p>
        </div>

        {/* Haç İşareti */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.signOfCross.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Baba, Oğul ve Kutsal Ruh'un adına.<br/>
              Amin."
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            Haç işareti çıkarmak, Teslis inancımızın bir ifadesidir. Alından göğse, sol omuzdan sağ omuza doğru
            yapılan bu işaret, dualarımızın başlangıcında ve sonunda yapılır.
          </p>
        </div>

        {/* Şükran Duası */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.thanksgiving.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Ey bağışlayıcı Tanrım,<br/>
              Bana verdiğin tüm nimetler için sana şükrediyorum.<br/>
              Hayatım, sağlığım, ailem, sevdiklerim ve her gün karşılaştığım güzellikler için<br/>
              Sonsuz minnettarlığımı sunuyorum.<br/>
              Beni sevginle kuşat ve her zaman şükreden bir kalple yaşamama yardım et.<br/>
              Amin."
            </p>
          </div>
          <p className="text-base font-medium text-gray-700 leading-relaxed">
            Şükran duası, Tanrı'nın bize verdiği sayısız nimeti hatırlatır ve minnettar bir kalple yaşamamıza yardımcı olur.
          </p>
        </div>

        {/* Koruyucu Melek Duası */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 mb-20 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('specialPrayers.guardianAngel.title')}</h2>
          <div className="bg-gray-100 rounded-xl p-6 mb-4 border border-gray-300">
            <p className="text-gray-800 leading-relaxed italic">
              "Ey koruyucu meleğim,<br/>
              Tanrı'nın sevgisi seni bana gönderdi.<br/>
              Bu gün ve her gün beni aydınlat, koru ve yönet.<br/>
              Beni kötülükten uzak tut ve Tanrı'nın yolunda yürümeme yardım et.<br/>
              Amin."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            {t('specialPrayers.cta.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-gray-100">
            {t('specialPrayers.cta.description')}
          </p>
          <Link
            href="/dua/donemlere-gore"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            {t('specialPrayers.cta.button')}
          </Link>
        </div>
      </div>
    </div>
  );
}
