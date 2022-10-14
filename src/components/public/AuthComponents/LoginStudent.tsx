import React from 'react'
import styles from './LoginExpert.module.css'
import {RiLoginCircleFill} from 'react-icons/ri'
const LoginExpert: React.FC = (): JSX.Element => {
  return (

    <div className={styles.LoginExpert___section}>

      <div className="container">
        <div className={styles.expert__wrapper}>
          <div className="row">
            <div className="col-md-12 col-xs-12 col-lg-6 p-0">
              <div className={styles.expert__wrapper__left}>

                <h2>
                  <span>STUDENT <br /></span> Login
                </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus iusto labore nesciunt ratione iure ea a ad hic, atque dicta, sint quibusdam necessitatibus vero expedita qui adipisci nobis! Nulla, odit cumque necessitatibus voluptatum ab dolorem veniam recusandae reprehenderit sequi esse sed labore consequatur distinctio, delectus obcaecati. Quas, culpa quam voluptatum autem officia in voluptates a debitis reprehenderit numquam, facilis magni.
          </p>
              </div>
            </div>
            <div className="col-md-12 col-xs-12 col-lg-6 col p-0">
              <div className={styles.expert__wrapper__right}>
                <RiLoginCircleFill/>
                <h3>Hello Again!</h3>
                <p>Sign in to  your account</p>

               
                <span> STUDENT LOGIN</span>
               
                <form >
                 
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Password" />
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginExpert