const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
        is_delete: Boolean
        role: [Role]
        user_login: [UserLogin]
    }

    type Role {
        id: ID!
        role_name: String
        age: Int
        users: [User]
    }

    type UserLogin {
        id: ID!
        user_id: String
        
    }
    
    type Query {
        users: [User]
	}

    type Mutation {
        createUser(username: String, password: String, role_id: String, is_deleted: Boolean)
    }
`

module.exports = typeDefs
