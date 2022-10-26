import { Affix, Menu,Dropdown, Layout } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import {MdNotifications,MdLogout} from 'react-icons/md'
import Sidebar from './Dashboard/Sidebar'
import styles from './Main.module.css'
import { Outlet } from 'react-router-dom';
function Main({ children }: any) {
  const { Header, Content, Footer, Sider } = Layout;

  const { isLogged } = useSelector((state: any) => state.isLoggedIn);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Logout
        </a>
      </Menu.Item>
      </Menu>)
  return(
  <React.Fragment>
<Layout hasSider>


    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="dark"
      style={{
        overflow: 'hidden',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >

<Sidebar/>  
      
    </Sider>
    <Layout
      className={styles.siteLayout}
      
    >


      <Header
        className="site-layout-background"
        style={{
          padding: "0",
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}

      >
          <div className="left_items">
              Left Items
            </div>        


          <div className="right_items">
          <Dropdown overlay={menu} arrow>
            <a className="ant-dropdown-link" onClick={e => {e.preventDefault();localStorage.removeItem("token");window.location.href='/'}}>
            <MdLogout/>
            </a>
          </Dropdown>   
            </div>        
        
         </Header>



      <Content
 
      >
  
          <Outlet/>
        

      </Content>




      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      
      </Footer>
    </Layout>
  </Layout>


    </React.Fragment>

  )
}

export default Main
