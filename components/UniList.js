import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import UniversityPreview from '../components/UniversityPreview';

const UniList = ({ data: { allUniversities, loading, _allUniversitiesMeta }, loadMore }) => {
  if (loading) {
    return <div>Loading</div>
  }
  const areMore = allUniversities.length < _allUniversitiesMeta.count

  return (
    <section>
      {allUniversities.map((uni) =>
        <UniversityPreview
          key={uni.id}
          id={uni.id}
          name={uni.name}
          href={{ pathname: 'university', query: { id: uni.id } }}
        />
      )}
      {areMore ? <button onClick={() => loadMore()}><span />Show More</button> : ''}
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

export const allUniversities = gql`
  query allUniversities($first: Int!, $skip: Int!) {
    allUniversities(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      name
      url
      logo
      description
      createdAt
    },
    _allUniversitiesMeta {
      count
    }
  }
`

export const POSTS_PER_PAGE = 5

export default graphql(allUniversities, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMore: () => {
      return data.fetchMore({
        variables: {
          skip: data.allUniversities.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.data) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allUniversities: [...previousResult.allUniversities, ...fetchMoreResult.data.allUniversities]
          })
        }
      })
    }
  })
})(UniList)