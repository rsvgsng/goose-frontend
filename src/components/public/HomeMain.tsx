import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import TrustedBy from './HomeComponents/TrustedBy'
import AssignmentShow from './HomeComponents/AssignmentShow'
import SectionThreeExpert from './HomeComponents/SectionThreeExpert'
import TalentCategory from './HomeComponents/TalentCategory'
import SectionThreeStudent from './HomeComponents/SectionThreeStudent'
import { useSelector } from 'react-redux'
// This file contains evertything that public sees

const HomeMain:React.FC= ():JSX.Element  => {
  const {isLogged} =  useSelector((state: any) => state.isLoggedIn);

  return (
    
    <React.Fragment>
      <HeroSection/>
      <TrustedBy/>
      <AssignmentShow/>
      <SectionThreeStudent/>
      <TalentCategory/>
    <SectionThreeExpert/>


    </React.Fragment>
  )
}


export default HomeMain