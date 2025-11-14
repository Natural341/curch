import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AzizAntuanDuaPage() {
  const t = useTranslations('stAnthonyPrayer');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/photos/StAntoine-Hero.jpg"
            alt="Aziz Antuan"
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
              Padovalı Aziz Antuan'a Dualar
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-100 max-w-2xl drop-shadow-lg leading-relaxed px-4">
              Kayıpların ve Mucizelerin Azizi
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-900 mb-6 tracking-tight font-serif">
            Aziz Antuan Kimdir?
          </h2>
          <div className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium space-y-4">
            <p>
              Padovalı Aziz Antuan (1195-1231), Fransisken rahibi, vaiz ve Kilise Doktoru'dur.
              Portekiz'de doğmuş, İtalya'nın Padova şehrinde yaşamış ve orada vefat etmiştir.
            </p>
            <p>
              Mucizevi şifalar, kayıp eşyaları bulma ve fakirlere yardım ile tanınır.
              "Kayıpların Azizi" olarak bilinir ve tüm dünyada derin bir şekilde sevilir.
            </p>
          </div>
        </div>

        {/* Prayers Section */}
        <div className="space-y-12 mb-20">
          {/* Main Prayer */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-900">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Aziz Antuan'a Ana Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="italic text-center text-xl mb-6">
                "Kutlu Aziz Antuan, kayıpların koruyucusu ve bulucu"
              </p>
              <p>
                Ey mübarek Aziz Antuan, kaybolmuş eşyaları bulan, acılara şifa veren,
                günahkarları Tanrı'ya kavuşturan sevgili aziz!
              </p>
              <p>
                Senin şefaatin sayesinde nice mucizeler gerçekleşti. Fakirlerin dostu,
                muhtaçların yardımcısı oldun. İsa Mesih'in öğretilerini vaazlarınla yaydın,
                kalpleri sevgiyle doldurdun.
              </p>
              <p>
                Sana yakarıyoruz: Kayıp eşyamızı bulmamıza yardım et, yolumuzu kaybettiğimizde
                bize rehberlik et. Hastalıklarımıza şifa, dertlerimize çare ol.
              </p>
              <p>
                Bizi günahlardan koru, iman yolunda sebat etmemizi sağla. Ailelerimizi muhafaza et,
                evlatlarımızı koru. Fakirlere ve muhtaçlara yardım etme gücünü ver bize.
              </p>
              <p className="text-center font-semibold mt-6">
                Ey Aziz Antuan, bizim için dua et, sana sığınıyoruz. Amin.
              </p>
            </div>
          </div>

          {/* Prayer for Lost Items */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Kayıplar İçin Dua
            </h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p className="italic text-center">
                (Kayıp eşya veya sevdiklerimizi ararken)
              </p>
              <p className="text-center font-semibold text-xl my-6">
                "Ey Aziz Antuan, Aziz Antuan,<br />
                Lütfen etrafına bak,<br />
                Bir şey kayıp ve bulunamıyor,<br />
                Lütfen yardım et bize."
              </p>
              <p>
                Kutlu Aziz Antuan, sen ki Tanrı'nın lütfuyla kayıp şeyleri bulursun,
                bize de yardım et. Kaybettiğimiz [eşyanın adı] bulunmasına vesile ol.
              </p>
              <p>
                Eğer bu, Tanrı'nın isteğiyse ve ruhsal iyiliğimiz için gerekiyse,
                kaybımızı geri bulmamıza yardım et.
              </p>
              <p>
                Ama en önemlisi, bizim Tanrı'yı kaybetmememiz için dua et.
                Çünkü Tanrı'yı kaybetmek, her şeyi kaybetmek demektir.
              </p>
              <p className="text-center font-semibold">
                Ey Aziz Antuan, senin aracılığınla Tanrı'ya yakarıyoruz. Amin.
              </p>
            </div>
          </div>

          {/* Responsorial Prayer */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Aziz Antuan Responsu
            </h3>
            <div className="space-y-3 text-gray-700 text-lg">
              <p className="font-semibold">R: Padovalı Aziz Antuan için dua edelim.</p>
              <p className="pl-8">C: Rabbimizin vaatlerine layık olmamızı sağla.</p>

              <p className="font-semibold mt-6">R: Dua Edelim:</p>
              <p className="pl-8">
                Tanrım, senin halkın mübarek Aziz Antuan'ın dualarıyla yardımını alır.
                Bütün ihtiyaçlarımızda onun yardımını bulabilmemizi ve ebedi kurtuluşu
                elde etmemizi sağla. Rabbimiz İsa Mesih aracılığıyla. Amin.
              </p>
            </div>
          </div>

          {/* Novena */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-md p-8 border border-red-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Aziz Antuan Novena Duası
            </h3>
            <p className="text-gray-700 mb-4 text-center">
              (13 Haziran Aziz Antuan Bayramı'ndan önce 9 gün boyunca okunur)
            </p>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Ey Padovalı Aziz Antuan, sana büyük bir güven ve sevgiyle geliyorum.
                Sen ki Tanrı'nın büyük bir dostu ve hizmetkarısın, benim için aracı ol.
              </p>
              <p>
                Senin hayatın boyunca, fakirlere, hasta olanlara, muhtaçlara ve kaybolanlara
                yardım ettin. Şimdi cennette daha da güçlü bir şekilde bizim için aracı oluyorsun.
              </p>
              <p className="font-semibold italic">
                [Burada özel isteğinizi belirtin]
              </p>
              <p>
                Ey Aziz Antuan, bu niyetimle sana yakarıyorum. Eğer bu Tanrı'nın isteğiyse
                ve ruhsal iyiliğim için gerekiyse, istediğimi bulmama yardım et.
              </p>
              <p>
                Ama her şeyden önce, bana Tanrı'yı daha çok sevmeyi ve O'na daha sadık
                olmayı öğret. Senin aracılığınla Tanrı'nın iradesini yapmayı nasip etsin.
              </p>
              <p className="text-center font-semibold">
                Babamız... Selam sana Meryem... İzzet ve şan...<br />
                Amin.
              </p>
            </div>
          </div>

          {/* Tuesday Devotion */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Salı Günü Aziz Antuan İbadeti
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Fransisken geleneğinde, her salı günü Aziz Antuan'a adanmıştır.
                Bu günde özel dualar edilir ve kiliselerimizde Aziz Antuan'a özel ibadetler düzenlenir.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mt-6">
                <h4 className="font-bold text-gray-900 mb-3">Salı Günü Yapılacaklar:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Aziz Antuan'a özel dualar edin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Fakirlere sadaka verin (Aziz Antuan ekmeği)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Kilisemizde 18:00'deki özel ibadete katılın</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-900">•</span>
                    <span>Aziz Antuan'ın hayatını ve öğretilerini okuyun</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Litany */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-900 mb-6 text-center font-serif">
              Aziz Antuan Litanyası
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Rahip: Rab, bize merhamet et.</p>
              <p className="pl-8 italic">Cemaat: Rab, bize merhamet et.</p>

              <div className="mt-4 space-y-1">
                <p className="font-semibold">Rahip:</p>
                <div className="pl-4">
                  <p>Ey mübarek Aziz Antuan, Tanrı'nın sevgili dostu,</p>
                  <p>Ey Aziz Antuan, Fransisken tarikatının süsü,</p>
                  <p>Ey Aziz Antuan, mucizelerin azizi,</p>
                  <p>Ey Aziz Antuan, kayıpların bulucu,</p>
                  <p>Ey Aziz Antuan, hastaların şifacısı,</p>
                  <p>Ey Aziz Antuan, fakirlerin dostu,</p>
                  <p>Ey Aziz Antuan, çocukların koruyucusu,</p>
                  <p>Ey Aziz Antuan, evliliklerin bekçisi,</p>
                  <p>Ey Aziz Antuan, putperestlerin nurlandırıcısı,</p>
                  <p>Ey Aziz Antuan, sapkınların korkusu,</p>
                </div>
                <p className="pl-8 italic mt-2">Cemaat: Bizim için dua et.</p>
              </div>

              <div className="mt-6 bg-white rounded-lg p-4">
                <p className="font-semibold">Rahip: Dua edelim:</p>
                <p className="mt-2 pl-4">
                  Yüce Tanrım, halkın mübarek Aziz Antuan'ın dualarıyla ebedi kurtuluşa erişsin.
                  Ona olan saygı ve sevgimiz sayesinde, ihtiyaçlarımızda yardımını bulmayı
                  ve sonsuza dek sana kavuşmayı nasip et. Rabbimiz İsa Mesih aracılığıyla. Amin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Saint's Feast Day Info */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl shadow-xl p-8 text-center text-white mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Aziz Antuan Bayramı
          </h2>
          <p className="text-xl mb-2">📅 13 Haziran</p>
          <p className="text-lg opacity-90 mb-6">
            Her yıl 13 Haziran'da Aziz Antuan'ın bayramını özel törenlerle kutlarız.
          </p>
          <Link
            href="/ayin/ozel-gunler"
            className="inline-block bg-white text-red-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Özel Günler Takvimi →
          </Link>
        </div>

        {/* Related Pages */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/dua/ozel-dualar" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Diğer Özel Dualar →
              </h3>
              <p className="text-gray-700">
                Azizlere ve özel günlere ait duaları keşfedin
              </p>
            </div>
          </Link>
          <Link href="/kilise/fransiskenler" className="group">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-red-900 transition-all duration-300">
              <h3 className="text-xl font-bold text-red-900 mb-2 group-hover:text-red-800">
                Fransiskenler →
              </h3>
              <p className="text-gray-700">
                Aziz Antuan'ın mensubu olduğu Fransisken tarikatı hakkında
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
