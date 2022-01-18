import { Schema, model } from 'mongoose'

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

const UserModel = model<User>('User', userSchema);

export { UserModel, User };