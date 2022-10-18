import styles from './DocumentsStep.module.css'
import { Form, Input, Button, Row, Col, Select,notification, Upload } from 'antd'
import {getDocs} from '../../misc/Fetchers';
import React, { useState,useEffect } from 'react';
import {AiOutlineUpload} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Loader';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const DocumentsStep = (): JSX.Element => {
    const [cl,setCl] = useState(true)
  let navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [education, setEducation] = useState<any>()

  
  
  useEffect(() => {
    try {
         getDocs()
         .then(data => {
              if(data.code===400){
                      navigate('/')
                        setCl(false)
                    } 
            if(data.documentSubmitted===true) return navigate('/dashboard')
            notification.info({message:'Please upload your documents',description:'Please upload your documents to complete your registration',placement:'top'})
            setEducation(data)
            setCl(false)
        })
    } catch (error) {
        return navigate('/login/expert')
    }   
    

    },[])
    console.log(cl)
        const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [profileList,setProfileList] = useState<UploadFile[]>([]);


    const { Option } = Select;
    const { TextArea } = Input;
 


    const onFinish =async (values: any) => {
        
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('documents', file as RcFile);
        });
    
        profileList.forEach(file => {
            formData.append('profile', file as RcFile);
          });
          const {about,canhelpWith,howHelp,studyLevel} = values;
            formData.append('about', about);
            formData.append('canHelpWith', canhelpWith);
            formData.append('howHelp', howHelp);
            formData.append('studyLevel', studyLevel);
            setLoading(true)
      await  fetch('http://localhost:8000/api/v1/signup/w/initial',{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body:formData
        })
        .then(res => res.json())
        .then(data => {

                if(data.code===200){
                       notification.success({
                        message:data.msg
 
                    })
                    return navigate('/dashboard')
                }
             

               
                   if(data.code===403)
           
                    return   data.errors.map((error:any) => {
                        notification.error({
                            message:error.msg
                        })
                    })
       
                   return notification.error({
                       message:'Error',
                       description:data.msg
                   })
   
       
                   
                })
                setLoading(false)
            }

 const docUpload: UploadProps = {
    onRemove: file => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },

    beforeUpload: file => {
      setFileList([...fileList, file]);
      return false;
    },

    fileList,
  };

    const profileUpload: UploadProps = {
        onRemove: file => {
            const index = profileList.indexOf(file);
            const newFileList = profileList.slice();
            newFileList.splice(index, 1);
            setProfileList(newFileList);
            }
        ,
        beforeUpload: file => {
            setProfileList([...profileList, file]);
            return false;
        }
        ,
        fileList: profileList,
    
    }



    if(cl) return (<Loader />)

    return (


 
            <section className={styles.document_section} >
     
                <div className={styles.document_wrapper}>
                    <div className={styles.document_title}>
                        <p>FINAL STEP </p>
    
                    </div>
    
                    <div className={styles.document_container}>
    
                        <Form
                            layout="vertical"
                            onFinish={onFinish}
                            >
    
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="about"
                                        label="Introduce yourself in detail."
                                        
                                        rules={[{ required: true, message: 'Required!' }]}
                                    >
    
                                        <TextArea name='fullname' rows={9} maxLength={800} placeholder='Max 800 characters' />
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="profile"
                                        label="Your Legit Profile Picture ( Must be your face )"
                                        rules={[{ required: true, message: 'Required!' }]}
                                        >
                                       <Upload  multiple={false}
                                        {...profileUpload}
    
                                       >
                                        <Button   >Upload Profile Picture</Button>
                                        </Upload>
                                 
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="howHelp"
                                        label="Tell us how can you help others. (Experiences/Acedemics/Intrests)"
    
                                        rules={[{ required: true, message: 'Required!' }]}
                                    >
    
                                        <TextArea allowClear rows={9} maxLength={600} placeholder='Max 600 characters' />
    
    
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
    
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="studyLevel"
                                        label="Maximum level of education you have acheived so far."
    
                                        rules={[{ required: true, message: 'Required!' }]}
                                    >
                                        <Select placeholder="Gender" >
                                            <Option value="+2">+2</Option>
                                            <Option value="Bachelor">Bachelor</Option>
                                            <Option value="Masters">Masters</Option>
                                            <Option value="Ph.D">Ph.D</Option>
    
                                        </Select>
    
    
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
                          
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="canhelpWith"
                                        label="Subjects that you are confident to help others with."
    
                                        rules={[{ required: true, message: 'Required!' }]}
                                    >
                                        <Select
                                            mode='multiple'
                                            
                                            disabled={education ? false : true}
                                            loading={education ? false : true}
                                            placeholder={education ? 'Select' :'Please wait..'}>
    
                                                {
                                                    education?.subs?.map((item:any) => {
                                                        return  <Option value={item}>{item}</Option>
                                                    })
                                                }
                                                
                                        </Select>
    
    
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
    
                            <Row gutter={[20, 15]} >
                                <Col lg={24} sm={24} xs={24} md={24} >
                                    <Form.Item
                                        name="documents"
                                        label="Submit your atleast 3 recent Acedemic Documents. eg. Transcript, Certificate, etc."
    
                                        rules={[{ required: true, message: 'Required!' }]}
                                    >
                                       <Upload
                                       accept='.png,.jpg,.jpeg'
                                       {...docUpload}
                                       listType = 'picture-card'
                                          
                                         >
                                        <Button icon={<AiOutlineUpload />}/>
                                        </Upload>
                                       
                                    </Form.Item>
    
    
                                </Col>
    
    
                            </Row>
    
    
    
    
    
                            <Button
                       
                       style={{marginTop:'10px'}}
                       type="primary"
                       block
            
                       htmlType='submit'
                         loading={loading}
                         disabled={loading}
                       >Submit</Button>
    
    
                        </Form>
                    </div>
    
    
                </div>
    
            </section>



            )
                                            
    }





export default DocumentsStep