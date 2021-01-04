import {
    ApolloClient,
    createHttpLink
  } from '@apollo/client'
import { cache } from './cache'

const httpLink = createHttpLink({
    uri: 'https://api.spacex.land/graphql/'
})

export const client = new ApolloClient({
    link: httpLink,
    cache
})
