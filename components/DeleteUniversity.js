import React from 'react'
import { gql, graphql } from 'react-apollo'
import { allUniversities, POSTS_PER_PAGE } from './UniList'

function DeleteUniversity ({ handleDelete }) {
  return (
    <div className="trash" onClick={handleDelete}>
      x
      <style jsx>{`
        .trash {
          font-size: 10px;
          color: white;
          width: 10px;
          margin: -15px auto 20px auto;
          padding: 0px 1px 1px 1px;
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
      updateQueries: {
        allUniversities: (prev, { mutationResult }) => {
          const removedUniversity = mutationResult.data.deleteUniversity;
          return { allUniversities: prev.allUniversities.filter(uni => uni.id !== removedUniversity.id)}   
        },
      },  
    })
  })
})(DeleteUniversity)
