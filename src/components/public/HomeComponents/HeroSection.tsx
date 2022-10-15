import React, { useState } from "react"
import DropdownList from "react-widgets/DropdownList";
import { Link } from "react-router-dom";
import { Modal } from 'antd';


import styles from './HeroSection.module.css'
const HeroSection: React.FC = (): JSX.Element => {
    const [subjects, setSubjects] = useState<string>("")
    const [count, setCount] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [lado, setLado] = useState<string>("")
    const helps: string[] = ["EXAM ", "NOTES", "DOUBT", "SOLUTIONS", "PRACTICE", "PAPERS"]
    const level: string[] = ["Secondary Level","Bachelor", "Master", "PhD"]
    const [isopen, setIsOpen] = useState<boolean>(false)

const getSubject  = async  ()  : Promise<void>=>{
    setLoading(true)
    const dick = fetch("https://jsonplaceholder.typicode.com/todos/1")
    const res = await dick
    const data = await res.json()
    setLado(data)
    setLoading(false)
}
const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

    const interVal = setInterval(() => {

        if (count >= helps.length) {
            setCount(0)
            clearInterval(interVal)
            return
        }
        setSubjects(helps[count])
        setCount(count + 1)
        clearInterval(interVal)

    }, 4000)



    return (

        <div className={styles.heroSectionWrapper}>
            <div className="container"  >

                <div className="row center_hero" >
                <Modal
                
                open={isopen}
                 onOk={handleOk}
                  onCancel={handleCancel}
        
                  centered
                
                >
                    dasda
                </Modal>


                    <div className="col-lg-6  col-md-12  ">

                        <div className={styles.leftHero}>
                            <h2>
                                Want Help with your  <span> {subjects ? subjects : "NOTES"}</span> ?
                            </h2>

                            <p>
                                
                                Join a network of more than 250 experts.
                                By assisting others, you can profit from your knowledge.
                            </p>
                            <Link to="/signup" >
                            <button>
                                Join Now

                            </button>
                            </Link>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles.heroImage}>
                            <img src="https://i.ibb.co/hKkNjd1/Group-3.png" alt="" />
                        </div>

                    </div>
                    {/* Search Job */}

                    <div className={styles.searchJob}>
              
                        <div className="row center_hero" >
                            <div className="col-lg-5 col-md-12">
                                <div className={styles.drop__down__hero}>
                                <DropdownList  data={[...level]} defaultValue="Select Your Level" />
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                            <div className={styles.drop__down__hero}>

                            <DropdownList  data={["EXAM", "NOTES", "DOUBT", "SOLUTIONS", "PRACTICE", "PAPERS"]} defaultValue="Select your subject" />
                                </div>
                            </div>


                            <div className="col-lg-2 col-md-12">
                            <div className={styles.drop__down__search}>

                                <button    onClick={()=>{getSubject();setIsOpen(true)}} > 
                                    {loading?'loading...':'Search'}
                                </button>
                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>




    )
}

export default HeroSection