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
        role(id: ID!): Role
        user_login(id: ID!): UserLogin
        roles: [Role]
	}

    type UserResponse {
        ok: Boolean
        message: String
    }

    type Mutation {
        createUser(username: String, password: String, role_id: String): UserResponse
        updateUserById(id: ID!, username: String, password: String, role_id: String): UserResponse
        deleteUser
        createRole(role_name: String): Role
    }
`

module.exports = typeDefs
