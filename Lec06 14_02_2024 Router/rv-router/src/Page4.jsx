import { Link, useLoaderData } from "react-router-dom";

export async function loaderUserId({ params }) {
  console.log(params.userId);
  return await params.userId;
}

export default function Page4() {
  let userId = useLoaderData();
  
  return (
    <div>Page4 <br />
      userId= {userId} <br />
      
      {/* pay attention the / is must here */}
     <Link style={{margin:10}} to="/page1" >page1</Link> 
      </div> 
  )
}
