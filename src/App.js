import "./App.css";
import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Greet from "./components/Greet";
import ExpenseItem from "./components/expenses/ExpenseItem";
import ExpenseList from "./components/expenses/ExpenseList";

function App() {
  //js문법
  // const $h2 = React.createElement("h2", null, "하이하이 곤듀님");

  //react 문법
  const $h2 = <h2>방가방가 곤듀님 </h2>;

  /**
      jsx 규칙
      1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야함
      2. 빈 태그는 (닫는 태그가 없는) 반드시 </>로 마감해야한다
      3.태그의  class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
      4.의미 없는 부모는<React.Fragment>로 감싸면 됨 -> 축약가능 <>
      변수나 함수를 출력할때는 {}로 감싸면 된다
  */

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: "치킨먹음",
      price: 30000,
      date: new Date(2024, 6 - 1, 3),
    },
    {
      title: "족발먹음",
      price: 40000,
      date: new Date(2024, 6 - 1, 7),
    },
    {
      title: "헬스장등록",
      price: 300000,
      date: new Date(2024, 6 - 1, 12),
    },
  ];

  return (
    <>
      {/* 문자열은 {} 생략 가능 나머지는 {} 생략 불가능 */}
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
