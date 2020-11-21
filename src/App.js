// import Text from './components/Text'; // use Text.js in components
import WordCard from './components/WordCard'; // use WordCard.js in components
import {Button} from 'antd';

//--- ---
// function App() {

//   const str = "Hello"

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       {/* //--- ---
//       <h1>Titel</h1>
//       <h2>Titel</h2>
//       <p>Paragraph</p>
//       <div>Div</div>
//       <button>Click me</button>
//       <input />
//       <select>
//         <option>Red</option>
//         <option>Blue</option>
//         <option>Green</option>
//       </select> */}

//       {/* //--- ---
//       <h1>{str + "ABC"}</h1>
//       <input value={str}/> */}

//     </div>
//   );
// }

// function App() {

//   const data = "This is a content"

//   return (
//     <div className="App">
//       <Text title="Hello from App" content={data}/>
//       <Text title="Hello1 from App" content="Test1"/>
//       <Text title="Hello2 from App" content="Test2"/>
//       <Text title="Hello3 from App" content="Test3"/>
//     </div>
//   );
// }

function App() {

  // const vocab = {
  //   word: 'cat',
  //   type: 'noun',
  //   meaning: 'แมว'
  // }
  // const vocab2 = {
  //   word: 'dog',
  //   type: 'noun',
  //   meaning: 'หมา'
  // }
  // const vocab3 = {
  //   word: 'bird',
  //   type: 'noun',
  //   meaning: 'นก'
  // }
  // const vocab4 = {
  //   word: 'eat',
  //   type: 'verb',
  //   meaning: 'กิน'
  // }
  const vocabs = [
    { "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, 
    { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, 
    { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, 
    { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }
  ]

  return (
    <div className="App">
      {/* <WordCard word={vocab.word} type={vocab.type} meaning={vocab.meaning}/>
      <WordCard {...vocab2}/>
      <WordCard {...vocab3}/>
      <WordCard {...vocab4}/> */}
      <Button type="primary">Primary Button</Button>
      {vocabs.map((item, index) => {
        return <WordCard key={index} {...item} />
      })}
    </div>
  );
}


export default App;
