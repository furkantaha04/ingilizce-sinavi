import type { MultipleChoiceQuestion } from '../../types';

export const agreementQuestions: MultipleChoiceQuestion[] = [
  // --- Pattern 1: "So + auxiliary + subject" (Agreeing with positive statements) ---
  {
    id: 1,
    type: 'multiple-choice',
    sentence: "A: I love Italian food. B: ______",
    options: ["So do I.", "Neither do I.", "I don't either.", "So am I."],
    correctAnswer: "So do I.",
    explanation: "Olumlu bir cümleye katılmak için 'So + yardımcı fiil + özne' kalıbı kullanılır. 'love' fiili Simple Present (geniş zaman) olduğu için yardımcı fiil olarak 'do' kullanılır."
  },
  {
    id: 2,
    type: 'multiple-choice',
    sentence: "A: I am really tired after the long journey. B: ______",
    options: ["So am I.", "So do I.", "I am neither.", "Neither am I."],
    correctAnswer: "So am I.",
    explanation: "Cümle olumludur ve 'am' (to be) fiili ile kurulmuştur. Olumlu bir 'to be' cümlesine 'ben de' diyerek katılmak için 'So am I.' kalıbı kullanılır."
  },
  {
    id: 3,
    type: 'multiple-choice',
    sentence: "A: I can speak three languages fluently. B: ______",
    options: ["So can I.", "So do I.", "I can either.", "Neither can I."],
    correctAnswer: "So can I.",
    explanation: "Cümlede 'can' modal yardımcı fiili kullanılmıştır. Olumlu bir yetenek ifadesine katılmak için aynı yardımcı fiille 'So can I.' (Ben de) denir."
  },
  {
    id: 4,
    type: 'multiple-choice',
    sentence: "A: I watched an interesting documentary last night. B: ______",
    options: ["So did I.", "So do I.", "So was I.", "Neither did I."],
    correctAnswer: "So did I.",
    explanation: "Cümle Simple Past Tense (geçmiş zaman) olduğu için katılma ifadesinde geçmiş zaman yardımcı fiili olan 'did' kullanılır: 'So did I.'"
  },
  {
    id: 5,
    type: 'multiple-choice',
    sentence: "A: I was very nervous before the job interview. B: ______",
    options: ["So was I.", "So did I.", "So am I.", "Neither was I."],
    correctAnswer: "So was I.",
    explanation: "A kişisi geçmiş zamanda 'to be' (was) fiilini kullanmıştır. Olumlu cümleye aynı şekilde katılmak için 'So was I.' denir."
  },
  {
    id: 6,
    type: 'multiple-choice',
    sentence: "A: I will travel to Spain during the summer holiday. B: ______",
    options: ["So will I.", "So do I.", "I will either.", "Neither will I."],
    correctAnswer: "So will I.",
    explanation: "Gelecek zaman ('will') bildiren olumlu bir cümleye katılmak için 'So + will + özne' kalıbı kullanılır: 'So will I.'"
  },
  {
    id: 7,
    type: 'multiple-choice',
    sentence: "A: I have already visited London twice. B: ______",
    options: ["So have I.", "So do I.", "So did I.", "Neither have I."],
    correctAnswer: "So have I.",
    explanation: "Cümle Present Perfect Tense ('have visited') yapısındadır. Olumlu cümleye katılmak için 'have' yardımcı fiiliyle 'So have I.' kalıbı kullanılır."
  },
  {
    id: 8,
    type: 'multiple-choice',
    sentence: "A: Mark plays tennis every Saturday morning. B: ______",
    options: ["So does David.", "So is David.", "David does either.", "Neither does David."],
    correctAnswer: "So does David.",
    explanation: "A'nın cümlesi Simple Present (plays) ve olumludur. Üçüncü tekil şahıs olan 'David' öznesi için yardımcı fiil 'does' olmalıdır: 'So does David.'"
  },
  {
    id: 9,
    type: 'multiple-choice',
    sentence: "A: I am studying hard for tomorrow's exam. B: ______",
    options: ["So am I.", "So do I.", "Neither am I.", "I study too."],
    correctAnswer: "So am I.",
    explanation: "Cümle Present Continuous Tense ('am studying') yapısındadır. Yardımcı fiil 'am' olduğu için katılma yapısı 'So am I.' olur."
  },
  {
    id: 10,
    type: 'multiple-choice',
    sentence: "A: I usually get up early on weekdays. B: ______",
    options: ["So do I.", "So am I.", "So have I.", "Neither do I."],
    correctAnswer: "So do I.",
    explanation: "Cümle olumlu ve Simple Present (geniş zaman) eylem fiili ('get up') içerir. Bu yüzden yardımcı fiil olarak 'do' seçilir: 'So do I.'"
  },
  {
    id: 11,
    type: 'multiple-choice',
    sentence: "A: We were at the concert yesterday evening. B: ______",
    options: ["So was I.", "So were I.", "So did I.", "Neither was I."],
    correctAnswer: "So was I.",
    explanation: "A kişisi 'We were' ifadesini kullanmıştır. B kişisi tekil 'I' öznesiyle katılacağı için geçmiş zaman 'to be' formu 'was' olur: 'So was I.' ('were' tekil 'I' ile kullanılamaz)."
  },
  {
    id: 12,
    type: 'multiple-choice',
    sentence: "A: I should drink more water during the day. B: ______",
    options: ["So should I.", "So do I.", "So would I.", "Neither should I."],
    correctAnswer: "So should I.",
    explanation: "Cümlede 'should' modal yardımcı fiili kullanılmıştır. Olumlu bir tavsiye/gereklilik cümlesine aynı fikirde olarak katılmak için 'So should I.' (Ben de öyle yapmalıyım) denir."
  },

  // --- Pattern 2: "Subject + auxiliary + too" (Agreeing with positive statements) ---
  {
    id: 13,
    type: 'multiple-choice',
    sentence: "A: I live near the city center. B: ______",
    options: ["I do too.", "I am too.", "I do either.", "Neither do I."],
    correctAnswer: "I do too.",
    explanation: "Olumlu bir cümleye katılmak için 'Özne + yardımcı fiil + too' yapısı kullanılabilir. Geniş zamanda eylem fiili ('live') olduğu için 'I do too.' (Ben de) denir. 'Either' sadece olumsuzlarda kullanılır."
  },
  {
    id: 14,
    type: 'multiple-choice',
    sentence: "A: I am ready to order lunch now. B: ______",
    options: ["I am too.", "I do too.", "I am either.", "So do I."],
    correctAnswer: "I am too.",
    explanation: "Cümlede 'to be' (am) fiili kullanılmıştır. Olumlu cümleye 'too' ile katılmak için 'I am too.' denir. 'I do too' fiil uyuşmazlığı nedeniyle yanlıştır."
  },
  {
    id: 15,
    type: 'multiple-choice',
    sentence: "A: I bought a new laptop yesterday. B: ______",
    options: ["I did too.", "I do too.", "I was too.", "I didn't either."],
    correctAnswer: "I did too.",
    explanation: "Cümle Simple Past Tense ('bought') olduğu için olumlu katılımda geçmiş zaman yardımcı fiili olan 'did' ve cümlenin sonunda 'too' kullanılır: 'I did too.'"
  },
  {
    id: 16,
    type: 'multiple-choice',
    sentence: "A: I have seen that museum before. B: ______",
    options: ["I have too.", "I did too.", "I do too.", "I haven't either."],
    correctAnswer: "I have too.",
    explanation: "Present Perfect Tense ('have seen') ile kurulmuş olumlu cümleye katılmak için 'have' yardımcı fiiliyle 'I have too.' denir."
  },
  {
    id: 17,
    type: 'multiple-choice',
    sentence: "A: I can play the acoustic guitar. B: ______",
    options: ["I can too.", "I do too.", "I can either.", "So am I."],
    correctAnswer: "I can too.",
    explanation: "'Can' modal fiili içeren olumlu bir cümleye 'Özne + can + too' yapısıyla katılınır: 'I can too.' (Ben de çalabilirim)."
  },
  {
    id: 18,
    type: 'multiple-choice',
    sentence: "A: I will join the chess club this semester. B: ______",
    options: ["I will too.", "I do too.", "I won't either.", "So do I."],
    correctAnswer: "I will too.",
    explanation: "Gelecek zaman ('will') bildiren olumlu cümleye katılmak için 'Özne + will + too' yapısıyla 'I will too.' kullanılır."
  },
  {
    id: 19,
    type: 'multiple-choice',
    sentence: "A: I was very busy yesterday afternoon. B: ______",
    options: ["I was too.", "I did too.", "I was either.", "Neither was I."],
    correctAnswer: "I was too.",
    explanation: "'Was' (to be geçmiş zaman) içeren olumlu cümleye katılmak için 'I was too.' kullanılır. 'I did too' veya olumsuz ifadeler uygun değildir."
  },
  {
    id: 20,
    type: 'multiple-choice',
    sentence: "A: My brother wants to learn French. B: ______",
    options: ["My sister does too.", "My sister is too.", "My sister does either.", "Neither does my sister."],
    correctAnswer: "My sister does too.",
    explanation: "Olumlu bir geniş zaman cümlesinde ('wants') üçüncü tekil şahıs öznesi ile katılmak için 'Özne + does + too' kalıbı kullanılır: 'My sister does too.'"
  },

  // --- Pattern 3: "Neither + auxiliary + subject" (Agreeing with negative statements) ---
  {
    id: 21,
    type: 'multiple-choice',
    sentence: "A: I don't drink coffee in the evening. B: ______",
    options: ["Neither do I.", "So do I.", "Neither don't I.", "I don't too."],
    correctAnswer: "Neither do I.",
    explanation: "Olumsuz bir cümleye 'ben de (yapmam)' diyerek katılmak için 'Neither + yardımcı fiil + özne' yapısı kullanılır. 'Neither' zaten olumsuzluk içerdiğinden yardımcı fiil olumlu kalır ('do'): 'Neither do I.'"
  },
  {
    id: 22,
    type: 'multiple-choice',
    sentence: "A: I am not hungry right now. B: ______",
    options: ["Neither am I.", "Neither do I.", "So am I.", "I'm not neither."],
    correctAnswer: "Neither am I.",
    explanation: "Cümle olumsuzdur ve 'am not' (to be) fiili içerir. Olumsuz cümleye katılmak için 'Neither am I.' kullanılır. 'Neither do I' fiil uyuşmazlığı nedeniyle yanlıştır."
  },
  {
    id: 23,
    type: 'multiple-choice',
    sentence: "A: I didn't sleep well last night. B: ______",
    options: ["Neither did I.", "Neither was I.", "So did I.", "Neither didn't I."],
    correctAnswer: "Neither did I.",
    explanation: "Simple Past Tense olumsuz cümlesine ('didn't sleep') katılmak için 'Neither did I.' kalıbı kullanılır. 'Neither didn't I' çift olumsuzluk hatası oluşturur."
  },
  {
    id: 24,
    type: 'multiple-choice',
    sentence: "A: I cannot swim in deep water. B: ______",
    options: ["Neither can I.", "So can I.", "Neither can't I.", "I can either."],
    correctAnswer: "Neither can I.",
    explanation: "'Cannot' içeren olumsuz bir yetenek cümlesine katılmak için 'Neither can I.' (Ben de yüzemem) kalıbı kullanılır."
  },
  {
    id: 25,
    type: 'multiple-choice',
    sentence: "A: I haven't watched the latest episode yet. B: ______",
    options: ["Neither have I.", "Neither did I.", "So have I.", "I haven't too."],
    correctAnswer: "Neither have I.",
    explanation: "Present Perfect Tense olumsuz cümlesine ('haven't watched') katılmak için 'have' yardımcı fiiliyle 'Neither have I.' yapısı kullanılır."
  },
  {
    id: 26,
    type: 'multiple-choice',
    sentence: "A: I wasn't happy with the hotel service. B: ______",
    options: ["Neither was I.", "Neither did I.", "So was I.", "I wasn't too."],
    correctAnswer: "Neither was I.",
    explanation: "Cümle 'wasn't' (geçmiş zaman to be) ile olumsuz yapılmıştır. Olumsuz katılım için 'Neither was I.' kullanılır."
  },
  {
    id: 27,
    type: 'multiple-choice',
    sentence: "A: I won't go to the party on Friday. B: ______",
    options: ["Neither will I.", "So will I.", "Neither won't I.", "I will neither."],
    correctAnswer: "Neither will I.",
    explanation: "Cümle 'won't' (will not) ile olumsuzdur. 'Neither' sözcüğünden sonra olumlu yardımcı fiil 'will' kullanılır: 'Neither will I.' (Ben de gitmeyeceğim)."
  },
  {
    id: 28,
    type: 'multiple-choice',
    sentence: "A: Alex doesn't like waking up early. B: ______",
    options: ["Neither does Emma.", "Neither is Emma.", "So does Emma.", "Emma doesn't too."],
    correctAnswer: "Neither does Emma.",
    explanation: "Geniş zaman olumsuz cümleye ('doesn't like') 3. tekil şahıs olan Emma için katılınırken 'Neither does Emma.' kalıbı kullanılır."
  },
  {
    id: 29,
    type: 'multiple-choice',
    sentence: "A: I am not interested in horror movies. B: ______",
    options: ["Neither am I.", "Neither I am.", "So am I.", "Neither do I."],
    correctAnswer: "Neither am I.",
    explanation: "'Neither' yapısında devrik söz dizimi (inversion) kullanılır: 'Neither + yardımcı fiil + özne'. Bu yüzden 'Neither I am' değil, 'Neither am I.' doğrudur."
  },
  {
    id: 30,
    type: 'multiple-choice',
    sentence: "A: We shouldn't eat too much fast food. B: ______",
    options: ["Neither should we.", "Neither shouldn't we.", "So should we.", "We shouldn't too."],
    correctAnswer: "Neither should we.",
    explanation: "'Shouldn't' ile kurulmuş olumsuz bir cümleye aynı fikirde olarak katılmak için 'Neither should we.' denir. 'Neither' zaten olumsuz olduğundan yardımcı fiil olumlu kalır."
  },
  {
    id: 31,
    type: 'multiple-choice',
    sentence: "A: The students weren't in the classroom this morning. B: ______",
    options: ["Neither was I.", "Neither were I.", "Neither did I.", "So was I."],
    correctAnswer: "Neither was I.",
    explanation: "A cümlesi olumsuzdur ve geçmiş zaman 'be' (weren't) kullanılmıştır. B kişisi 'I' öznesiyle cevap verdiği için 'was' kullanılır: 'Neither was I.' ('were' tekil 'I' ile kullanılmaz)."
  },
  {
    id: 32,
    type: 'multiple-choice',
    sentence: "A: I am not working this weekend. B: ______",
    options: ["Neither am I.", "Neither do I.", "So am I.", "I don't either."],
    correctAnswer: "Neither am I.",
    explanation: "Cümle Present Continuous Tense olumsuz ('am not working') yapısındadır. Yardımcı fiil 'am' olduğu için doğru cevap 'Neither am I.' olur."
  },

  // --- Pattern 4: "Subject + auxiliary + not + either" (Agreeing with negative statements) ---
  {
    id: 33,
    type: 'multiple-choice',
    sentence: "A: I don't eat spicy food. B: ______",
    options: ["I don't either.", "I don't too.", "I do neither.", "So don't I."],
    correctAnswer: "I don't either.",
    explanation: "Olumsuz bir cümleye 'ben de (yemem)' şeklinde katılmak için 'Özne + olumsuz yardımcı fiil + either' yapısı kullanılır. 'Too' olumsuz cümlelerde kullanılmaz ('I don't too' yanlıştır)."
  },
  {
    id: 34,
    type: 'multiple-choice',
    sentence: "A: I am not afraid of spiders. B: ______",
    options: ["I'm not either.", "I don't either.", "I'm not too.", "Neither I am."],
    correctAnswer: "I'm not either.",
    explanation: "Cümlede 'am not' (to be) kullanıldığı için katılımda da 'to be' kullanılmalıdır: 'I'm not either.' 'I don't either' fiil uyuşmazlığı nedeniyle yanlıştır."
  },
  {
    id: 35,
    type: 'multiple-choice',
    sentence: "A: I didn't understand the teacher's explanation. B: ______",
    options: ["I didn't either.", "I didn't too.", "I don't either.", "Neither didn't I."],
    correctAnswer: "I didn't either.",
    explanation: "Simple Past Tense olumsuz cümlesine ('didn't understand') katılmak için geçmiş zaman olumsuz yardımcı fiili 'didn't' ve cümlenin sonunda 'either' kullanılır: 'I didn't either.'"
  },
  {
    id: 36,
    type: 'multiple-choice',
    sentence: "A: I can't drive a manual car. B: ______",
    options: ["I can't either.", "I can't too.", "I don't either.", "So can't I."],
    correctAnswer: "I can't either.",
    explanation: "Cümlede 'can't' modal yardımcı fiili vardır. Olumsuz cümleye 'either' ile katılmak için 'I can't either.' (Ben de süremiyorum) denir."
  },
  {
    id: 37,
    type: 'multiple-choice',
    sentence: "A: I haven't visited the new art museum yet. B: ______",
    options: ["I haven't either.", "I didn't either.", "I haven't too.", "Neither I have."],
    correctAnswer: "I haven't either.",
    explanation: "Present Perfect Tense ('haven't visited') ile kurulmuş olumsuz cümleye katılmak için 'I haven't either.' yapısı kullanılır."
  },
  {
    id: 38,
    type: 'multiple-choice',
    sentence: "A: I won't tell anyone your secret. B: ______",
    options: ["I won't either.", "I won't too.", "I don't either.", "So won't I."],
    correctAnswer: "I won't either.",
    explanation: "Gelecek zaman olumsuz ('won't') cümlesine katılmak için 'Özne + won't + either' yapısıyla 'I won't either.' kullanılır."
  },
  {
    id: 39,
    type: 'multiple-choice',
    sentence: "A: Tom doesn't drink sugary soda. B: ______",
    options: ["Sarah doesn't either.", "Sarah isn't either.", "Sarah doesn't too.", "Neither Sarah doesn't."],
    correctAnswer: "Sarah doesn't either.",
    explanation: "Geniş zaman olumsuz bir cümlede 3. tekil şahıs öznesi ile katılmak için 'Özne + doesn't + either' yapısı kullanılır: 'Sarah doesn't either.'"
  },
  {
    id: 40,
    type: 'multiple-choice',
    sentence: "A: I wasn't ready to take the exam yesterday. B: ______",
    options: ["I wasn't either.", "I didn't either.", "I wasn't too.", "Neither didn't I."],
    correctAnswer: "I wasn't either.",
    explanation: "Geçmiş zamanda 'to be' (wasn't) içeren olumsuz cümleye katılmak için 'I wasn't either.' kullanılır."
  },

  // --- Pattern 5: Mixed / Tricky (Different tenses, auxiliaries, 'have' vs 'have got', 'never') ---
  {
    id: 41,
    type: 'multiple-choice',
    sentence: "A: I have a big garden behind my house. B: ______",
    options: ["So do I.", "So have I.", "So am I.", "Neither do I."],
    correctAnswer: "So do I.",
    explanation: "'Have' fiili burada sahip olmak anlamında bir ana eylem fiili olarak Simple Present zamanda kullanılmıştır ('have got' değildir). Bu yüzden yardımcı fiil olarak 'do' kullanılır: 'So do I.'"
  },
  {
    id: 42,
    type: 'multiple-choice',
    sentence: "A: I've got two tickets for tonight's concert. B: ______",
    options: ["So have I.", "So do I.", "So am I.", "Neither have I."],
    correctAnswer: "So have I.",
    explanation: "Cümlede 'have got' kalıbı kullanılmıştır. Bu kalıpta 'have' yardımcı fiil görevi gördüğü için katılım ifadesi 'So have I.' şeklinde yapılır."
  },
  {
    id: 43,
    type: 'multiple-choice',
    sentence: "A: I was cooking dinner when the lights went out. B: ______",
    options: ["So was I.", "So did I.", "I did too.", "Neither was I."],
    correctAnswer: "So was I.",
    explanation: "Cümle Past Continuous Tense ('was cooking') yapısındadır. Cümledeki yardımcı fiil 'was' olduğu için olumlu katılımda 'So was I.' kullanılır."
  },
  {
    id: 44,
    type: 'multiple-choice',
    sentence: "A: I couldn't find my keys anywhere this morning. B: ______",
    options: ["Neither could I.", "So could I.", "I didn't either.", "Neither couldn't I."],
    correctAnswer: "Neither could I.",
    explanation: "Cümlede 'couldn't' ile geçmişe yönelik olumsuz bir durum ifade edilmiştir. 'Neither' sonrasında olumlu yardımcı fiil 'could' kullanılarak 'Neither could I.' denir."
  },
  {
    id: 45,
    type: 'multiple-choice',
    sentence: "A: I have never tried Japanese sushi before. B: ______",
    options: ["Neither have I.", "So have I.", "I haven't too.", "Neither did I."],
    correctAnswer: "Neither have I.",
    explanation: "Cümlede açıkça 'not' bulunmasa da 'never' kelimesi cümleyi anlamca olumsuz yapar. Olumsuz anlama katılmak için 'Neither' kullanılır. Present Perfect yapısı ('have never tried') olduğu için 'Neither have I.' doğrudur."
  }
];
