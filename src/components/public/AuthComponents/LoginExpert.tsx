import React, { useState,useEffect } from 'react'
import styles from './LoginExpert.module.css'
import { RiLoginCircleFill } from 'react-icons/ri'
import { notification } from 'antd'





const LoginExpert: React.FC = (): JSX.Element => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  const login = async ():Promise<void> =>{
    
    
    if(email==='' || password==='')
    return notification.error({message: 'Error',description: 'Please fill all the fields',})
 
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  return notification.error({message:'Invalid Email'})
    setLoading(true)
    
       try {
        

          await fetch('http://localhost:8000/api/v1/login/w', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })


          .then((res) => res.json())  
          .then((data) => {
           if(data.code==200) {
            localStorage.setItem('token', data.token) 
            notification.success({message: 'Success',description: 'Login Successful',placement:'topRight'})
            
           }else{
             notification.error({message: 'Error',description:data.msg,placement:'topRight'})

           } 
          })

       } catch (error) {
        
       } 


    setLoading(false)
  }





useEffect(() => {

  // get query from the url
  const query = new URLSearchParams(window.location.search)
  if (query.get('success') == 'true') {
    notification.success({
      message: 'Success',
      description: 'Your Account has been activated successfully.',
      placement: 'top'
    })
  }
}, [])





  return (

    <div className={styles.LoginExpert___section}>

      <div className="container">
        <div className={styles.expert__wrapper}>
          <div className="row">
            <div className="col-md-12 col-xs-12 col-lg-6 p-0">
              <div className={styles.expert__wrapper__left}>

                <h2>
                  <span>Expert <br /></span> Login
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus iusto labore nesciunt ratione iure ea a ad hic, atque dicta, sint quibusdam necessitatibus vero expedita qui adipisci nobis! Nulla, odit cumque necessitatibus voluptatum ab dolorem veniam recusandae reprehenderit sequi esse sed labore consequatur distinctio, delectus obcaecati. Quas, culpa quam voluptatum autem officia in voluptates a debitis reprehenderit numquam, facilis magni.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-xs-12 col-lg-6 col p-0">
              <div className={styles.expert__wrapper__right}>
                <RiLoginCircleFill />
                <h3>Hello Again!</h3>
                <p>Sign in to  your account</p>

                <span> EXPERT LOGIN</span>

                <form >


                  <input type="email" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                  <input type="password" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Password" />
                  <br />
                  
                 <button type="button"
                 disabled={loading}
                 onClick={
                      (e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                        login()
                      }
                    } className="btn btn-primary">
                    {loading ? "Processing...": 'Login'}
                    </button>



       
                  

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