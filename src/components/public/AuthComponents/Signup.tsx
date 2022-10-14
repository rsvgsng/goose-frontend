import React from 'react'
import styles from './Login.module.css'
import {GiTeacher} from 'react-icons/gi'
import {TbSchool} from 'react-icons/tb'
import {Link} from 'react-router-dom'
const Login: React.FC = (): JSX.Element => {
    return (
        <section className={styles.login__section}>

            <div className="container">
                <div className={styles.login__wrapper}>
                    <div className={styles.login__title}>
                        <h3>Signup as a Student or Expert</h3>
                        </div>
                        <Link to="/signup/student">
                    <div className={styles.login__form}>
                    <span> <TbSchool/></span>
                   <p>
                      I want help from others.
                    </p>
                    </div>
                    </Link>
            <Link to="/signup/expert">
                    <div className={styles.login__form}>
                   <span><GiTeacher/></span>
                    <p>
                    I want to help others.

                    </p>

                     
                    </div>
                    </Link>
                </div>
            </div>


        </section>


    )
}

export default Login