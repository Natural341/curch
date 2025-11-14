import Link from 'next/link';
import Image from 'next/image';

export default function RuhsalDegerlerimizPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/f9.jpeg"
            alt="Sent Antuan Bazilikası"
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
              <span className="text-white">Kilise</span>
              <span className="mx-2 text-white">/</span>
              <span className="text-yellow-300">Ruhsal Değerlerimiz</span>
            </nav>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
              Ruhsal Değerlerimiz
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-3xl drop-shadow-lg leading-relaxed">
              İman, Sevgi ve Hizmet
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-red-900 mb-4">İman ve İnanç</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sent Antuan Bazilikası cemaati olarak, Katolik inancının temel değerlerini yaşamımızın merkezine koyarız.
                İsa Mesih'in öğretilerini takip ederek, sevgi, merhamet ve adalet ilkelerine bağlı kalırız.
              </p>
            </section>

            <section className="bg-red-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-3xl font-bold text-red-900 mb-4">Sevgi ve Merhamet</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aziz Fransua'nın yolundan giderek, yoksullara, muhtaçlara ve toplumun marjinal kesimlerine hizmet etmeyi
                görev biliriz. Sevgi, ruhsal yolculuğumuzun temel taşıdır.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-red-900 mb-4">Dua ve Tefekkür</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Düzenli dua ve meditasyon pratiği, ruhsal gelişimimiz için vazgeçilmezdir. Günlük dualarımız, ayin
                katılımımız ve özel dönemlerde yaptığımız adak ve törenler, Tanrı ile olan bağımızı güçlendirir.
              </p>
            </section>

            <section className="bg-red-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-3xl font-bold text-red-900 mb-4">Topluluk ve Birlik</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cemaat olarak bir arada olmak, birbirimizi desteklemek ve ortak değerlerimizi paylaşmak, ruhani
                yaşamımızın önemli bir parçasıdır. Çeşitli cemaatlerimiz, farklı yaş grupları ve ilgi alanlarına
                hitap ederek herkesi kucaklayan bir topluluk oluşturur.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-red-900 mb-4">Hizmet ve Şahitlik</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fransisken ruhu gereği, başkalarına hizmet etmek ve İncil'in mesajını yaşayarak şahitlik etmek,
                günlük hayatımızın bir parçasıdır. Sosyal sorumluluk projeleri, hayır işleri ve topluma katkı sağlayan
                faaliyetler aracılığıyla inancımızı eylemlerimizle gösteririz.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Link href="/kilise/kutsal-kalp" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="w-16 h-16 mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Kutsal Kalp</h3>
                <p className="text-gray-700">İsa'nın Kutsal Kalbi'ne adanmış dua ve adaklar</p>
              </Link>

              <Link href="/kilise/aziz-antuana-dua" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="w-16 h-16 mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Aziz Antuan'a Dua</h3>
                <p className="text-gray-700">Padovalı Aziz Antuan'a yapılan özel dualar</p>
              </Link>

              <Link href="/kilise/hac-yolu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="w-16 h-16 mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L11 8H8L12 2M12 2L13 8H16L12 2M8 8L7 22H11L12 8M16 8L17 22H13L12 8M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Haç Yolu</h3>
                <p className="text-gray-700">İsa'nın çarmıha gerilişinin 14 durağı</p>
              </Link>

              <Link href="/kilise/fransiskenler" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="w-16 h-16 mb-3 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-2">Fransiskenler</h3>
                <p className="text-gray-700">Fransisken düzeni ve yaşam tarzı</p>
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
          <Link href="/kilise/sanat" className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
            ← Sanat
          </Link>
          <Link href="/kilise/kutsal-kalp" className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
            Kutsal Kalp →
          </Link>
        </div>
      </div>
    </div>
  );
}
