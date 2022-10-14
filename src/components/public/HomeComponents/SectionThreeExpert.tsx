import React from 'react'
import styles from './SectionThreeExpert.module.css'
const SectionThreeExpert:React.FC=():JSX.Element=> {
  return (
    
    <section className={styles.sectionThreeExpert}>
            <div className="container">
                <div className={styles.sectionThreeContainer}>
                    <div className="row center_hero ">
                        <div className="col-md-6">
                        <div className={styles.rightExpert}>
                <img src="https://i.ibb.co/nj8p6r4/jose-aljovin-JZMd-Glt-AHMo-unsplash.jpg" className='img-fluid' alt="" />
                            
                    </div>

                            </div>



                        <div className="col-md-6">

                        <div className={styles.leftItem}>
                            <h2>
                            Join as an <span> EXPERT</span>
                            </h2>
                            <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dicta placeat repellendus, incidunt debitis rerum itaque reprehenderit possimus vero delectus deleniti consequatur! Iste odit saepe laboriosam fuga? Culpa facilis iusto dolorum voluptatibus, nobis reprehenderit, nulla, ea amet recusandae odio sint?
                            </p>
                            <button>
                                Join as an Expert
                            </button>
                        
                        </div>

              

                       
                            </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default SectionThreeExpert