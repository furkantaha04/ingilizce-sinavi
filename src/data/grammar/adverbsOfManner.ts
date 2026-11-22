import type { GrammarQuestion } from '../../types';

export const adverbsOfMannerQuestions: GrammarQuestion[] = [
  {
    id: 1,
    type: 'fill-in-the-blank',
    sentence: "She sings ______. (beautiful)",
    correctAnswers: ["beautifully"],
    explanation: "Sıfatların sonuna '-ly' eklenerek zarf yapılır. 'beautiful' → 'beautifully'. Zarf, fiilin nasıl yapıldığını belirtir."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "He drives very ______ when the roads are icy.",
    options: ["careful", "carefully", "careless", "caring"],
    correctAnswer: "carefully",
    explanation: "'Drive' (araba sürmek) fiilinin nasıl yapıldığını belirtmek için durum zarfı kullanılır. Sıfat olan 'careful' kelimesine '-ly' eklenerek 'carefully' zarfı elde edilir."
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    sentence: "My father can speak Spanish very ______. (good)",
    correctAnswers: ["well"],
    explanation: "'Good' sıfatı düzensizdir. Zarf hali '-ly' almaz; tamamen değişerek 'well' olur."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "Cheetahs can run incredibly ______ across the savannah.",
    options: ["fastly", "fast", "faster", "fastest"],
    correctAnswer: "fast",
    explanation: "'Fast' kelimesi düzensiz bir zarftır; hem sıfat hem de zarf hali aynıdır ('fast'). İngilizcede 'fastly' şeklinde bir kelime yoktur."
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    sentence: "The students studied ______ to pass their final exams. (hard)",
    correctAnswers: ["hard"],
    explanation: "'Hard' düzensiz bir zarftır ve biçimi değişmez ('hard' → 'hard'). 'Çok / sıkı çalışmak' anlamında 'study hard' kullanılır. 'Hardly' ise 'neredeyse hiç' anlamına gelir."
  },
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "David was so exhausted that he could ______ keep his eyes open.",
    options: ["hard", "hardly", "hardish", "hardness"],
    correctAnswer: "hardly",
    explanation: "'Hardly' bir sıklık/derece zarfıdır ve 'neredeyse hiç / güçlükle' anlamına gelir. 'Hard' ise 'sıkı/zorlu' demektir. Cümlede 'gözlerini neredeyse hiç açık tutamıyordu' anlamı hedeflendiği için 'hardly' doğrudur."
  },
  {
    id: 7,
    type: 'fill-in-the-blank',
    sentence: "The children were playing ______ in the garden. (happy)",
    correctAnswers: ["happily"],
    explanation: "Sessiz harf + '-y' ile biten sıfatlar zarf yapılırken 'y' harfi düşer ve '-ily' eklenir: 'happy' → 'happily'."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "Because she prepared well, she solved the math puzzle ______.",
    options: ["easy", "easily", "easiness", "easier"],
    correctAnswer: "easily",
    explanation: "'Solve' (çözmek) eylemini nitelemek için durum zarfı gerekir. Sonu '-y' ile biten 'easy' sıfatı 'easily' (kolayca) zarfına dönüşür."
  },
  {
    id: 9,
    type: 'fill-in-the-blank',
    sentence: "The teacher explained the rules ______ so everyone understood. (simple)",
    correctAnswers: ["simply"],
    explanation: "Sonu '-le' ile biten sıfatlarda '-e' harfi düşer ve yerine '-y' gelir: 'simple' → 'simply' (basitçe, sade bir şekilde)."
  },
  {
    id: 10,
    type: 'multiple-choice',
    sentence: "The nurse picked up the newborn baby very ______.",
    options: ["gentle", "gently", "gentleness", "gentily"],
    correctAnswer: "gently",
    explanation: "'Gentle' (nazik) sıfatı '-le' ile bittiği için '-e' düşer ve '-y' gelerek 'gently' (nazikçe) zarfı oluşturulur."
  },
  {
    id: 11,
    type: 'fill-in-the-blank',
    sentence: "The prices increased ______ during the winter months. (dramatic)",
    correctAnswers: ["dramatically"],
    explanation: "Sonu '-ic' ile biten sıfatlar zarf yapılırken sonlarına '-ally' eklenir: 'dramatic' → 'dramatically' (çarpıcı bir şekilde, büyük ölçüde)."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "The sliding doors at the supermarket open ______ when you approach.",
    options: ["automatic", "automatically", "automaticly", "automatical"],
    correctAnswer: "automatically",
    explanation: "'-ic' ile biten sıfatlara zarf yapılırken '-ally' eklenir: 'automatic' → 'automatically' (otomatik olarak). 'Automaticly' şeklindeki yazım yanlıştır."
  },
  {
    id: 13,
    type: 'fill-in-the-blank',
    sentence: "We woke up ______ to catch the first train to London. (early)",
    correctAnswers: ["early"],
    explanation: "'Early' (erken) kelimesi düzensizdir; hem sıfat hem de zarf hali aynıdır ve ek almaz: 'early' → 'early'."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "Tom arrived ______ for the meeting because of heavy traffic.",
    options: ["late", "lately", "latelier", "latish"],
    correctAnswer: "late",
    explanation: "'Late' hem sıfat hem de zarftır ('geç' anlamında). 'Lately' ise 'son zamanlarda' anlamına gelen farklı bir zaman zarfıdır. 'Toplantıya geç geldi' ifadesi için 'late' kullanılır."
  },
  {
    id: 15,
    type: 'fill-in-the-blank',
    sentence: "Please speak ______ in the library; people are studying. (quiet)",
    correctAnswers: ["quietly"],
    explanation: "'Speak' fiilinin nasıl yapılacağını anlatmak için durum zarfı kullanılır. Sıfat 'quiet' sonuna '-ly' alarak 'quietly' (sessizce) olur."
  },
  {
    id: 16,
    type: 'multiple-choice',
    sentence: "Turtles move very ______ on land.",
    options: ["slow", "slowly", "slowness", "slowful"],
    correctAnswer: "slowly",
    explanation: "'Move' (hareket etmek) fiilini nitelemek için 'slow' (yavaş) sıfatına '-ly' eklenerek durum zarfı olan 'slowly' (yavaşça) kullanılır."
  },
  {
    id: 17,
    type: 'fill-in-the-blank',
    sentence: "The waiter smiled and answered our questions ______. (polite)",
    correctAnswers: ["politely"],
    explanation: "'Polite' (kibar) sıfatının sonuna '-ly' eklenerek 'politely' (kibarca / nazik bir şekilde) zarfı yapılır."
  },
  {
    id: 18,
    type: 'multiple-choice',
    sentence: "The manager shouted ______ at the staff after the big mistake.",
    options: ["angry", "angrily", "angerly", "angriness"],
    correctAnswer: "angrily",
    explanation: "'-y' ile biten 'angry' sıfatı zarf yapılırken 'y' harfi 'i'ye dönüşür: 'angrily' (kızgınlıkla, öfkeyle)."
  },
  {
    id: 19,
    type: 'fill-in-the-blank',
    sentence: "The music was playing so ______ that the windows were shaking. (loud)",
    correctAnswers: ["loudly"],
    explanation: "'Play' fiilinin nasıl gerçekleştiğini belirtmek için 'loud' (yüksek sesli) sıfatı 'loudly' (yüksek sesle) zarfına dönüştürülür."
  },
  {
    id: 20,
    type: 'multiple-choice',
    sentence: "The eagle flew ______ in the sky above the mountains.",
    options: ["high", "highly", "higherly", "highness"],
    correctAnswer: "high",
    explanation: "Fiziksel olarak 'yüksekte / yükseğe' anlamında 'high' hem sıfattır hem zarftır ('flew high'). 'Highly' ise soyut durumlarda 'oldukça, son derece' anlamında derece zarfıdır (örn: 'highly recommended')."
  },
  {
    id: 21,
    type: 'fill-in-the-blank',
    sentence: "Our basketball team played ______ and lost the match. (bad)",
    correctAnswers: ["badly"],
    explanation: "'Bad' (kötü) sıfatına '-ly' eklenerek 'badly' (kötü bir şekilde) zarfı yapılır. 'Played' eylemini niteler."
  },
  {
    id: 22,
    type: 'multiple-choice',
    sentence: "Maria lived in Germany for five years, so she speaks German ______.",
    options: ["fluent", "fluently", "fluentness", "fluing"],
    correctAnswer: "fluently",
    explanation: "'Speak' (konuşmak) eyleminin nasıl yapıldığını belirtmek için 'fluent' sıfatına '-ly' getirilerek 'fluently' (akıcı bir şekilde) zarfı kullanılır."
  },
  {
    id: 23,
    type: 'fill-in-the-blank',
    sentence: "It started to rain ______ while we were walking home. (heavy)",
    correctAnswers: ["heavily"],
    explanation: "Sessiz harf + '-y' ile biten 'heavy' sıfatı zarf yapılırken 'y' düşer ve '-ily' gelir: 'heavily' (şiddetle / yoğun bir şekilde)."
  },
  {
    id: 24,
    type: 'multiple-choice',
    sentence: "I am ______ sorry for breaking your favorite coffee mug.",
    options: ["terrible", "terribly", "terribleness", "terriblily"],
    correctAnswer: "terribly",
    explanation: "Sonu '-le' ile biten 'terrible' sıfatında '-e' düşer ve yerine '-y' gelir: 'terribly' (son derece / çok)."
  },
  {
    id: 25,
    type: 'fill-in-the-blank',
    sentence: "Can you speak more ______, please? I cannot hear you well. (clear)",
    correctAnswers: ["clearly"],
    explanation: "'Clear' (açık, net) sıfatının sonuna '-ly' eklenerek 'clearly' (açıkça / net bir biçimde) zarfı türetilir."
  },
  {
    id: 26,
    type: 'multiple-choice',
    sentence: "The soup smells ______, but the chef prepared it ______.",
    options: ["delicious / carelessly", "deliciously / careful", "delicious / careless", "deliciously / carelessly"],
    correctAnswer: "delicious / carelessly",
    explanation: "'Smell' bir duyu (bağlama) fiilidir ve ardından sıfat gelir ('delicious'). 'Prepared' ise normal bir eylem fiilidir ve durum zarfı ile nitelenir ('carelessly')."
  },
  {
    id: 27,
    type: 'fill-in-the-blank',
    sentence: "The passengers waited ______ for the delayed flight. (patient)",
    correctAnswers: ["patiently"],
    explanation: "'Patient' (sabırlı) sıfatından durum zarfı üretmek için '-ly' eklenir: 'patiently' (sabırla / sabırlı bir şekilde)."
  },
  {
    id: 28,
    type: 'multiple-choice',
    sentence: "He ______ knows anyone in this city because he moved here yesterday.",
    options: ["hardly", "hard", "harder", "hardness"],
    correctAnswer: "hardly",
    explanation: "'Hardly' olumsuz anlam taşıyan bir zarftır ve 'neredeyse hiç' demektir. 'Hard' ise 'sıkı/yoğun' anlamına gelir. Şehirde 'neredeyse hiç kimseyi tanımıyor' demek için 'hardly' uygundur."
  },
  {
    id: 29,
    type: 'fill-in-the-blank',
    sentence: "The cat stretched and lay ______ on the warm sofa. (lazy)",
    correctAnswers: ["lazily"],
    explanation: "'-y' ile biten 'lazy' sıfatı zarf yapılırken 'y' harfi 'i'ye dönüşür ve '-ly' eklenir: 'lazily' (tembelce / tembel bir biçimde)."
  },
  {
    id: 30,
    type: 'multiple-choice',
    sentence: "Emma is a ______ tennis player, and she plays ______ every weekend.",
    options: ["good / well", "well / good", "good / goodly", "well / well"],
    correctAnswer: "good / well",
    explanation: "'Player' ismini sıfat niteler ('good player'). 'Plays' fiilinin nasıl yapıldığını ise durum zarfı niteler ('plays well')."
  },
  {
    id: 31,
    type: 'fill-in-the-blank',
    sentence: "The guests sat ______ in the large leather armchairs. (comfortable)",
    correctAnswers: ["comfortably"],
    explanation: "Sonu '-le' ile biten 'comfortable' sıfatında '-e' yerine '-y' gelir: 'comfortably' (rahatça / konforlu bir biçimde)."
  },
  {
    id: 32,
    type: 'multiple-choice',
    sentence: "The crowd cheered ______ when the team scored the winning goal.",
    options: ["enthusiastic", "enthusiastically", "enthusiasticly", "enthusiasm"],
    correctAnswer: "enthusiastically",
    explanation: "Sonu '-ic' ile biten 'enthusiastic' sıfatına zarf yapılırken '-ally' takısı eklenir: 'enthusiastically' (coşkuyla / heyecanla)."
  },
  {
    id: 33,
    type: 'fill-in-the-blank',
    sentence: "The ducks splashed ______ in the pond. (noisy)",
    correctAnswers: ["noisily"],
    explanation: "'-y' ile biten 'noisy' (gürültülü) sıfatında 'y' düşer ve '-ily' gelir: 'noisily' (gürültüyle)."
  },
  {
    id: 34,
    type: 'multiple-choice',
    sentence: "If you want to become a successful doctor, you must work ______.",
    options: ["hard", "hardly", "hardy", "hardful"],
    correctAnswer: "hard",
    explanation: "'Çok / gayretle çalışmak' anlamında 'work hard' kullanılır. 'Hard' düzensiz bir zarftır ve ek almaz. 'Hardly' ise 'neredeyse hiç' demektir."
  },
  {
    id: 35,
    type: 'fill-in-the-blank',
    sentence: "In an emergency, you should always act ______. (calm)",
    correctAnswers: ["calmly"],
    explanation: "'Calm' (sakin) sıfatına '-ly' getirilerek 'calmly' (sakince / sakin bir şekilde) zarfı yapılır."
  },
  {
    id: 36,
    type: 'fill-in-the-blank',
    sentence: "The artist painted the portrait very ______. (careful)",
    correctAnswers: ["carefully"],
    explanation: "'Careful' (dikkatli) sıfatının sonuna '-ly' eklenerek 'carefully' (dikkatlice) durum zarfı oluşturulur."
  },
  {
    id: 37,
    type: 'fill-in-the-blank',
    sentence: "Wear your helmet so you can ride your bicycle ______. (safe)",
    correctAnswers: ["safely"],
    explanation: "'Safe' (güvenli) sıfatına '-ly' eklenerek 'safely' (güvenli bir şekilde / güvenle) zarfı oluşturulur."
  },
  {
    id: 38,
    type: 'multiple-choice',
    sentence: "She looks ______ today, and she smiled ______ at everyone.",
    options: ["happy / happily", "happily / happy", "happily / happily", "happy / happy"],
    correctAnswer: "happy / happily",
    explanation: "'Look' fiili burada 'görünmek' anlamında durum bildiren bağlayıcı bir fiildir ve sıfatla kullanılır ('looks happy'). 'Smiled' (gülümsedi) ise eylem fiili olduğu için zarfla nitelenir ('smiled happily')."
  },
  {
    id: 39,
    type: 'fill-in-the-blank',
    sentence: "Finish your breakfast ______ or you will miss the school bus. (quick)",
    correctAnswers: ["quickly"],
    explanation: "'Quick' (hızlı, çabuk) sıfatının sonuna '-ly' getirilerek 'quickly' (hızlıca / çabucak) zarfı oluşturulur."
  },
  {
    id: 40,
    type: 'multiple-choice',
    sentence: "I have ______ finished reading this three-hundred-page book.",
    options: ["near", "nearly", "nearing", "nearlyness"],
    correctAnswer: "nearly",
    explanation: "'Nearly', 'neredeyse / hemen hemen' anlamına gelir ve eylemin tamamlanmak üzere olduğunu gösterir. 'Near' ise 'yakın' demektir."
  },
  {
    id: 41,
    type: 'fill-in-the-blank',
    sentence: "They planned the surprise birthday party ______. (secret)",
    correctAnswers: ["secretly"],
    explanation: "'Secret' (gizli) sıfatına '-ly' eklenerek 'secretly' (gizlice / gizli bir biçimde) durum zarfı yapılır."
  },
  {
    id: 42,
    type: 'fill-in-the-blank',
    sentence: "She ran ______ to catch the bus before it left. (fast)",
    correctAnswers: ["fast"],
    explanation: "'Fast' düzensiz bir zarftır. Sıfat ve zarf biçimi aynıdır ('fast' → 'fast'). İngilizcede 'fastly' diye bir kelime yoktur."
  },
  {
    id: 43,
    type: 'fill-in-the-blank',
    sentence: "The mother spoke ______ so she wouldn't wake the sleeping baby. (soft)",
    correctAnswers: ["softly"],
    explanation: "'Soft' (yumuşak, alçak sesli) sıfatına '-ly' eklenerek 'softly' (alçak sesle / usulca) zarfı elde edilir."
  },
  {
    id: 44,
    type: 'multiple-choice',
    sentence: "Look at the dark clouds; it will ______ rain this afternoon.",
    options: ["probable", "probably", "probabily", "probableness"],
    correctAnswer: "probably",
    explanation: "Sonu '-le' ile biten 'probable' sıfatı zarf yapılırken '-le' yerine '-ly' gelir: 'probably' (büyük olasılıkla, muhtemelen)."
  },
  {
    id: 45,
    type: 'fill-in-the-blank',
    sentence: "The researchers proved their theory ______. (scientific)",
    correctAnswers: ["scientifically"],
    explanation: "Sonu '-ic' ile biten sıfatlara zarf yapılırken '-ally' takısı gelir: 'scientific' → 'scientifically' (bilimsel olarak)."
  }
];
