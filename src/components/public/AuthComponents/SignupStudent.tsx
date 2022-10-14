import React,{useState} from 'react'
import styles from './SignupStudent.module.css'
import { Form, Input, Button, Row, Col, Select, DatePicker, notification, } from 'antd';

const { Option } = Select;

const SignupStudent: React.FC = () => {
  const [loadingg,setLoading] = useState(false)
  
  const   onFinish =  async (values: any) => {
    setLoading(true)
      await  fetch('http://localhost:8000/api/v1/signup/m', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(values),
      })
      .then(res => res.json())
      .then(data => {
       if(data.code===200){
        notification.success({
          message: 'Acount Created Successfully. Check your email to verify your account',
        })
       }else{
        notification.error({
          message: 'Error',
          placement:'topRight',
          description:data.msg
           
        })
       }
      })
      setLoading(false)

    };
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  

  return (

    <section className={styles.SignupStudent__section}>
      <div className={styles.form__wrapper}>
        <div className={styles.form__title}>
          <p>Signup to get help from others!</p>
        </div>



            <Form 
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}

            layout="vertical">

              <Row gutter={[20, 15]} >
                <Col lg={12} sm={24} xs={24} md={24} >
                  <Form.Item
                    name="fullName"
                    label="Full Name"
                    rules={[{ required: true, message: 'Please input your Full name!' }]}

                  >
                    <Input name='fullname' placeholder='Full Name' />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24} md={24}>

                  <Form.Item

                    name={'email'}
                
                    label={'Email'}
                    rules={[{ required: true, type:'email', message: 'Please Input valid email!' }]}

               
                  >

                    <Input name='email' placeholder='Your Email' />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[20, 15]} >

                <Col lg={12} sm={24} xs={24} md={24}>
                  <Form.Item
                    name='userName'
                    label={'Your Username'}
                    rules={[{ required: true, message: 'Please input your Username!' }]}


                  >

                    <Input name='username' placeholder='Your Username' />
                  </Form.Item>
                </Col>



                <Col lg={12} sm={24} xs={24} md={24}> 
                  <Form.Item
                    name='password'
                    help='Password must be 8 characters long'
                    label={'Password'}
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input.Password minLength={8}   name='password' placeholder='Your Password' />
                  </Form.Item>
                </Col>



              </Row>
              <Row gutter={[20, 15]} >
                <Col lg={12} sm={24} xs={24} md={24}>
                <Form.Item
                    name={'gender'}
                    label={'Your Gender'}
                    rules={[{ required: true, message: 'Please select your Gender!' }]}


                  >
                    <Select    >

                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                      <Option value="Others">Others</Option>
                    </Select>
                  </Form.Item>
                  </Col>
                  <Col lg={12} sm={24} xs={24} md={24}>
                  <Form.Item
                    name={'location'}
                    label={'Your Country'}
                    rules={[{ required: true, message: 'Please select your Country!' }]}


                  >

                    <Select
                       >

                      <Option value="Nepal">Nepal</Option>
                      <Option value="India">India</Option>
                      <Option value="Canada">Canada</Option>
                      <Option value="USA">USA</Option>
                      <Option value="UK">UK</Option>

                    </Select>
                  </Form.Item>
                </Col> 
                  </Row>

              <Row gutter={[20, 15]} >
                <Col lg={12} sm={24} xs={24} md={24}>
                  <Form.Item
                    name={'qualification'}
                    label={'Your Running Education'}
                    rules={[{ required: true, message: 'Please provide your Qualification!' }]}

                    help="Eg Bachelor's in Computer Science"
                    >
                      <Input name='qualification' placeholder='Your Education' />

                    </Form.Item>
                    </Col>

                  

                <Col lg={12} sm={24} xs={24} md={24}>
                    <Form.Item
                    name="wantshelpIn"
                    label="Intrested Subject"
                    rules={[{ required: true, message: 'Please select Intrested Subjects!' }]}


                    >
                        <Select mode='multiple'  placeholder="Intrested Subject" >
                            <Option value="HISTORY">HISTORY</Option>
                            <Option value="ENGLISH">ENGLISH</Option>
                            <Option value="ELECTRONICS">ELECTRONICS</Option>
                            <Option value="ACCOUNTS">ACCOUNTS</Option>
                            <Option value="PROGRAMMING">PROGRAMMING</Option>
                            <Option value="ECONOMICS">ECONOMICS</Option>
                            <Option value="PHYSICS">PHYSICS</Option>
                            <Option value="MATHS">MATHS</Option>
                            <Option value="COMPUTER SCIENCE">COMPUTER SCIENCE</Option>
                            <Option value="ASTRONOMY">ASTRONOMY</Option>
                            </Select>
                    </Form.Item>    
                  </Col>


                </Row>
                    <Button
                   
                    style={{marginTop:'30px'}}
                    type="primary"
                    block
                     loading={loadingg}
                    htmlType='submit'

                    >SIGNUP</Button>




            </Form>






      </div>

    </section>
  )
}

export default SignupStudent