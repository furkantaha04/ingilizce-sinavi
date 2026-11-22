import type { GrammarQuestion } from '../../types';

export const ifClausesQuestions: GrammarQuestion[] = [
  {
    id: 1,
    type: 'fill-in-the-blank',
    sentence: "If you ______ (heat) water to 100°C, it boils.",
    correctAnswers: ["heat"],
    explanation: "Type 0 koşul cümlesi: Genel geçer bilimsel bir gerçeği ifade eder. 'If' yan cümlesinde Simple Present Tense ('heat') kullanılır."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "If baby birds are hungry, they ______ for food.",
    options: ["cry", "will cry", "cried", "are crying"],
    correctAnswer: "cry",
    explanation: "Type 0 koşul cümlesi: Doğal ve genel geçer bir davranışı anlatır. Temel cümlede Simple Present Tense ('cry') kullanılır."
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    sentence: "Ice ______ (melt) if you leave it in the sun.",
    correctAnswers: ["melts"],
    explanation: "Type 0 koşul cümlesi: Fiziksel bir doğa kuralıdır. 'Ice' sayılamayan tekil bir isim olduğu için fiil '-s' takısı alır ('melts')."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "Plants die if they ______ enough sunlight and water.",
    options: ["don't get", "won't get", "didn't get", "aren't getting"],
    correctAnswer: "don't get",
    explanation: "Type 0 koşul cümlesi: Genel bir doğa kuralını belirtir. 'If' cümleciğinde Simple Present Tense olumsuz formu olan 'don't get' kullanılır."
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    sentence: "If it ______ (rain), the grass gets wet.",
    correctAnswers: ["rains"],
    explanation: "Type 0 koşul cümlesi: Her zaman gerçekleşen doğal bir sonucu bildirir. 'It' öznesiyle geniş zamanda fiile '-s' takısı gelir ('rains')."
  },
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "If you mix blue and yellow, you ______ green.",
    options: ["get", "will get", "got", "would get"],
    correctAnswer: "get",
    explanation: "Type 0 koşul cümlesi: Renklerin karışımı değişmez bir gerçektir. Temel cümlede Simple Present Tense ('get') kullanılır."
  },
  {
    id: 7,
    type: 'fill-in-the-blank',
    sentence: "Water turns into ice if the temperature ______ (drop) below 0°C.",
    correctAnswers: ["drops"],
    explanation: "Type 0 koşul cümlesi: Bilimsel bir kuraldır. 'The temperature' (it) öznesi için Simple Present Tense kuralına göre fiil '-s' alır ('drops')."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "If you heat ice, it ______ into water.",
    options: ["turns", "will turn", "turned", "turning"],
    correctAnswer: "turns",
    explanation: "Type 0 koşul cümlesi: Bilimsel bir olgudur. Buz ısıtıldığında her zaman eriyip suya dönüşür; bu nedenle Simple Present Tense ('turns') kullanılır."
  },
  {
    id: 9,
    type: 'fill-in-the-blank',
    sentence: "If I drink coffee late at night, I ______ (not sleep) well.",
    correctAnswers: ["don't sleep", "do not sleep"],
    explanation: "Type 0 koşul cümlesi: Kişisel alışkanlık veya değişmeyen bir durumu anlatır. 'I' öznesi için geniş zaman olumsuz formu 'don't sleep' (do not sleep) kullanılır."
  },
  {
    id: 10,
    type: 'multiple-choice',
    sentence: "Wood ______ if you put it on water.",
    options: ["floats", "will float", "floated", "floating"],
    correctAnswer: "floats",
    explanation: "Type 0 koşul cümlesi: Fiziksel bir gerçektir (odun suda yüzer). 'Wood' sayılamayan tekil bir isim olduğu için 'floats' kullanılır."
  },
  {
    id: 11,
    type: 'fill-in-the-blank',
    sentence: "If you press this button, the computer ______ (turn on).",
    correctAnswers: ["turns on"],
    explanation: "Type 0 koşul cümlesi: Cihazın her zaman aynı şekilde çalışan mekanik bir işlevini açıklar. 'The computer' tekil özne olduğu için 'turns on' kullanılır."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "If you ______ a dog's tail, it bites.",
    options: ["pull", "pulls", "will pull", "pulled"],
    correctAnswer: "pull",
    explanation: "Type 0 koşul cümlesi: Genel bir nedeni ifade eder. 'You' öznesinden sonra Simple Present Tense'de fiil yalın halde ('pull') gelir."
  },
  {
    id: 13,
    type: 'fill-in-the-blank',
    sentence: "Iron rusts if it ______ (touch) water and air.",
    correctAnswers: ["touches"],
    explanation: "Type 0 koşul cümlesi: Kimyasal/doğal bir kuraldır. 'It' öznesiyle geniş zamanda fiile '-es' eklenir ('touches')."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "When you heat butter, it ______ very quickly.",
    options: ["melts", "will melt", "melted", "is melting"],
    correctAnswer: "melts",
    explanation: "Type 0 koşul cümlesi (when/if): Tereyağının ısıyla erimesi değişmez bir fiziksel durumdur. 'It' öznesiyle Simple Present Tense ('melts') kullanılır."
  },
  {
    id: 15,
    type: 'fill-in-the-blank',
    sentence: "If you ______ (not water) plants, they die.",
    correctAnswers: ["don't water", "do not water"],
    explanation: "Type 0 koşul cümlesi: Genel bir doğa kuralıdır. 'You' öznesi için Simple Present Tense olumsuz formu 'don't water' (do not water) kullanılır."
  },
  {
    id: 16,
    type: 'fill-in-the-blank',
    sentence: "If it rains tomorrow, we ______ (stay) at home.",
    correctAnswers: ["will stay", "'ll stay"],
    explanation: "Type 1 koşul cümlesi: Gelecekte gerçekleşmesi muhtemel durum. If + Simple Present yapısının ana cümlesinde 'will + V1' (will stay / 'll stay) kullanılır."
  },
  {
    id: 17,
    type: 'multiple-choice',
    sentence: "If you study hard, you ______ the exam easily.",
    options: ["will pass", "pass", "passed", "would pass"],
    correctAnswer: "will pass",
    explanation: "Type 1 koşul cümlesi: Geleceğe yönelik olası bir başarıyı bildirir. Ana cümlede 'will pass' kullanılır."
  },
  {
    id: 18,
    type: 'fill-in-the-blank',
    sentence: "If she ______ (wake up) early, she will catch the bus.",
    correctAnswers: ["wakes up"],
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'She' öznesi için fiil '-s' takısı alır ('wakes up')."
  },
  {
    id: 19,
    type: 'multiple-choice',
    sentence: "We will go to the beach tomorrow if the weather ______ sunny.",
    options: ["is", "will be", "was", "are"],
    correctAnswer: "is",
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde gelecek zaman yerine Simple Present Tense kullanılır. 'The weather' öznesi için 'is' uygundur."
  },
  {
    id: 20,
    type: 'fill-in-the-blank',
    sentence: "If you don't wear a jacket, you ______ (catch) a cold.",
    correctAnswers: ["will catch", "'ll catch"],
    explanation: "Type 1 koşul cümlesi: Bir uyarı ve gelecekteki olası bir sonuçtur. Ana cümlede 'will + V1' (will catch / 'll catch) kullanılır."
  },
  {
    id: 21,
    type: 'multiple-choice',
    sentence: "If he ______ his homework now, the teacher will be angry.",
    options: ["doesn't do", "won't do", "isn't doing", "didn't do"],
    correctAnswer: "doesn't do",
    explanation: "Type 1 koşul cümlesi: 'If' kısmında Simple Present Tense olumsuz formu kullanılır. 'He' öznesi için 'doesn't do' doğrudur."
  },
  {
    id: 22,
    type: 'fill-in-the-blank',
    sentence: "They ______ (not come) to the party if you don't invite them.",
    correctAnswers: ["won't come", "will not come"],
    explanation: "Type 1 koşul cümlesi: Geleceğe yönelik olumsuz bir sonuçtur. Ana cümlede 'won't + V1' veya 'will not + V1' kullanılır."
  },
  {
    id: 23,
    type: 'multiple-choice',
    sentence: "If I find your keys, I ______ you immediately.",
    options: ["will call", "call", "called", "would call"],
    correctAnswer: "will call",
    explanation: "Type 1 koşul cümlesi: Olası bir duruma karşılık verilen geleceğe dönük sözdür. Ana cümlede 'will call' kullanılır."
  },
  {
    id: 24,
    type: 'fill-in-the-blank',
    sentence: "If he ______ (have) enough money, he will buy a new laptop.",
    correctAnswers: ["has"],
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'He' öznesi ile 'have' fiili 'has' şeklini alır."
  },
  {
    id: 25,
    type: 'multiple-choice',
    sentence: "What ______ if you miss the morning train?",
    options: ["will you do", "do you do", "did you do", "would you do"],
    correctAnswer: "will you do",
    explanation: "Type 1 koşul cümlesi soru formu: Gelecekte gerçekleşebilecek bir durumun sonucu sorulduğu için ana cümlede 'will you do' kullanılır."
  },
  {
    id: 26,
    type: 'fill-in-the-blank',
    sentence: "If you ______ (eat) all that chocolate, you will feel sick.",
    correctAnswers: ["eat"],
    explanation: "Type 1 koşul cümlesi: 'If' cümlesinde Simple Present Tense kullanılır. 'You' öznesi için fiil yalın halde ('eat') gelir."
  },
  {
    id: 27,
    type: 'fill-in-the-blank',
    sentence: "If the train is late, we ______ (miss) our flight.",
    correctAnswers: ["will miss", "'ll miss"],
    explanation: "Type 1 koşul cümlesi: Gelecekte gerçekleşebilecek olumsuz bir sonuçtur. Ana cümlede 'will + V1' (will miss / 'll miss) kullanılır."
  },
  {
    id: 28,
    type: 'fill-in-the-blank',
    sentence: "She won't pass the driving test if she ______ (not practice) more.",
    correctAnswers: ["doesn't practice", "does not practice", "doesn't practise", "does not practise"],
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense olumsuz formu kullanılır. 'She' öznesi için 'doesn't practice' (does not practice) uygundur."
  },
  {
    id: 29,
    type: 'multiple-choice',
    sentence: "If it ______ tomorrow, we will cancel the picnic.",
    options: ["snows", "will snow", "snowed", "is snowing"],
    correctAnswer: "snows",
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'It' öznesi fiile '-s' takısı getirir ('snows')."
  },
  {
    id: 30,
    type: 'fill-in-the-blank',
    sentence: "If you help me with the dishes, I ______ (help) you with your homework.",
    correctAnswers: ["will help", "'ll help"],
    explanation: "Type 1 koşul cümlesi: Gelecek için söz verme durumudur. Ana cümlede 'will help' ('ll help) kullanılır."
  },
  {
    id: 31,
    type: 'multiple-choice',
    sentence: "I will be very surprised if Mark ______ the competition.",
    options: ["wins", "will win", "won", "is winning"],
    correctAnswer: "wins",
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'Mark' tekil şahıs olduğu için fiil '-s' alır ('wins')."
  },
  {
    id: 32,
    type: 'fill-in-the-blank',
    sentence: "If we ______ (hurry), we will catch the last bus.",
    correctAnswers: ["hurry"],
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'We' öznesi için fiil yalın kalır ('hurry')."
  },
  {
    id: 33,
    type: 'multiple-choice',
    sentence: "If you don't leave right now, you ______ late for school.",
    options: ["will be", "are", "were", "would be"],
    correctAnswer: "will be",
    explanation: "Type 1 koşul cümlesi: Gelecekte gerçekleşmesi muhtemel sonucu bildirir. Ana cümlede 'will be' kullanılır."
  },
  {
    id: 34,
    type: 'fill-in-the-blank',
    sentence: "He ______ (be) very upset if you forget his birthday.",
    correctAnswers: ["will be", "'ll be"],
    explanation: "Type 1 koşul cümlesi: Olası gelecekteki duygusal bir tepkiyi belirtir. Ana cümlede 'will be' ('ll be) kullanılır."
  },
  {
    id: 35,
    type: 'multiple-choice',
    sentence: "If you don't set an alarm, you ______ wake up on time.",
    options: ["won't", "don't", "didn't", "wouldn't"],
    correctAnswer: "won't",
    explanation: "Type 1 koşul cümlesi: Olası gelecekteki olumsuz bir sonucu belirtir. Ana cümlede 'won't + V1' kullanılır."
  },
  {
    id: 36,
    type: 'fill-in-the-blank',
    sentence: "If you ______ (not listen) to the instructions, you will make a mistake.",
    correctAnswers: ["don't listen", "do not listen"],
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde geniş zamanın olumsuz hali kullanılır. 'You' öznesi için 'don't listen' (do not listen) doğrudur."
  },
  {
    id: 37,
    type: 'multiple-choice',
    sentence: "If Sarah ______ free this weekend, she will visit her grandparents.",
    options: ["is", "will be", "was", "be"],
    correctAnswer: "is",
    explanation: "Type 1 koşul cümlesi: 'If' cümlesinde 'to be' fiili geniş zamanda tekil özne ('Sarah') için 'is' olur."
  },
  {
    id: 38,
    type: 'fill-in-the-blank',
    sentence: "We ______ (go) for a walk if the rain stops.",
    correctAnswers: ["will go", "'ll go", "can go"],
    explanation: "Type 1 koşul cümlesi: Koşula bağlı gelecekteki olası bir eylemdir. Ana cümlede 'will go' ('ll go) veya modal olarak 'can go' kullanılır."
  },
  {
    id: 39,
    type: 'multiple-choice',
    sentence: "You won't get better if you ______ your medicine.",
    options: ["don't take", "won't take", "didn't take", "aren't taking"],
    correctAnswer: "don't take",
    explanation: "Type 1 koşul cümlesi: 'If' yan cümlesinde Simple Present Tense kullanılır. 'You' öznesi olumsuz geniş zamanda 'don't take' alır."
  },
  {
    id: 40,
    type: 'fill-in-the-blank',
    sentence: "If the shop ______ (be) closed, we will go somewhere else.",
    correctAnswers: ["is"],
    explanation: "Type 1 koşul cümlesi: 'If' cümlesinde 'be' fiili tekil özne ('the shop') için Simple Present Tense'de 'is' şeklini alır."
  },
  {
    id: 41,
    type: 'multiple-choice',
    sentence: "If you don't sleep well tonight, you ______ tired at work tomorrow.",
    options: ["will feel", "feel", "felt", "would feel"],
    correctAnswer: "will feel",
    explanation: "Type 1 koşul cümlesi: Geleceğe dönük olası bir sonucu belirtir. Ana cümlede 'will + V1' ('will feel') kullanılır."
  },
  {
    id: 42,
    type: 'fill-in-the-blank',
    sentence: "I ______ (send) you an email if I get the job.",
    correctAnswers: ["will send", "'ll send"],
    explanation: "Type 1 koşul cümlesi: Geleceğe dair bir söz veya niyet bildirir. Ana cümlede 'will send' ('ll send) kullanılır."
  },
  {
    id: 43,
    type: 'fill-in-the-blank',
    sentence: "If she doesn't call me tonight, I ______ (call) her tomorrow.",
    correctAnswers: ["will call", "'ll call"],
    explanation: "Type 1 koşul cümlesi: Gelecekte gerçekleşecek planlanan bir eylemi ifade eder. Ana cümlede 'will call' ('ll call) kullanılır."
  },
  {
    id: 44,
    type: 'fill-in-the-blank',
    sentence: "If the traffic is heavy, we ______ (arrive) late.",
    correctAnswers: ["will arrive", "'ll arrive"],
    explanation: "Type 1 koşul cümlesi: Olası bir geleceğin sonucudur. Ana cümlede 'will arrive' ('ll arrive) kullanılır."
  },
  {
    id: 45,
    type: 'multiple-choice',
    sentence: "If you practice every day, your English ______ much better.",
    options: ["will become", "become", "became", "would become"],
    correctAnswer: "will become",
    explanation: "Type 1 koşul cümlesi: Gelecekte gerçekleşmesi beklenen olumlu bir gelişmeyi bildirir. Ana cümlede 'will become' kullanılır."
  }
];
