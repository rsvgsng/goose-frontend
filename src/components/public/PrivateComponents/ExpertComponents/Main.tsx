import { Badge, Avatar, Drawer, Layout,List, Space } from 'antd';
import React from 'react'
import { MdNotifications, MdLogout } from 'react-icons/md'
import Sidebar from './Dashboard/Sidebar'
import styles from './Main.module.css'
import { Outlet } from 'react-router-dom';
function Main({ children }: any) {
  const { Header, Content, Footer, Sider } = Layout;

  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      {/* <Drawer
        placement="top"
        open={visible}
        closeIcon={false}
        onClose={() => setVisible(false)}
        height={500}
        extra={<div className={styles.close} onClick={() => setVisible(false)}>X</div>}
        title="Notifications"
      >
        
        <List
    itemLayout="vertical"
    

    dataSource={[
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ]}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
        </Drawer> */}
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
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              paddingLeft:'20px',
              paddingRight:'20px',
              height: '64px',

            }}

          >

            <div className={styles.items}>
           
              <Space 
              size={20}
              >
              <Badge size='default' count={51}>
                <Avatar  onClick={()=>setVisible(true)}   icon={<MdNotifications/>}     size="large" />
              </Badge>
              <Avatar icon={<MdLogout/>} size="large"  onClick={
                () => {
                  localStorage.removeItem('token');
                  window.location.reload();
                }
              }/>
              {/* 1 egg =  {0.10061349694890}$ */}
              </Space>
             
        
          
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
