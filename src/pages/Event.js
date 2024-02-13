import { Outlet } from "react-router-dom";

// 이벤트 컴포넌트
function Event(){
    return(
        <div>
          <h4> !오늘의 이벤트! </h4>
          <Outlet></Outlet>
        </div>
    )
  }

  export default Event;