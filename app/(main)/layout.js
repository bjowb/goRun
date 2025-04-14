import React from "react";

const MainLayout = ({children}) => {
    //return to onbboarding page if not logged in
    
    return <div className="container mx-auto mt-24 mb-20">{children}</div>
}

export default MainLayout;