import React from 'react';
import {Link} from 'gatsby';
import IndexComponent from  './../components/indexComponent';
export default()=>{
  return(

     <>
     <IndexComponent text="Hello From Home component with value passing"/>
     <h1>Hello World</h1>
     <Link to="/about">About</Link>
     </>
  );
}