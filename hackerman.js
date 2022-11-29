// // HTML Elements
const arabicTextElement = document.getElementById('random-text')
const crackBtn = document.getElementById('crack')
const vpnSelect = document.getElementById('vpn')
const vpnValue = vpnSelect.options[vpnSelect.selectedIndex].text
const outputPane = document.querySelector('.output-pane')
// // Variables & Definitions
const arabicContent = [`تحذير (يحتوي x على عناصر NA)
يعني (س)
}
بدلاً من قسمexamples ، لدينا قسمdoctest.

سيؤدي ذلك إلى إنشاء اختبارات مثل:

# ولدت من قبل العقيدة: لا تعدل باليد
# الرجاء تحرير الملف في R / <text>

test_that (مثال: safe_mean ، {
# تم إنشاؤه منdoctest لـ safe_mean
# ملف المصدر: <text>
# خط المصدر: 7
توقع متساوٍ (safe_mean (1: 3) ، 2)
توقع تحذير (safe_mean (a) ، not numeric)
توقع تحذير (وسيلة آمنة (ج (1 ، غير متوفرة)) ، عناصر غير متاحة)
})
سيتم إنشاء ملف .Rd كالمعتاد ، مع مثال قسم مثل:

\أمثلة{
آمنة (1: 3)
safe_mean (a)
safe_mean (c (1، NA))
}`, `تتشابه أمثلة التوثيق والاختبارات في بعض النواحي:

إنها أجزاء من التعليمات البرمجية قائمة بذاتها.

يجب أن تغطي أهم وظائف البرنامج والاستخدامات النموذجية.

يجب أن تكون بسيطة وواضحة: يصعب على المستخدمين فهم الأمثلة المعقدة ، ويمكن أن تقدم شفرة الاختبار المعقدة أخطاء اختبار.

هذا التشابه يجعل استخدام المذاهب أمرًا جذابًا ، والتي تجمع بين الاختبارات والتوثيق. في الواقع ، العديد من اللغات ، بما في ذلك Python و Rust ، لديها قواعد مضمنة في 1 R يتحقق أيضًا من الأخطاء في الأمثلة عند تشغيل R CMD chec`, `لقد مضى وقت طويل منذ الإصدار الأول من PHP. على مر السنين ، تحسنت اللغة كثيرًا ، من حيث الأداء والميزات ، وذلك بفضل عمل العديد من المساهمين. في الوقت نفسه ، نما اعتماده بين المطورين بشكل كبير. بالنظر إلى أحدث الإحصائيات ، يتم استخدام PHP في 81.7٪ من جميع مواقع الويب ؛ نتيجة رائعة. ومع ذلك ، لطالما نظرت العديد من الشركات الكبرى والمطورين إلى PHP على أنها لغة سيئة ، سخيفة ، ولغة أطفال مخادعة.`, `سأحاول في هذا المقال الحافل بآرائه أن أشرح بعض الأسباب الكامنة وراء هؤلاء القضاة. لقد جمعتهم على مدار الوقت ، وتحدثت مع مطورين آخرين وقراءة بعض المقالات المنتشرة على الويب.`, `مقدمة
كما قلت ، يتم استخدام PHP على نطاق واسع عبر الويب كلغة خلفية ويتزايد نموها بسرعة كبيرة. في الواقع ، حتى قبل أشهر قليلة ، كان استخدامه عند 75٪ تقريبًا ، وهو ما يمثل زيادة بنسبة 6٪ في فترة زمنية صغيرة نسبيًا. إذا كنت مطور PHP لفترة من الوقت الآن ، فأنت تعلم أنه عادة ما يكره الكثير من الزملاء ويتم الشعور به كلغة لا يمكن لشركة جادة توظيفها. في بعض الأحيان أعتقد أن PHP مكروهة مثل (الإصدارات القديمة) من Internet Explorer من قبل مصممي الويب. بعد كل شيء ، كما قال Bjarne Stroustrup ، الذي صمم ونفذ لغة C ++ ، هناك نوعان فقط من لغات البرمجة: هؤلاء الأشخاص دائمًا ما يضايقونهم وأولئك الذين لا يستخدمهم أحد.`, `أو المطورين المبتدئين قد كتبوا على مدار الوقت. لقد قام أيضًا بتضمين النسخة الخاصة به في بداية حياته المهنية ، ولكي أكون صادقًا ، يجب أن أشمل نفسي أيضًا. كما تعلم ، الجميع مبتدئ في البداية. بصرف النظر عن هذا الاعتبار ، أنا أعارض بشدة تحليله. في الواقع ، يمكن كتابة نفس النوع من أكواد السباغيتي بلغات أخرى "أكثر للمؤسسات" مثل Java. مثال؟ لست مضطرًا لأن أبدو بعيدًا عن نفسي. منذ وقت ليس ببعيد ، قمت بتطوير موقع ويب باستخدام Java EE ، لأن الناس في جامعتي يستخدمونه عادةً ، وكانت صفحات JSP مليئة برموز السباغيتي (لكوني إيطالية ، فأنا أحب السباغيتي!).`, `تصميم
هذه واحدة من أكثر النقاط الساخنة والأكثر شيوعًا التي سمعتها من كارهي PHP. لأن الموضوع واسع حقًا ، سأغطي بعضًا منه فقط ، وأقسم المناقشة إلى أقسام.`, `تسمية الوظائف التناقضات
بصفتك مطور PHP ، يجب أن تكون على دراية بالكثير من التناقضات التي تكشفها اللغة. دعونا نرى بعض الأمثلة:

تبدأ دوال المصفوفة بـ array_ وليس: array_merge vs arsort ، و array_flip vs shuffle
الأسماء التي تم تسطيرها مقابل الأسماء غير المسطرة: htmlentities vs html_entity_decode، htmlspecialchars_ decode vs htmlspecialchars
مقابل 2: bin2hex ، deg2rad ، strtolower ، strtotime`, `يجب أن أعترف أنني أتفق مع هذه النقطة. ليس من السهل تذكر كل هذه الاستثناءات وأعتقد أن هذا لا يجب أن يكون ضروريًا. لحسن حظنا ، لدينا IDE الذي يساعدنا في تسمية الوظائف ، لكنني آمل حقًا في إعادة البناء لتحقيق تسمية أكثر اتساقًا عاجلاً أم آجلاً.`, `يحب الناس عادة أن يكون لديهم "عدو" أو شيء يشكو منه. ولكن ، كما رأينا في هذه المقالة ، فإن بعض الأشياء التي يفرضها المطورون الآخرون على PHP هي مجرد أساطير خاطئة أو هراء (كما يحب Brad Frost التحدث عنها). لذا ، بقدر ما تكون سعيدًا باستخدام PHP ، فأنا كذلك ، استمر في استخدامها. أتمنى أن تكون قد استمتعت بالمقالة وأنها أعطتك فرصة للتفكير في بعض شذوذ PHP وكيف يمكنك حماية لغتك التي تختارها.

في الختام ، إذا كنت مهتمًا بقراءة المقالات التي يشكو فيها الأشخاص من PHP ، فإليك قائمة مختصرة:`]
const outputContent = ['contacting with infrastructure computer system.', 'creating a new session...', 'finding a wifi network to connect.', 'Authenticating to wifi network provided by system...', 'Connecting to VPN provided by ${...}', 'Searching facebook profiles connected to ${...}', 'Searching twitter profiles associated with ${...}', 'Searching Instagram ${...}', 'Searching Tiktok ${...}', 'Finding mobile data in breached record list...', 'Cracking software v8-X00_ECHydra launched successfully..', 'Profile Found successfully...', 'Starting the cracking process.please wait...']
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let a, b, c, d, e, f, g, h;
const fontsAvailable = ['Alexandria', 'Rubik Glitch', 'Titillium Web', 'Orbitron']
arabicTextElement.innerText = arabicContent[0]
arabicTextElement.style.fontFamily = 'Alexandria'
const fontWeights = [300, 400, 500, 600, 700]

