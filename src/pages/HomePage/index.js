
import React, { Component } from 'react';
import styles from './home.module.scss';
import WorkLists from '../../components/WorkLists';
import worksData from '../works.json';
import { IncomingMessage } from 'http';
import icons from '../icons.json';

export default () =>{
    return <div className={ styles.wrap }>
        
        {/* 个人简介 */}
        <section className={ styles.brief }>
            <img src={ require("../../assets/images/avatar.jpg") } />
            <h2>Johnny Tian</h2>
            <ul>
                <li>Front End Developer</li>
                <li>Technical SEO Specialist</li>
                <li>Digital Analyst</li>
            </ul>
            <p>I design applications, interactive systems and websites. I love using technology in creative contexts.</p>
            <p>I am a freelancer based in Utrecht, the Netherlands.</p>
            <p>Contact me at thijs@vauxlab.com</p>
        </section>  

        <section className={ styles.education }>
            <div className={ styles.title }>
                <h3>Education Background</h3>
                <ul>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Bachelor of Business Information System <br/> <b>Monash University</b><br/><i>Achievements - Completed a CRM System Project for ACSO <br/>in a 1 year Industrial Based Subject.</i>
                    </li>
                    <li>
                        <img src={require('../../assets/images/monash-university-logo.png')} />
                        Master of Information System <br/> <b>University of Melbourne</b><br/><i>Achievements - Distinction average for all subjects &<br/> Developed multiple E-Commerce Sites on 3 different platform.</i>
                    </li>
                </ul>
            </div>

        </section>

        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>Working Experience</h3>
                <p>You can find more in the Education overview.</p>
            </div>



        </section>
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>Skill Set</h3>
                <p>You can find more in the Skill Set overview.</p>
            </div>



        </section>


        {/* 作品列表 */}
        <section className={ styles.work }>
            <div className={ styles.title }>
                <h3>A selection of work</h3>
                <p>You can find more in the work overview.</p>
            </div>
            <WorkLists dataSource = { worksData.data } />
        </section>

    </div>
}
