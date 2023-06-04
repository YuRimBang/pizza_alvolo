import '../css/PizzaTapMenu.css';
import React from "react"

function PizzaTapMenu()
{
    return(
        <div className='menu'>
            <div className="tapMenu">
                <div className="op">전체</div>
                <div className="op">장인피자</div>
                <div className="op">달인피자</div>
                <div className="op">명품피자</div>
            </div>
        </div>

    );
}

export default PizzaTapMenu;