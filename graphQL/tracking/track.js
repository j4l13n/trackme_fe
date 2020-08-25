import gql from 'graphql-tag'


export const TRACK = gql`
    mutation TrackMutation(
        $device: String!
        $lat: Float!
        $lon: Float!
    ) {
        tracking(
        device: $device,
        geometry: {
            lat: $lat
            lon: $lon
        }
        ) {
            success
            track {
                id
                user {
                id
                email
                username
                }
                device
                geometry
            }
        }
    }
`