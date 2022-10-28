import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDb } from '../../../../../store/Slices/Dashboard';
import styles from './Dashboard.module.css'
import Chart from "react-apexcharts";
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { MdOutlinePending } from 'react-icons/md'
import { FaRegSmileBeam } from 'react-icons/fa'
import { AiOutlinePercentage } from 'react-icons/ai'

function Dashboard(): JSX.Element {
  const dispatch = useDispatch<any>();
  const [cl, setCl] = React.useState<Boolean>(true);
  const { isLoading, data } = useSelector((state: any) => state.dashboard);

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
        categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
      ,
        fill:{
          colors: ['#F9A826']
        }
    },

    series: [
      {
        name: "Tasks",
        data: [30, 40, 45, 50, 449, 68, 5]
      }

    ]

  })


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
                      <HiOutlineCurrencyDollar />


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
                      <h3>Success Rate </h3>
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
                    type="bar"

                  />
             
                </div>
              </div>
              <div className="col-md-7">



              </div>
            </div>
          </div>











        </div>

      </div>


    </React.Fragment>
  )
}

export default Dashboard