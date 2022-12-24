import React, { useState } from 'react'
import { useEffect } from 'react'
import "./MatrixRain.css"

const MatrixRain = ({ position }) => {
  const [numberOfChars, setNumberOfChars] = useState(25);
  useEffect(() => {
    createChars();
  }, []);
  function createChars() {
    let ul = document.getElementById("matrix-rain" + position);
    if (position === -1) {
      ul.style.left = (Math.random() * 100) + "vw";
    } else {
      ul.style.left = position + "vw";
    }
    let characters = ["ァ", "ア", "イ", "ゥ", "ィ", "ウ", "ェ", "エ", "ォ", "オ", "ガ", "カ", "ギ", "ク", "グ", "ケ", "キ", "ゲ", "コ", "ゴ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "バ", "パ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "ヾ", "ヿ", "サ", "ゼ", "ッ", "ハ", "ヒ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "N", "M", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let counter = numberOfChars; counter > 0; counter--) {
      let element = document.createElement("li");
      element.innerHTML = characters[Math.floor(Math.random() * characters.length)];
      element.classList.add("inactive");
      ul.appendChild(element);
    }
    setTimeout(makeItRain, ((Math.random() * 5000) + 5000), ul);
  }
  function showAndStartAnimation(i, ul) {
    ul.childNodes[i].classList.remove("inactive");
    ul.childNodes[i].classList.add("animation");
  }
  function makeItRain(ul) {
    for (let i = 0; i < ul.childElementCount; i++) {
      setTimeout(showAndStartAnimation, 100 * i + 1, i, ul);
    }
  }


  return (
    <ul id={"matrix-rain" + position}>
    </ul>
  )
}

export default MatrixRain