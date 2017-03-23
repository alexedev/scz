import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { allUniversities, POSTS_PER_PAGE } from './UniList';

function DeleteUniversity ({ handleDelete }) {
  return (
    <button onClick={handleDelete}>
      &nbsp;
      <style jsx>{`
        button {
          float: right;
          display: inline-block;
          padding: 0;
          background-color: red;
        }
        button:active {
          background-color: transparent;
        }
      `}</style>
    </button>
  )
}

const deleteUniversity = gql`
  mutation deleteUniversity($id: ID!) {
    deleteUniversity(id: $id) {
      id
    }
  }
`

export default graphql(deleteUniversity, {
  props: ({ ownProps, mutate }) => ({
    handleDelete: () => mutate({
      variables: { id: ownProps.id },
      refetchQueries: [{
        query: allUniversities,
        variables: {
          skip: 0,
          first: POSTS_PER_PAGE
        },
      }],
    })
  })
})(DeleteUniversity)
