'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function HacYoluPage() {
  const t = useTranslations('stationsOfCross');
  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  const stations = [
    {
      number: 1,
      title: 'İsa ölüm hükmüne mahkum edilir',
      meditation: 'Pilatus, halkın baskısına boyun eğerek İsa\'yı ölüme mahkum etti. İsa suçsuz olduğu halde, bizim günahlarımız için bu hükmü kabul etti.',
      prayer: 'İsa\'m, senin adalet karşısındaki suskunluğunu düşünüyorum. Haksızlıkla karşılaştığımda, senin gibi sabırlı ve affedici olmayı nasip et.'
    },
    {
      number: 2,
      title: 'İsa haçını sırtına alır',
      meditation: 'İsa, ağır haçı sırtına aldı. Bu haç, tüm insanlığın günahlarının yükünü taşıyordu. Sessizce, itaatkarca yoluna devam etti.',
      prayer: 'İsa\'m, sen günah yükümü taşıdın. Bana da hayatımın haçını taşıma gücünü ver. Zorluklarımı senin sevginle kucaklayabileyim.'
    },
    {
      number: 3,
      title: 'İsa ilk kez düşer',
      meditation: 'Ağır yük altında İsa ilk kez yere düştü. Tüm gücünü kaybetmiş gibi görünüyordu, ama sevgi onu ayağa kaldırdı ve yoluna devam etti.',
      prayer: 'İsa\'m, günah içinde düştüğümde, sen bana el uzatırsın. Düştüğümde umudumu kaybetmemeyi, hep sana dönmeyi öğret.'
    },
    {
      number: 4,
      title: 'İsa annesi Meryem\'le karşılaşır',
      meditation: 'İsa, acı çeken annesiyle göz göze geldi. Meryem\'in kalbi kırılıyordu, ama oğlunun misyonunu anlıyor ve kabul ediyordu.',
      prayer: 'İsa\'m, Meryem Ana\'nın kalbindeki acıyı düşünüyorum. Sevdiklerimin acılarını paylaşmayı, onlara teselli olmayı öğret bana.'
    },
    {
      number: 5,
      title: 'Simun Sîreneli İsa\'ya yardım eder',
      meditation: 'Simun, haçın ağırlığını paylaşmak için zorlandı. İsteksizce başladığı bu yardım, onu İsa\'ya yaklaştırdı.',
      prayer: 'İsa\'m, başkalarının yüklerine ortak olmayı öğret. Gönülsüz hizmet bile, senin lütfunla bereketlensin.'
    },
    {
      number: 6,
      title: 'Veronika İsa\'nın yüzünü siler',
      meditation: 'Veronika cesaretle öne çıkıp İsa\'nın yüzünü sildi. Merhametli davranışına karşılık, bezine İsa\'nın yüzü nakşoldu.',
      prayer: 'İsa\'m, başkalarının acısı karşısında duyarsız kalmamamı sağla. Küçük de olsa, merhametli davranmayı nasip et.'
    },
    {
      number: 7,
      title: 'İsa ikinci kez düşer',
      meditation: 'Güçsüzleşen İsa tekrar yere düştü. Ama her düşüşte, sonsuz sevgisi onu yeniden ayağa kaldırdı.',
      prayer: 'İsa\'m, tekrar tekrar günaha düştüğümde, sen hala beni seviyorsun. Senin merhametine sığınıyorum.'
    },
    {
      number: 8,
      title: 'İsa ağlayan kadınlarla karşılaşır',
      meditation: 'Kudüslü kadınlar İsa için ağlıyorlardı. İsa onlara şefkatle, kendi acıları yerine günahları için ağlamalarını söyledi.',
      prayer: 'İsa\'m, gerçek üzüntü nedir öğret bana. Günahlarıma ağlayayım, ama senin merhametine de güveneyim.'
    },
    {
      number: 9,
      title: 'İsa üçüncü kez düşer',
      meditation: 'Artık tamamen tükenmiş olan İsa, üçüncü kez yere düştü. Ama sevgisi asla tükenmedi, bizim için sonuna kadar devam etti.',
      prayer: 'İsa\'m, senin azmin ve sevgin sonsuz. Hayatımın zorluklarında asla pes etmemeyi öğret.'
    },
    {
      number: 10,
      title: 'İsa\'nın elbiseleri çıkarılır',
      meditation: 'İsa\'nın giysileri çıkarıldı, halk önünde aşağılandı. Böylece bizi utanç ve günahtan kurtarmak için her şeyini verdi.',
      prayer: 'İsa\'m, gurur ve gösteriş yerine alçakgönüllülüğü öğret. Sana her şeyimi teslim etmeyi nasip et.'
    },
    {
      number: 11,
      title: 'İsa çarmıha gerilir',
      meditation: 'Eller ve ayaklar çivilerle çarmıha çakıldı. İsa korkunç acılar içinde, yine de bizim için dua etti: "Baba, onları bağışla..."',
      prayer: 'İsa\'m, senin sevgin ölümden güçlü. Bana da düşmanlarımı affetmeyi, herkesi sevmeyi öğret.'
    },
    {
      number: 12,
      title: 'İsa çarmıhta ölür',
      meditation: 'İsa son nefesini verdi: "Tamamlandı... Baba, ruhumu senin ellerine teslim ediyorum." Böylece kurtuluşumuzu tamamladı.',
      prayer: 'İsa\'m, sen bizim için öldün. Her gün sana daha çok benzememi, senin için yaşamayı nasip et.'
    },
    {
      number: 13,
      title: 'İsa\'nın bedeni çarmıhtan indirilir',
      meditation: 'İsa\'nın cansız bedeni çarmıhtan indirildi ve Meryem Ana\'nın kucağına verildi. Annenin acısı tarif edilemezdi.',
      prayer: 'İsa\'m, Meryem Ana\'nın acısını düşünüyorum. Kayıplarımda, senin ebedi hayat vaadine tutunmayı öğret.'
    },
    {
      number: 14,
      title: 'İsa\'nın bedeni mezara konur',
      meditation: 'İsa\'nın bedeni mezara kondu. Karanlık ve sessizlik hüküm sürüyordu. Ama bu son değildi - üç gün sonra diriliş gelecekti.',
      prayer: 'İsa\'m, ölüm senin için son olmadı. Bana da ebedi hayat umudunu ver. Senin dirilişinle, ben de dirileceğim.'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f13.png"
            alt="Haç Yolu"
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
              Haç Yolu
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              Via Crucis - İsa'nın Çarmıh Yolu Üzerinde 14 Durak
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-6 tracking-tight font-serif">
            Haç Yolu İbadeti
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Haç Yolu (Via Crucis), İsa'nın ölüme mahkum edilmesinden mezara konulmasına kadar
            geçen son saatlerini anma ve üzerinde derin tefekkür etme ibadetidir.
            14 durak boyunca İsa'nın çektiği acıları düşünür, kendi hayatımıza yansıtırız.
          </p>
        </div>

        {/* How to Pray */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md p-8 mb-12 border border-red-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
            Haç Yolu Nasıl Yapılır?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-900">Her Durakta:</h4>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Durağın önünde diz çökün veya ayakta durun</li>
                <li>Haç işareti yapın</li>
                <li>"Sana tapınıyoruz İsa Mesih, seni kutsuyoruz"</li>
                <li>"Çünkü sen kutsal haçınla dünyayı kurtardın"</li>
                <li>Durağın meditasyonunu okuyun</li>
                <li>Kısa bir sessizlik</li>
                <li>Duayı okuyun</li>
                <li>Babamız... Selam sana Meryem...</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-900">Önemli Notlar:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-900 font-bold">•</span>
                  <span>Haç Yolu özellikle Oruç Dönemi'nde ve Kutsal Cuma'da yapılır</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-900 font-bold">•</span>
                  <span>Kilisemizde her Cuma 18:00'de toplu Haç Yolu ibadeti yapılır</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-900 font-bold">•</span>
                  <span>Bireysel olarak her zaman yapılabilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-900 font-bold">•</span>
                  <span>Haç Yolu için kısmi günah bağışlanması vardır</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Opening Prayer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-red-900">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
            Açılış Duası
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center space-y-4">
            <p className="font-semibold">Haç İşareti:</p>
            <p>Baba'nın, Oğul'un ve Kutsal Ruh'un adına. Amin.</p>
            <p className="mt-6">
              İsa'mız, sen bizim için çarmıhın ağır yükünü taşıdın. Şimdi biz de senin izinden
              yürümek istiyoruz. Bu Haç Yolu boyunca, senin sevgini daha derinden anlamamızı,
              kendi haçlarımızı senin lütfunla taşımamızı sağla. Senin acılarını düşünerek,
              kendi hayatımızı değiştirelim. Amin.
            </p>
          </div>
        </div>

        {/* The 14 Stations */}
        <div className="space-y-6 mb-12">
          {stations.map((station) => (
            <div
              key={station.number}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div
                className="bg-gradient-to-r from-red-900 to-red-800 text-white p-6 cursor-pointer"
                onClick={() => setSelectedStation(selectedStation === station.number ? null : station.number)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                      {station.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-serif">
                      {station.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${selectedStation === station.number ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {selectedStation === station.number && (
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-red-900 mb-3">Meditasyon:</h4>
                    <p className="text-gray-700 leading-relaxed">{station.meditation}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-900 mb-3">Dua:</h4>
                    <p className="text-gray-700 leading-relaxed italic">{station.prayer}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <p className="text-gray-700 font-medium">
                      Babamız... Selam sana Meryem... İzzet ve şan...
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Prayer */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border-2 border-red-900">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
            Kapanış Duası
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-center space-y-4">
            <p>
              İsa'mız, Haç Yolu'nun sonuna geldik. Senin acılarını düşündük, sevgini kavramaya çalıştık.
            </p>
            <p>
              Ama biliyoruz ki bu son değil. Üçüncü gün dirilerek, ölüme ve günaha galip geldin.
              Bize de bu zafere ortak olmayı nasip et.
            </p>
            <p>
              Günlük hayatımızda senin izinden yürüyelim. Haçlarımızı taşırken, senin lütfuna
              dayanarak, ebedi hayat umudunu kaybetmeyelim.
            </p>
            <p className="font-semibold">
              Ey İsa, sen bizim için öldün ve dirildin. Sana şükürler olsun. Amin.
            </p>
          </div>
        </div>

        {/* Special Times for Via Crucis */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md p-8 mb-12 border border-purple-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
            Kilisemizde Haç Yolu İbadeti
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h4 className="font-bold text-gray-900 mb-2">Her Cuma</h4>
              <p className="text-gray-700">18:00 - Toplu Haç Yolu</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">✝️</div>
              <h4 className="font-bold text-gray-900 mb-2">Kutsal Cuma</h4>
              <p className="text-gray-700">15:00 - Özel İbadet</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🕊️</div>
              <h4 className="font-bold text-gray-900 mb-2">Oruç Dönemi</h4>
              <p className="text-gray-700">Her Cuma akşamı</p>
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/dua/donemlere-gore/oruc-donemi" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Oruç Dönemi Duaları →
              </h3>
              <p className="text-gray-700">
                Paskalya hazırlık dönemi için özel dualar ve ibadetler
              </p>
            </div>
          </Link>
          <Link href="/ayin/ozel-gunler" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Özel Günler →
              </h3>
              <p className="text-gray-700">
                Kutsal Cuma ve diğer özel günlerin ayin saatleri
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
