import App from '../components/App'
import Header from '../components/Header'
import Underscore from '../components/Underscore';

import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <article>
      <h1>Hello world</h1>
      <Underscore />
    </article>
  </App>
))