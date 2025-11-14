import Link from 'next/link';
import Image from 'next/image';

export default function PaskalyaPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Paskalya Dönemi"
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
              <span className="text-yellow-300">Paskalya</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Paskalya Dönemi
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              İsa'nın dirilişini kutlama ve sevinç zamanı
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Diriltildi! Burada değil!" - Luka 24:6
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Paskalya Dönemi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Paskalya Dönemi, İsa Mesih'in ölümden dirilişini kutlayan en önemli ve en sevinçli litürjik
              dönemdir. Paskalya Pazar günü ile başlayıp Pentikost (Kutsal Ruh'un İnişi) ile son bulan
              50 günlük bu dönem, Hristiyan inancının merkezindeki gerçeği kutlar: İsa yaşıyor!
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Litürjik rengi beyaz ve altın olan bu dönem, zafer, sevinç ve yeni yaşamın simgesidir.
              "Aleluya" (Tanrı'yı övün) sözü, Oruç Dönemi boyunca susturulduktan sonra, Paskalya'da
              tekrar yüksek sesle söylenir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Dirilişin Önemi</h3>
              <p className="text-gray-700 mb-3">
                İsa'nın dirilişi, Hristiyan inancının temel taşıdır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Ölüme Zafer:</strong> İsa ölümü yenmiştir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Günaha Galebe:</strong> Günahın gücü kırılmıştır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Yeni Yaşam:</strong> Bizim de dirileceğimizin garantisi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Kurtuluş:</strong> İsa'nın görevinin tamamlanması</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Paskalya Duaları</h2>

            {/* Paskalya Sabahı Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paskalya Sabahı Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Aleluya! İsa diriltildi, gerçekten diriltildi!<br/>
                  Ey Tanrım, bu mübarek Paskalya sabahında<br/>
                  Kalbim sevinçle dolup taşıyor.<br/>
                  Boş mezar, ölümün yenildiğinin kanıtıdır.<br/>
                  İsa'nın dirilişi, benim de umudumdur.<br/>
                  Bu Paskalya'da, bana yeni bir yaşam ver.<br/>
                  Günahtan ve karanlıktan ışığa çıkmamı sağla.<br/>
                  Aleluya! Amin."
                </p>
              </div>
            </div>

            {/* Dirilen İsa'ya Dua */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dirilen İsa'ya Dua</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey dirilen İsa,<br/>
                  Sen ölümden hayata geçtin ve bize ebedi yaşamın kapısını açtın.<br/>
                  Senin dirilişin, karanlıktaki ışık, umutsuzluktaki umuttur.<br/>
                  Bana da senin zaferini paylaşma gücünü ver.<br/>
                  Günlük mücadelelerimde, senin gücünü hissedeyim.<br/>
                  Hayatımın her alanında diriliş yaşayayım.<br/>
                  Ey zafer kazanan Kral, seni övüyorum ve tapınıyorum.<br/>
                  Aleluya! Amin."
                </p>
              </div>
            </div>

            {/* Şükran Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paskalya Şükran Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey cömert Tanrım,<br/>
                  İsa'nın dirilişi için sana sonsuz şükranlarımı sunuyorum.<br/>
                  O'nun ölümü ve dirilişi, benim kurtuluşumdur.<br/>
                  Paskalya'nın sevinci, kalbimi doldursun.<br/>
                  Hayatta ve ölümde senin gücüne güveniyorum.<br/>
                  Bu mübarek dönemde, her gün daha fazla sevinç<br/>
                  Ve minnet duyarak yaşamama yardım et.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Yeni Yaşam Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yeni Yaşam Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Rab, İsa'nın dirilişi gibi<br/>
                  Benim de hayatımda yeni bir başlangıç olsun.<br/>
                  Eski günahlarımdan, kötü alışkanlıklarımdan ve zayıflıklarımdan<br/>
                  Dirilişin gücüyle özgürleş.<br/>
                  Beni yeni bir insan olarak yarat.<br/>
                  İsa gibi, ben de her gün yeni bir yaşam yaşayayım.<br/>
                  Bu Paskalya, gerçek bir dönüşüm zamanı olsun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Kutsal Ruh'a Dua */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kutsal Ruh İçin Dua (Pentikost'a Hazırlık)</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Kutsal Ruh, gel!<br/>
                  İsa'nın vaadi olarak, apostolların üzerine indiğin gibi,<br/>
                  Benim üzerime de in.<br/>
                  Kalbimi ateşle doldur, sevgini yay.<br/>
                  Armağanlarınla beni zenginleştir<br/>
                  Ve İsa'nın tanıklığını yapma cesareti ver.<br/>
                  Pentikost'a hazırlanırken, içimi iman, umut ve sevgiyle doldur.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Meryem Magdala'nın Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meryem Magdala'nın Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey İsa, Meryem Magdala gibi, ben de seni arıyorum.<br/>
                  O, boş mezarda seni bulamamış ama dirilen Sen ona göründün.<br/>
                  Benim de gözlerimi aç, seni görmeme yardım et.<br/>
                  Hayatımda senin varlığını tanıyayım.<br/>
                  Meryem'in 'Rabbuni' (Öğretmenim) çağrısı gibi,<br/>
                  Benim de kalbim seni Rab olarak kabul etsin.<br/>
                  İyi Haberi yaymak için beni gönder.<br/>
                  Amin."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Paskalya Döneminde Yaşananlar</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Paskalya Pazar</h4>
                <p className="text-gray-700">
                  İsa'nın dirilişini kutlayan en önemli gün. Ayin ve kutlamalarla dolu.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Paskalya Oktavı</h4>
                <p className="text-gray-700">
                  Paskalya'dan sonraki 8 gün, sanki tek bir büyük Pazar gibi kutlanır.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">İlahi Merhamet Pazarı</h4>
                <p className="text-gray-700">
                  Paskalya'dan sonraki ikinci Pazar, Tanrı'nın merhametini kutlar.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Yükseliş (Ascension)</h4>
                <p className="text-gray-700">
                  İsa'nın göğe yükselişini kutlayan, Paskalya'dan 40 gün sonraki bayram.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Pentikost</h4>
                <p className="text-gray-700">
                  Kutsal Ruh'un apostolların üzerine inişi, Paskalya döneminin son günü.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Aleluya Şarkıları</h4>
                <p className="text-gray-700">
                  Tüm dönem boyunca "Aleluya" sevinç çağrısı ile dua ve ayinler yapılır.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Paskalya Dönemi Nasıl Yaşanır?</h2>
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Sevinçle Dua:</strong> Her gün Aleluya ile dua edin, şükran dua ları yapın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>İncil Okuma:</strong> Diriliş hikayelerini ve İsa'nın görünüşlerini okuyun</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Tanıklık:</strong> İyi Haberi başkalarıyla paylaşın, İsa'nın dirilişini anlatın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Ayinlere Katılım:</strong> Pazar ayinlerine ve özel günlerdeki ayinlere katılın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Yeni Yaşam:</strong> Kötü alışkanlıklardan vazgeçin, erdemli yaşamaya devam edin</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Paskalya'nın Anlamı</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paskalya, sadece tarihi bir olay değil, her gün yaşanması gereken bir gerçektir. İsa'nın
                dirilişi, bizim de ölümden hayata, günahtan kutsallığa, karanlıktan ışığa geçebileceğimizin
                kanıtıdır. Bu 50 günlük dönem, yeni yaşamımızı kutlamak ve Kutsal Ruh'un gelişine hazırlanmak
                için özel bir fırsattır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "Eğer İsa diriltilmediyse, imanınız boşunadır" der Aziz Pavlus. Ama İsa gerçekten diriltildi
                ve bu, her şeyi değiştirir! Paskalya'nın sevinci, sadece bir mevsim değil, yaşam tarzımız olsun.
                Her gün, dirilen İsa ile yürüyelim. Aleluya!
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/dua/donemlere-gore/oruc-donemi"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Oruç Dönemi
          </Link>
          <Link
            href="/dua/donemlere-gore"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Tüm Dönemler →
          </Link>
        </div>
      </div>
    </div>
  );
}
