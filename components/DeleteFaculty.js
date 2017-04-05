import React from 'react'
import { gql, graphql } from 'react-apollo'
import { allFaculties, POSTS_PER_PAGE } from './FacultiesList';

function DeleteFaculty ({ handleDelete }) {
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

const deleteFaculty = gql`
  mutation deleteFaculty($id: ID!) {
    deleteFaculty(id: $id) {
      id
    }
  }
`

export default graphql(deleteFaculty, {
  props: ({ ownProps, mutate }) => ({
    handleDelete: () => mutate({
      variables: { id: ownProps.id },
      refetchQueries: [{
        query: allFaculties,
        variables: {
          skip: 0,
          first: POSTS_PER_PAGE,
          uniId: ownProps.uniId,
        },
      }],
    })
  })
})(DeleteFaculty)
