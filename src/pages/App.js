import React, { Component } from 'react';
import styles from './App.module.scss';
import { Link,Route,withRouter } from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>

         {/* 头部导航 */}
         <header className={styles.header}>
            <div className={styles.box}>
               <Link to="/"><div className={styles.boxleft}>JT</div></Link>
               <div className={styles.boxright}>
                  <Link to="/"><p className={ location.pathname==="/" ? styles.selected : null }>HOME</p></Link>
                  <a href="#skills"><p>SKILLS</p></a>
                  <a href="#works"><p>WORKS</p></a>
               </div>
            </div>
         </header>

         {/* 内容区 */}
         <section className={styles.content}>
           <Route path="/" exact component={ HomePage } />
           <Route path="/works" exact component={ WorkPage } />
           <Route path="/works/:id" exact component={ WorkPageDetail } />
         </section>

         {/* 底部 */}
         <footer className={styles.footer}>
           <p>© <b>2019 Johnny Tian</b></p>
           <p>Handmade with React</p>
         </footer>
      </div>
    );
  }
}

export default withRouter(App);
