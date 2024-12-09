import one from "../assets/QuestionAnswerSection/IMG-20241209-WA0008.jpg";
import two from "../assets/QuestionAnswerSection/IMG-20241209-WA0009.jpg";
import three from "../assets/QuestionAnswerSection/IMG-20241209-WA0010.jpg";
import four from "../assets/QuestionAnswerSection/IMG-20241209-WA0011.jpg";
import five from "../assets/QuestionAnswerSection/IMG-20241209-WA0012.jpg";
import six from "../assets/QuestionAnswerSection/IMG-20241209-WA0013.jpg";
import seven from "../assets/QuestionAnswerSection/IMG-20241209-WA0014.jpg";
import eight from "../assets/QuestionAnswerSection/IMG-20241209-WA0015.jpg";
import nine from "../assets/QuestionAnswerSection/IMG-20241209-WA0016.jpg";
import ten from "../assets/QuestionAnswerSection/IMG-20241209-WA0017.jpg";

// Shuffle function using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const quizData = [
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "حلزون الأذن البحرية", isCorrect: true },
      { text: "حلزون المحار", isCorrect: false },
      { text: "حلزون الزهور", isCorrect: false },
    ]),
    detail: "حلزون الأذن البحرية يتواجد في المياه الضحلة في بيئة أشجار القرم، ويتميز بصدفته التي تشبه الأذن.",
    image: one
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "البلشون الأبيض", isCorrect: true },
      { text: "الطائر الورقي", isCorrect: false },
      { text: "طائر النورس", isCorrect: false },
    ]),
    detail: "طائر البلشون الأبيض يتميز بريشه الأبيض الطويل ويعتمد على أشجار القرم كمكان للتغذية.",
    image: two
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "طائر الرفراف", isCorrect: true },
      { text: "طائر الأخضر", isCorrect: false },
      { text: "البجع", isCorrect: false },
    ]),
    detail: "طائر ملون ذو منقار طويل يستخدمه لصيد الأسماك في المياه الضحلة بالقرب من أشجار القرم.",
    image: three
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة القرم", isCorrect: true },
      { text: "شجرة السدر", isCorrect: false },
      { text: "شجرة العلعلان", isCorrect: false },
    ]),
    detail: "تعتبر أشجار القرم من أهم السمات البيئية في البيئة البحرية لحفظ التوازن البيئي.",
    image: four
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "البجع", isCorrect: true },
      { text: "الطائر الأخضر", isCorrect: false },
      { text: "الطائر الدجان", isCorrect: false },
    ]),
    detail: "البجع يتغذى على الأسماك ويعيش بالقرب من أشجار القرم في بعض المحميات البحرية.",
    image: five
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سمك المهرج", isCorrect: true },
      { text: "سمك التونة", isCorrect: false },
      { text: "سمك المولي", isCorrect: false },
    ]),
    detail: "سمك المهرج يعيش في بيئة البحر الضحلة بالقرب من جذور أشجار القرم.",
    image: six
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "أسماك المولي", isCorrect: true },
      { text: "سمك الجوبي", isCorrect: false },
      { text: "سمك المهرج", isCorrect: false },
    ]),
    detail: "أسماك المولي تسبح في المناطق الموحلة الضحلة تحت أشجار القرم.",
    image: seven
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سرطان المانجروف", isCorrect: true },
      { text: "سرطان البحر الأحمر", isCorrect: false },
      { text: "سرطان الجوف", isCorrect: false },
    ]),
    detail: "سرطان المانجروف يعيش في التربة الطينية والرطبة بالقرب من جذور أشجار القرم.",
    image: eight
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سمك الانقليس", isCorrect: true },
      { text: "سمك المهرج", isCorrect: false },
      { text: "سمك التونة", isCorrect: false },
    ]),
    detail: "سمك الانقليس يختبئ بين الصخور وجذور أشجار القرم للحماية.",
    image: nine
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "الباز", isCorrect: true },
      { text: "الصقر الحر", isCorrect: false },
      { text: "النسر المصري", isCorrect: false },
    ]),
    detail: "الباز طائر جارح يهاجم الطيور الصغيرة في محميات القرم.",
    image: ten
  }
];

export default quizData;
