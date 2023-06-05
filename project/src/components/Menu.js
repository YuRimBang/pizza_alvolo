import '../css/Menu.css'
import React from "react"

function Menu()
{
    return(
        <div className='pizzaMenu'>
            <div className='pizza_menu'>
                    <img className='menu1' src="/pizza_img/2/1.png" alt='피자'/>
                    <div className='menuexplan'>
                        <div className='name'>어깨피자</div>
                        <div className='explan'>
                            <span className='tag'>#9가지 맛</span>
                            <span className='tag'>#9가지 맛</span>
                        </div>
                        <div className='size-price'>
                            <span className='size'>R</span>
                            <span className='price'>27,000</span>
                        </div>
                        <div className='material'>
                            <div className='material1'>닭고기</div>
                            <div className='material1'>닭고기</div>
                        </div>
                    </div>
            </div>
            <div className='pizza_menu'>
                    <img className='menu1' src="/pizza_img/2/1.png" alt='피자'/>
                    <div className='menuexplan'>
                        <div className='name'>어깨피자</div>
                        <div className='explan'>
                            <span className='tag'>#9가지 맛</span>
                            <span className='tag'>#9가지 맛</span>
                        </div>
                        <div className='size-price'>
                            <span className='size'>R</span>
                            <span className='price'>27,000</span>
                        </div>
                        <div className='material'>
                            <div className='material1'>닭고기</div>
                            <div className='material1'>닭고기</div>
                        </div>
                    </div>
            </div>
        </div> 
    );
}

export default Menu;