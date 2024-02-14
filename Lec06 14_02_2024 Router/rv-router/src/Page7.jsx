import { Link, useLocation } from "react-router-dom";

export default function Page7() {
  let {state} = useLocation();
  let userObj = state;
  return (
    <div>Page7 <br />
    user name is {userObj.userName} <br />
    user id is {userObj.userId} <br />

     {/* pay attention the / is must here */}
     <Link style={{margin:10}} to="/page1" >page1</Link> 
    </div>
  )
}
