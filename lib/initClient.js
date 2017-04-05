import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

function createClient (headers) {
  return new ApolloClient({
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: createNetworkInterface({
      // open this url in browser to see schema
      uri: 'https://api.graph.cool/simple/v1/cj0n21ce5ffo50118z67ao3th',
      opts: {
        credentials: 'same-origin'
        // Pass headers here if your graphql server requires them
      }
    })
  })
}

export const initClient = (headers) => {
  if (!process.browser) {
    return createClient(headers)
  }
  if (!apolloClient) {
    apolloClient = createClient(headers)
  }
  return apolloClient
}
