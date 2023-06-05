import '../css/PizzaSelectKategoire.css';
import React from "react"

function PizzaSelectKategoire()
{
    return(
        <div className="kategoire">
            <select>
                <option value="popular" className="op">인기순</option>
                <option value="new" className="op">신상품순</option>
                <option value="lowPay" className="op">가격낮은순</option>
                <option value="hiPay" className="op">가격높은순</option>
            </select>
        </div>
    );
}

export default PizzaSelectKategoire;