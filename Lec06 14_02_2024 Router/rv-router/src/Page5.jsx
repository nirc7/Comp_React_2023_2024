import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Page5() {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  return (
    <div>Page5 <br />
      <input type="text" onChange={e => setName(e.target.value)} /> <br />
      <button
        style={{ backgroundColor: 'lightgoldenrodyellow' }}
        onClick={() => {
          console.log(name);

          let userObj = {
            userId: 17,
            userName: name
          };

          navigate('/page7', { state: userObj });
        }}
      >send data to page7</button> <br />

      {/* pay attention the / is must here */}
      <Link style={{ margin: 10 }} to="/page1" >page1</Link>
    </div>
  )
}
