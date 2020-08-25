import '../styles/globals.css';
import Head from 'next/head';
import React, { useReducer, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { gql } from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';
import {Provider} from 'next-auth/client';
import {useApollo} from '../lib/apolloClient';
import {reducer} from '../lib/reducer'

export const AuthContext = React.createContext();

function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, {
    token: null,
    user: {},
    isAuthenticated: false,
  })

  const removeToken = () => {
    localStorage.removeItem('token')
    dispatch({type: 'SIGN_OUT_USER'})
  }

  const setToken = (token) => {
    if (localStorage.token) {
      removeToken()
    }

    localStorage.setItem('token', JSON.stringify(token))
    dispatch({
      type: 'SET_CURRENT_USER',
      payload: {token, user: jwtDecode(token)},
    })
  }

  useEffect(() => {
    if (localStorage.token) {
      const user = jwtDecode(localStorage.token)
      const currentTime = Date.now() / 1000

      if (user.exp < currentTime) {
        console.log(user.exp);
        removeToken()
      } else {
        dispatch({type: 'SET_CURRENT_USER', payload: {token: localStorage.token, user}})
      }
    }
  }, [])

  const authContext = {
    state,
    removeToken,
    setToken,
    dispatch
  }

  const apolloClient = useApollo({
    initialState: pageProps.initialApolloState,
    token: state.token
  })

  const {session} = pageProps

  return (
    <ApolloProvider client={apolloClient}>
      <Provider options={{site: process.env.SITE_URL}} session={session}>
        <AuthContext.Provider value={authContext}>
          <Head>
              <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </Provider>
    </ApolloProvider>
    )
}

export default App
