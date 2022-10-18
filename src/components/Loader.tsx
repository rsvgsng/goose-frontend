import React from 'react'
import styles from './Loader.module.css'
import {BiLoader} from 'react-icons/bi'
function Loader() {
  return (
    <div className={styles.loaderwrapper}>
            
        <div className={styles.loader}>
            <BiLoader />
            </div>
    </div>
  )
}

export default Loader