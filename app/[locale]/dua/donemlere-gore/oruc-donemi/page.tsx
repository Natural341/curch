import Link from 'next/link';
import Image from 'next/image';

export default function OrucDonemiPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Oruç Dönemi"
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
              <span className="text-yellow-300">Oruç Dönemi</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Oruç Dönemi
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Tevbe, dua ve hazırlık zamanı
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Tövbe edin, çünkü Göklerin Egemenliği yaklaştı" - Matta 4:17
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Oruç Dönemi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Oruç Dönemi (Lent), Kül Çarşambası ile başlayıp Paskalya Yortusu'na kadar süren 40 günlük
              özel bir dönemdir. Bu süre, İsa'nın çölde geçirdiği 40 günü anma ve Paskalya'ya hazırlanma
              zamanıdır. Litürjik rengi mor olan bu dönem, tevbe, dua, oruç ve hayırseverliğe odaklanır.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              40 sayısı Kutsal Kitap'ta önemli bir semboldür: İsrail halkının çöldeki 40 yılı, İsa'nın
              çöldeki 40 günü. Bu dönem, manevi çöl yolculuğumuzda Tanrı'ya daha yakın olma fırsatıdır.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Oruç Döneminin Üç Sütunu</h3>
              <p className="text-gray-700 mb-3">
                Oruç Dönemi'nde odaklandığımız üç ana disiplin:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Dua:</strong> Tanrı ile ilişkimizi derinleştirme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Oruç:</strong> Kendimizi inkâr ederek Tanrı'ya odaklanma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Sadaka (Hayırseverlik):</strong> Başkalarına hizmet etme ve paylaşma</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Oruç Dönemi Duaları</h2>

            {/* Kül Çarşambası Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kül Çarşambası Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Tanrım, bugün alnıma konulan kül,<br/>
                  Ölümlülüğümü ve günahkarlığımı hatırlatıyor:<br/>
                  'Tozsun ve toza döneceksin.'<br/>
                  Bu gerçeği kabul ederek, senin merhametine sığınıyorum.<br/>
                  Bu Oruç Dönemi'nde, tevbe etme ve değişme yolunda<br/>
                  Bana cesaret ve güç ver.<br/>
                  Günahlarımı affet ve beni yeniden yarat.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Tevbe Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tevbe Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey merhametli Tanrım,<br/>
                  Senin karşında günahkârım.<br/>
                  Hatalarımı itiraf ediyor ve senin affını diliyorum.<br/>
                  Kalbimi temizle, ruhumu yenile.<br/>
                  Beni geçmişteki yanlışlarımdan kurtar<br/>
                  Ve geleceğe umutla bakmamı sağla.<br/>
                  Tevbe ediyorum ve senin yolunda yürümeye karar veriyorum.<br/>
                  Ey Rab, acı bana!<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Oruç Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oruç Tutarken Dua</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Rab, bugün senin için oruç tutuyorum.<br/>
                  Bedenimin açlığı, ruhun için olan açlığımı hatırlatsın.<br/>
                  Fiziksel gıdadan uzak dururken,<br/>
                  Manevi gıdan olan senin sözünle beslenmeme yardım et.<br/>
                  Bu küçük fedakarlık, İsa'nın büyük fedakarlığını aklıma getirsin.<br/>
                  Orucum, seni aramak ve bulmak için bir araç olsun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Çarmıhın Yolu Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Çarmıhın Yolu'ndan Önce Dua</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey İsa, senin Kalvarya'ya giden yolunu meditasyon yapmak için<br/>
                  Bu anda seninle olmak istiyorum.<br/>
                  Senin acın, sevgin ve fedakarlığın üzerinde düşünmeme yardım et.<br/>
                  Her durakta, kendi hayatımdaki çarmıhları ve mücadeleleri görmemi sağla.<br/>
                  Senin gibi sabır, alçakgönüllülük ve sevgiyle taşımayı öğret.<br/>
                  Çarmıhın Yolu, benim de kurtuluş yolum olsun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Günlük Sabah Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oruç Dönemi Sabah Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Tanrım, bugünü seninle başlatıyorum.<br/>
                  Oruç Dönemi'nde, her gün seni daha yakından tanıma fırsatıdır.<br/>
                  Bugün karşılaşacağım zorluklarda, senin gücüne güveniyorum.<br/>
                  Dua, oruç ve hayırseverlik yapmama yardım et.<br/>
                  Günümü senin için yaşayayım ve Paskalya'ya daha hazırlıklı olayım.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Kutsal Hafta Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kutsal Hafta Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey İsa, bu Kutsal Hafta'da<br/>
                  Senin son günlerini, acılarını ve ölümünü hatırlıyorum.<br/>
                  Palmiye Pazarı'ndan Büyük Cuma'ya,<br/>
                  Senin fedakarlığını ve sevgini tefekkür ediyorum.<br/>
                  Çarmıhta ölen ama üçüncü gün dirilen Sen,<br/>
                  Benim umudum ve kurtuluşumsun.<br/>
                  Bu hafta boyunca, kalbim sana açık olsun<br/>
                  Ve Paskalya sevinci beni yeniden doğursun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Oruç Dönemi Pratikleri</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Çarmıhın Yolu (Via Crucis)</h4>
                <p className="text-gray-700">
                  Her Cuma günü Çarmıhın Yolu ibadetine katılın ve İsa'nın acılarını meditasyon yapın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Günah Çıkarma</h4>
                <p className="text-gray-700">
                  Oruç Dönemi'nde en az bir kez Günah Çıkarma Sakramenti'ne katılın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Oruç ve Perhiz</h4>
                <p className="text-gray-700">
                  Kül Çarşambası ve Büyük Cuma'da oruç tutun. Cuma günleri etten perhiz edin.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Kutsal Kitap Okuma</h4>
                <p className="text-gray-700">
                  Her gün İncil okuyun, özellikle İsa'nın Çile hikayesini meditasyon yapın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Hayırseverlik</h4>
                <p className="text-gray-700">
                  Fakir ve muhtaçlara yardım edin, zaman ve kaynaklarınızı paylaşın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Ekstra Dua</h4>
                <p className="text-gray-700">
                  Tesbih duası, litürji saatleri veya başka ibadet şekilleriyle daha fazla dua edin.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Oruç Döneminin Amacı</h3>
              <p className="text-gray-700 leading-relaxed">
                Oruç Dönemi, sadece şeyleri bırakmak veya oruç tutmak değildir. Asıl amacı, Tanrı'ya
                daha yakın olmak, günahlardan arınmak ve manevi olarak yenilenmektir. Bu 40 gün,
                kalbimizi İsa'nın Paskalya zaferine hazırlar. Çölde yürüyen İsrail halkı gibi, biz de
                bu dönemde zorluklarla karşılaşabiliriz, ama Tanrı bize Vaat Edilmiş Toprak'a,
                kurtuluşa götürür. Oruç Dönemi'ni ciddiye alarak, Paskalya sevincini tam olarak yaşayabiliriz.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/dua/donemlere-gore/noel"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Noel Dönemi
          </Link>
          <Link
            href="/dua/donemlere-gore/paskalya"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Paskalya Dönemi →
          </Link>
        </div>
      </div>
    </div>
  );
}
