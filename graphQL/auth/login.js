import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation LoginUser(
        $email: String!,
        $password: String!
    ){
        login(
            email: $email,
            password: $password
        ) {
            success
            token
            user {
                id
                username
                email
                phoneNumber
            }
        }
    }
`