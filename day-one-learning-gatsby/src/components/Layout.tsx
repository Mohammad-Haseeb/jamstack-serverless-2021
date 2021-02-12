import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import styles from "./Layout.module.css";
 interface propsType{
   children:ReactNode 
}

function Layout({children}:propsType) {
    return (
        <div className={styles.App}>  
                   <h1>Layout  Page</h1>

              <Link to="/contact">Contact</Link>
              {children}

              
        </div>
    )
}

 
export default Layout
{}