import Link from 'next/link';
import Image from 'next/image';

export default function NoelPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Noel Dönemi"
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
              <Link href="/dua/donemlere-gore" className="text-white hover:text-yellow-300 transition-colors">Dönemlere Göre Dualar</Link>
              <span className="mx-2 text-white">/</span>
              <span className="text-yellow-300">Noel</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Noel Dönemi
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              İsa Mesih'in doğumunu kutlama ve sevinç zamanı
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <article className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mb-4 mx-auto bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Kelam insan oldu ve aramızda yaşadı" - Yuhanna 1:14
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Noel Dönemi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Noel dönemi, İsa Mesih'in doğumunu kutlayan en sevinçli litürjik dönemdir. 25 Aralık Noel
              günüyle başlayıp Epifani (Üç Kralların Bayramı) ile devam eder ve İsa'nın Sunuş Bayramı
              ile (2 Şubat) son bulur.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Bu dönemin litürjik rengi beyazdır - saflık, sevinç ve ışığın simgesidir. Noel zamanı,
              Tanrı'nın insanlığa olan sevgisinin en büyük göstergesini, Kelam'ın insan olmasını kutlar.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Noel'in Anlamı</h3>
              <p className="text-gray-700 mb-3">
                Noel, sadece bir doğum hikayesi değil, kurtuluş planının başlangıcıdır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>İnkarnas yon:</strong> Tanrı'nın insan doğasını alması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Tevazu:</strong> Tanrı'nın bir ahırda yoksul olarak doğması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Evrensellik:</strong> Kurtuluşun herkese açık olması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Umut:</strong> Karanlığa gelen ışık</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Noel Duaları</h2>

            {/* Noel Günü Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Noel Günü Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey sevgi dolu Tanrım,<br/>
                  Bu mübarek Noel gününde,<br/>
                  Oğlun İsa'nın dünyaya gelişi için sana şükrediyorum.<br/>
                  Bir ahırda doğan küçük bebek,<br/>
                  İnsanlığa kurtuluş getiren Mesih'tir.<br/>
                  Onun tevazusu, sevgisi ve fedakarlığı örnek olsun.<br/>
                  Bu Noel'de kalbim O'nun için açık olsun<br/>
                  Ve O'nun ışığı hayatımda parlasın.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Beşik Başı Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bebek İsa'ya Dua</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey küçük bebek İsa,<br/>
                  Beşikte yatan, ama evrenin Yaratıcısı olan Sen,<br/>
                  Kalbime gel ve onu seninle doldur.<br/>
                  Senin gibi alçakgönüllü ve saf olmayı öğret.<br/>
                  Hayatımı senin için yaşamama yardım et.<br/>
                  Her gün seni daha çok seveyim ve tanıyayım.<br/>
                  Ey küçük Kral, seni övüyorum ve tapınıyorum.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Aile Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Noel'de Aile Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Tanrım, bu Noel'de ailemizi kutsa.<br/>
                  Nasıra Ailesi gibi, bizim de birbirimizi sevelim ve destekleyelim.<br/>
                  İsa, Meryem ve Yusuf'un sevgisi ve birliği,<br/>
                  Bizim ailemiz için model olsun.<br/>
                  Evimiz O'nun huzuruyla dolsun,<br/>
                  Ve hep birlikte seni övmeye devam edelim.<br/>
                  Bu bayramda, ailemize barış, sevinç ve sevgi ver.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Şükran Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Noel Şükran Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey cömert Tanrım,<br/>
                  En büyük hediyeni, Oğlun İsa'yı bize verdiğin için sana şükrediyorum.<br/>
                  O'nun doğumu, senin sonsuz sevginin kanıtıdır.<br/>
                  Bu Noel'de aldığım tüm nimetler,<br/>
                  Ailem, arkadaşlarım, sağlığım ve hayatım için minnettarım.<br/>
                  Beni hep şükreden bir kalple yaşamaya yönlendir.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Çobanların Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Çobanların Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Rab, çobanlar gibi ben de alçak ve basit bir hizmetkarınım.<br/>
                  Meleklerin sesini duyan çobanlar gibi,<br/>
                  Benim de kulaklarım senin çağrına açık olsun.<br/>
                  Onlar gibi, ben de İsa'yı aramaya ve bulmaya çalışayım.<br/>
                  Ve bulduğumda, bütün dünyaya müjdeyi duyurayım.<br/>
                  Çobanların basit imanı ve sevgisi bende de olsun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Üç Krallar Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Üç Kralların Duası (Epifani)</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Tanrım, Doğu'dan gelen bilge adamlar gibi,<br/>
                  Ben de İsa'yı aramak için uzun bir yolculuğa hazırım.<br/>
                  Onların altın, günnük ve mür hediyelerini<br/>
                  Kralın, Tanrı'nın ve kurban olacak olanın simgesi olarak sundukları gibi,<br/>
                  Ben de hayatımı senin için bir hediye olarak sunuyorum.<br/>
                  Beni O'na yönlendir ve O'nun huzurunda secde etmeme izin ver.<br/>
                  Amin."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Noel'de Yapılacaklar</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Ayine Katılım</h4>
                <p className="text-gray-700">
                  Noel gecesi gece yarısı ayini ve Noel günü ayinlerine katılın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Beşik Ziyareti</h4>
                <p className="text-gray-700">
                  Kilisedeki beşiği ziyaret edin, bebek İsa için dua edin.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Aile Zamanı</h4>
                <p className="text-gray-700">
                  Ailenizle birlikte Noel duaları okuyun, İncil'den Noel hikayesini okuyun.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Paylaşım</h4>
                <p className="text-gray-700">
                  İhtiyaç sahiplerine yardım edin, sevginizi paylaşın.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Noel'in Gerçek Hediyesi</h3>
              <p className="text-gray-700 leading-relaxed">
                Noel'in gerçek hediyesi, materyal şeyler değil, İsa Mesih'in kendisidir. Bu Noel'de
                kalbimizi O'na açalım ve O'nun sevgisinin bizi dönüştürmesine izin verelim. Bebek İsa,
                bir ahırda doğarak bize tevazu öğretti; O'nun gibi alçakgönüllü olalım. Çobanlar ve
                krallar O'na secde etti; biz de O'nu Kral olarak kabul edelim.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/dua/donemlere-gore/advent"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Advent Dönemi
          </Link>
          <Link
            href="/dua/donemlere-gore/oruc-donemi"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Oruç Dönemi →
          </Link>
        </div>
      </div>
    </div>
  );
}
