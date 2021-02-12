import React, { ReactNode } from "react";
import { Link } from "gatsby";

type LayoutProps = {
    children: ReactNode
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>Site Title</h1>
       <Link to="/app/page1">Page 1</Link><br/>
       <Link to="/app/">Default</Link>
      
         
      {children}
    </div>
  )
}