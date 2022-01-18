import { Schema, model } from 'mongoose'

interface Book {
    name: string,
    author: string
    
}
const bookSchema = new Schema<Book>({
    name: {type: String, required: true},    
    author: {type: String, required: true}    
})

const BookModel = model<Book>('Book', bookSchema);
export { BookModel, Book };