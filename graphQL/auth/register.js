import gql from 'graphql-tag'

export const REGISTER = gql`
    mutation Register(
        $username: String!,
        $email: String!,
        $mobile: String!,
        $password: String!
    ) {
        register(
            username: $username,
            email: $email,
            phoneNumber: $mobile,
            password: $password
        ) {
            success,
            errors,
            user {
                id,
                lastLogin,
                email,
                username,
                isActive
            }
        }
    }
`