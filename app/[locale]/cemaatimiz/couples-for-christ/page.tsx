import Link from 'next/link';
import Image from 'next/image';

export default function CouplesForChristPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f7.jpeg"
            alt="Couples for Christ"
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
              <Link href="/cemaatimiz" className="text-white hover:text-yellow-300 transition-colors">Cemaatimiz</Link>
              <span className="mx-2 text-white">/</span>
              <span className="text-yellow-300">Couples for Christ</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Couples for Christ
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              Aile değerlerini güçlendiren cemaat hareketi
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-8 border border-gray-200">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="w-20 h-20 mb-4 mx-auto bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xl text-gray-600 italic">
                "Aileleri yenilemek, dünyayı yenilemektir"
              </p>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-8 mb-4">Couples for Christ Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Couples for Christ (CFC), 1981 yılında Filipinler'de kurulan, evli çiftlere ve ailelere
              yönelik uluslararası bir Katolik cemaat hareketidir. Hareket, İsa Mesih'in sevgisi ve
              öğretileriyle aileleri güçlendirmeyi, evlilik ve aile değerlerini korumayı amaçlar.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              CFC, bugün 150'den fazla ülkede milyonlarca aileye ulaşmış, dünyanın en büyük aile odaklı
              Katolik cemaat hareketlerinden biri haline gelmiştir.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-red-900 mb-3">Vizyonumuz</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Yeni İnsanlar:</strong> İsa Mesih'le kişisel ilişkiye sahip, olgun Hristiyanlar yetiştirmek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Yeni Aileler:</strong> İlahi sevgi ve değerlerle güçlendirilmiş aileler oluşturmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-3 mt-1">•</span>
                  <span><strong>Yeni Toplum:</strong> Katolik sosyal öğretisiyle toplumu dönüştürmek</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Programlarımız</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Christian Life Program (CLP)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              13 haftalık temel eğitim programımız, katılımcılara İsa Mesih ile kişisel bir ilişki kurma,
              İncil'i yaşama ve cemaat içinde hizmet etme konularında formasyon sağlar. Bu program,
              CFC'ye katılmanın ilk adımıdır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hane Toplantıları</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Her hafta küçük gruplar halinde evlerde toplanarak İncil paylaşımı yapar, birbirimizin
              yaşamlarına destek olur ve aile hayatımızdaki zorlukları birlikte aşarız.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Kids for Christ (KFC)</h4>
                <p className="text-gray-700">
                  Çocuklarımız için özel programlar düzenleyerek onların İsa ile tanışmasını ve
                  değerlerle büyümesini sağlıyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Youth for Christ (YFC)</h4>
                <p className="text-gray-700">
                  Gençlerimiz için özel formasyon ve etkinlikler düzenleyerek onların maneviyatını
                  destekliyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Singles for Christ (SFC)</h4>
                <p className="text-gray-700">
                  Bekar genç yetişkinler için özel programlarla evlilik öncesi hazırlık ve
                  kişisel gelişim sağlıyoruz.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <h4 className="font-bold text-red-900 mb-3">Handmaids of the Lord</h4>
                <p className="text-gray-700">
                  Bekar kadınlar ve dullar için özel bir hizmet ve dua topluluğu.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sent Antuan'da CFC</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sent Antuan Bazilikası'nda Couples for Christ cemaati aktif olarak faaliyet göstermektedir.
              Düzenli hane toplantıları, aylık formasyon oturumları ve yıllık rekoleksiyonlarla ailelere
              hizmet etmekteyiz.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Sosyal Hizmet</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              CFC olarak, yalnızca kendi üyelerimize değil, toplumun ihtiyacı olan kesimlerine de hizmet
              ediyoruz. Yoksul ailelere yardım, okul malzemesi desteği, gıda yardımı ve çeşitli sosyal
              projeler yürütüyoruz.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-12 mb-4">Nasıl Katılabilirsiniz?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              CFC'ye katılmak için evli bir çift olmanız gerekmektedir. İlk adım, 13 haftalık Christian
              Life Program'a (CLP) katılmaktır. Program sonunda CFC'ye tam üyelik için başvurabilirsiniz.
            </p>

            <div className="bg-red-50 rounded-xl p-6 my-8 border-l-4 border-red-900">
              <h3 className="text-xl font-bold text-red-900 mb-3">Açık Davet</h3>
              <p className="text-gray-700 leading-relaxed">
                Evliliğinizi güçlendirmek, ailenize manevi derinlik katmak ve benzer değerlere sahip
                ailelerle dostluk kurmak istiyorsanız, CFC tam size göre! Bir sonraki CLP programımız
                hakkında bilgi almak için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </article>

        {/* Call to Action */}
        <div className="bg-red-50 rounded-2xl shadow-md p-8 text-center mb-8 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ailenizi Güçlendirin</h2>
          <p className="text-lg mb-6 text-gray-700">
            Couples for Christ hakkında daha fazla bilgi almak ve bir sonraki programımıza kayıt olmak için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
          >
            İletişime Geçin
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/cemaatimiz/legion-of-mary"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-300"
          >
            ← Legion of Mary
          </Link>
          <Link
            href="/cemaatimiz/karizmatikler"
            className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
          >
            Karizmatikler →
          </Link>
        </div>
      </div>
    </div>
  );
}
