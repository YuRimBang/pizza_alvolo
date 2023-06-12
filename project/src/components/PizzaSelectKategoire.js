import React from "react";
import "../css/PizzaSelectKategoire.css"

function PizzaSelectKategoire({ onOptionChange, selectedOption, setSelectedOption }) {
  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    onOptionChange(optionValue);
  };

  return (
    <div className="kategoire">
      <select className="option" value={selectedOption} onChange={handleOptionChange}>
        <option value="new" className="op">
          신상품순
        </option>
        <option value="lowPay" className="op">
          가격낮은순
        </option>
        <option value="hiPay" className="op">
          가격높은순
        </option>
      </select>
    </div>
  );
}

export default PizzaSelectKategoire;
