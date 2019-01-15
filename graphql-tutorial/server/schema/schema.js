const graphql = require('graphql')
const _ = require('lodash')

// Our database will have 2 collections.  books and authors
// we must define both their types (schemas)
    // We use GraphQLObjectType to define the data structure

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID, 
    GraphQLInt,
    GraphQLList } = graphql


// dummy data
const books = [
    { name: "Book number 1", genre: "Fantasy", id: '1', authorId: '1'},
    { name: "Book number 2", genre: "Fantasy", id: '2', authorId: '2' },
    { name: "Book number 3", genre: "Sci-Fi", id: '3', authorId: '3' },
    { name: "Book number 4", genre: "Sci-Fi", id: '4', authorId: '3' }
]

const authors = [
    { name: "John", age: 20, id: '1' },
    { name: "Linda", age: 57, id: '2' },
    { name: "Brooke", age: 34, id: '3' }
]


// First you define the types, and then you define the relationship between the types
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({ // This is a function to make sure other types are defined before the fields are analyzed
        id: { type: GraphQLID }, // ID is best as string or num will match
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: { // Adding the foreign key functionality to the Book Type
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, { id: parent.id })
            }
        }
    })
})

// `fields` needs to be a function so types will know how to relate to each other

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        age: { type: GraphQLInt },
        book: {
            type: new GraphQLList(BookType), // author may have a list of books, not always a single book
            resolve(parent, args){
                return _.filter(books, { authorId: parent.id })
                // return books.filter(book => book.authorId === parent.id)
            }
        }
    })
})


// We also define root queries, meaning where do we enter the graph when 
// we send a query
    // Grab all and grab one (get and get/:id) for our types
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: { // Different ways to jump into the graph
        book: {
            type: BookType, // What `type` of data does a request to 'book' look for?
            args: { id: { type: GraphQLID }}, // What args does the query need to know where to look?
            resolve(parent, args){ // parent will be 'book', args will be args.id
                // code to get data from db / other source
                return _.find(books, { id: args.id })
                // return books.find(book => books.id == args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return _.find(authors, { id: args.id })
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args){
                return books
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            resolve(parent, args){
                return authors
            }
        }
    }
})




module.exports = new GraphQLSchema({
    query: RootQuery
})


