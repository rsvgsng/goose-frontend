import React from 'react'
import styles from './Assignment.module.css'
import { Button, Slider, InputNumber } from 'antd'
import useTimer from '../../../../misc/Timer'
import { MessageFilled, ClockCircleFilled, LoadingOutlined } from '@ant-design/icons'

const Assignment: React.FC = (): JSX.Element => {

    const { days, hours, minutes, seconds } = useTimer("2022-10-30")
    const [currpercent, setCurrpercent] = React.useState(0)
    return (
        <div className={styles.assignment__section__wrapper}>
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.current__assignments}>
                        <h3>Current Activity</h3>

                        <div className={styles.current__assignments__wrapper}>

                            <div className="row center">
                                <div className="col-md-10">
                                    <div className={styles.current__assignments__wrapper__title}>
                                        <div className={styles.assignment__section__small__meta}>

                                            <span className={styles.assignment__section__small__meta__item}>
                                                <LoadingOutlined />  On Progress
                                            </span>
                                        </div>
                                        <h1>Assignment on Accounting And Finance</h1>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ea earum, dicta enim, amet sapiente dolorum aliquam voluptates architecto atque dignissimos! Inventore rerum explicabo earum repudiandae velit doloremque? Repellat, in.</p>

                                </div>
                                <div className="col-md-2">
                                    <div className={styles.current__assignments__wrapper__action}>
                                        <Button type="primary" shape="round" size="large" icon={<ClockCircleFilled />} block>
                                            {days}d {hours}h {minutes}m {seconds}s
                                        </Button>
                                        <Button type="primary" shape="round" size="large" icon={<MessageFilled />} block>
                                            Message Admin
                                        </Button>
                                        <Button type="primary" shape="round" size="large" icon={<MessageFilled />} block>
                                            Finished ?
                                        </Button>
                                        <Button type="primary" shape="round" size="large" icon={<MessageFilled />} block>
                                            Finished ?
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.progress__bar__current}>
                                <p>How much percent have you completed the task ?</p>
                                <div className="row">
                                    <div className="col-md-11">
                                        <Slider
                                            defaultValue={currpercent}
                                            onChange={(value) => setCurrpercent(value)}
                                            value={currpercent}
                                            min={0}
                                            max={100}
                                        />
                                    </div>


                                    <div className="col-md-1 ">
                                        <Button type="primary" block  >
                                            Update {currpercent < 1 ? '' : currpercent + '%'}
                                        </Button>
                                    </div>
                                </div>

                            </div>

                        </div>






                    </div>
                </div>




            </div>


            <div className={styles.past__assignments}>
                <h3>Past</h3>

            </div>


        </div>
    )
}

export default Assignment