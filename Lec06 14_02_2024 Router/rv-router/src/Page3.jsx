import { Link, useParams } from "react-router-dom"

export default function Page3() {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>Page3 <br />

     userid= {userId} <br />
     
     {/* pay attention the / is must here */}
     <Link style={{margin:10}} to="/page1" >page1</Link> 
    </div>
  )
}
