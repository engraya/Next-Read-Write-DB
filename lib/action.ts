'use server'
import Employee from "../models/Employee"
import databaseConfig from "./databaseConfig"
import { revalidatePath } from "next/cache"
import {redirect} from "next/navigation"


export const addEmployee = async(formData: FormData) => {
    const {firstName, lastName, email, phoneNumber, age, nationality, address, profession} = 
    Object.fromEntries(formData)
    try {
        await databaseConfig.connect();
        const newEmployee = new Employee({
            firstName, lastName, email, age, phoneNumber, nationality, profession, address
        })
        await newEmployee.save();

    } catch (error) {
        throw new Error ("Failed To Create Contact " + error)
    }
    revalidatePath("/employees");
    redirect("/employees");

}

export const updateEmployee = async (formData: FormData) => {
    const {firstName, lastName, email, phoneNumber, age, nationality, address, profession} = 
    Object.fromEntries(formData)
    try {
        databaseConfig.connect()
        const updateFields = {
            firstName, lastName, email, age, phoneNumber, nationality, profession, address
        }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key] )
        await Employee.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update Contact " + error)
    }
    revalidatePath("/employess")
    redirect("/employees")
}

export const deleteEmployee = async (formData: FormData) => {
    const {id} = Object.fromEntries(formData)
    try {
        databaseConfig.connect()
        await Employee.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete Contact " + error)
        
    }
    revalidatePath("/employees")

}