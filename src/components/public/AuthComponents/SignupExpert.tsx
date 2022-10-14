import React from 'react'
import styles from './SignupExpert.module.css'
import { Form, Input, Button, Row, Col, Select, DatePicker, notification, } from 'antd';

const SignupExpert: React.FC = () => {
    const { Option } = Select;

    // fullname email gender location password userName
    return (
        <section className={styles.expert__section}>
            <div className={styles.form__wrapper}>
                <div className={styles.form__title}>
                    <p>Signup to help others </p>
                </div>
                <Form
                    layout="vertical"
                >
                    <Row gutter={[20, 15]} >
                        <Col lg={12} sm={24} xs={24} md={24} >
                            <Form.Item
                                name="fullName"
                                label="Full Name"
                                rules={[{ required: true, message: 'Please input your Full Name!' }]}
                            >

                                <Input name='fullname' placeholder='Full Name' />
                            </Form.Item>


                        </Col>

                        <Col lg={12} sm={24} xs={24} md={24} >

                            <Form.Item
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please enter valid email!' }]}

                                label="Email"

                            >
                                <Input name='fullname' placeholder='Email' />
                            </Form.Item>

                        </Col>
                    </Row>

                    <Row gutter={[20, 15]} >

                        <Col lg={12} sm={24} xs={24} md={24} >

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your Password!' }]}

                            >
                                <Input.Password name='password' placeholder='Password' />

                            </Form.Item>
                        </Col>

                        <Col lg={12} sm={24} xs={24} md={24} >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please provide your username!' }]}

                            >
                                    <Input name='username' placeholder='Username' />
                            </Form.Item>
                        </Col>


                      
                    </Row>

                        <Row gutter={[20, 15]} >


                        <Col lg={12} sm={24} xs={24} md={24} >
                            <Form.Item
                                label="Gender"
                                name="gender"
                                rules={[{ required: true, message: 'Please enter your email!' }]}

                            >
                                <Select placeholder="Gender" >
                                    <Option value="MALE">MALE</Option>
                                    <Option value="FEMALE">FEMALE</Option>
                                    <Option value="OTHERS">OTHERS</Option>

                                </Select>

                            </Form.Item>
                        </Col>
                        <Col lg={12} sm={24} xs={24} md={24} >
                            <Form.Item
                                label="Country"
                                name="country"
                                rules={[{ required: true, message: 'Please select your Location!' }]}

                            >
                                <Select placeholder="Gender" >
                   
                                <Option value="Nepal">Nepal</Option>
                      <Option value="India">India</Option>
                      <Option value="Canada">Canada</Option>
                      <Option value="USA">USA</Option>
                      <Option value="UK">UK</Option>

                                </Select>

                            </Form.Item>
                        </Col>
                    

                            </Row>


                            <Button
                   
                   style={{marginTop:'30px'}}
                   type="primary"
                   block
                    // loading={loadingg}
                   htmlType='submit'

                   >SIGNUP</Button>


                </Form>
            </div>
        </section>
    )
}

export default SignupExpert