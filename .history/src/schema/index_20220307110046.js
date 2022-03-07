const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
        is_delete: Boolean
        role: Role
        user_login: UserLogin
    }

    type Role {
        id: ID!
        role_name: String
        age: Int
        users: [User]
    }

    type 
    
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