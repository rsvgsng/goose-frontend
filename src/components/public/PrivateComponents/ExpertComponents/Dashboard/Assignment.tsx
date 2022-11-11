import React from 'react'
import styles from './Assignment.module.css'
import { Button, Slider, Input, Modal, Avatar, Upload } from 'antd'


import useTimer from '../../../../misc/Timer'
import { MdEmojiEmotions } from 'react-icons/md'
import { MessageFilled, ClockCircleFilled, BookOutlined, LoadingOutlined, EyeOutlined, CheckOutlined } from '@ant-design/icons'
import { GiEasterEgg } from 'react-icons/gi'

const Assignment: React.FC = (): JSX.Element => {

    const activetask: Boolean = false
    const taskavailable: Boolean = true


    return (

        <div className={styles.assignment__section__wrapper}>
            {/* <NewAssignment /> */}
            {/* <NoActiveAssignment/> */}
            {/* <HasActiveAssignment /> */}
            <RecentAssignments/>

        </div>

    )
}

export default Assignment


function HasActiveAssignment() {
    const { TextArea } = Input;

    const { days, hours, minutes, seconds } = useTimer("2022-11-30")
    const [currpercent, setCurrpercent] = React.useState(67)
    const [assmodel, setAssmodel] = React.useState(false)
    const [finishass, setFinishass] = React.useState(false)


    return (

        <React.Fragment>

            <Modal title="Assignment Details" width={1500}
                open={assmodel}
                onCancel={() => setAssmodel(false)}
                footer={null}
                onOk={() => setAssmodel(false)}
                bodyStyle={{ background: '#020722db', color: 'white', }}
                wrapClassName={styles.modal__wrapper}
            >


                <div className={styles.modal__wrapper__content}>

                    <div className="row ">
                        <div className="col-md-9">
                            <div className={styles.modal__wrapper__content__left}>
                                <div className={styles.modal__wrapper__content__title}>
                                    <h1>Assignment on Java using OOP Concept</h1>
                                </div>

                                <div className={styles.modal__wrapper__content__desc}>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque libero deserunt, ipsum iste aperiam veritatis expedita atque quaerat quidem deleniti ratione esse nihil, voluptates dolore necessitatibus molestias, iusto impedit nobis. Temporibus aspernatur quam sequi eveniet rem dolores eos asperiores, vitae deserunt sunt expedita soluta voluptate corporis sint pariatur blanditiis, libero, facilis minus voluptas recusandae! Veritatis rem laboriosam ut, odit enim impedit temporibus vel molestias animi hic a earum quasi fugit officia quo eius, cupiditate, velit et excepturi provident quod eum dignissimos assumenda! Corporis inventore soluta, sed ullam officia necessitatibus qui veniam quod. Officia a rem suscipit nisi! Cum sit officiis fuga? Maxime doloremque accusamus aperiam consequuntur eveniet nemo cumque quasi minus asperiores tempore voluptatum excepturi odit dolorem voluptate necessitatibus placeat magnam veritatis, distinctio incidunt et possimus? Sed dolor a incidunt voluptates natus animi culpa sequi vitae aliquam. Odit doloribus, assumenda omnis mollitia praesentium quibusdam saepe voluptatum iusto. Cupiditate aut accusamus, praesentium, eum asperiores eius laboriosam, tenetur voluptate magni dicta dolor cum vel molestiae veniam inventore voluptates repellendus ipsam corporis harum sapiente tempora. Quaerat voluptatum libero ea illo. Quibusdam natus neque culpa maiores error earum accusantium? Deserunt officiis odit esse minima itaque nesciunt tempore officia sint. Fugiat quo distinctio nulla possimus laborum inventore tenetur veritatis modi reiciendis tempore! Mollitia, aliquid? Expedita dignissimos numquam quibusdam accusantium mollitia, impedit architecto necessitatibus fugit delectus iste quos voluptas voluptate aliquid labore, deleniti iure eveniet. Reiciendis suscipit modi vero nam, esse rem facilis aspernatur quaerat consequuntur nulla, quis mollitia vel quos fuga? Distinctio laboriosam dignissimos magni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ">


                            <div className={styles.modal__wrapper__content__right}>
                                <h3>Details</h3>

                                <div className={styles.modal__wrapper__content__right__item}>
                                    <ClockCircleFilled />  <span>     {days}d {hours}h {minutes}m {seconds}s</span>

                                </div>
                                <div className={styles.modal__wrapper__content__right__item}>

                                    <GiEasterEgg />  <span>4562</span>
                                </div>
                                <div className={styles.modal__wrapper__content__right__item}>

                                    <BookOutlined />  <span>Java, Computer, Maths</span>
                                </div>
                            </div>

                            <div className={styles.modal__wrapper__content__right__attachments}>
                                <h3>Attachements</h3>



                                <div className={styles.modal__wrapper__content__right__attachments__item}>
                                    
                                    {/* <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=300'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=500'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=400'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=900'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=390'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=234&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=200&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=1300&h=220'} shape="square" />



 */}

                                </div>



                            </div>
                        </div>
                    </div>

                </div>


            </Modal>




            <Modal title="Assignment Submission" width={1200}
                open={finishass}
                onCancel={() => setFinishass(false)}
                footer={null}
                maskClosable={false}
                onOk={() => setFinishass(false)}
                bodyStyle={{ background: '#020722db', color: 'white', }}
                wrapClassName={styles.modal__wrapper}
            >
                <div className={styles.submission__wrapper}>

                    <div className={styles.submission__wrapper__message}>
                        <TextArea rows={10} style={{
                            background: '#020722db',
                            color: 'white',
                            border: '1px solid #fff',
                        }} placeholder="Your message (Optional)" />


                    </div>

                    <div className={styles.submission__wrapper__attachments}>
                        <h4>Upload your files. </h4>

                    </div>

                </div>

            </Modal>


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
                                    <h1>Assignment on Java using OOP Concept</h1>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quibusdam culpa nisi? Unde soluta modi cupiditate quisquam reiciendis, ex a veritatis excepturi blanditiis dolores rerum error ea sunt suscipit non corporis temporibus tempora, architecto dolorem magni dolorum distinctio culpa esse sint? Quidem, quia. Exercitationem culpa fugit dignissimos dolor veniam ex laborum incidunt consequatur perspiciatis harum, amet dolorum enim. Iure, magni?</p>
                                <div className={styles.assignment__meta__cats}>
                                    <span>Accounts</span>
                                    <span>Maths</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className={styles.current__assignments__wrapper__action}>
                                    <Button type="primary" style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970'
                                    }} size="large" icon={<ClockCircleFilled />} block>
                                        {days}d {hours}h {minutes}m {seconds}s
                                    </Button>
                                    <Button type="primary" shape="round" size="large" style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970'
                                    }} icon={<MessageFilled />} block>
                                        Message Admin
                                    </Button>
                                    <Button type="primary" style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970'
                                    }} onClick={() => setAssmodel(true)} shape="round" size="large" icon={<EyeOutlined />} block>
                                        View in Detail
                                    </Button>
                                    <Button type="primary" style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970',
                                    }} shape="round" disabled={
                                        currpercent !== 100
                                    } size="large" icon={<CheckOutlined />} onClick={() => setFinishass(true)} block>
                                        Finished
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
                                        step={10}
                                        max={100}
                                        dots
                                    />
                                </div>


                                <div className="col-md-1 ">
                                    {
                                        currpercent !== 100 ?
                                            <Button
                                                style={{
                                                    backgroundColor: '#3e3f4970',
                                                    borderColor: '#3e3f4970'
                                                }}
                                                type="primary" block  >
                                                Update {currpercent < 1 ? '' : currpercent + '%'}
                                            </Button> : ''
                                    }

                                </div>
                            </div>

                        </div>

                    </div>






                </div>




            </div>



        </React.Fragment>

    )
}




