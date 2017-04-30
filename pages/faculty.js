import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import Faculty from '../components/Faculties/Faculty'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <main>
      <Faculty id={props.url.query.id} />
    </main>
  </App>
))