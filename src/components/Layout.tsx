import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
function Layout({ children }: any) {
  const [shownav, setShownav] = React.useState<Boolean>(true);

  React.useEffect(() => {
    let a = localStorage.getItem('token')
    if (!a) return setShownav(false)
  }, [])
  return (
    <React.Fragment>
      
       <NavBar/>

          <Outlet  />

      <Footer />

        </React.Fragment>   
  )
}

export default Layout