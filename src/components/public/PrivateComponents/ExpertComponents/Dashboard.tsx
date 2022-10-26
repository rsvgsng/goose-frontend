import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { fetchDb } from '../../../../store/Slices/Dashboard';


function Dashboard (): JSX.Element {
  const dispatch = useDispatch<any>();
  const [cl, setCl] = React.useState<Boolean>(true);
  const {isLoading,data} = useSelector((state: any) => state.dashboard);
  
  React.useEffect(() => {
    dispatch(fetchDb())
  }, []);


  if(isLoading) return <></>


  if(data.code==401){
    localStorage.removeItem('token');
    alert(data.msg);
    window.location.reload();
  }


  return (
    <React.Fragment>
      {data.msg}
      dasdsa
    </React.Fragment>
  )
}

export default Dashboard