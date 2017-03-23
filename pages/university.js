import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import University from '../components/University'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <article>
      <University id={props.url.query.id}/>
    </article>
  </App>
))