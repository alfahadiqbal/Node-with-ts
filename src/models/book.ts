import { Schema } from 'mongoose'

interface Book {
    name: string,
    author: string
    
}
const bookSchema = new Schema<Book>({
    name: {type: String, required: true},    
    author: {type: String, required: true}    
})

export { Book };