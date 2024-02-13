import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js';
import Event from './pages/Event.js';


function App() {

  let [shoes] = useState(data)
  //페이지이동할땐 useNavigate()
  let navigate = useNavigate()



  return (
    <div className="App">


      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ShoeShop</a>      
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/*  Link로 페이지 이동 */}
              <Link class="nav-link active" aria-current="page" href="#" to='/' >Home</Link>
              <Link class="nav-link" href="#" to='/detail' >Detail</Link>
              {/* useNavigate() 로 페이지 이동 */}
              <a onClick={ ()=>{ navigate('/detail') } } class="nav-link" href="#" >Cart</a>
              <a onClick={ ()=>{ navigate('/Event') } } class="nav-link" href="#" >Event</a>
            </div>
          </div>
        </div>
      </nav>

     



      <Routes>
        {/* 메인페이지 */}
          <Route path='/' element={ 
          <div> 
            <div className="container">
                <div className="row">
                {/* shoes 안에 있는 스테이트 개수만큼 반복 실행해주는 map */}
                  {
                    shoes.map( (a, i)=>{ 
                      return(
                        // 컴포넌트 만들어서 바인딩
                        <Card shoes={shoes[i]} i={i} ></Card>   
                      )
                    })}
                </div>
              </div>
             </div> } />
           {/* 상세페이지 그리고  URL 파라미터 */}
          <Route path='/detail/:id' element={ <div> <Detail shoes={shoes} ></Detail> </div> } />
          {/* 404페이지 */}
          {/* <Route path="*" element={ <div>없는페이지임</div> } /> */}

          <Route path="/Event" element={<Event/>}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
            <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
          </Route>

      </Routes>

    



    </div>
  );
}



// Card 컴포넌트 생성
function Card(props){
  return (
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes'+(props.i+1)+'.jpg'} width='80%' /> 
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.price }</p>
        </div>
  )
}






export default App;
