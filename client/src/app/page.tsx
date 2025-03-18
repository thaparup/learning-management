import NonDashboardNavbar from '@/components/NonDashboardNavbar'
import React from 'react'
import Landing from './(nondashboard)/landing/page'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />

      <main className='nondashboard-layout__main'>
        <Landing />

      </main>
      <Footer />
    </div>
  )
}

export default page