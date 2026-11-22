import type { GrammarSection } from '../../types';
import { presentPerfectVsPastQuestions } from './presentPerfectVsPast';
import { futureTenseQuestions } from './futureTense';
import { ifClausesQuestions } from './ifClauses';
import { adverbsOfMannerQuestions } from './adverbsOfManner';
import { gerundInfinitiveQuestions } from './gerundInfinitive';
import { veryTooEnoughQuestions } from './veryTooEnough';
import { tagQuestionsQuestions } from './tagQuestions';
import { agreementQuestions } from './agreement';
import { comparativesQuantifiersQuestions } from './comparativesQuantifiers';

export const grammarSections: GrammarSection[] = [
  {
    id: 1,
    title: 'Present Perfect vs. Simple Past',
    titleTr: 'Present Perfect ve Simple Past Karşılaştırması',
    description: 'Şimdiki zamanın tamamlanmış hali ile geçmiş zaman arasındaki farkları ve ipucu kelimeleri öğrenin.',
    questions: presentPerfectVsPastQuestions,
  },
  {
    id: 2,
    title: 'Future Tense: Will vs. Be Going To',
    titleTr: 'Gelecek Zaman: Will ve Be Going To',
    description: 'Ani kararlar, planlar, kanıta dayalı tahminler ve sözler için doğru gelecek zaman yapısını seçin.',
    questions: futureTenseQuestions,
  },
  {
    id: 3,
    title: 'If Clauses (Type 0 & Type 1)',
    titleTr: 'Koşul Cümleleri (Tip 0 ve Tip 1)',
    description: 'Genel geçer doğrular ve gerçekleşmesi muhtemel durumlar için koşul cümlelerini pratik yapın.',
    questions: ifClausesQuestions,
  },
  {
    id: 4,
    title: 'Adverbs of Manner',
    titleTr: 'Durum Zarfları',
    description: 'Sıfatlardan zarf türetmeyi, düzensiz zarfları ve eylemin nasıl yapıldığını belirtmeyi öğrenin.',
    questions: adverbsOfMannerQuestions,
  },
  {
    id: 5,
    title: 'Gerund & Infinitive',
    titleTr: 'İsim-Fiil ve Mastar (Verb + -ing / to + Verb)',
    description: 'Hangi fiillerden sonra -ing, hangi fiillerden sonra to + fiil geldiğini ve anlam farklarını öğrenin.',
    questions: gerundInfinitiveQuestions,
  },
  {
    id: 6,
    title: 'Very, Too, Enough',
    titleTr: 'Very, Too ve Enough Kullanımı',
    description: 'Aşırılık ve yeterlilik belirteçlerinin cümledeki doğru konumlarını ve anlamlarını öğrenin.',
    questions: veryTooEnoughQuestions,
  },
  {
    id: 7,
    title: 'Tag Questions',
    titleTr: 'Ek Sorular (Değil mi?)',
    description: 'Cümle sonuna eklenen onay sorularını, istisnaları ve doğru yardımcı fiil eşleşmelerini öğrenin.',
    questions: tagQuestionsQuestions,
  },
  {
    id: 8,
    title: 'Agreement (So, Too, Either, Neither)',
    titleTr: 'Katılma İfadeleri (So, Too, Either, Neither)',
    description: 'Olumlu ve olumsuz ifadelere katılırken kullanılan kısa diyalog kalıplarını pekiştirin.',
    questions: agreementQuestions,
  },
  {
    id: 9,
    title: 'Comparative & Superlative + Quantifiers',
    titleTr: 'Karşılaştırma Sıfatları ve Miktar Belirteçleri',
    description: 'Sıfat derecelendirme (daha / en) ve some, any, much, many, a few, a little kullanımlarını öğrenin.',
    questions: comparativesQuantifiersQuestions,
  },
];
