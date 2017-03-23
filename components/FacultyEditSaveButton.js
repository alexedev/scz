import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { getFaculty } from './Faculty';

const FacultyEditSaveButton = ({ handleSave, toggleEditMode }) => {
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

const updateFaculty = gql`
  mutation updateFaculty(
    $id: ID!, $name: String, 
    $url: String, $description: String
  ) { 
    updateFaculty(
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

export default graphql(updateFaculty, {
  props: ({ ownProps: { id, name, url, description }, mutate }) => ({
    handleSave: () => mutate({
      variables: {
        id,
        name,
        url,
        description
      },
      refetchQueries: [{
        query: getFaculty,
        variables: {
          id
        },
      }],
    })
  })
})(FacultyEditSaveButton)
