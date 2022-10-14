import React from 'react'
import HeroSection from './HomeComponents/HeroSection'
import TrustedBy from './HomeComponents/TrustedBy'
import AssignmentShow from './HomeComponents/AssignmentShow'
import SectionThreeExpert from './HomeComponents/SectionThreeExpert'
import TalentCategory from './HomeComponents/TalentCategory'
import SectionThreeStudent from './HomeComponents/SectionThreeStudent'
// This file contains evertything that public sees

const HomeMain:React.FC= ():JSX.Element  => {
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