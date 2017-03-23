import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import Faculty from '../components/Faculty'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <article>
      <Faculty id={props.url.query.id} />
    </article>
  </App>
))