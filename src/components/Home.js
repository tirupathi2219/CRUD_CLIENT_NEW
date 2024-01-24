import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.scss';


function Home() {
  return (
    <>
     
      <div className={`${styles.app} container-fluid`}>
      <div className={`row`} >
        <section className={`${styles.navigation_container} col-sm-2`}>
          {/* <Dashboard /> */}
          <div className={`${styles.main}`}>
          <div className={`${styles.dashboard_header}`}>
            <i className="bi bi-nut"></i> <span>Dashboard</span>
          </div>
          <div className={`${styles.navigation} d-flex flex-column  align-items-start`}>

            <div><div><i className="bi bi-bank"></i>&nbsp; Dashboard</div></div>
            <div>
              <div>
                <i className="bi bi-boxes"></i>&nbsp; My Projects
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div>
              <div>
                <i className="bi bi-person-square"></i>&nbsp; About
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div>
              <div>
                <i className="bi bi-headset"></i>&nbsp; Income
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div>
              <div>
                <i className="bi bi-percent"></i>&nbsp; Promote
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div>
              <div>
                <i className="bi bi-chat-square-quote"></i>&nbsp; Contact
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>
          <div className="accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  My Projects
                </button>
                <i className="bi bi-chevron-right"></i>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  About
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.dashboard_footer_container}`}>
            <div className={`${styles.dashboard_footer}`}>
              <div className="d-flex">
                {/* <img src={avatar} alt="Avatar" className={`${styles.avatar}`} /> */}
                <div className={`${styles.avatar_info}`}>
                  <h6>Evano</h6>
                  <p>Project Manager</p>
                </div>
              </div>
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>
        </section>
        <section className={`${styles.content_container} col-sm-10`}>
          {/* <DashboardOverview /> */}
          <div className={styles.main_container}>
        <Link to='/login'>Login</Link><br />
        <Link to='/register'>register</Link><br />
        <Link to='/welcome'>welcome</Link>
      </div>
        </section>
      </div>
    </div>    

    </>
  )
}

export default Home;
