import type { GrammarQuestion } from '../../types';

export const comparativesQuantifiersQuestions: GrammarQuestion[] = [
  // ==========================================
  // SECTION 1: COMPARATIVES (Questions 1 - 12)
  // ==========================================

  // Short Adjectives (-er)
  {
    id: 1,
    type: 'fill-in-the-blank',
    sentence: "Tom is ______ (tall) than his brother David.",
    correctAnswers: ["taller", "Taller"],
    explanation: "Tek heceli kısa sıfatlarda karşılaştırma (comparative) yapılırken sıfatın sonuna '-er' takısı eklenir: 'tall' → 'taller'."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "An elephant is ______ than a horse.",
    options: ["bigger", "more big", "biggest", "biger"],
    correctAnswer: "bigger",
    explanation: "Tek heceli sıfatlarda 'sessiz-sesli-sessiz' harf dizilimi varsa son sessiz harf çift yazılır ve ardından '-er' eklenir: 'big' → 'bigger'."
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    sentence: "She looks much ______ (happy) today than she was yesterday.",
    correctAnswers: ["happier", "Happier"],
    explanation: "İki heceli ve sonu '-y' ile biten sıfatlarda '-y' harfi düşer ve yerine '-ier' gelir: 'happy' → 'happier'."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "Planes are ______ than trains.",
    options: ["faster", "more fast", "fastest", "as fast"],
    correctAnswer: "faster",
    explanation: "'Fast' tek heceli kısa bir sıfattır ve karşılaştırma yapılırken sonuna '-er' alır: 'faster'."
  },
  {
    id: 5,
    type: 'fill-in-the-blank',
    sentence: "This English exam was ______ (easy) than the previous one.",
    correctAnswers: ["easier", "Easier"],
    explanation: "Sonu '-y' ile biten sıfatlarda karşılaştırma yapılırken 'y' harfi 'i'ye dönüşür ve '-er' eklenir: 'easy' → 'easier'."
  },

  // Long Adjectives (more + adjective)
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "A sports car is usually ______ than a bicycle.",
    options: ["more expensive", "expensiver", "most expensive", "as expensive"],
    correctAnswer: "more expensive",
    explanation: "İki veya daha fazla heceli uzun sıfatların comparative halinde sıfatın önüne 'more' getirilir: 'more expensive'."
  },
  {
    id: 7,
    type: 'fill-in-the-blank',
    sentence: "Lions are ______ (dangerous) than rabbits.",
    correctAnswers: ["more dangerous", "More dangerous"],
    explanation: "'Dangerous' uzun (üç heceli) bir sıfat olduğu için karşılaştırma yapılırken önüne 'more' eklenir: 'more dangerous'."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "I think science fiction movies are ______ than documentary films.",
    options: ["more interesting", "interestinger", "most interesting", "the most interesting"],
    correctAnswer: "more interesting",
    explanation: "'Interesting' uzun bir sıfattır; iki şey kıyaslanırken sıfatın başına 'more' alır: 'more interesting'."
  },
  {
    id: 9,
    type: 'fill-in-the-blank',
    sentence: "The new sofa is ______ (comfortable) than the old wooden chair.",
    correctAnswers: ["more comfortable", "More comfortable"],
    explanation: "'Comfortable' çok heceli uzun bir sıfat olduğundan comparative biçimi 'more comfortable' şeklindedir."
  },

  // Irregular Comparatives
  {
    id: 10,
    type: 'multiple-choice',
    sentence: "My English is ______ this year than it was last year.",
    options: ["better", "gooder", "more good", "best"],
    correctAnswer: "better",
    explanation: "'Good' düzensiz bir sıfattır; comparative formu 'gooder' değil, 'better'dır."
  },
  {
    id: 11,
    type: 'fill-in-the-blank',
    sentence: "The weather today is ______ (bad) than it was yesterday.",
    correctAnswers: ["worse", "Worse"],
    explanation: "'Bad' düzensiz bir sıfattır ve comparative formu 'worse' şeklindedir."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "His new house is much ______ from the city center than his old one.",
    options: ["farther", "farer", "more far", "farthest"],
    correctAnswer: "farther",
    explanation: "'Far' sıfatı düzensizdir; fiziksel mesafe karşılaştırmalarında 'farther' veya 'further' kullanılır."
  },

  // ==========================================
  // SECTION 2: SUPERLATIVES (Questions 13 - 20)
  // ==========================================

  // Short Adjectives (the + -est)
  {
    id: 13,
    type: 'fill-in-the-blank',
    sentence: "Mount Everest is the ______ (high) mountain in the world.",
    correctAnswers: ["highest", "Highest"],
    explanation: "Kısa sıfatlarda en üstünlük (superlative) derecesi yapılırken sıfatın başına 'the' ve sonuna '-est' takısı gelir: 'the highest'."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "Russia is ______ country in the world by land area.",
    options: ["the largest", "the larger", "most large", "the most largest"],
    correctAnswer: "the largest",
    explanation: "Kısa ve sonu '-e' ile biten sıfatlarda superlative yapısı için 'the' ile birlikte sonuna '-st' eklenir: 'the largest'."
  },
  {
    id: 15,
    type: 'fill-in-the-blank',
    sentence: "Blue whales are the ______ (heavy) animals on Earth.",
    correctAnswers: ["heaviest", "Heaviest"],
    explanation: "Sonu '-y' ile biten sıfatlarda superlative yapılırken 'y' harfi düşer ve '-iest' eklenir: 'heavy' → 'the heaviest'."
  },

  // Long Adjectives (the most + adjective)
  {
    id: 16,
    type: 'multiple-choice',
    sentence: "Football is ______ sport in many European countries.",
    options: ["the most popular", "most popular", "the popularest", "more popular"],
    correctAnswer: "the most popular",
    explanation: "Uzun sıfatlarda superlative yapılırken sıfatın önüne 'the most' getirilir: 'the most popular'."
  },
  {
    id: 17,
    type: 'fill-in-the-blank',
    sentence: "Paris is considered one of the ______ (beautiful) cities in Europe.",
    correctAnswers: ["most beautiful", "Most beautiful"],
    explanation: "'Beautiful' uzun bir sıfattır; 'the' belirtecinden sonra 'most' ile birlikte kullanılır: 'the most beautiful'."
  },
  {
    id: 18,
    type: 'multiple-choice',
    sentence: "Which is ______ question on the whole test?",
    options: ["the most difficult", "the difficulter", "most difficult", "more difficult"],
    correctAnswer: "the most difficult",
    explanation: "Bütün bir grup ya da test içindeki 'en zor' soruyu sorarken superlative biçim olarak 'the most difficult' kullanılır."
  },

  // Irregular Superlatives
  {
    id: 19,
    type: 'fill-in-the-blank',
    sentence: "She is the ______ (good) student in our class.",
    correctAnswers: ["best", "Best"],
    explanation: "'Good' düzensiz bir sıfattır; superlative biçimi 'the best' olarak yazılır."
  },
  {
    id: 20,
    type: 'multiple-choice',
    sentence: "That was ______ movie I have ever seen in my life.",
    options: ["the worst", "the baddest", "the worse", "worst"],
    correctAnswer: "the worst",
    explanation: "'Bad' sıfatının superlative (en üstünlük) hali düzensizdir ve 'the worst' olur."
  },

  // ==========================================
  // SECTION 3: QUANTIFIERS (Questions 21 - 45)
  // ==========================================

  // Some & Any
  {
    id: 21,
    type: 'fill-in-the-blank',
    sentence: "I bought ______ fresh bread and cheese at the bakery. (some / any)",
    correctAnswers: ["some", "Some"],
    explanation: "Olumlu cümlelerde sayılamayan (bread, cheese) veya çoğul sayılabilen isimlerle 'biraz / birkaç' anlamında 'some' kullanılır."
  },
  {
    id: 22,
    type: 'multiple-choice',
    sentence: "Would you like ______ hot tea?",
    options: ["some", "any", "many", "a few"],
    correctAnswer: "some",
    explanation: "Soru cümlelerinde normalde 'any' kullanılsa da, teklif, ikram veya rica (offer/request) cümlelerinde 'some' tercih edilir."
  },
  {
    id: 23,
    type: 'fill-in-the-blank',
    sentence: "We don't have ______ petrol left in the car. (some / any)",
    correctAnswers: ["any", "Any"],
    explanation: "Olumsuz cümlelerde 'hiç' anlamında sayılamayan isimlerin (petrol) veya çoğul isimlerin önünde 'any' kullanılır."
  },
  {
    id: 24,
    type: 'multiple-choice',
    sentence: "Do you have ______ questions about the homework?",
    options: ["any", "some", "a little", "much"],
    correctAnswer: "any",
    explanation: "Genel soru cümlelerinde çoğul sayılabilen veya sayılamayan isimlerle 'hiç' anlamında 'any' kullanılır."
  },
  {
    id: 25,
    type: 'fill-in-the-blank',
    sentence: "There aren't ______ clean towels in the bathroom. (some / any)",
    correctAnswers: ["any", "Any"],
    explanation: "Olumsuz bir cümlede ('aren't') çoğul bir isimle ('clean towels') 'hiç' anlamı vermek için 'any' kullanılır."
  },

  // Much & Many
  {
    id: 26,
    type: 'multiple-choice',
    sentence: "There isn't ______ information about the concert on their website.",
    options: ["much", "many", "a few", "several"],
    correctAnswer: "much",
    explanation: "'Information' sayılamayan (uncountable) bir isimdir. Sayılamayan isimlerle olumsuz cümlelerde 'çok / fazla' anlamında 'much' kullanılır."
  },
  {
    id: 27,
    type: 'fill-in-the-blank',
    sentence: "There aren't ______ trees in this park. (much / many)",
    correctAnswers: ["many", "Many"],
    explanation: "'Trees' sayılabilen ve çoğul bir isimdir. Sayılabilen çoğul isimlerle olumsuz cümlelerde ve sorularda 'many' kullanılır."
  },
  {
    id: 28,
    type: 'multiple-choice',
    sentence: "Hurry up! We don't have ______ time before the flight departs.",
    options: ["much", "many", "a few", "no"],
    correctAnswer: "much",
    explanation: "'Time' (zaman/vakit) sayılamayan bir isimdir. Olumsuz cümlede sayılamayan isimlerle 'fazla / çok' anlamında 'much' kullanılır."
  },
  {
    id: 29,
    type: 'fill-in-the-blank',
    sentence: "Did you take ______ photographs during your vacation? (much / many)",
    correctAnswers: ["many", "Many"],
    explanation: "'Photographs' sayılabilen çoğul bir isim olduğu için soruda 'pek çok / çok sayıda' anlamında 'many' kullanılır."
  },

  // A Few & Few
  {
    id: 30,
    type: 'multiple-choice',
    sentence: "I have ______ close friends who live in the same neighborhood.",
    options: ["a few", "a little", "much", "any"],
    correctAnswer: "a few",
    explanation: "'Friends' sayılabilen çoğul bir isimdir. 'Birkaç tane (yeterli miktarda)' anlamında sayılabilen çoğul isimlerle 'a few' kullanılır."
  },
  {
    id: 31,
    type: 'fill-in-the-blank',
    sentence: "He is very lonely because he has ______ friends in this city. (few / a few)",
    correctAnswers: ["few", "Few"],
    explanation: "'Few', sayılabilen çoğul isimlerle 'neredeyse hiç yok, çok az (yetersiz)' anlamında olumsuz bir vurguyla kullanılır."
  },
  {
    id: 32,
    type: 'multiple-choice',
    sentence: "Can you wait ______ minutes? I will be ready soon.",
    options: ["a few", "a little", "much", "any"],
    correctAnswer: "a few",
    explanation: "'Minutes' sayılabilen çoğul bir isimdir. 'Birkaç dakika' demek için sayılabilen çoğul isimlerle 'a few' kullanılır."
  },

  // A Little & Little
  {
    id: 33,
    type: 'fill-in-the-blank',
    sentence: "I only need ______ sugar for my coffee, please. (a few / a little)",
    correctAnswers: ["a little", "A little"],
    explanation: "'Sugar' sayılamayan bir isimdir. Sayılamayan isimlerle 'biraz (az ama yeterli)' anlamında 'a little' kullanılır."
  },
  {
    id: 34,
    type: 'multiple-choice',
    sentence: "We have ______ hope of winning the match now; it's almost impossible.",
    options: ["little", "a little", "few", "a few"],
    correctAnswer: "little",
    explanation: "'Hope' sayılamayan bir isimdir. 'Little' başına 'a' almadığında 'neredeyse hiç yok, yetersiz' anlamına gelen olumsuz bir anlam taşır."
  },
  {
    id: 35,
    type: 'fill-in-the-blank',
    sentence: "She speaks ______ Spanish, so she can understand the directions. (a little / a few)",
    correctAnswers: ["a little", "A little"],
    explanation: "Diller (Spanish) sayılamayan kavramlar olarak kabul edilir. 'Biraz İspanyolca biliyor' anlamında 'a little' kullanılır."
  },

  // A Lot of & Lots of
  {
    id: 36,
    type: 'multiple-choice',
    sentence: "There are ______ students studying in the library today.",
    options: ["a lot of", "much", "a little", "any"],
    correctAnswer: "a lot of",
    explanation: "Olumlu cümlelerde sayılabilen çoğul isimlerle 'çok sayıda' anlamında 'a lot of' yaygın olarak kullanılır. 'Much' olumlu cümlelerde doğal değildir."
  },
  {
    id: 37,
    type: 'fill-in-the-blank',
    sentence: "He drinks a ______ of water every single day. (lot / few)",
    correctAnswers: ["lot", "Lot"],
    explanation: "'A lot of' kalıbı hem sayılabilen hem de sayılamayan isimlerle 'çok' anlamında kullanılır. Cümledeki 'a' ve 'of' arasında 'lot' gelmelidir."
  },
  {
    id: 38,
    type: 'multiple-choice',
    sentence: "Don't worry, we have ______ time before the train leaves.",
    options: ["lots of", "many", "a few", "any"],
    correctAnswer: "lots of",
    explanation: "'Lots of', 'a lot of' gibi hem sayılabilen çoğul hem de sayılamayan isimlerle (time) olumlu cümlelerde 'bolca / çok' anlamında kullanılır."
  },

  // No & None
  {
    id: 39,
    type: 'fill-in-the-blank',
    sentence: "There is ______ milk in the bottle; it is completely empty. (no / any)",
    correctAnswers: ["no", "No"],
    explanation: "Cümle yapısı olumlu fiil ('is') içerdiğinde 'hiç yok' anlamını doğrudan 'no' belirteci sağlar ('There is no milk'). 'Any' için olumsuz fiil ('isn't') gerekirdi."
  },
  {
    id: 40,
    type: 'multiple-choice',
    sentence: "How many apples are left in the basket? - ______.",
    options: ["None", "No", "Any", "Much"],
    correctAnswer: "None",
    explanation: "'None' tek başına bir zamir olarak 'hiç / hiçbiri' anlamında kullanılır ve ardından isim gelmez. 'No' ise ardından mutlaka bir isim gerektirir."
  },
  {
    id: 41,
    type: 'fill-in-the-blank',
    sentence: "I have ______ money left, so I cannot buy lunch. (no / any)",
    correctAnswers: ["no", "No"],
    explanation: "Fiil olumlu ('have') olduğu için cümleyi olumsuz anlamlı yapmak ve 'hiç param kalmadı' demek için 'no' kullanılır ('I have no money')."
  },
  {
    id: 42,
    type: 'multiple-choice',
    sentence: "______ of my colleagues knew about the surprise party.",
    options: ["None", "No", "Not", "Any"],
    correctAnswer: "None",
    explanation: "'Of' yapısıyla birlikte bir grup içindeki 'hiçbiri' anlamını vermek için 'None of...' kalıbı kullanılır ('No of' kullanılamaz)."
  },

  // How much & How many
  {
    id: 43,
    type: 'fill-in-the-blank',
    sentence: "______ days are there in a week? (How much / How many)",
    correctAnswers: ["How many", "how many"],
    explanation: "'Days' sayılabilen çoğul bir isim olduğu için 'Kaç tane?' diye sorarken 'How many' soru kalıbı kullanılır."
  },
  {
    id: 44,
    type: 'multiple-choice',
    sentence: "______ does this jacket cost?",
    options: ["How much", "How many", "How often", "How long"],
    correctAnswer: "How much",
    explanation: "Fiyat sormak için 'Ne kadar?' anlamında 'How much' kullanılır."
  },
  {
    id: 45,
    type: 'multiple-choice',
    sentence: "______ luggage did you bring with you on the trip?",
    options: ["How much", "How many", "How few", "How little"],
    correctAnswer: "How much",
    explanation: "'Luggage' (bagaj) İngilizcede sayılamayan (uncountable) bir isimdir. Miktarını sormak için 'How much' kalıbı kullanılır."
  }
];
