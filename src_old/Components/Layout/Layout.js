import React from 'react'
import MainLayout from '../Layout/MainLayout';

const Layout = ({isLoged, children}) => {
  return (
    
    <div className="asd">
      {
        isLoged && <MainLayout />
      }

      <div>
        {children}
      </div>

    </div>
  )
}

export default Layout