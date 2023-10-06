import "./Card.css";
import PropTypes from "prop-types";

function Card(props) {
  const handleClick = (e) => {
    if (!props.reset) {
      e.target.style.opacity = ".5";
      props.setReset(true);
    }
    props.setTipAmount(0);
    props.setTotal(0);
    props.setBill("");
    props.setNumOfPeople("");
    props.setShowVal(false);

    document.querySelectorAll(".TipBtn").forEach((el) => {
      el.style.backgroundColor = "hsl(183, 100%, 15%)";

      document.querySelector(".TipInput").value = "";
    });
  };
  return (
    <div className="CardBox">
      <div>
        <p className="Tip">tip amount</p>
        <span>/ person</span>
        <p className="TipVal">
          ${props.showVal && props.tipAmount ? props.tipAmount : "0.00"}
        </p>
      </div>
      <div>
        <p className="Total">total</p>
        <span>/ person</span>
        <p className="TotalVal">
          ${props.showVal && props.total ? props.total : "0.00"}
        </p>
      </div>

      <button className="ResetBtn" onClick={handleClick} ref={props.buttonRef}>
        reset
      </button>
    </div>
  );
}

Card.propTypes = {
  tipAmount: PropTypes.number,
  total: PropTypes.number,
  showVal: PropTypes.bool,
  reset: PropTypes.bool,
  buttonRef: PropTypes.object,
  setTipAmount: PropTypes.func,
  setTotal: PropTypes.func,
  setBill: PropTypes.func,
  setNumOfPeople: PropTypes.func,
  setShowVal: PropTypes.func,
  setReset: PropTypes.func,
  tip: PropTypes.object,
};

export default Card;
