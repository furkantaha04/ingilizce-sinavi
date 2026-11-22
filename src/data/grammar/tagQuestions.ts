import type { GrammarQuestion } from '../../types';

export const tagQuestionsQuestions: GrammarQuestion[] = [
  {
    id: 1,
    type: 'fill-in-the-blank',
    sentence: "You are a student at this university, ______?",
    correctAnswers: ["aren't you", "are not you", "arent you"],
    explanation: "Olumlu cümlelerde olumsuz ek soru kullanılır. 'are' yardımcı fiilinin olumsuz kısaltması 'aren't you' olur."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "She can play the violin very well, ______?",
    options: ["can't she", "can she", "doesn't she", "isn't she"],
    correctAnswer: "can't she",
    explanation: "Cümle 'can' modal fiili ile olumlu kurulmuştur. Ek soru olumsuz olmalıdır, bu yüzden 'can't she' kullanılır."
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    sentence: "David is your older brother, ______?",
    correctAnswers: ["isn't he", "is not he", "isnt he"],
    explanation: "Özne 'David' (he) ve yardımcı fiil 'is' olumlu olduğu için ek soru olumsuz 'isn't he' olur."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "They live near the city center, ______?",
    options: ["don't they", "aren't they", "do they", "didn't they"],
    correctAnswer: "don't they",
    explanation: "Geniş zamanda (Simple Present Tense) 'they' öznesi ile fiil olumlu kullanıldığında ek soruda 'don't they' kullanılır."
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    sentence: "Your sister works at a hospital, ______?",
    correctAnswers: ["doesn't she", "does not she", "doesnt she"],
    explanation: "Geniş zamanda 'she' öznesi ve olumlu fiil ('works') için ek soruda 'doesn't she' kullanılır."
  },
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "The movie was very exciting, ______?",
    options: ["wasn't it", "isn't it", "was it", "didn't it"],
    correctAnswer: "wasn't it",
    explanation: "Geçmiş zaman 'was' olumlu kullanılmıştır; film cansız tekil varlık ('it') olduğu için ek soru 'wasn't it' olur."
  },
  {
    id: 7,
    type: 'fill-in-the-blank',
    sentence: "You and Tom were at the library yesterday, ______?",
    correctAnswers: ["weren't you", "were not you", "werent you"],
    explanation: "'You and Tom' çoğul 'siz' (you) öznesidir. 'were' olumlu olduğundan ek soru 'weren't you' şeklinde olumsuz olur."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "Mark bought a new laptop last week, ______?",
    options: ["didn't he", "doesn't he", "did he", "wasn't he"],
    correctAnswer: "didn't he",
    explanation: "Cümle Simple Past Tense (geçmiş zaman) olumludur ('bought'). Ek soru 'did' yardımcı fiilinin olumsuzu olan 'didn't he' olmalıdır."
  },
  {
    id: 9,
    type: 'fill-in-the-blank',
    sentence: "You visited your grandparents last weekend, ______?",
    correctAnswers: ["didn't you", "did not you", "didnt you"],
    explanation: "Simple Past Tense olumlu cümlelerinde ek soru için 'didn't' yardımcı fiili kullanılır: 'didn't you'."
  },
  {
    id: 10,
    type: 'multiple-choice',
    sentence: "They have already finished their lunch, ______?",
    options: ["haven't they", "don't they", "have they", "didn't they"],
    correctAnswer: "haven't they",
    explanation: "Present Perfect Tense'de 'have' yardımcı fiili olumlu kullanılmıştır. Ek soru 'haven't they' olmalıdır."
  },
  {
    id: 11,
    type: 'fill-in-the-blank',
    sentence: "Emma has got a cute little puppy, ______?",
    correctAnswers: ["hasn't she", "has not she", "hasnt she"],
    explanation: "'has got' yapısında yardımcı fiil 'has' olduğu için ek soru olumsuz 'hasn't she' olur."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "The plane will arrive on time, ______?",
    options: ["won't it", "will it", "doesn't it", "isn't it"],
    correctAnswer: "won't it",
    explanation: "'will' yardımcı fiili olumlu olduğu için ek soruda olumsuz kısaltması olan 'won't it' kullanılır."
  },
  {
    id: 13,
    type: 'fill-in-the-blank',
    sentence: "You will come to my birthday party, ______?",
    correctAnswers: ["won't you", "will not you", "wont you"],
    explanation: "'will' yardımcı fiilinin olumsuz ek soru biçimi 'won't you'dur."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "We should call the doctor, ______?",
    options: ["shouldn't we", "should we", "don't we", "mustn't we"],
    correctAnswer: "shouldn't we",
    explanation: "'should' modal fiili olumludur. Olumlu cümlelerin ek sorusu olumsuz olur: 'shouldn't we'."
  },
  {
    id: 15,
    type: 'fill-in-the-blank',
    sentence: "You should brush your teeth twice a day, ______?",
    correctAnswers: ["shouldn't you", "should not you", "shouldnt you"],
    explanation: "'should' tavsiye modalı olumlu olduğunda ek soru 'shouldn't you' şeklinde olumsuz yapılır."
  },
  {
    id: 16,
    type: 'multiple-choice',
    sentence: "Passengers must wear seatbelts during takeoff, ______?",
    options: ["mustn't they", "must they", "don't they", "aren't they"],
    correctAnswer: "mustn't they",
    explanation: "'must' zorunluluk bildiren modal fiili olumlu kullanıldığında ek soru 'mustn't they' olur."
  },
  {
    id: 17,
    type: 'fill-in-the-blank',
    sentence: "We must be at the station before 8 o'clock, ______?",
    correctAnswers: ["mustn't we", "must not we", "mustnt we"],
    explanation: "'must' modal fiili olumlu olduğu için ek soruda olumsuz hali 'mustn't we' kullanılır."
  },
  {
    id: 18,
    type: 'fill-in-the-blank',
    sentence: "The children are playing in the garden, ______?",
    correctAnswers: ["aren't they", "are not they", "arent they"],
    explanation: "'The children' çoğul öznesi yerine 'they' zamiri ve 'are' fiilinin olumsuzu olan 'aren't they' gelir."
  },
  {
    id: 19,
    type: 'multiple-choice',
    sentence: "You speak French and Spanish, ______?",
    options: ["don't you", "aren't you", "do you", "can't you"],
    correctAnswer: "don't you",
    explanation: "Simple Present Tense fiili 'speak' ve özne 'you' olduğu için olumsuz ek soru 'don't you' olur."
  },
  {
    id: 20,
    type: 'fill-in-the-blank',
    sentence: "Jack was at home yesterday afternoon, ______?",
    correctAnswers: ["wasn't he", "was not he", "wasnt he"],
    explanation: "'was' geçmiş zaman fiili olumlu olduğundan ek soru 'wasn't he' şeklinde olumsuz yapılır."
  },
  {
    id: 21,
    type: 'fill-in-the-blank',
    sentence: "This soup isn't very hot, ______?",
    correctAnswers: ["is it"],
    explanation: "Cümle 'isn't' ile olumsuz olduğundan ek soru olumlu olur. 'soup' cansız tekil olduğu için 'is it' kullanılır."
  },
  {
    id: 22,
    type: 'multiple-choice',
    sentence: "They aren't coming with us tonight, ______?",
    options: ["are they", "aren't they", "do they", "will they"],
    correctAnswer: "are they",
    explanation: "Cümle olumsuz ('aren't') olduğu için ek soru olumlu olmalıdır: 'are they'."
  },
  {
    id: 23,
    type: 'fill-in-the-blank',
    sentence: "She wasn't angry with you, ______?",
    correctAnswers: ["was she"],
    explanation: "Olumsuz cümlelerde ('wasn't') ek soru olumlu yapılır: 'was she'."
  },
  {
    id: 24,
    type: 'multiple-choice',
    sentence: "You weren't asleep during the lesson, ______?",
    options: ["were you", "weren't you", "are you", "did you"],
    correctAnswer: "were you",
    explanation: "'weren't' olumsuz geçmiş zaman fiilidir; ek soru olumlu 'were you' olmalıdır."
  },
  {
    id: 25,
    type: 'fill-in-the-blank',
    sentence: "You don't like spicy food, ______?",
    correctAnswers: ["do you"],
    explanation: "Cümle 'don't' ile olumsuz yapılmıştır. Ek soru olumlu 'do you' olur."
  },
  {
    id: 26,
    type: 'multiple-choice',
    sentence: "The students don't have classes on Sunday, ______?",
    options: ["do they", "don't they", "have they", "are they"],
    correctAnswer: "do they",
    explanation: "'don't have' olumsuz geniş zaman yapısıdır. 'The students' (they) için olumlu ek soru 'do they'dir."
  },
  {
    id: 27,
    type: 'fill-in-the-blank',
    sentence: "He doesn't eat meat, ______?",
    correctAnswers: ["does he"],
    explanation: "'doesn't' yardımcı fiiliyle olumsuz kurulmuş cümlede ek soru olumlu 'does he' olur."
  },
  {
    id: 28,
    type: 'multiple-choice',
    sentence: "Lisa doesn't drink coffee in the evening, ______?",
    options: ["does she", "doesn't she", "is she", "did she"],
    correctAnswer: "does she",
    explanation: "Cümle olumsuz ('doesn't') olduğu için ek soru olumlu 'does she' olur."
  },
  {
    id: 29,
    type: 'fill-in-the-blank',
    sentence: "You didn't see the accident, ______?",
    correctAnswers: ["did you"],
    explanation: "Geçmiş zaman olumsuz cümlesinde ('didn't') ek soru olumlu 'did you' olur."
  },
  {
    id: 30,
    type: 'multiple-choice',
    sentence: "They didn't go to Paris last summer, ______?",
    options: ["did they", "didn't they", "do they", "weren't they"],
    correctAnswer: "did they",
    explanation: "Olumsuz geçmiş zaman cümlesinde yardımcı fiil 'did' olumlu olarak ek soruya geçer: 'did they'."
  },
  {
    id: 31,
    type: 'fill-in-the-blank',
    sentence: "It won't snow tomorrow, ______?",
    correctAnswers: ["will it"],
    explanation: "'won't' (will not) olumsuzdur, dolayısıyla ek soru olumlu 'will it' olur."
  },
  {
    id: 32,
    type: 'multiple-choice',
    sentence: "You won't forget to call me, ______?",
    options: ["will you", "won't you", "do you", "are you"],
    correctAnswer: "will you",
    explanation: "Gelecek zaman olumsuzu 'won't' kullanıldığında ek soru olumlu 'will you' olur."
  },
  {
    id: 33,
    type: 'fill-in-the-blank',
    sentence: "George can't swim, ______?",
    correctAnswers: ["can he"],
    explanation: "'can't' olumsuz modal fiildir. Ek soru olumlu 'can he' olur."
  },
  {
    id: 34,
    type: 'multiple-choice',
    sentence: "We can't park our car here, ______?",
    options: ["can we", "can't we", "could we", "do we"],
    correctAnswer: "can we",
    explanation: "Cümle 'can't' ile olumsuz kurulduğundan ek soru olumlu 'can we' olmalıdır."
  },
  {
    id: 35,
    type: 'fill-in-the-blank',
    sentence: "We shouldn't stay up too late tonight, ______?",
    correctAnswers: ["should we"],
    explanation: "'shouldn't' olumsuz tavsiye modalı olduğu için ek soru olumlu 'should we' olur."
  },
  {
    id: 36,
    type: 'fill-in-the-blank',
    sentence: "I am late for the meeting, ______?",
    correctAnswers: ["aren't I", "arent I", "are not I"],
    explanation: "'I am' yapısının olumsuz ek sorusu İngilizcede kural gereği istisnai olarak 'aren't I?' olur ('amn't I' kullanılmaz)."
  },
  {
    id: 37,
    type: 'multiple-choice',
    sentence: "I am right about this decision, ______?",
    options: ["aren't I", "am not I", "amn't I", "don't I"],
    correctAnswer: "aren't I",
    explanation: "'I am' ifadesiyle başlayan olumlu cümlelerde ek soru olarak özel bir kural gereği 'aren't I' kullanılır."
  },
  {
    id: 38,
    type: 'fill-in-the-blank',
    sentence: "Let's go to the cinema tonight, ______?",
    correctAnswers: ["shall we"],
    explanation: "'Let's' (hadi) ile başlayan öneri ve teklif cümlelerinde ek soru her zaman 'shall we?' olur."
  },
  {
    id: 39,
    type: 'multiple-choice',
    sentence: "Let's take a break and drink some tea, ______?",
    options: ["shall we", "will we", "don't we", "let we"],
    correctAnswer: "shall we",
    explanation: "'Let's' ile yapılan öneri cümlelerinin standart ek sorusu 'shall we?' kalıbıdır."
  },
  {
    id: 40,
    type: 'fill-in-the-blank',
    sentence: "Please open the window, ______?",
    correctAnswers: ["will you", "won't you", "wont you"],
    explanation: "Emir veya rica cümlelerinde (imperatives) dinleyiciden bir şey yapması istenirken ek soru olarak 'will you?' (veya 'won't you?') kullanılır."
  },
  {
    id: 41,
    type: 'multiple-choice',
    sentence: "Don't touch that wet paint, ______?",
    options: ["will you", "don't you", "do you", "shall you"],
    correctAnswer: "will you",
    explanation: "'Don't' ile başlayan olumsuz emir cümlelerinde ek soru kalıbı 'will you?' olur."
  },
  {
    id: 42,
    type: 'fill-in-the-blank',
    sentence: "There is an apple on the table, ______?",
    correctAnswers: ["isn't there", "is not there", "isnt there"],
    explanation: "'There is / there are' yapılarında zamir yerine 'there' kullanılır. Olumlu 'there is' ifadesinin ek sorusu 'isn't there' olur."
  },
  {
    id: 43,
    type: 'multiple-choice',
    sentence: "There were many people at the concert, ______?",
    options: ["weren't there", "were there", "weren't they", "didn't there"],
    correctAnswer: "weren't there",
    explanation: "'There were' olumlu geçmiş zaman yapısıdır. Ek soruda özne olarak 'there' korunur ve 'weren't there' kullanılır."
  },
  {
    id: 44,
    type: 'fill-in-the-blank',
    sentence: "Nobody knows the answer to this question, ______?",
    correctAnswers: ["do they"],
    explanation: "'Nobody / no one' cümleye olumsuz anlam katar, bu nedenle ek soru olumlu olur. Ek soruda 'nobody' için 'they' zamiri kullanıldığından 'do they' uygundur."
  },
  {
    id: 45,
    type: 'fill-in-the-blank',
    sentence: "Nothing can stop us now, ______?",
    correctAnswers: ["can it"],
    explanation: "'Nothing' cümleye olumsuz anlam katar, bu nedenle ek soru olumlu olur. Cansız tekil için 'it' zamiri kullanılır: 'can it'."
  }
];
