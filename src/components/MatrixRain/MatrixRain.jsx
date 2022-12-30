import React, { useState,useRef, useEffect } from 'react';
import "./MatrixRain.css";

const MatrixRain = ({ position, delay }) => {
  const numberOfChars = 23;
  const [chars, setChars] = useState(["", "", "","", "", "","", "", "","", "", "","", "", "","", "", "","", "", "","", "", ""]);
  const [visibleArr, setVisibleArr] = useState([false, false, false,false, false, false,false, false, false,false, false, false, false, false, false,false, false, false,false, false, false,false, false, false]);
  const ul = useRef();
  useEffect(() => {
    ul.current.style.left = position ? position + "vw" : (Math.random() * 95) + "vw";
    createChars();
    setTimeout(makeItRain, (delay === "random" ? Math.random()* 4500 : 0));
  }, []);

  function createChars() {
    let characters = ["ァ", "ア", "イ", "ゥ", "ィ", "ウ", "ェ", "エ", "ォ", "オ", "ガ", "カ", "ギ", "ク", "グ", "ケ", "キ", "ゲ", "コ", "ゴ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "バ", "パ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "ヾ", "ヿ", "サ", "ゼ", "ッ", "ハ", "ヒ", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let newChars = [];
    let newVisibleArr = [];
    for (let counter = 0; counter < numberOfChars; counter++) {
      const newChar = characters[Math.floor(Math.random() * characters.length)];
      newChars.push(newChar);
      newVisibleArr.push(false);
    }
    setChars(newChars);
    setVisibleArr(newVisibleArr);

  }
  function makeItRain() {
    for (let i = 0; i < numberOfChars; i++) {
      setTimeout(() => {
        const newVisibleArr = visibleArr.map((value, index) => (index <= i ? true : false));
        setVisibleArr(newVisibleArr);
      }, 100 * (i + 1), i);
    }
  }
const list = chars.map((char, i) => {
return <li key={i} className={visibleArr[i] ? "animation" : "inactive"}>{char}</li>}
);

  return (
    <ul id={"matrix-rain"} ref={ul} >
      {list}
    </ul>
  )
}

export default MatrixRain