import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { getUniversity } from './University';

const EditSaveButton = ({ handleSave, toggleEditMode }) => {
  const saveEdit = () => {
    handleSave();
    toggleEditMode();
  }
  return (
    <button onClick={saveEdit}>
      Save
      <style jsx>{`
        // put button styles here
      `}</style>
    </button>
  )
}

const updateUniversity = gql`
  mutation updateUniversity(
    $id: ID!, $name: String, 
    $url: String, $description: String
  ) { 
    updateUniversity(
      id: $id, 
      name: $name, 
      url: $url,
      description: $description
    ) {
      id
      name
      url
      logo
      description
      createdAt
    }
  }
`

export default graphql(updateUniversity, {
  props: ({ ownProps: { id, name, url, description }, mutate }) => ({
    handleSave: () => mutate({
      variables: { 
        id,
        name,
        url,
        description
      },
      refetchQueries: [{
        query: getUniversity,
        variables: {
          id
        },
      }],
    })
  })
})(EditSaveButton)
