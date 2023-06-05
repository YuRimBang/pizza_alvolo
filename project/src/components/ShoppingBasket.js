import '../css/ShoppingBasket.css';

function ShoppingBasket() {

    return (
        <div className='shoppingBasket'>
            <ul className='shoppingPizza'>
                <li className='shopping'>
                    <img className="shopping_pizza_img" src="/pizza_img/1/1-1.png" alt="피자" ></img>
                    <div className='shopping_pizza'>
                        <div className='shopping_pizza_name'>어깨피자</div>
                        <div className='shopping_pizza_size'>L,고구마골드</div>
                        <div className='shopping_option'>옵션변경</div>
                    </div>
                    <div className='shopping_pizza_cnt'>
                        <input className='shopping_cnt_minus' type='button' value="-"/>
                        <span className='shopping_pizza_total_cnt'>1</span>
                        <input className='shopping_cnt_plus' type='button' value="+"/>
                    </div>
                    <div className='shopping_pizza_menu_price'>
                        <span className='shopping_pizza_menu_total_price'>34,500</span>
                        <span className='shopping_menu_won'>원</span>
                    </div>
                    <div className='shopping_change'>
                        <div className='shopping_change_btn'>변경저장</div>
                    </div>
                    <div className='shopping_cancle'>
                            <input className='shopping_cancle_btn' type='button' value="X"/>
                    </div>
                </li>
                <li className='shopping'>
                    <img className="shopping_pizza_img" src="/pizza_img/1/1-1.png" alt="피자" ></img>
                    <div className='shopping_pizza'>
                        <div className='shopping_pizza_name'>어깨피자</div>
                        <div className='shopping_pizza_size'>L,고구마골드</div>
                        <div className='shopping_option'>옵션변경</div>
                    </div>
                    <div className='shopping_pizza_cnt'>
                        <input className='shopping_cnt_minus' type='button' value="-"/>
                        <span className='shopping_pizza_total_cnt'>1</span>
                        <input className='shopping_cnt_plus' type='button' value="+"/>
                    </div>
                    <div className='shopping_pizza_menu_price'>
                        <span className='shopping_pizza_menu_total_price'>34,500</span>
                        <span className='shopping_menu_won'>원</span>
                    </div>
                    <div className='shopping_change'>
                        <div className='shopping_change_btn'>변경저장</div>
                    </div>
                    <div className='shopping_cancle'>
                            <input className='shopping_cancle_btn' type='button' value="X"/>
                    </div>
                </li>
            </ul>
            <div className='total_main'>
                <span className='total_amount'>합계</span>
                <span className='total_sum'>총</span>
                <span className='total_price'>0</span>
                <span className='total_won'>원</span>
            </div>
        </div>
    );
}

export default ShoppingBasket;