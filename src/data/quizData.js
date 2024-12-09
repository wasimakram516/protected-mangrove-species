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
    detail: "حلزون الأذن البحرية: يتواجد في المياه الضحلة في بيئة أشجار القرم، ويتميز بصدفته التي تشبه الأذن. هذا الحلزون يتغذى على الطحالب والكائنات الدقيقة الموجودة على الأسطح المغمورة",
    image: one
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "الباز", isCorrect: true },
      { text: "الصقر الحر", isCorrect: false },
      { text: "النسر المصري", isCorrect: false },
    ]),
    detail: "الباز هو طائر جارح يمكن أن يهاجم الطيور الصغيرة في محميات القرم أو حتى فرائس أخرى موجودة في البيئة",
    image: two
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "طائر الرفراف", isCorrect: true },
      { text: "طائر الأخضر", isCorrect: false },
      { text: "البجع", isCorrect: false },
    ]),
    detail: "طائر ملون ذو منقار طويل يستخدمه لصيد الأسماك في المياه الضحلة بالقرب من أشجار القرم",
    image: three
  },
  {
    question: "ما هو نوع الشجرة الموضحة في الصورة أدناه؟",
    options: shuffleArray([
      { text: "شجرة القرم", isCorrect: true },
      { text: "شجرة السدر", isCorrect: false },
      { text: "شجرة العلعلان", isCorrect: false },
    ]),
    detail: "تعتبر أشجار القرم من أهم السمات البيئية التي تتميز بها البيئة البحرية في السلطنة وذلك لكونها من الموارد الطبيعية الهامة في حفظ التوازن البيئي ومناطق حضانة للعديد من الأسماك ذات القيمة التجارية والكائنات البحرية الأخرى إضافة على كونها مناطق ذات مناظر طبيعية وخلابة",
    image: four
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "البلشون الأبيض", isCorrect: true },
      { text: "الطائر الورقي", isCorrect: false },
      { text: "طائر النورس", isCorrect: false },
    ]),
    detail: "	طائر كبير ذو ريش أبيض طويل، يتميز بعنقه الطويل وأرجله الرفيعة. يعيش في المناطق المائية ويعتمد على أشجار القرم كمكان للتغذية",
    image: five
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "البجع", isCorrect: true },
      { text: "الطائر الأخضر", isCorrect: false },
      { text: "الطائر الدجان", isCorrect: false },
    ]),
    detail: "طائر مائي كبير يتغذى على الأسماك. في بعض المحميات البحرية العمانية، قد يتمكن البجع من العيش بالقرب من أشجار القرم التي توفر له غذاءه وموطنه",
    image: six
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سمك المهرج", isCorrect: true },
      { text: "سمك التونة", isCorrect: false },
      { text: "سمك المولي", isCorrect: false },
    ]),
    detail: "يعيش في بيئة البحر الضحلة بالقرب من جذور أشجار القرم",
    image: seven
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "أسماك المولي", isCorrect: true },
      { text: "سمك الجوبي", isCorrect: false },
      { text: "سمك المهرج", isCorrect: false },
    ]),
    detail: "تسبح أسماك المولي في المناطق الموحلة الضحلة تحت أشجار القرم",
    image: eight
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سرطان المانجروف", isCorrect: true },
      { text: "سرطان البحر الأحمر", isCorrect: false },
      { text: "سرطان الجوف", isCorrect: false },
    ]),
    detail: "يعد سرطان المنغروف واحدًا من أشهر أنواع السرطانات التي تعيش في بيئة أشجار القرم. يتواجد عادة في التربة الطينية والرطبة بالقرب من جذور أشجار القرم. هذا النوع من السرطان يُعَدّ من الكائنات التي تساهم في إعادة تدوير المواد العضوية في البيئة.",
    image: nine
  },
  {
    question: "ما هو نوع الحيوان الموضح في الصورة أدناه؟",
    options: shuffleArray([
      { text: "سمك الانقليس", isCorrect: true },
      { text: "سمك التونة", isCorrect: false },
      { text: "سمك المهرج", isCorrect: false },
    ]),
    detail: "الأنقليس هو نوع من الأسماك التي يمكن أن تتواجد في بيئة أشجار القرم. عادة ما تختبئ هذه الأسماك بين الصخور والجذور لتوفير الحماية من الحيوانات المفترسة، وتتميز بحركة بطيئة في المياه الضحلة",
    image: ten
  }
];

export default quizData;
