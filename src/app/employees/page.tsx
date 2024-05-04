import React from 'react'
import PageContainer from '../components/PageContainer'
import EmployessLogTable from '../components/EmployessLogTable'

function EmployeePage() {
  return (
    <PageContainer>
      <div className="p-4 w-full flex justify-center max-w-6xl">
      <h1 className='font-bold text-3xl text-cyan-950'>
        Employees
      </h1>
    </div>
      <EmployessLogTable/>
    </PageContainer>
  )
}

export default EmployeePage
