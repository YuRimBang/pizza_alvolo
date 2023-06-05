import '../css/PizzaTitle.css';
import React from "react"

function PizzaTitle()
{
    return(
        <div className='container'>
            <div className="titleBox">
                <div className="mainTitle">피자</div>
                <div className="mainEx">맛있고 건강한 피자! 피자알볼로의 <span className='titleSpan'>다양한 피자를 주문</span>해 보세요.</div>
            </div>
        </div>

    );
}

export default PizzaTitle;