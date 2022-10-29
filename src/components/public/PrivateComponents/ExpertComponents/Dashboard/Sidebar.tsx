import React from 'react'
import { Menu, Badge } from "antd";
import styles from './Sidebar.module.css'
import { GiKiwiBird ,GiInfo} from 'react-icons/gi'
import {MdOutlineSettings,MdOutlineAttachMoney,MdError,MdOutlineAssignmentTurnedIn,MdHome,MdMessage} from 'react-icons/md'
import {useNavigate } from 'react-router-dom';

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
    onClick : () => navigate('/About')
    }

  ]



  const items = [


    { label: 'Dashboard', key: '1', icon: <MdHome /> ,
    onClick : () => navigate('/')
    },

    { label: `Assignments `,
     key: '2',
      icon: <MdOutlineAssignmentTurnedIn />,
      onClick : () => navigate('/Explore')
      }
      ,
      { label: `Messages `, key: '3', icon: <MdMessage /> ,
       onClick : () => navigate('/Messages')
       },
       { label: 'Settings',
       key: '4',
        icon: <MdOutlineSettings />,
        onClick : () => navigate('/Settings')
       } ,
       { label: 'Billing',
       key: '5',
        icon: <MdOutlineAttachMoney />,
        onClick : () => navigate('/Billing')
       } ,
       
       { label: 'Report',
       unverified: true,
       key: '6',
        icon: <MdError />,
        onClick : () => navigate('/Report')
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