import Link from 'next/link';
import Image from 'next/image';

export default function AdventPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/images.jpg"
            alt="Advent Dönemi"
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
              <span className="text-yellow-300">Advent</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Advent Dönemi
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              İsa'nın gelişini bekleme ve hazırlık zamanı
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Uyanık olun, çünkü İnsanoğlu'nun geleceği saati bilmiyorsunuz" - Matta 24:42
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Advent Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Advent, Latince "adventus" (geliş) kelimesinden türetilmiştir. Bu dönem, Noel'den dört hafta
              öncesinde başlar ve İsa Mesih'in doğumuna hazırlanma zamanıdır. Advent aynı zamanda İsa'nın
              ikinci gelişini bekleme ve uyanık olma çağrısı da içerir.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Litürjik rengi mor (eflatun) olan bu dönem, tevbe, dua ve hazırlık zamanıdır. Kiliseler
              Advent çelengi ile süslenir ve her Pazar bir mum yakılır.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Advent Çelengi</h3>
              <p className="text-gray-700 mb-3">
                Advent çelengi, dört mumdan oluşur ve her Pazar bir mum yakılır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>1. Pazar:</strong> Umut Mumu - Peygamberlerin müjdesini anma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>2. Pazar:</strong> Barış Mumu - Mesihi bekleme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>3. Pazar:</strong> Sevinç Mumu - Müjdenin yaklaşması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>4. Pazar:</strong> Sevgi Mumu - Son hazırlık</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Advent Duaları</h2>

            {/* Advent Çelengi Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advent Çelengi Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey bizi seven Tanrımız,<br/>
                  Advent çelenginin ışığı, İsa Mesih'in yaklaşan gelişini simgeler.<br/>
                  Bu mumları yakarken, kalbimizi O'nun gelmesine hazırla.<br/>
                  Karanlıktan aydınlığa, ölümden hayata, umutsuzluktan umuda geçişimizi hatırlat.<br/>
                  İsa'nın doğumuyla dünyaya gelen ışık, bizim de ışık olmamıza ilham versin.<br/>
                  Advent zamanında bize hazırlık, sabır ve uyanıklık lütfet.<br/>
                  Mesih'in adıyla. Amin."
                </p>
              </div>
            </div>

            {/* Hazırlık Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advent Hazırlık Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Rab, bu Advent döneminde<br/>
                  Kalbimi senin için hazırlamama yardım et.<br/>
                  Dünyevi meşguliyetlerden uzaklaşıp,<br/>
                  Senin sessiz sesini duymama yardım et.<br/>
                  Umudumu, sevgimi ve imanımı güçlendir.<br/>
                  İsa'nın gelişini beklerken,<br/>
                  Benim de başkalarına ışık olmamı sağla.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Sabah Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advent Sabah Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Tanrım, bu yeni güne seninle başlıyorum.<br/>
                  Advent zamanında, İsa'nın gelişini beklerken,<br/>
                  Bugün bana vereceğin her fırsatta O'nu tanıklık etmeme yardım et.<br/>
                  Sevgini paylaşmak, barışını yaymak ve umudunu taşımak için<br/>
                  Bana güç ver. Bu günü senin için yaşayayım.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Akşam Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advent Akşam Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Rab, bu günün sonunda sana şükrediyorum.<br/>
                  Bugün bana verdiğin her nimet için minnet duyuyorum.<br/>
                  Hatalarımı affet ve eksiklerimi tamamla.<br/>
                  Bu gece dinlenirken, beni korumanın altında tut.<br/>
                  Yarın yeni bir gün olarak senin için yaşamaya devam edeyim.<br/>
                  Noel'in yaklaşmasıyla kalbim sevinçle dolsun.<br/>
                  Amin."
                </p>
              </div>
            </div>

            {/* Meryem Ana'ya Advent Duası */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meryem Ana'ya Advent Duası</h3>
              <div className="bg-red-50 rounded-xl p-6 mb-4 border border-gray-200">
                <p className="text-gray-800 leading-relaxed italic">
                  "Ey Kutsal Meryem Ana,<br/>
                  Sen İsa'yı karnında taşırken ne büyük bir umut ve sevinçle bekledin.<br/>
                  Advent zamanında, senin gibi sabırla ve imanla<br/>
                  Mesih'in gelişini beklememe yardım et.<br/>
                  Kalbimi O'nun için hazırla ve<br/>
                  Benim de İsa'yı dünyaya getirmeme yardım et.<br/>
                  Senin şefkatinle, bu kutsal zamanda manevi olarak büyümeme kılavuzluk et.<br/>
                  Amin."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Advent'te Nasıl Yaşanır?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Dua</h4>
                <p className="text-gray-700">
                  Her gün düzenli dua zamanı ayırın. Kutsal Yazılar'ı okuyun ve Advent dualarını yapın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Oruç ve Perhiz</h4>
                <p className="text-gray-700">
                  Basit yemekler yiyin, fazla tüketimden kaçının. Manevi hazırlığa odaklanın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Hayırseverlik</h4>
                <p className="text-gray-700">
                  İhtiyaç sahiplerine yardım edin. Sevgi ve şefkati pratik yapın.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Günah Çıkarma</h4>
                <p className="text-gray-700">
                  Noel'e temiz bir kalple hazırlanmak için Günah Çıkarma Sakramenti'ne katılın.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Advent Çağrısı</h3>
              <p className="text-gray-700 leading-relaxed">
                Advent, sadece Noel'i bekleme zamanı değil, aynı zamanda kalbimizi Mesih'in gelişine
                açma zamanıdır. Bu dönemde manevi olarak büyümek, günahlardan arınmak ve sevgiyi
                yaşamak için özel bir fırsat sunar. Her gün biraz daha İsa'ya yaklaşalım.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/dua/donemlere-gore"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Tüm Dönemler
          </Link>
          <Link
            href="/dua/donemlere-gore/noel"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Noel Dönemi →
          </Link>
        </div>
      </div>
    </div>
  );
}