// // Function Definitions
const randomLetter = () => {
  let randomIndex = Math.floor(Math.random() * (characters.length - 1))
  return randomIndex;
}
const crackOutput = async (delay, index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const elm = document.createElement('p')
      elm.innerText = outputContent[index]
      outputPane.appendChild(elm)
      outputPane.scrollTo(0, outputPane.scrollHeight);
      resolve(200)
    },delay)
  })
}
const bruteForce = async (delay) => {
  return new Promise((resolve) => {
    a = characters[randomLetter()]
    b = characters[randomLetter()]
    c = characters[randomLetter()]
    d = characters[randomLetter()]
    e = characters[randomLetter()]
    f = characters[randomLetter()]
    g = characters[randomLetter()]
    h = characters[randomLetter()]
    setTimeout(() => {
      const elm = document.createElement('p')
      elm.innerText = a+b+c+d+e+f+g+h;
      outputPane.appendChild(elm)
      outputPane.scrollTo(0, outputPane.scrollHeight);
      resolve(200)
    }, delay)
  })
}
const main = async () => {
  for (let i=0;i<outputContent.length-1;i++) {
    randomDelay = Math.floor(Math.random() * 1000)
    await crackOutput(randomDelay, i)
  }
  for (let w=0;w<1000;w++) {
    randomDelay = Math.floor(Math.random() * 300)
    await bruteForce(randomDelay)
  }
}
const backgroundAnimation = async () => {
  setInterval(() => {
    const randomFontIndex = fontsAvailable[(Math.floor(Math.random() * fontsAvailable.length))]
    const randomTextIndex = Math.floor(Math.random() * (arabicContent.length))
    const randomWeightIndex = fontWeights[(Math.floor(Math.random() * fontWeights.length))]
    arabicTextElement.style.fontWeight = randomWeightIndex
    arabicTextElement.innerText = arabicContent[randomTextIndex]
    arabicTextElement.style.fontFamily = randomFontIndex
    // console.log(randomWeightIndex)

  }, 1000)
}
backgroundAnimation()
crackBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value
  const vpnSelect = document.getElementById('vpn')
  const vpnValue = vpnSelect.options[vpnSelect.selectedIndex].value
  // console.log(vpnValue)
  // console.log(username)
  // let p = document.createElement('p')
  // p.innerText = vpnValue + username
  // outputPane.appendChild(p)
  main()
})