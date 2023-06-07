import './App.css'
import axios from 'axios';

// axios 모듈에서 axios 함수 불러옴 ($.ajax랑 거의 같다)
// axios 쓰는 목적: 서버에 데이터 요청할때 비동기적으로 요청하기 위해
// 함수형 컴포넌트 

function App() {

  const selectAll=async()=>{ // 비동기
    alert("selectAll")
    const result = await axios.get('/product')
    console.log(result)
  }

  return (
    <div id="App">
      <h1>React-Express-MySQL 연결</h1>
      <button onClick={selectAll}>모두조회</button>
    </div>
  )
}
export default App;