import React, {useState} from "react";
import { useEffect } from "react";
import './quiz.css'

const questions = [
  {
    title: 'Қазақстанның астанасы ... ?',
    variants: ['Тегеран', 'Бразилиа', 'Астана'],
    correct: 2,
  },
  {
    title: 'Париж қай елдің астанасы -  ... ',
    variants: ['Италия', 'Франция', 'Исапания'],
    correct: 1,
  },
  {
    title: 'Поездбен саяхаттағанда ең керек зат?',
    variants: [
      'Ноутбук',
      'Көп ақша',
      'Power Bank',
    ],
    correct: 2,
  },
];

const Quiz = () => {

  function Result({correct}) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href="/quiz">
        <button >Попробовать снова</button>
        </a>
      </div>
    );
  }
  
  function Game({step, question, onClickVariant}) {

    const percentage = Math.round((step/questions.length) * 100)


    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="linie"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text, index) => ( 
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
            ))}
        </ul>
      </>
    );
  }

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) =>{
    console.log(step, index);
    setStep(step + 1);

    if(index===question.correct){
      setCorrect(correct+1);
    }
  }




  return (

    <section className="quiz">
    <div className="App">
      {
        step !== questions.length ? 
        (
          <Game step={step} question={question} onClickVariant={onClickVariant}/>
        ) : (
          <Result correct = {correct}/> )
      }
      
    </div>
    </section>
  );

}

export default Quiz;