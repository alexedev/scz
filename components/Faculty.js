import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo'
import Underscore from '../components/Underscore';
import FacultyEditSaveButton from './FacultyEditSaveButton';

class Faculty extends Component {
  constructor(props) {
    super(props)
    const { data } = this.props;
    this.state = {
      editMode: false,
      name: data && data.Faculty ? data.Faculty.name : '',
      url: data && data.Faculty ? data.Faculty.url : '',
      description: data && data.Faculty ? data.Faculty.description : '',
    }
  }
  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  }
  changeDescription = (e) => {
    this.setState({ description: e.target.value });
  }
  changeUrl = (e) => {
    this.setState({ url: e.target.value });
  }

  render() {
    const { Faculty, loading } = this.props.data;
    const { editMode, name, url, description } = this.state;
    if (loading) {
      return <div>Loading</div>
    }
    console.log(this.props.data);
    return (
      <section>
        <h1>
          {editMode
            ? <input
              className="name-input"
              value={name}
              name='name'
              onChange={this.changeName}
            />
            : Faculty.name
          }
        </h1>
        <div className="edit">
          <a onClick={this.toggleEditMode}>
            {editMode ? "cancel" : "edit"}
          </a>
        </div>
        <Underscore />

        <div className="url">
          web: {editMode
            ? <input
              className="url-input"
              value={url}
              name='url'
              onChange={this.changeUrl}
            />
            : <a href={Faculty.url}>{Faculty.url}</a>
          }
        </div>
        <p>
          {editMode
            ? <textarea
              value={description}
              name='description'
              onChange={this.changeDescription}
            />
            : Faculty.description
          }
        </p>
        {editMode && <FacultyEditSaveButton
          toggleEditMode={this.toggleEditMode}
          id={Faculty.id}
          name={name}
          url={url}
          description={description}
        />
        }

        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            color: #0178D9;
            border: 0;
          }
          .edit {
            text-align: center;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          .url {
            text-align: center;
          }
          input, textarea {
            padding: 10px 10px 10px 10px;
            font-family: 'Roboto', sans;
            font-size: 20px;
          }
          .name-input {
            font-size: 40px;
          }
          textarea {
            width: 100%;
            height: 10em;
          }
          button {
            margin: 10px auto 0 auto;
          }
      `}</style>
      </section>
    )
  }

}

export const getFaculty = gql`
  query Faculty($id: ID!) {
    Faculty(id: $id, ) {
      id
      name
      url
      logo
      description
      createdAt
    }
  }
`

export default graphql(getFaculty, {
  options: ownProps => ({
    variables: {
      id: ownProps.id,
    }
  }),
  props: ({ data }) => ({
    data
  })
})(Faculty)
