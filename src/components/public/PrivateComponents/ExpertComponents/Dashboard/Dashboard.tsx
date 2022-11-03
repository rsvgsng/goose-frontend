import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDb } from '../../../../../store/Slices/Dashboard';
import styles from './Dashboard.module.css'
import Chart from "react-apexcharts";
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdOutlinePending ,MdLeaderboard} from 'react-icons/md'
import { FaRegSmileBeam } from 'react-icons/fa'
import { AiOutlinePercentage, AiFillLike, AiFillDislike } from 'react-icons/ai'
import { Tabs, Divider, Steps, Button } from 'antd';
import { GiEasterEgg } from 'react-icons/gi'

import { TiTick } from 'react-icons/ti'

function Dashboard(): JSX.Element {
  const dispatch = useDispatch<any>();
  const [cl, setCl] = React.useState<Boolean>(true);
  const { isLoading, data } = useSelector((state: any) => state.dashboard);
  const { Step } = Steps;

  React.useEffect(() => {
    dispatch(fetchDb())
  }, []);

  // chart
  var chart = ({
    options: {
      chart: {
        id: "basic-bar",

        toolbar: {
          show: false,

        },

      },
      xaxis: {
        categories: ["Week 1","Week 2","Week 3","Week 4"]

        ,
        labels: {
          style: {
            colors: 'white',
            fontSize: '12px'
          },
        }
        
      },
      yaxis: {
        labels: {
          style: {
            colors: 'white'
          }
        }
      }
      
    },

    series: [
      {
        name: "Tasks",
        data: [3, 0, 4, 2]
      }

    ]

  })

  function ith(i:any) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


  if (isLoading) return <></>


  if (data.code == 401) {
    localStorage.removeItem('token');
    alert(data.msg);
    window.location.reload();
  }


  return (
    <React.Fragment>


      <div className={styles.section__dashboard}>
        <div className="container-fluid ">

          {/* Front Row */}
          <div className="row">
            <div className="col-md-12 ">
              <div className="row">
                <div className="col-md-3">

                  <div className={styles.title__block}>


                    <div className={styles.title__block__title}>
                      <h1>3973</h1>
                      <h3>Total Earned </h3>
                    </div>
                    <div className={styles.right__icon}>
                      <GiEasterEgg />


                    </div>
                  </div>


                </div>












                <div className="col-md-3">
                  <div className={styles.title__block}>


                    <div className={styles.title__block__title}>
                      <h1>0</h1>
                      <h3>Pending Earnings</h3>
                    </div>
                    <div className={styles.right__icon}>
                      <MdOutlinePending />


                    </div>
                  </div>
                </div>







                <div className="col-md-3">
                  <div className={styles.title__block}>


                    <div className={styles.title__block__title}>
                      <h1>74%</h1>
                      <h3>Acceptance Rate </h3>
                    </div>
                    <div className={styles.right__icon}>
                      <AiOutlinePercentage />


                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className={styles.title__block}>
                    <div className={styles.title__block__title}>
                      <h1>32</h1>
                      <h3>Times Helped</h3>
                    </div>
                    <div className={styles.right__icon}>
                      <FaRegSmileBeam />
                    </div>
                  </div>
                </div>



              </div>

            </div>
            {/* Second row */}



          </div>

          {/* Second Row */}
          <div className={styles.section__second}>

            <div className="row">

              <div className="col-md-5">
                <div className={styles.chart__left}>
                  <div className={styles.earn__chart}>
                    <h1> Accepted Tasks this Week</h1>
                  </div>
                  <Chart
                    options={chart.options}
                    series={chart.series}
                    type="line"

                  />

                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.running__tasks}>
                      <h1>Current Activity</h1>

                      <Steps progressDot current={2} direction="vertical">
                        <Step title="Posted" description="A assignment was posted on 5th October." />
                        <Step title="Accepted" description="You accepted the assignment on 5th October." />
                        <Step title="In Progress" description="This assignment must be compeleted by 10th October." />
                        <Step title="Finish" />
                      </Steps>
                      <div className={styles.bottom__activity}>
                        <Button type="primary" 
                        style={{
                          backgroundColor: 'rgb(255 255 255 / 44%)',
                          borderColor: 'rgb(255 255 255 / 44%)'
                      }}>View</Button>

                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">

                    <div className={styles.profile__section}>

                      <div className={styles.profile__section__image}>
                        <img src="https://i.ibb.co/qd8pGZB/Tj-M7s-CNz-400x400.jpg" alt="profile" />
                        <TiTick />
                      </div>
                      <div className={styles.profile__section__name}>
                        <h1>Risav Ghising</h1>
                      </div>




                      <div className={styles.profile__section__meta__wrapper}>
                        <div className={styles.profile__meta__box}>
                          <AiFillLike />
                          <h1>412</h1>
                        </div>


                        <div className={styles.profile__meta__box}>
                          <AiFillDislike />
                          <h1>10</h1>
                        </div>

                        <div className={styles.profile__meta__box}>
                          <MdLeaderboard />
                          <h1>{ith(55)}</h1>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>











        </div>

      </div>


    </React.Fragment>
  )
}

export default Dashboard



function DetailsComponentTab() {
  return (
    <React.Fragment>
      <div className={styles.details__block__content}>
        <div className={styles.details__block__content__title}>
          <h1>Maths algebra problems</h1>
        </div>
        <div className={styles.details__block__content__desc}>
          <p>Assignment 1 is a assignment that is given to you by the admin. You must complete this assignment by 10th October. </p>
        </div>
        <div className={styles.details__block__content__date}>
          <p>Submitted on : 10th October</p>
          <p>Status: Completed</p>
        </div>

      </div>
      <hr />
    </React.Fragment>
  )
}