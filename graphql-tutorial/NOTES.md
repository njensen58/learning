What a GraphQL 'QUERY' looks like from the front end (GET REQUEST):

{
    books {
        name
        genre
        id
    }
}

I want to jump in at the 'books' entry point, and I want those 3 properties from each book
Will return a data object with a 'books' key that is an array of those book objects

Another ex:

{
    books {
        name
        genre
        author {
            name
            age
        }
    }
}

*author* is the relational collection, so it has it's own schema and is attached to books
kind of like a foreign id.