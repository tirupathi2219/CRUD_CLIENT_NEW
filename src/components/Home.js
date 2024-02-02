import React from "react";
import { Link } from "react-router-dom";
import './Home.scss';

function Home() {
  return (
    <div className="main_container">
      <div>
        <h1>Complaints Box</h1>
        <div>
          <p>New to our family ? <Link to='/register'>Register Here</Link><br /></p>
          <p> Hey iam  already member in our family  &#128519; <Link to='/login'>Login</Link><br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
