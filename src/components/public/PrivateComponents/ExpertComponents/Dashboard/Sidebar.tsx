import React from 'react'
import { Menu, Button } from "antd";
import styles from './Sidebar.module.css'
import { AiOutlineHome } from 'react-icons/ai'
import {useNavigate } from 'react-router-dom';
import { GiKiwiBird ,GiInfo} from 'react-icons/gi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { code } = useSelector((state: any) => state.dashboard.data);
  
  const navigate = useNavigate();

  const unverified = [
    { label: 'Verify', key: '1', icon: <HiOutlineDocumentText /> ,
    onClick : () => navigate('/')
    },  
    { label: 'About', key: '2', icon: <GiInfo /> ,
    onClick : () => navigate('/about')
    },
  ]



  const items = [
    { label: 'Dashboard', key: '1', icon: <AiOutlineHome /> ,
    onClick : () => navigate('/')
    },
    { label: 'Tasks',
     key: '2',
      icon: <AiOutlineHome />,
      onClick : () => navigate('/hi')
      } 
  ];


    
  return (
    <React.Fragment>
      <div className={styles.logo} >
        <GiKiwiBird /><span>Goose</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ paddingTop: '0px', height: '100vh' }}
        defaultSelectedKeys={['1']}
        items={code==400||code == 403?unverified:items} />

    </React.Fragment>

  )
}

export default Sidebar