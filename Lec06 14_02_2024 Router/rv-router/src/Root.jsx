import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Link style={{margin:10}} to="page1">page1</Link> |  
      <Link style={{margin:10}} to="page2">page2</Link> |  
      <Link style={{margin:10}} to="page3/7">page3</Link> |
      <Link style={{margin:10}} to="page4/77">page4</Link> | 
      <Link style={{margin:10}} to="page5">page5</Link> | <br />
      START OUTLET 
      <Outlet/>
      END OUTLET
    </div>
  )
}
