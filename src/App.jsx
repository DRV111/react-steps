import { useState } from 'react';
import './index.css';
import Button from './components/Button';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrev() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }
  function handleNext() {
    if (step < messages.length) {
      setStep((nextStep) => nextStep + 1);
    }
  }
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button onClick={handlePrev}>
              <span>👈🏻</span>Previos
            </Button>
            <Button onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
          </div>
          <button className="close" onClick={handleOpen}>
            🗙
          </button>
        </div>
      ) : (
        <button className="close" onClick={handleOpen}>
          ☰
        </button>
      )}
    </>
  );
}

export default App;