function NewAssignment() {
    const [newassmodel, setNewassmodel] = React.useState(false);
    const { days, hours, minutes, seconds } = useTimer("2022-11-30")

    return (

        <React.Fragment>
            <Modal title="Assignment Details" width={1500}
                open={newassmodel}
                onCancel={() => setNewassmodel(false)}
                footer={null}
                onOk={() => setNewassmodel(false)}
                bodyStyle={{ background: '#020722db', color: 'white', }}
                wrapClassName={styles.modal__wrapper}
            >

                <div className={styles.modal__wrapper__content}>

                    <div className="row ">
                        <div className="col-md-9">
                            <div className={styles.modal__wrapper__content__left}>
                                <div className={styles.modal__wrapper__content__title}>
                                    <h1>Assignment on Java using OOP Concept</h1>
                                </div>

                                <div className={styles.modal__wrapper__content__desc}>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque libero deserunt, ipsum iste aperiam veritatis expedita atque quaerat quidem deleniti ratione esse nihil, voluptates dolore necessitatibus molestias, iusto impedit nobis. Temporibus aspernatur quam sequi eveniet rem dolores eos asperiores, vitae deserunt sunt expedita soluta voluptate corporis sint pariatur blanditiis, libero, facilis minus voluptas recusandae! Veritatis rem laboriosam ut, odit enim impedit temporibus vel molestias animi hic a earum quasi fugit officia quo eius, cupiditate, velit et excepturi provident quod eum dignissimos assumenda! Corporis inventore soluta, sed ullam officia necessitatibus qui veniam quod. Officia a rem suscipit nisi! Cum sit officiis fuga? Maxime doloremque accusamus aperiam consequuntur eveniet nemo cumque quasi minus asperiores tempore voluptatum excepturi odit dolorem voluptate necessitatibus placeat magnam veritatis, distinctio incidunt et possimus? Sed dolor a incidunt voluptates natus animi culpa sequi vitae aliquam. Odit doloribus, assumenda omnis mollitia praesentium quibusdam saepe voluptatum iusto. Cupiditate aut accusamus, praesentium, eum asperiores eius laboriosam, tenetur voluptate magni dicta dolor cum vel molestiae veniam inventore voluptates repellendus ipsam corporis harum sapiente tempora. Quaerat voluptatum libero ea illo. Quibusdam natus neque culpa maiores error earum accusantium? Deserunt officiis odit esse minima itaque nesciunt tempore officia sint. Fugiat quo distinctio nulla possimus laborum inventore tenetur veritatis modi reiciendis tempore! Mollitia, aliquid? Expedita dignissimos numquam quibusdam accusantium mollitia, impedit architecto necessitatibus fugit delectus iste quos voluptas voluptate aliquid labore, deleniti iure eveniet. Reiciendis suscipit modi vero nam, esse rem facilis aspernatur quaerat consequuntur nulla, quis mollitia vel quos fuga? Distinctio laboriosam dignissimos magni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ">


                            <div className={styles.modal__wrapper__content__right}>
                                <h3>Details</h3>

                                <div className={styles.modal__wrapper__content__right__item}>
                                    <ClockCircleFilled />  <span>     {days}d {hours}h {minutes}m {seconds}s</span>

                                </div>
                                <div className={styles.modal__wrapper__content__right__item}>

                                    <GiEasterEgg />  <span>4562</span>
                                </div>
                                <div className={styles.modal__wrapper__content__right__item}>

                                    <BookOutlined />  <span>Java, Computer, Maths</span>
                                </div>
                            </div>

                            <div className={styles.modal__wrapper__content__right__attachments}>
                                <h3>Attachements</h3>



                                <div className={styles.modal__wrapper__content__right__attachments__item}>
{/*                          
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=300'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=500'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=400'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=900'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=390'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=234&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=150&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=200&h=220'} shape="square" />
                                    <Avatar size={80} src={'https://api.lorem.space/image/movie?w=1300&h=220'} shape="square" /> 
                                    
                                    
                                    
                           */}





                                </div>



                            </div>
                        </div>
                    </div>

                </div>


            </Modal>

            <div className="col-md-12">
                <div className={styles.new__assignment__wrapper}>
                    <div className={styles.new__assignment__wrapper__title}>
                        <h3>An assignment is Avaliable.</h3>
                    </div>
                    <div className={styles.new__assignment__wrapper__content}>

                        <div className={styles.new__assignment__wrapper__main}>
                            <div className="row center">

                                <div className="col-md-9 ">
                                    <div className={styles.new__assignment__wrapper__content__left__title}>
                                        <span>New Assignment</span>
                                        <h1>Assignment on Java using OOP Concept</h1>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem sapiente, a reprehenderit nihil dicta minima iusto necessitatibus dolore nemo.</p>

                                    </div>

                                </div>

                                <div className="col-md-3  ">
                                    <div className={styles.new__assignment__wrapper__content__right}>
                                        <div className={styles.new__assignment__wrapper__content__right__action}>

                                            <div className={styles.new__assignment__wrapper__content__right__action__item}>
                                                <span>
                                                    Deadline : &nbsp;2022-11-30
                                                </span>
                                            </div>

                                            <div className={styles.new__assignment__wrapper__content__right__action__item}>
                                                {/* 50$ */}
                                                <span>
                                                    Max Bid :&nbsp; {50 * 163} <GiEasterEgg />
                                                </span>
                                            </div>
                                            <div className={styles.new__assignment__wrapper__content__right__action__item}>

                                                <span>
                                                    Minimum Bid :&nbsp; {(50 * 163) - ((20 / 100) * 50 * 163)} <GiEasterEgg />
                                                </span>
                                            </div>
                                            <div className={styles.new__assignment__wrapper__content__right__action__item}>

                                                <span>
                                                    Lowest Bid :&nbsp; {(45 * 163)} <GiEasterEgg />
                                                </span>
                                            </div>


                                            <div className={styles.new__assignment__wrapper__content__right__action__bidding}>
                                                <Slider defaultValue={0}

                                                    min={6520}
                                                    max={8150}

                                                />
                                                <br />

                                                <Button block type="primary" style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970'
                                    }} >
                                                    Place you Bid
                                                </Button> 
                                                <br />
                                                
                                                  <Button block type="primary" onClick={()=>setNewassmodel(true)} style={{
                                        backgroundColor: '#3e3f4970',
                                        borderColor: '#3e3f4970'
                                    }} >
                                                    Details
                                                </Button>
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


function NoActiveAssignment() {
    return (
        <div className="col-md-12">
            <div className={styles.no__assignments__wrapper}>
                <div className={styles.no__active__assignments}>

                    <h3>No Active Assignment</h3>

                    <MdEmojiEmotions />
                    <p>There are no assignments found for you at the moment. Please check back later.</p>

                </div>
            </div>
        </div>

    )
}

function RecentAssignments() {
    return (
        <div className="col-md-12">

            <div className={styles.past__assignments}>
                <h3>Past</h3>

            </div>
        </div>
    )
}










