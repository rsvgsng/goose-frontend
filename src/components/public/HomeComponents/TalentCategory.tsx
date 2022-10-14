import React from 'react'
import styles from './TalentCategory.module.css'
import {FaUserAlt} from 'react-icons/fa'
const TalentCategory: React.FC = (): JSX.Element => {
    interface dummyProps {
        name: string,
        count: string|number
    }

    const dummyData: Array<dummyProps> = [{
        name: 'Maths',
        count: 10
    },
    {
        name: 'Science',
        count: 123
    },
      {
        name: 'Social Social ',
        count: 78
    }, {
        name: 'Computer Science',
        count: 45
    }, {
        name: 'C++',
        count: 23
    }, {
        name: 'Java',
        count: 12
    }, {
        name: 'C Programming',
        count: 56
    }, {
        name: 'Many more...',
        count: '230+'
    }]


    return (
        <section className={styles.talentSection}>

            <div className="container">
                <div className={styles.talent_cat_ttl}>
                    <h2>Our Talent <br /> <span> CATEGORY</span></h2>
                </div>


                <div className="row">

                    {
                        dummyData.map((e: dummyProps) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-xs-4 col-sm-12">
                                    <div className={styles.category__box}>
                                        <div className={styles.subName}>
                                            <h2>{e.name}</h2>
                                        </div>

                                        <div className={styles.sub__meta}>
                                            <h3> <span> <FaUserAlt/></span> {e.count} Experts</h3>
                                        </div>
                                    </div>




                                </div>
                            )
                        })
                    }




                </div>
            </div>
        </section>
    )
}

export default TalentCategory