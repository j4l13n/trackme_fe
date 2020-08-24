import gql from 'graphql-tag'

export const AGREEMENT = gql`
    mutation Agreement(
        $agreement: String!
    ){
        agreement(agreement: $agreement) {
            success
        }
    }
`