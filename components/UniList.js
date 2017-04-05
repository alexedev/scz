import { gql, graphql } from 'react-apollo'
import UniversityPreview from '../components/UniversityPreview';

const UniList = ({ data: { allUniversities, loading, _allUniversitiesMeta }, loadMore }) => {
  if (allUniversities && allUniversities.length) {
    const areMore = allUniversities.length < _allUniversitiesMeta.count
    console.log(allUniversities.length, _allUniversitiesMeta.count)
    return (
      <section>
      <div className="flex-grid-thirds">
        {allUniversities.map((uni) =>
          <UniversityPreview
            key={uni.id}
            id={uni.id}
            name={uni.name}
            href={{ pathname: 'university', query: { id: uni.id } }}
          />
        )}
        </div>
        <div>
          {areMore ? <button className="button with-caret" onClick={() => loadMore()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
        </div>
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          .flex-grid-thirds {
            padding: 0;
            margin: 0;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
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
            margin-right: 5px;
          }
        `}</style>
      </section>
    )
  }
  return <div>Add some</div>
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

export const POSTS_PER_PAGE = 6

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
          if (!fetchMoreResult.allUniversities) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allUniversities: [...previousResult.allUniversities, ...fetchMoreResult.allUniversities]
          })
        }
      })
    }
  })
})(UniList)
