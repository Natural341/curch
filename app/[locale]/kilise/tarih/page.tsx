import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function TarihPage() {
  const t = useTranslations('history');
  const timelineEvents = [
    { year: '1230', title: 'Fransiskenlerin Gelişi', description: 'Fransisken rahibler Galata\'da Aziz Fransua adına ilk kiliseyi kurdular. Bu, Latin Katolik cemaatinin İstanbul\'daki kalıcı varlığının başlangıcıydı.' },
    { year: '1639', title: 'İlk Büyük Yangın', description: 'Galata\'daki orijinal kilise büyük bir yangında hasar gördü. Cemaat kiliseyi aynı yerde yeniden inşa etti ve ibadetlerine devam etti.' },
    { year: '1660', title: 'İkinci Yangın', description: 'Yirmi yıl sonra ikinci bir yangın kiliseyi tekrar harap etti. Fransisken cemaati bir kez daha azimle kiliseyi yeniden inşa etti.' },
    { year: '1696', title: 'Büyük Galata Yangını', description: 'Galata\'yı yok eden büyük yangın, kiliseyi ve çevresini tamamen harap etti. Bu olay, cemaatin İstiklal Caddesi\'ndeki yeni konumuna taşınmasına yol açtı.' },
    { year: '1724', title: 'Pera\'da Yeni Başlangıç', description: 'Beyoğlu\'nda (Pera) yeni Sent Antuan Kilisesi inşa edildi ve takdis edildi. Kilise, Osmanlı sarayında ve diplomatik misyonlarda görev yapan Katolik ailelerine hizmet verdi.' },
    { year: '1906', title: 'Modern İnşaatın Başlangıcı', description: 'Mevcut Neo-Gotik binanın temeli atıldı. İtalyan mimar Giulio Mongeri\'nin tasarımı, dönemin en gelişmiş inşaat tekniklerini kullanıyordu.' },
    { year: '1907', title: 'Finansal Kriz', description: 'İnşaat mali zorluklar nedeniyle durdu. Cemaat ve destekçiler, projeyi canlandırmak için fon toplamaya başladılar.' },
    { year: '1910', title: 'İnşaatın Yeniden Başlaması', description: 'Uluslararası Katolik cemaatinden gelen mali destekle inşaat yeniden başladı. Neo-Gotik cephe ve iç dekorasyon çalışmaları hızla ilerledi.' },
    { year: '1912', title: 'Açılış ve Takdis', description: '15 Şubat 1912\'de kilise ibadete açıldı. Padua\'dan getirilen Aziz Antuan\'ın röliklerinin yerleştirilmesiyle kilise takdis edildi.' },
    { year: '1932', title: 'Bazilika Statüsü', description: 'Papa XI. Pius tarafından "Bazilika Minor" unvanı verildi. Bu onur, kilisenin mimari, tarihi ve manevi önemini uluslararası düzeyde tanıdı.' },
    { year: '1990-2000', title: 'Büyük Restorasyon', description: 'Kapsamlı restorasyon çalışmaları gerçekleştirildi. Cephe temizliği, iç mekan restorasyonu ve yapısal güçlendirme yapıldı.' },
    { year: '2012', title: '100. Yıl Kutlamaları', description: 'Modern binanın 100. yılı muhteşem kutlamalarla anıldı. Uluslararası Katolik cemaati ve yerel yetkililer törene katıldı.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/StAntoine-Hero.jpg"
            alt="History"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl leading-tight tracking-tight">
              {t('title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed font-semibold tracking-wide">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sekiz Asırlık Miras</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Sent Antuan Bazilikası, 1230 yılında Fransisken rahibler tarafından kurulan, İstanbul'un en eski
            ve en köklü Katolik kiliselerinden biridir. Yüzyıllar boyunca şehrin çok kültürlü dokusunun
            önemli bir parçası olmuştur.
          </p>
        </div>

        {/* Timeline - Zaman Tüneli */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400"></div>

          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-16 h-16 bg-white border-4 border-gray-900 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-gray-900 font-bold text-sm">{event.year.split('-')[0].slice(-2)}</span>
                </div>

                {/* Content Card - Alternating Left/Right */}
                <div className={`flex items-start pt-8 pb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="inline-block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 group hover:-translate-y-1">
                      <div className="text-4xl font-bold text-gray-900 mb-3">{event.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Content */}
        <article className="prose prose-lg max-w-none space-y-12 mt-20 bg-white rounded-2xl p-12 shadow-lg">
          {/* Fransisken Dönemi */}
          <section>
            <h2 className="text-3xl font-bold text-red-900 mb-6">Fransisken Dönemi (1230-1696)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1230 yılında, Aziz Fransua'nın öğretilerini yaymak için İstanbul'a gelen Fransisken rahibler,
              Galata bölgesinde bir manastır ve kilise kurdular. Bu yapı, Latin Katolik cemaatinin Bizans
              İmparatorluğu'ndaki ilk kalıcı dini merkezlerinden biriydi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Orijinal kilise, dönemin karakteristik Bizans mimarisi ile Batı Avrupa'nın Romanesk üslubunun
              bir karışımıydı. Alçak tavanlı, sade ama zarif iç mekanı, Fransisken sadelik ilkesini yansıtıyordu.
            </p>
            <p className="text-gray-700 leading-relaxed">
              1639 ve 1660 yangınları kiliseyi ciddi şekilde hasara uğrattı, ancak cemaat her seferinde kiliseyi
              yeniden inşa etti. 1696'daki büyük Galata yangını ise bölgeyi tamamen harap etti ve Fransiskenler
              yeni bir konum aramaya başladı.
            </p>
          </section>

          {/* Pera Dönemi */}
          <section>
            <h2 className="text-3xl font-bold text-red-900 mb-6">Pera'da Yeni Başlangıç (1724-1906)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              18. yüzyılın başında, Pera (Beyoğlu) Avrupalı diplomatlar, tüccarlar ve sanatçıların tercih ettiği
              bir bölge haline gelmişti. 1724 yılında, Fransisken rahibler bu yeni kozmopolit mahallede,
              İstiklal Caddesi'nin kalbinde yeni bir kilise inşa ettiler.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu dönemde kilise, Osmanlı sarayında görev yapan Avrupalı diplomatların, Levanten ailelerin ve
              uluslararası ticaretle uğraşan Katoliklerin manevi merkezi oldu. Kilise, sadece dini törenler için
              değil, aynı zamanda sosyal ve kültürel buluşmalar için de kullanıldı.
            </p>
            <p className="text-gray-700 leading-relaxed">
              19. yüzyılın sonlarına doğru, artan cemaat nüfusu ve yaşlanan bina, daha büyük ve modern bir yapıya
              ihtiyacı ortaya çıkardı.
            </p>
          </section>

          {/* Modern Bazilika */}
          <section>
            <h2 className="text-3xl font-bold text-red-900 mb-6">Modern Bazilika (1906-1912)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1906 yılında, İtalyan mimar Giulio Mongeri'nin tasarladığı Neo-Gotik tarzda yeni kilisenin inşaatı
              başladı. Mongeri, İstanbul'da doğmuş ve şehrin mimarisini derinden bilen yetenekli bir mimardı.
              Tasarımı, 14. yüzyıl Toskana kiliselerinden ilham alıyordu.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 my-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mimari Özellikler</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-900 font-bold">•</span>
                  <span><strong>Betonarme Yapı:</strong> Dönemin en gelişmiş inşaat tekniği kullanıldı</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-900 font-bold">•</span>
                  <span><strong>Neo-Gotik Cephe:</strong> Kırmızı tuğla, sivri kemerler ve gotik pencereler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-900 font-bold">•</span>
                  <span><strong>İtalyan Sanatı:</strong> Luigi Bresciani'nin heykelleri ve mozaik sanatı</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              İnşaat 1907'de mali zorluklar nedeniyle durdu. Uluslararası Katolik cemaatinden gelen bağışlarla
              1910'da yeniden başlayan çalışmalar, 1912'de tamamlandı. 15 Şubat 1912'de, kilise muhteşem bir
              törenle ibadete açıldı.
            </p>
          </section>

          {/* Modern Dönem */}
          <section>
            <h2 className="text-3xl font-bold text-red-900 mb-6">Bazilika ve Modern Dönem (1932-Günümüz)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1932 yılında Papa XI. Pius tarafından "Basilica Minor" (Küçük Bazilika) unvanı verildi. Bu prestijli
              unvan, kilisenin mimari güzelliği, tarihi önemi ve manevi değerinin Vatikan tarafından resmen
              tanınması anlamına geliyordu.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              20. yüzyıl boyunca, Sent Antuan İstanbul'un çok kültürlü dokusunun bir simgesi oldu. İki dünya savaşı,
              Türkiye Cumhuriyeti'nin kuruluşu ve modernleşme sürecine tanıklık eden kilise, tüm bu değişimler
              boyunca ibadet kapılarını açık tuttu.
            </p>

            <div className="grid grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-red-900 mb-2">1990-2000</div>
                <p className="text-gray-700">Büyük Restorasyon</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-red-900 mb-2">2012</div>
                <p className="text-gray-700">100. Yıl Kutlaması</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-red-900 mb-2">2025</div>
                <p className="text-gray-700">Aktif Cemaat</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Bugün Sent Antuan Bazilikası, İstanbul'un en büyük ve en canlı Katolik kilisesidir. Türk, İtalyan,
              Levanten, Polonyalı, Filipinli ve daha birçok milliyetten cemaatiyle, kilisemiz evrensel Katolik
              Kilisesi'nin çok kültürlü doğasını yansıtmaktadır.
            </p>
          </section>
        </article>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 my-20">
          <div className="text-center">
            <div className="text-5xl font-bold text-red-900 mb-2">1230</div>
            <p className="text-gray-700 text-lg">Kuruluş Yılı</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-900 mb-2">795+</div>
            <p className="text-gray-700 text-lg">Yıllık Hizmet</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-900 mb-2">1932</div>
            <p className="text-gray-700 text-lg">Bazilika Statüsü</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 transition-all duration-300 text-center"
          >
            ← Ana Sayfa
          </Link>
          <Link
            href="/kilise/sanat"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center"
          >
            Sanat ve Mimari →
          </Link>
        </div>
      </div>
    </div>
  );
}
