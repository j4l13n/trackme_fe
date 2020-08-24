import {useMemo} from 'react'
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';

let token

const createApolloClient = () => {
    const TOKEN = token ? token.slice(1, -1) : null
    const link = new HttpLink({
        uri: process.env.NEXT_PUBLIC_TRACK_ME_API_URL,
        credentials: 'same-origin'
    })

    const authContext = setContext((_, {headers}) => ({
        headers: {
            ...headers,
            authorization: `JWT ${TOKEN}`
        }
    }))

    const authLink = authContext.concat(link)

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: TOKEN ? authLink : link,
        cache: new InMemoryCache(),
    })
}

const initializeApollo = (data = null) => {
    token = data.token

    const _apolloClient = createApolloClient()

    if (data.initializeState) {
        _apolloClient.cache.restore(data.initializeState)
    }

    if (typeof window === 'undefined') return _apolloClient

    return _apolloClient
}

const useApollo = (data) => {
    const store = useMemo(() => initializeApollo(data), [data])
    return store
}

export {
    initializeApollo,
    useApollo
}