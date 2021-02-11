import { Link } from 'gatsby'
import React, { ReactNode } from 'react'

 interface propsType{
   children:ReactNode 
}

function Layout({children}:propsType) {
    return (
        <div>  
                   <h1>Layout  Page</h1>

              <Link to="/contact">Contact</Link>
              {children}

              
        </div>
    )
}

 
export default Layout
{}