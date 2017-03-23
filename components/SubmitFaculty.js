import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Submit = ({ createFaculty }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    let name = e.target.elements.name.value
    let url = e.target.elements.url.value
    let desc = e.target.elements.description.value

    if (name === '' || url === '') {
      console.log('Both fields are required.')
      return false
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = `http://${url}`
    }

    createFaculty(name, url, desc)

    // reset form
    e.target.elements.name.value = ''
    e.target.elements.url.value = ''
    e.target.elements.description.value = ''
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add faculty</h2>
        <input placeholder='name' name='name' />
        <input placeholder='url' name='url' />
        <textarea placeholder='description' name='description' />
        <button type='submit'>Send</button>
      </form>
      <style jsx>{` 
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          text-align: center;
        }
        input, button {
          margin: 0 auto;
        }
        input {
          width: 250px;
        }
        textarea {
          width: 450px;
          height: 150px;
        }
        input, textarea {
          padding: 10px 10px 10px 10px;
          font-family: 'Roboto', sans;
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

const createFaculty = gql`
  mutation createFaculty(
    $name: String!, 
    $url: String!, 
    $description: String, 
    $universityId: ID!
    ) {
      createFaculty(
        name: $name, 
        url: $url, 
        description: $description, 
        universityId: $universityId
        ) {
          id
          name
          url
          description
          createdAt
        }
  }
`

export default graphql(createFaculty, {
  props: ({ ownProps, mutate }) => ({
    createFaculty: (name, url, description, uniId) => mutate({
      variables: { name, url, description, uniId: ownProps.uniId },
      updateQueries: {
        allFaculties: (previousResult, { mutationResult }) => {
          const newFaculty = mutationResult.data.createFaculty
          return Object.assign({}, previousResult, {
            allFaculties: [newFaculty, ...previousResult.allFaculties]
          })
        }
      }
    })
  })
})(Submit)
