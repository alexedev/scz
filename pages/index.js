import App from '../components/App'
import Header from '../components/Header'
import Underscore from '../components/Underscore';
import Link from 'next/link'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <main>
      <h1>Main page</h1>
      <Underscore />
      <Link prefetch href='/base'>
        <a className="button">Go to catalog</a>
      </Link>
    </main>
  </App>
))