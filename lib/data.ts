'use server'
import Employee from "../models/Employee"
import databaseConfig from "./databaseConfig"

export const getEmployees = async() => {
    try {
        await databaseConfig.connect();
        const employees = await Employee.find({})
        return employees
    } catch (error) {
        throw new Error ("Failed To Fetch Employees " + error)
    }
}


export const getEmployee = async (id : string) => {
    try {
        await databaseConfig.connect();
        const employee = await Employee.findById(id)
        return employee
    } catch (error) {
        throw new Error ("Failed To Fetch Employee " + error)
    }
}