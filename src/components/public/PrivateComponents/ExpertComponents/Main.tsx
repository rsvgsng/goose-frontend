import { Badge, Avatar, Menu,List, Dropdown, Layout } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { MdNotifications, MdLogout } from 'react-icons/md'
import Sidebar from './Dashboard/Sidebar'
import styles from './Main.module.css'
import { Outlet } from 'react-router-dom';
function Main({ children }: any) {
  const { Header, Content, Footer, Sider } = Layout;

  const { isLogged } = useSelector((state: any) => state.isLoggedIn);

  const menu = (
        <List
        >
          <List.Item>
            <List.Item.Meta
              // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">Ant Design Title 1</a>}
              description="Ant Design, a design "
            />
          </List.Item>
        </List>
  )
  return (
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

          <Sidebar />

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
              paddingLeft:'20px',
              paddingRight:'20px',
              height: '64px',
            }}

          >
            <div className="left_items">
 
              Welcome on board ! Rishav

            </div>


            <div className="right_items">
              <Dropdown overlay={menu} trigger={["click"]} >
              <Badge size='small' count={5}>
                <Avatar  icon={<MdNotifications/>}    size="large" />
              </Badge>
              </Dropdown>
            </div>

          </Header>

          <Content >
            <div className={styles.content__container}>
              <Outlet />
            </div>
          </Content>



        </Layout>
      </Layout>


    </React.Fragment>

  )
}

export default Main
