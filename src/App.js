import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';




function App() {
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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Cart</a>
            </div>
          </div>
        </div>
      </nav>

    <div className='main-bg'></div>


    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes1.jpg'} width='80%' /> 
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes2.jpg'} width='80%' /> 
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + '/img/shoes3.jpg'} width='80%' /> 
          <h4>상품명</h4>
          <p>상품정보</p>
        </div> 
      </div>
    </div>



    </div>
  );
}

export default App;
