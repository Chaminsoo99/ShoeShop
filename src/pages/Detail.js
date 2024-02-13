import { useParams } from "react-router-dom";

// 상세페이지 컴포넌트
function Detail(props){

    //유저가 :id 자리에 적은거 가져와줌
    let {id} = useParams();
    // array 자료 안에서 원하는 항목만 찾아주는 array.find()
    //콜백함수에 넣은 파라미터 x 는 array자료 안에 있던 자료를 뜻함
    // ()=> 다음에는 조건식을 넣어서 참일때만 찾은 자료 그 자리에 반환해줌.
    let 찾은상품 = props.shoes.find((x)=> x.id == id )

    return(
          <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

  export default Detail;