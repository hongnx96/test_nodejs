const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        username: String
        password: String
        role: Role
        user_login: UserLogin
    }

    type Role {
        id: ID!
        role_name: String
        user: User
    }

    type UserLogin {
        id: ID!
        user: User
    }
    
    type Query {
        users: [User]
        role(id)
	}

    type Mutation {
        createUser(username: String, password: String, role_id: String, is_deleted: Boolean): User
    }
`

module.exports = typeDefs
