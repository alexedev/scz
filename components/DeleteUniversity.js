import React from 'react'
import { gql, graphql } from 'react-apollo'
import { allUniversities, POSTS_PER_PAGE } from './UniList'

function DeleteUniversity ({ handleDelete }) {
  return (
    <div className="trash" onClick={handleDelete}>
      <style jsx>{`
        .trash {
          height: 5px;
          width: 5px;
          margin: 10px auto 20px auto;
          padding: 1px 1px;
          background-color: red;
          cursor: pointer;
        }
        button:active {
          background-color: transparent;
        }
      `}</style>
    </div>
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
