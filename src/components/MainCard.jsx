import Card from "./Card";
import "./MainCard.css";
import { PersonIcon, DollarIcon } from "../assets";
import { useRef, useState } from "react";

function MainCard() {
  const [bill, setBill] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [showVal, setShowVal] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  const tip = useRef(0);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    tip.current = e.target.value;
    buttonRef.current.style.opacity = "1";
    document.querySelectorAll(".TipBtn").forEach((el) => {
      el.style.backgroundColor = "hsl(183, 100%, 15%)";
      el.style.color = "hsl(0, 0%, 100%)";
    });
    e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.style.color = "hsl(183, 100%, 15%)";
  };

  const handleChange = (e) => {
    setBill(e.target.value);
    buttonRef.current.style.opacity = "1";
  };

  const handlePeopleChange = (e) => {
    setNumOfPeople(e.target.value);
    setShowVal((prev) => !prev);
    buttonRef.current.style.opacity = "1";
    const amount = ((bill * tip.current) / (100 * e.target.value)).toFixed(2);
    setTipAmount(amount);
    const totalVal = (+amount + bill / e.target.value).toFixed(2);
    setTotal(totalVal);
  };

  return (
    <main>
      <div className="FormBox">
        <label htmlFor="bill">
          Bill
          <img src={DollarIcon} alt="" />
          <input
            type="text"
            name="bill"
            id="bill"
            value={bill}
            placeholder="0"
            onChange={handleChange}
          />
        </label>
        <fieldset>
          <legend>select tip %</legend>
          <button
            type="button"
            value="5"
            onClick={handleClick}
            className="TipBtn"
          >
            5%
          </button>
          <button
            type="button"
            value="10"
            onClick={handleClick}
            className="TipBtn"
          >
            10%
          </button>
          <button
            type="button"
            value="15"
            onClick={handleClick}
            className="TipBtn"
          >
            15%
          </button>
          <button
            type="button"
            value="25"
            onClick={handleClick}
            className="TipBtn"
          >
            25%
          </button>
          <button
            type="button"
            value="50"
            onClick={handleClick}
            className="TipBtn"
          >
            50%
          </button>
          <input
            type="text"
            name="custom"
            id="custom"
            className="TipInput"
            placeholder="Custom"
            onChange={handleClick}
          />
        </fieldset>
        <label htmlFor="people">
          Number of People
          <img src={PersonIcon} alt="" />
          <input
            type="text"
            name="people"
            id="people"
            value={numOfPeople}
            placeholder="0"
            onChange={handlePeopleChange}
          />
        </label>
      </div>
      <Card
        tipAmount={+tipAmount}
        total={+total}
        showVal={showVal}
        setTipAmount={setTipAmount}
        setTotal={setTotal}
        setBill={setBill}
        setNumOfPeople={setNumOfPeople}
        setShowVal={setShowVal}
        reset={reset}
        setReset={setReset}
        buttonRef={buttonRef}
        tip={tip}
      />
    </main>
  );
}
export default MainCard;
