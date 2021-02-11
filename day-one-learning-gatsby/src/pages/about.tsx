import React from 'react';
import {Link} from 'gatsby';
import TextDisplay from "./../components/textDisplay";
import Layout from './../components/Layout';
export  default ()=>{
   return(
   <>
   <Layout>   
        <h1> Hello it's about page</h1>
    <TextDisplay/>
    <Link to="/">index home</Link>
    </Layout>

    </>
   );
}