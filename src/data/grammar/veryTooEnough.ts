import type { GrammarQuestion } from '../../types';

export const veryTooEnoughQuestions: GrammarQuestion[] = [
  // --- Section 1: "Too" + Adjective (+ to infinitive) (Negative / Excessive meaning) ---
  {
    id: 1,
    type: 'fill-in-the-blank',
    sentence: "This coffee is ______ hot to drink. (too / very)",
    correctAnswers: ["too", "Too"],
    explanation: "'Too' olumsuz bir aşırılık anlamı taşır ('içilemeyecek kadar fazla'). Cümlede 'to drink' yapısı ile birleştiğinde 'too ... to' kalıbı oluşur, bu nedenle 'too' kullanılır."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "The suitcase is ______ heavy for the little boy to carry.",
    options: ["too", "enough", "very much", "so much"],
    correctAnswer: "too",
    explanation: "'Too + sıfat + for someone to do something' kalıbı 'biri için bir şeyi yapamayacak kadar aşırı...' anlamına gelir. Çocuk bavulu taşıyamayacağı için 'too' kullanılır."
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    sentence: "These shoes are ______ small for my feet; they hurt when I walk. (too / enough)",
    correctAnswers: ["too", "Too"],
    explanation: "Ayakkabılar ayağı acıtacak kadar aşırı küçük olduğu için olumsuz bir aşırılık bildiren 'too' kelimesi kullanılmalıdır."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "I cannot sleep because the music next door is ______ loud.",
    options: ["too", "enough", "too much loud", "loudly"],
    correctAnswer: "too",
    explanation: "Uyumayı engelleyecek derecede rahatsız edici bir aşırılık anlatıldığı için sıfattan önce 'too' kullanılır ('too loud')."
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    sentence: "He is ______ tired to watch the movie tonight; he is already falling asleep. (too / very)",
    correctAnswers: ["too", "Too"],
    explanation: "'Too + sıfat + to do something' yapısında, kişinin filmi izleyemeyecek kadar aşırı yorgun olduğunu belirtmek için 'too' kullanılır."
  },
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "The math exam was ______ difficult for most students to finish on time.",
    options: ["too", "enough", "so that", "such"],
    correctAnswer: "too",
    explanation: "'Too + sıfat + to infinitive' yapısı bir eylemin yapılmasını imkansız kılan aşırılığı anlatır. Sınav zamanında bitirilemeyecek kadar zor olduğu için 'too' seçilmelidir."
  },
  {
    id: 7,
    type: 'fill-in-the-blank',
    sentence: "This jacket is ______ expensive to buy. I don't have that much money. (too / enough)",
    correctAnswers: ["too", "Too"],
    explanation: "Ceketin fiyatı alınamayacak kadar aşırı pahalı olduğundan 'too expensive to buy' şeklinde 'too' kullanılır."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "It is ______ cold outside to go swimming in the sea today.",
    options: ["too", "enough cold", "cold enough", "very much"],
    correctAnswer: "too",
    explanation: "Hava denize girilemeyecek kadar soğuktur. 'Too + sıfat + to do something' (yüzmeye gidilemeyecek kadar soğuk) kalıbı gereği 'too' doğru seçenektir."
  },
  {
    id: 9,
    type: 'multiple-choice',
    sentence: "She drove ______ fast to stop safely before the red light.",
    options: ["too", "enough", "much", "very much"],
    correctAnswer: "too",
    explanation: "Kırmızı ışıktan önce güvenli şekilde duramayacak kadar aşırı hızlı sürdüğünü belirtmek için zarfın önüne 'too' getirilir ('too fast to stop')."
  },
  {
    id: 10,
    type: 'fill-in-the-blank',
    sentence: "I am ______ full to eat another slice of chocolate cake. (too / very)",
    correctAnswers: ["too", "Too"],
    explanation: "Başka bir dilim pasta daha yiyemeyecek kadar aşırı tok olunduğunu ifade etmek için 'too full to eat' yapısı kullanılır."
  },
  {
    id: 11,
    type: 'multiple-choice',
    sentence: "The river water is ______ dirty to drink without boiling it first.",
    options: ["too", "enough", "too much", "enough dirty"],
    correctAnswer: "too",
    explanation: "Nehir suyu kaynatılmadan içilemeyecek kadar kirli olduğu için sıfatın önüne olumsuz aşırılık katan 'too' getirilir."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "The top shelf is ______ high for the children to reach.",
    options: ["too", "enough", "very much", "high enough"],
    correctAnswer: "too",
    explanation: "Üst raf çocukların yetişemeyeceği kadar yüksek olduğu için 'too + high + for ... to reach' yapısı kullanılır."
  },

  // --- Section 2: "Very" + Adjective (Intensifier, no negative blocker meaning) ---
  {
    id: 13,
    type: 'fill-in-the-blank',
    sentence: "My grandfather is 80 years old, but he is still ______ active. (very / too)",
    correctAnswers: ["very", "Very"],
    explanation: "Burada olumsuz bir aşırılık veya bir engel yoktur; büyükbabanın oldukça aktif olduğu olumlu şekilde pekiştirilmektedir. Bu nedenle 'very' kullanılır."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "Thank you for the wonderful dinner! The soup was ______ tasty.",
    options: ["very", "too", "enough", "much too"],
    correctAnswer: "very",
    explanation: "Çorbanın çok lezzetli olduğu bir iltifat olarak belirtilmiştir. Olumlu bir pekiştirme için 'very' kullanılır; 'too' olumsuz aşırılık katacağı için uygunsuzdur."
  },
  {
    id: 15,
    type: 'fill-in-the-blank',
    sentence: "Istanbul is a ______ beautiful city with many historical monuments. (very / too)",
    correctAnswers: ["very", "Very"],
    explanation: "Şehrin çok güzel olduğu olumlu bir niteleme olarak ifade edilmektedir. Bir engel veya aşırılık değil, derece bildirdiği için 'very' kullanılır."
  },
  {
    id: 16,
    type: 'multiple-choice',
    sentence: "Our new English teacher is ______ kind; she always patiently answers our questions.",
    options: ["very", "too", "enough kind", "much too"],
    correctAnswer: "very",
    explanation: "Öğretmenin çok nazik olduğu olumlu bir durumdur. 'Too' istenmeyen aşırılık bildirdiği için burada sıfatı güçlendiren 'very' kullanılmalıdır."
  },
  {
    id: 17,
    type: 'fill-in-the-blank',
    sentence: "The grammar test was ______ easy, so all the students got good grades. (very / too)",
    correctAnswers: ["very", "Very"],
    explanation: "Sınavın oldukça kolay olduğunu ve herkesin iyi not aldığını belirten olumlu/nötr bir derecelendirme için 'very' uygundur."
  },
  {
    id: 18,
    type: 'multiple-choice',
    sentence: "We had a ______ good time at the summer camp last week.",
    options: ["very", "too", "enough", "too much"],
    correctAnswer: "very",
    explanation: "Kampta çok güzel vakit geçirildiği belirtilmektedir. 'Çok iyi' anlamında sıfatı derecelendirmek için 'very' kullanılır ('a very good time')."
  },
  {
    id: 19,
    type: 'multiple-choice',
    sentence: "Lucas is a ______ talented artist; his paintings are displayed in the gallery.",
    options: ["very", "too", "enough talented", "such"],
    correctAnswer: "very",
    explanation: "Sanatçının yeteneğini nitelemek ve pekiştirmek için sıfatın önünde 'very' kullanılır ('very talented')."
  },
  {
    id: 20,
    type: 'fill-in-the-blank',
    sentence: "It is a ______ cold day today, so wear your warm coat and gloves. (very / too)",
    correctAnswers: ["very", "Very"],
    explanation: "Günün oldukça soğuk olduğunu belirten basit bir niteleme yapılmıştır; 'very cold' doğru kullanımdır."
  },
  {
    id: 21,
    type: 'multiple-choice',
    sentence: "The hotel room was ______ clean and comfortable, so we enjoyed our stay.",
    options: ["very", "too", "enough clean", "much too"],
    correctAnswer: "very",
    explanation: "Odanın oldukça temiz ve konforlu olmasından duyulan memnuniyeti anlatırken olumlu derece bildiren 'very' kullanılır."
  },
  {
    id: 22,
    type: 'multiple-choice',
    sentence: "Emily was ______ happy when she heard the great news about her exam.",
    options: ["very", "too", "enough", "too much"],
    correctAnswer: "very",
    explanation: "Emily'nin 'çok mutlu' olduğunu ifade etmek için sıfattan önce 'very' kullanılır."
  },

  // --- Section 3: Adjective + "Enough" (Positive sufficiency & word order) ---
  {
    id: 23,
    type: 'multiple-choice',
    sentence: "She is ______ to reach the top shelf without standing on a chair.",
    options: ["tall enough", "enough tall", "too tall", "very tall enough"],
    correctAnswer: "tall enough",
    explanation: "'Enough' sıfatlardan ve zarflardan SONRA gelir: 'tall enough' (yeterince uzun). 'Enough tall' söz dizimi olarak yanlıştır."
  },
  {
    id: 24,
    type: 'fill-in-the-blank',
    sentence: "He is eighteen years old, so he is old ______ to get a driving licence. (enough / too)",
    correctAnswers: ["enough", "Enough"],
    explanation: "Ehliyet almak için yeterli yaşta olduğunu belirtirken, sıfattan sonra gelen 'enough' kullanılır: 'old enough'."
  },
  {
    id: 25,
    type: 'multiple-choice',
    sentence: "The weather is ______ for a pleasant walk by the lake this afternoon.",
    options: ["warm enough", "enough warm", "too warm to", "very enough"],
    correctAnswer: "warm enough",
    explanation: "'Enough' sıfatın ardından gelir. Yürüyüş için yeterince ılık olduğunu belirtmek için 'warm enough' doğru dizilimdir."
  },
  {
    id: 26,
    type: 'fill-in-the-blank',
    sentence: "Is the bath water warm ______ for the baby? (enough / very)",
    correctAnswers: ["enough", "Enough"],
    explanation: "Suyun bebek için 'yeterince sıcak' olup olmadığını sorarken sıfattan sonra 'enough' kullanılır: 'warm enough'."
  },
  {
    id: 27,
    type: 'multiple-choice',
    sentence: "The speaker spoke ______ for everyone in the auditorium to hear clearly.",
    options: ["loudly enough", "enough loudly", "too loudly to", "very enough loudly"],
    correctAnswer: "loudly enough",
    explanation: "'Enough' zarflardan da sonra gelir: 'loudly enough' (herkesin duyabileceği kadar yeterince yüksek sesle)."
  },
  {
    id: 28,
    type: 'fill-in-the-blank',
    sentence: "The meeting room is large ______ to seat forty people comfortably. (enough / too)",
    correctAnswers: ["enough", "Enough"],
    explanation: "'Yeterince geniş' anlamını vermek için 'enough' sıfatın sonrasında yer alır: 'large enough'."
  },
  {
    id: 29,
    type: 'multiple-choice',
    sentence: "Are you ______ to carry this heavy luggage up to the second floor?",
    options: ["strong enough", "enough strong", "too strong", "very strong to"],
    correctAnswer: "strong enough",
    explanation: "'Yeterince güçlü müsün?' sorusunda 'enough' sıfattan ('strong') sonra gelmelidir: 'strong enough'."
  },
  {
    id: 30,
    type: 'fill-in-the-blank',
    sentence: "The soup is cool ______ to eat now; you will not burn your mouth. (enough / too)",
    correctAnswers: ["enough", "Enough"],
    explanation: "Çorbanın içilebilecek kadar yeterince ılımış olduğunu ifade etmek için sıfattan sonra 'enough' gelir: 'cool enough'."
  },

  // --- Section 4: "Not" + Adjective + "Enough" (Negative sufficiency & word order) ---
  {
    id: 31,
    type: 'multiple-choice',
    sentence: "I cannot wear this thin jacket today because it is ______ for winter.",
    options: ["not warm enough", "not enough warm", "too not warm", "warm not enough"],
    correctAnswer: "not warm enough",
    explanation: "'Yeterince sıcak değil' derken doğru söz dizimi 'not + sıfat + enough' şeklindedir: 'not warm enough'."
  },
  {
    id: 32,
    type: 'fill-in-the-blank',
    sentence: "The coffee is not hot ______; could you please warm it up in the microwave? (enough / too)",
    correctAnswers: ["enough", "Enough"],
    explanation: "Kahvenin 'yeterince sıcak olmadığını' belirtirken olumsuzluk ve sıfattan sonra 'enough' gelir: 'not hot enough'."
  },
  {
    id: 33,
    type: 'multiple-choice',
    sentence: "We missed our train because we were ______ to the station.",
    options: ["not fast enough", "not enough fast", "enough not fast", "too not fast"],
    correctAnswer: "not fast enough",
    explanation: "Trene yetişememenin sebebi yeterince hızlı olmamaktır. Kural: 'not + sıfat + enough' -> 'not fast enough'."
  },
  {
    id: 34,
    type: 'fill-in-the-blank',
    sentence: "He did not study hard ______ to pass the driving exam on his first try. (enough / very)",
    correctAnswers: ["enough", "Enough"],
    explanation: "'Yeterince sıkı çalışmadı' demek için zarftan sonra 'enough' kullanılır: 'not study hard enough'."
  },
  {
    id: 35,
    type: 'multiple-choice',
    sentence: "This apartment is ______ for a family of four; they need at least three bedrooms.",
    options: ["not big enough", "not enough big", "enough not big", "too not big"],
    correctAnswer: "not big enough",
    explanation: "'Yeterince büyük değil' ifadesinde 'enough' sıfattan sonra gelmelidir: 'not big enough'."
  },

  // --- Section 5: "Enough" + Noun (Word order with nouns: enough BEFORE noun) ---
  {
    id: 36,
    type: 'multiple-choice',
    sentence: "I don't have ______ to buy that expensive electric bicycle.",
    options: ["enough money", "money enough", "too money", "very money"],
    correctAnswer: "enough money",
    explanation: "'Enough' isimlerden ÖNCE gelir: 'enough money' (yeterli para). 'Money enough' söz dizimi yanlıştır."
  },
  {
    id: 37,
    type: 'fill-in-the-blank',
    sentence: "Do we have ______ time to finish the report before the meeting starts? (enough / too)",
    correctAnswers: ["enough", "Enough"],
    explanation: "'Time' (zaman) bir isimdir. 'Enough' miktar yeterliliği belirtirken isimlerin ÖNÜNDE yer alır: 'enough time' (yeterli zaman)."
  },
  {
    id: 38,
    type: 'multiple-choice',
    sentence: "There aren't ______ in the classroom for all the new students.",
    options: ["enough chairs", "chairs enough", "too chairs", "very chairs"],
    correctAnswer: "enough chairs",
    explanation: "'Chairs' (sandalyeler) çoğul bir isimdir. 'Enough' isimlerden önce kullanılır: 'enough chairs' (yeterince sandalye)."
  },
  {
    id: 39,
    type: 'fill-in-the-blank',
    sentence: "She didn't get ______ sleep last night, so she feels exhausted today. (enough / very)",
    correctAnswers: ["enough", "Enough"],
    explanation: "'Sleep' burada isim (uyku) anlamındadır. İsimlerden önce 'enough' getirilir: 'enough sleep' (yeterli uyku)."
  },
  {
    id: 40,
    type: 'multiple-choice',
    sentence: "We have ______ in the kitchen to prepare lunch for our guests.",
    options: ["enough food", "food enough", "too food", "very food"],
    correctAnswer: "enough food",
    explanation: "'Food' (yiyecek) sayılamayan bir isimdir. İsimlerin önünde yeterli miktar belirtmek için 'enough' kullanılır: 'enough food'."
  },

  // --- Section 6: Contrast & Mixed Practice (Too vs Very vs Enough) ---
  {
    id: 41,
    type: 'fill-in-the-blank',
    sentence: "The music is ______ loud! Please turn it down, my head hurts. (very / too)",
    correctAnswers: ["too", "Too"],
    explanation: "Baş ağrısına sebep olduğu ve kısılması istendiği için bu durum olumsuz ve rahatsız edici bir aşırılıktır; bu nedenle 'too' kullanılır."
  },
  {
    id: 42,
    type: 'multiple-choice',
    sentence: "The puzzle was difficult, but Liam was ______ to solve it correctly.",
    options: ["clever enough", "enough clever", "too clever", "very clever to"],
    correctAnswer: "clever enough",
    explanation: "Bulmacayı çözebildiğini (başarıldığını) belirten yeterlilik durumudur. Sıfattan sonra 'enough' gelir: 'clever enough' (yeterince zeki)."
  },
  {
    id: 43,
    type: 'fill-in-the-blank',
    sentence: "He is only five years old; he is ______ young to stay at home alone. (too / very / enough)",
    correctAnswers: ["too", "Too"],
    explanation: "Evde tek başına kalamayacak kadar aşırı küçük olduğunu ('too young to stay at home alone') belirtmek için 'too' kullanılır."
  },
  {
    id: 44,
    type: 'fill-in-the-blank',
    sentence: "I really love this novel; the plot is ______ exciting and well-written. (very / too / enough)",
    correctAnswers: ["very", "Very"],
    explanation: "Romanın çok heyecan verici olduğunu olumlu bir anlamda övmek için derecelendirme zarfı 'very' kullanılır."
  },
  {
    id: 45,
    type: 'multiple-choice',
    sentence: "Which of the following sentences has the CORRECT word order?",
    options: [
      "We don't have enough time to visit the museum today.",
      "We don't have time enough to visit the museum today.",
      "She is enough old to drive a car.",
      "The room is enough big for our meeting."
    ],
    correctAnswer: "We don't have enough time to visit the museum today.",
    explanation: "'Enough' isimlerden önce ('enough time'), sıfatlardan ise sonra ('old enough', 'big enough') gelir. Bu kurala sadece 'enough time' ifadesi doğru şekilde uymaktadır."
  }
];
