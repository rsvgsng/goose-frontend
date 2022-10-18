import React from 'react'
import Loader from '../../../Loader';
import { useNavigate } from 'react-router-dom'

function Dashboard() {

const [error, setError] = React.useState<any>();
const [cl, setCl] = React.useState<Boolean>(true);
let navigate = useNavigate();

React.useEffect(() => {

      ( async ():Promise<void> => {
          try {
            const res = await fetch("http://localhost:8000/api/v1/dashboard", {
              method: "GET",
              headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            });
  
            const parseData =  await res.json();
            if(parseData.code===400)  
            {
              return navigate('/setup/initial/expert');
            }
            if(parseData.code===403){
               setError(parseData?.msg)
              return setCl(false)
            }
            if(parseData.code===401){
              return navigate('/login/expert');
            }
            if(parseData.code===200){
              return setCl(false)
            }

          } catch (error) {
            localStorage.removeItem('token');
            return navigate('/login/expert');
          } 
     
        })()
   

},[])


  if(cl) return (<Loader />)



  if(error) return(
    <div>
      <h1>{error}</h1>
    </div>
  )

  return (
    <React.Fragment>
      <div> 
       <h1 style={{color:"red"}}>
         Welcome To the dash Board
          You have Successfully verified both 
       </h1>
      </div>

</React.Fragment>
  )
}

export default Dashboard