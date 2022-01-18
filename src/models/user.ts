import { Schema } from 'mongoose'

interface User {
    firstName: string,
    lastName: string,
    dateOfBirth: Date
    
}

const userSchema = new Schema<User>({
    firstName: {type: String, required: true},    
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: false}    
})

export { User };