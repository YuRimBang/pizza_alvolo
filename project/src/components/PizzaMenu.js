import '../css/PizzaMenu.css'
import React from "react"

function PizzaMenu()
{
    return(
        <div className='pizzaMenu'>
            <div className='pizza'>
                <div className='img'></div>
                <div className='piazzmenu'>
                    <span className='name'>어깨피자</span>
                    <span className='explan'>#9가지 맛</span>
                    <div className='size-price'>
                        <span className='size'>R</span>
                        <span className='price'>27,000</span>
                    </div>
                    <div className='material'>
                        닭고기
                    </div>
                </div>
            </div>
            <div className='pizza'>
                <div className='img'></div>
                <div className='piazzmenu'>
                    <span className='name'>어깨피자</span>
                    <span className='explan'>#9가지 맛</span>
                    <div className='size-price'>
                        <span className='size'>R</span>
                        <span className='price'>27,000</span>
                    </div>
                    <div className='material'>
                        닭고기
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default PizzaMenu;