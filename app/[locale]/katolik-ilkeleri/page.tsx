import Link from 'next/link';

export default function KatolikIlkeleriPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link href="/" className="hover:text-yellow-300">Ana Sayfa</Link>
            <span className="mx-2">/</span>
            <span className="text-yellow-300">Katolik İlkeleri</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Katolik İlkeleri</h1>
          <p className="text-xl text-gray-100">
            İnancımızın temelleri ve yaşam ilkelerimiz
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Katolik Kilisesi\'nin temel öğretileri ve inanç ilkeleri
          </p>
        </div>

        {/* Teslis */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">☨</div>
            <h2 className="text-3xl font-bold text-red-900">Teslis (Kutsal Üçleme)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Katolik inancının temelinde, tek Tanrı\'nın üç kişide var olduğuna inanç yatar: Baba, Oğul ve Kutsal Ruh.
            Bu üç kişi, tek bir ilahi doğayı paylaşır ve birbirinden ayrılmaz bir bütündür.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-800 mr-3 text-xl">•</span>
              <span className="text-gray-700"><strong>Baba:</strong> Yaratıcı, her şeyin kaynağı</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-800 mr-3 text-xl">•</span>
              <span className="text-gray-700"><strong>Oğul (İsa Mesih):</strong> İnsanlığın kurtuluşu için bedene bürünen Tanrı</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-800 mr-3 text-xl">•</span>
              <span className="text-gray-700"><strong>Kutsal Ruh:</strong> İnananlara güç ve rehberlik veren ilahi varlık</span>
            </li>
          </ul>
        </article>

        {/* İsa Mesih */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">✞</div>
            <h2 className="text-3xl font-bold text-red-900">İsa Mesih</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            İsa Mesih, Tanrı\'nın Oğlu olarak insanlığın kurtuluşu için dünyaya gelmiştir. O, hem tamamen Tanrı
            hem de tamamen insandır. İsa\'nın öğretileri, çarmıha gerilişi, ölümü ve dirilişi, Katolik inancının merkezindedir.
          </p>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-gray-800 italic">
              "Ben yol, gerçek ve yaşamım. Benim aracılığım olmadan kimse Baba\'ya gelemez." - Yuhanna 14:6
            </p>
          </div>
        </article>

        {/* Kilise */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">⛪</div>
            <h2 className="text-3xl font-bold text-red-900">Kilise (Ecclesia)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kilise, İsa Mesih tarafından kurulan ve Kutsal Ruh tarafından yönlendirilen inananların topluluğudur.
            Katolik Kilisesi, Aziz Petrus\'tan bu yana kesintisiz bir apostolik süreklilikle bugüne ulaşmıştır.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Kilise, Tanrı\'nın halkının bir araya geldiği, inancın paylaşıldığı ve sakramentlerin verildiği kutsal bir topluluktur.
          </p>
        </article>

        {/* Yedi Sakrament */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🕊️</div>
            <h2 className="text-3xl font-bold text-red-900">Yedi Sakrament</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sakramentler, İsa Mesih tarafından kiliseye verilen ve Tanrı\'nın lütfunun görünür işaretleridir:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold text-red-900 mb-2">1. Vaftiz</h4>
              <p className="text-gray-700 text-sm">Hristiyan yaşamının başlangıcı, günahtan arınma</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold text-yellow-900 mb-2">2. Firmation (Mürsel)</h4>
              <p className="text-gray-700 text-sm">Kutsal Ruh\'un armağanlarıyla güçlendirme</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">3. Ökaristiya (Komünyon)</h4>
              <p className="text-gray-700 text-sm">İsa\'nın bedeni ve kanı ile birleşme</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-green-900 mb-2">4. Tövbe (İtiraf)</h4>
              <p className="text-gray-700 text-sm">Günahların bağışlanması ve barışma</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-purple-900 mb-2">5. Hastaların Yağlanması</h4>
              <p className="text-gray-700 text-sm">Hastalık ve ölüm anında teselli ve güç</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-bold text-pink-900 mb-2">6. Kutsal Rütbe</h4>
              <p className="text-gray-700 text-sm">Rahiplik hizmetine adanma</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-bold text-indigo-900 mb-2">7. Evlilik</h4>
              <p className="text-gray-700 text-sm">Kadın ve erkeğin kutsal birliği</p>
            </div>
          </div>
        </article>

        {/* On Emir */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">📜</div>
            <h2 className="text-3xl font-bold text-red-900">On Emir</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanrı\'nın Musa\'ya Sina Dağı\'nda verdiği on emir, ahlaki yaşamın temelini oluşturur:
          </p>
          <ol className="space-y-3">
            {[
              'Ben senin Tanrın\'ım, benden başka tanrın olmayacak',
              'Tanrı\'nın adını boş yere anmayacaksın',
              'Pazar gününü kutsal sayacaksın',
              'Anne ve babana saygı göstereceksin',
              'Adam öldürmeyeceksin',
              'Zina etmeyeceksin',
              'Çalmayacaksın',
              'Yalan yere şahitlik etmeyeceksin',
              'Komşunun karısına göz dikmeyeceksin',
              'Komşunun malına göz dikmeyeceksin'
            ].map((emir, index) => (
              <li key={index} className="flex items-start">
                <span className="font-bold text-red-900 mr-3 min-w-[2rem]">{index + 1}.</span>
                <span className="text-gray-700">{emir}</span>
              </li>
            ))}
          </ol>
        </article>

        {/* Sevgi Emri */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">❤️</div>
            <h2 className="text-3xl font-bold text-red-900">En Büyük Emir: Sevgi</h2>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-6 mb-4">
            <p className="text-gray-800 leading-relaxed italic mb-4">
              "Tanrın Rab\'bi bütün kalbin, bütün canın ve bütün aklınla seveceksin. İşte ilk ve en önemli buyruk budur.
              İkincisi de ona benzer: Komşunu kendin gibi seveceksin."
            </p>
            <p className="text-gray-600 text-right">- Matta 22:37-39</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            İsa, tüm yasayı ve peygamberlerin öğretilerini bu iki emre özetlemiştir. Tanrı\'ya ve komşumuza sevgi,
            Hristiyan yaşamının özüdür.
          </p>
        </article>

        {/* Meryem Ana */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🌹</div>
            <h2 className="text-3xl font-bold text-red-900">Meryem Ana</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meryem Ana, Tanrı\'nın Annesi olarak Katolik inancında özel bir yere sahiptir. O, İsa\'yı dünyaya getiren
            ve O\'nun hizmetinde her zaman yanında olan kutsal bir kadındır.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meryem Ana\'ya duyulan saygı, onun Tanrı\'nın lütfuyla tertemiz kaldığına ve özel bir şekilde seçildiğine
            olan inançtan kaynaklanır. İnanlar, Meryem Ana\'ya dualar ederek onun şefaatini dilerler.
          </p>
        </article>

        {/* Ebedi Hayat */}
        <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🌟</div>
            <h2 className="text-3xl font-bold text-red-900">Ebedi Hayat</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Katolik inancına göre, ölüm yaşamın sonu değil, ebedi yaşama geçiştir. İnananlar, İsa Mesih\'in dirilişine
            iman ederek kendi dirilişlerine de inanırlar.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">☀️</div>
              <h4 className="font-bold text-yellow-900 mb-2">Cennet</h4>
              <p className="text-gray-700 text-sm">Tanrı ile ebedi birlik</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <h4 className="font-bold text-orange-900 mb-2">Araf</h4>
              <p className="text-gray-700 text-sm">Arınma ve hazırlık</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⚫</div>
              <h4 className="font-bold text-gray-900 mb-2">Cehennem</h4>
              <p className="text-gray-700 text-sm">Tanrı\'dan ayrılık</p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-2xl shadow-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Daha Fazla Öğrenin</h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
            Katolik inancı hakkında daha fazla bilgi edinmek veya sorularınız için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-white hover:bg-gray-100 text-red-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/ayin/saatleri"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-white"
            >
              Ayin Saatleri
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
