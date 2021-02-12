import React from 'react';
import {Link} from 'gatsby';
import TextDisplay from "../components/textDisplay";
import Layout from '../components/Layout';
import style from './about.module.css';
export  default ()=>{
   return(
   <>
   <Layout>   
        <h1 className={style.name}> Hello it's about page</h1>
    <TextDisplay/>
    <Link to="/">index home</Link>
    </Layout>

    </>
   );
}