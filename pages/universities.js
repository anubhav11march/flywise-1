import React from "react";
import Navbar from "../component/common/navbar";
import Classes from '../styles/university.module.css'
function Universities() {
  return (
    <div>
      <Navbar />
      <div className={Classes.universitysearch} >

      </div>
      <section className={Classes.universitymain }>
        <div className={Classes.universitysidefilter}>sidebar</div>
        <div className="university-content">Content</div>
      </section>
    </div>
  );
}

export default Universities;
