import React from 'react'
import PageContainer from '../components/PageContainer'
import EmployeeForm from '../components/EmployeeForm'

function UpdateProductPage() {
  return (
    <PageContainer>
    <div className="p-4 w-full flex justify-center max-w-6xl">
      <h1 className='font-bold text-3xl text-cyan-950'>
        Create New Employee
      </h1>
    </div>
    <EmployeeForm/>
    </PageContainer>
  )
}

export default UpdateProductPage
