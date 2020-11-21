// import Text from './components/Text'; // use Text.js in components
import WordCard from '../components/WordCard'; // use WordCard.js in components
import {Button, Row, Col, Input, Select} from 'antd';
import styled from 'styled-components';
import { useState } from 'react';

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

const typeOptions = [
  { label: 'noun', value: 'noun' },
  { label: 'verb', value: 'verb' },
  { label: 'adjective', value: 'adjective' },
  { label: 'adverb', value: 'adverb' },
  { label: 'preposition', value: 'preposition' },
  { label: 'conjunction', value: 'conjunction' }
]

const StyledWrapper = styled.div`
  padding: 20px 10px;

  @media(max-width: 425px){
    padding: 20px 10px;
  }

  .select-type {
    width: 100%;
    /* min-width: 100;
    max-width: 500px; */
  }

  .from-item {
    margin-bottom: 10px;
  }
`

function Homepage() {

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
    { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, 
    { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, 
    { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, 
    { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, 
    { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, 
    { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, 
    { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, 
    { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, 
    { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, 
    { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, 
    { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, 
    { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, 
    { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, 
    { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, 
    { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }
  ]

  //let number =1;
  const [number, setNumber] = useState(10); // 

  //--- ---
  const [dataList, setDataList] = useState(vocabs);

  //--- ---
  const [word, setWord] = useState('');
  const [types, setTypes] = useState([]);
  const [meanings, setMeanings] = useState('');

  //--- ---
  console.log(word);
  // console.log("Word: "+word+"   Types: "+types+"   Meanings: "+meanings);
  const handleClick = () => {
    // number = number + 1; //บวกค่าธรรมดา
    // setNumber(number + 1); //เพิ่มค่าในปุ่มเลย

    //--- ---
    // dataList.push(); //เพิ่มข้อมูลในที่เดิม
    // dataList[dataList.length] = {}; //เพิ่มข้อมูลในที่เดิม
    // dataList = [...dataList, {}]; //เพิ่มข้อมูลในที่เใหม่

    // setDataList ([...dataList, {
    //   "meanings": ["มาพร้อมกับ"], "word": "Accompany", "types": ["verb"]
    // }]);

    // console.log({
    //   word: word,
    //   type: types,
    //   meaning: meanings.split(",").map((item) => item.trim())
    // });

    setDataList ([...dataList, {
      //ถ้าkey และตัวแปลเหมือนกันสามารถรวบมาเป็นอันเดียวกันได้
      word,
      types: types,
      meanings: meanings.split(",").map((item) => item.trim())
    }]);
  }

  const handleDelete = (index) => {
    console.log(index);
    const newArr = dataList.filter((data, id) => {
      return id !== index;
    });
    setDataList(newArr);
  }

  return (
    <StyledWrapper>
      {/* //--- ---
      <WordCard word={vocab.word} type={vocab.type} meaning={vocab.meaning}/>
      <WordCard {...vocab2}/>
      <WordCard {...vocab3}/>
      <WordCard {...vocab4}/> */}
      {/* //--- ---
      <h1>My vocabularies</h1>
      <Row gutter={[16, 24]}>
        {vocabs.map((item, index) => {
          return (//Keyต้องอยู่นอกสุด
            <Col key={index} xs={24} sm={12} md={8} lg={6}> 
              <WordCard  {...item} />
            </Col>
          )
        })}
      </Row> */}   
      {/* //--- ---
      <Button onClick={handleClick}>{number}</Button>
      <Button onClick={handleClick}>{number}</Button> */}

      <h1>My vocabularies</h1>
      <div>

        {/*  */}
        <div className="from-item">
          <div>
            <label htmlFor='word-input'>Word</label>
          </div>
          {/* onChange={(e) => { console.log(e.target.value) }} */}
          {/* //--- ค่าเริ่มต้นจะโชว์ --- value={word} */}
          <Input id='word-input' placeholder="English Word" onChange={(e) => { setWord(e.target.value) }} />
        </div>

        {/*  */}
        <div className="from-item">
          <div>
            <label htmlFor='select-type'>Types</label>
          </div>
          {/* onChange={(values) => { console.log(values) }} */}
          {/* value={types} */}
          <Select className="select-type" id="select-type" options={typeOptions} mode="multiple" placeholder="Select Type" onChange={(values) => { setTypes(values) }} />
        </div>

        {/*  */}
        <div className="from-item">
          <div>
            <label htmlFor='meaning-input'>Meanings</label>
          </div>
          {/* value={meanings} */}
          <Input id='meaning-input' placeholder="Meanings" onChange={(e) => { setMeanings(e.target.value) }} />
        </div>

      </div>

      <Button className="from-item" type='primary' onClick={handleClick}>Add vocab</Button>

      <Row gutter={[16, 24]}>
        {dataList.map((item, index) => {
          return (
            //Keyต้องอยู่นอกสุด
            <Col key={index} xs={24} sm={12} md={8} lg={6}> 
              <WordCard  {...item} onDelete={() => { handleDelete(index) }} />
            </Col>
          )
        })}
      </Row>

    </StyledWrapper>
  );
}


export default Homepage;

//แยกหน้่า