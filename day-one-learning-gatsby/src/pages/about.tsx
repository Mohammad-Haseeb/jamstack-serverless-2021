import React from 'react';
import {Link} from 'gatsby';
import TextDisplay from "./../components/textDisplay";
export  default ()=>{
   return(
   <>
    <h1> Hello it's about page</h1>
    <TextDisplay/>
    <Link to="/">index home</Link>
    
    </>
   );
}