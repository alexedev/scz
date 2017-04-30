import { gql, graphql } from 'react-apollo'
import FacultyPreview from '../components/FacultyPreview';

const FacultiesList = ({ data: { allFaculties, loading, _allFacultiesMeta }, loadMore, uniId }) => {
  if (loading) {
    return <div>Loading</div>
  }
  const areMore = allFaculties.length < _allFacultiesMeta.count
  return (
    <section>
      {allFaculties.map((faculty) =>
        <FacultyPreview
          key={faculty.id}
          id={faculty.id}
          uniId={uniId}
          name={faculty.name}
          href={{ pathname: 'faculty', query: { id: faculty.id } }}
        />
      )}
      {areMore ? <button className="button with-caret" onClick={() => loadMore()}><span />Show More</button> : ''}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        div {
          align-items: center;
          display: flex;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button {
          margin: 0 auto;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: "";
          height: 0;
          width: 0;
        }
      `}</style>
    </section>
  )
}

export const allFaculties = gql`
  query allFaculties($uniId: ID!, $first: Int!, $skip: Int!) {
    allFaculties(filter: {university: {id: $uniId}}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      name
      url
      description
      createdAt
    },
    _allFacultiesMeta(filter: {university: {id: $uniId}}) {
      count
    }
  }
`

export const POSTS_PER_PAGE = 5

export default graphql(allFaculties, {
  options: ownProps => ({
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
      uniId: ownProps.uniId,
    }
  }),
  props: ({ data }) => ({
    data,
    loadMore: () => {
      return data.fetchMore({
        variables: {
          skip: data.allFaculties.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.data) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allFaculties: [...previousResult.allFaculties, ...fetchMoreResult.data.allFaculties]
          })
        }
      })
    }
  })
})(FacultiesList)
