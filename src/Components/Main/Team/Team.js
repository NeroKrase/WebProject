import React from "react";
import styles from "./Team.module.css"
import portrait1 from "../../../Assets/Images/team-portrait1.jpg"
import portrait2 from "../../../Assets/Images/team-portrait2.jpg"
import portrait3 from "../../../Assets/Images/team-portrait3.jpg"
import portrait4 from "../../../Assets/Images/team-portrait4.jpg"


const Team = () =>{
  return (
      <div className={styles.content}>
          <h1 className={styles.title}>Our team</h1>
          <div className={styles.teamWrapper}>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait1} alt=""/>
                  <h5 className={styles.name}>John Doe</h5>
                  <p className={styles.role}>Graphic Designer</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait2} alt=""/>
                  <h5 className={styles.name}>Steve Rodgers</h5>
                  <p className={styles.role}>Animator</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait3} alt=""/>
                  <h5 className={styles.name}>Bruce Wayne</h5>
                  <p className={styles.role}>Project Manager</p>
              </div>
              <div className={styles.teamMember}>
                  <img className={styles.portrait} src={portrait4} alt=""/>
                  <h5 className={styles.name}>Kara Zorel</h5>
                  <p className={styles.role}>Programmer</p>
              </div>
          </div>
      </div>
  )
};

export default Team;