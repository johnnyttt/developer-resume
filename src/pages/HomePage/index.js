
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
            <p>A skilled Web Developer & SEO specialist with AGILE working experiences <br/>in Front End Developing (React, Angular, Sass), <br/>Online Marketing services (Traffic Analysis, SEO, AdWords). </p>
            <p>Contact me at johnny.ytian@gmail.com</p>
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

        <section className={ styles.work_exp }>
            <div className={ styles.title }>
                <h3>Working Experience</h3>
                <ul>
                    <li>
                        OptiPharm, Mordialloc, Melbourne | Site: https://www.optislim.com.au/  <br/> <b>Web Development & SEO Specialist - July 2018 - Current</b><br/>
                        <ul>
                            <li>Front End Development using React, Gatsby, NextJs and Material UI & Shopify Development.</li>
                            <li>Developed a CRM System using React & Kendo UI.</li>
                            <li>Implement SEO strategy on all websites & Run routine website performance analysis and Conversion Rate Optimization.</li>
                        </ul>
                    </li>
                    <li>
                        AJ Creative, Knoxfield, Melbourne | Site: https://www.ajwallpaper.com.au/  <br/> <b>Senior eCommerce Tech & SEO Specialist - Aug 2016 – July 2018</b><br/>
                        <ul>
                            <li>Front End Development for landing pages using HTML5, CSS3, React, Bootstrap.</li>
                            <li>Shopify Website Development using Liquid & Sass.</li>
                            <li>SEO strategy analysis & website performance analysis & Conversion rate optimization.</li>
                        </ul>                    
                    </li>
                    <li>
                        ROI.com.au, Hawthorn, Melbourne | Site: http://www.roi.com.au/  <br/> <b>Senior SEO & Technical Specialist - Aug 2014 – Aug 2016</b><br/>
                        <ul>
                            <li>Front End development & implement SEO strategy on different platforms using HTML5, CSS3, jQuery, PHP, RequireJS, React etc.</li>
                            <li>Analysis ecommerce client’s revenue & traffic data, providing Conversion Rate Optimization plan.</li>
                            <li>Responsible for SEO strategy analysis & website performance analysis for enterprise clients.</li>
                        </ul>                    
                    </li>
                    <li>
                        Eco Leaf Pty Ltd, Clayton Branch, Melbourne | Site: http://www.ozbathroom.com.au/ <br/> <b>Ecommerce Specialist - July 2012 - July 2014</b><br/>
                        <ul>
                            <li>Ecommerce website development including modify website template and plugins/extension.</li>
                            <li>Traffic & Revenue data analysis & collection using Google Analytics & AdWords & eBay.</li>
                            <li>Ecommerce platform management & maintenance (Magento + Neto + Worpdress + eBay).</li>
                        </ul>                        
                    </li>
                </ul>
            </div>



        </section>
        <section className={ styles.skills }>
            <div className={ styles.title }>
                <h3>Skill Set</h3>
                <p>You can find more in the Skill Set overview.</p>
            </div>
            <h4>Programming Languages</h4>
            <ul>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        React<br/>4 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Vue<br/>3 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Angular<br/>2 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        HTML5<br/>7 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        CSS3<br/>7 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        jQuery<br/>5 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        PHP<br/>4 Years
                    </li>
            </ul>
            <h4>Online Marketing</h4>
            <ul>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Analytics<br/>7 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        AdWords<br/>4 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Search Console<br/>3 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Facebook Ads<br/>3 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        React<br/>3 Years
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        React<br/>3 Years
                    </li>
            </ul>
            <h4>Others</h4>
            <ul>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Git
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Webpack
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Bachelor
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Bachelor
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Bachelor
                    </li>
                    <li>
                        <img src={require('../../assets/images/uni-of-melbourne-logo.png')} />
                        Bachelor
                    </li>
            </ul>

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
