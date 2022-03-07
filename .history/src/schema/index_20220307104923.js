const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
        is_delete: Boolean
        created_at: DateTime
        update
        author: Author
    }

    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }
    
    type Query {
        books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

    type Mutation {
        createAuthor(name: String, age: Int): Author
        createBook(name: String, genre: String, authorId: ID!): Book
    }
`

module.exports = typeDefs