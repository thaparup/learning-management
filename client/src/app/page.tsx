import NonDashboardNavbar from '@/components/NonDashboardNavbar'
import React from 'react'
import Landing from './(nondashboard)/Landing/page'

const page = () => {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />

      <main className='nondashboard-layout__main'>
        <Landing />
      </main>
    </div>
  )
}

export default page