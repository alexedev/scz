import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import University from '../components/Universities/University'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <main>
      <University id={props.url.query.id}/>
    </main>
  </App>
))