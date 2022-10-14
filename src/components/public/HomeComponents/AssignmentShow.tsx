import React from 'react'
import styles from './AssignmentShow.module.css'
const AssignmentShow:React.FC=():JSX.Element=> {
  return (


        <React.Fragment>

                <section className={styles.sectionAsignmentList }>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-5">
                                    <div className={styles.left_items}>
                                        <h2>
                                         <span> ASSIGNMENTS <br />no more a hassle </span> 
                                        </h2>
                                        <p>
                                        Receive assistance on a variety of topics from different qualified experts.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="row ">
                                        <div className="col-md-6">
                                            
                                            </div>
                                            
                                    </div>
                                    <div className={styles.right_items_slides}>
                                            <div className={styles.slide_images}>
                                                <img className='img-fluid' src="https://i.ibb.co/pbBcKKp/final.png"  />
                                            </div>
                                         
                                    </div>
                                </div>
                        </div>
                    </div>

                </section>


        </React.Fragment>
  )
}

export default AssignmentShow