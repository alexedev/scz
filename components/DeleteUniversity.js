import React from 'react'
import { gql, graphql } from 'react-apollo'
import { allUniversities, POSTS_PER_PAGE } from './UniList'

function DeleteUniversity ({ handleDelete }) {
  return (
    <span className="trash" onClick={handleDelete}>
      <img src="/static/trash.svg" />
      <style jsx>{`
        .trash {
          height: 10px;
          margin: -10px auto 0 auto;
          padding: 2px 8px;
          background-color: red;
          cursor: pointer;
        }
        button:active {
          background-color: transparent;
        }
      `}</style>
    </span>
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
