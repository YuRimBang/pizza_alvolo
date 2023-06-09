import '../css/ShoppingOrder.css';

function ShoppingOrder() {

    const orderBtn = async () => {
        try {
          const response = await axios.get("/order", {
            params: {
              userPk: 1,
            },
          });
          setBasketData(response.data);
          calculateTotalPrice(response.data);
        } catch (error) {
          console.error("장바구니 데이터를 불러오는데 실패했습니다:", error);
        }
      };

    return (
        <div className='total_order'>
           주문하기
        </div>
    );
}

export default ShoppingOrder;