import React from "react"
import styles from './NavBar.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {Link} from 'react-router-dom'

const NavBar: React.FC = (): JSX.Element => {


    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (
        <React.Fragment>
            {/* Drawer */}
        

               <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className={styles.drawer__nav}
                style={{
                    boxShadow:'0px 0px 15px 5px #515251 ',
                    background: 'rgb(241, 255, 233)',
                    transitionDuration:'300ms',
                   
                }}
            >
                    <section className={styles.drawer__phone__section}>
                     <div className="container">
                    <div className="row">
                        <div className={styles.nav__drawer__items}>
                            <Link to="/" onClick={()=>{setIsOpen(false)}}>
                            <h2>Home</h2>
                            </Link>
                            <Link to="/login" onClick={()=>{setIsOpen(false)}}>
                            <h2>Login</h2>
                            </Link>
                            <Link to="/signup" onClick={()=>{setIsOpen(false)}}>

                            <h2>Signup</h2>
                            </Link>
                            <h2>About Us</h2>
                            <h2>Blogs</h2>
                        </div>
                    </div>
                </div>     
                    </section>
              



            </Drawer>
            <div className="container-fluid  " >
                <div className="row" style={{ background: '#F1FFE9' }}>

                    <div className={styles.nav_main}>

                        <Link to="/">
                        <div className={styles.left_items}>
                            <img src="https://i.ibb.co/PZq5M8x/Right-logo-1.png" className="img-fluid" />
                        </div>
                        </Link>
                        <div className={styles.right_items}>
                  
                                <div className={styles.phone_menu}>
                                <GiHamburgerMenu onClick={toggleDrawer}/>
                                </div>
                            <ul>
                                <li>About Us</li>
                                <li>Blog</li>
                                <Link to={'/login'}  ><li>Login</li></Link>
                                <Link to={'/signup'}  > <li><button style={{padding:'10px'}}>Signup</button></li> </Link>
                                
                            </ul>
                        </div>

                    </div>

                </div>
            </div>



            
        </React.Fragment>
    )
}


export default NavBar