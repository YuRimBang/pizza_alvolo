import '../css/ShoppingBar.css';

function ShoppingBar() {

    return (
        <div className='shoppingBasket'>
                <div className='shoppingTitle'>장바구니</div>
                <div className='basket'>
                    <div className='bar'>
                        <div className='bar-menu'>메뉴</div>
                        <div className='bar-cnt'>수량</div>
                        <div className='bar-price'>가격</div>
                        <div className='bar-change'>변경</div>
                        <div className='bar-cancle'>삭제</div>
                    </div>
                </div>
        </div>

    );
}

export default ShoppingBar;