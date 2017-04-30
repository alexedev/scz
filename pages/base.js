import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import UniList from '../components/Universities/UniList'
import Submit from '../components/Universities/Submit'
import Underscore from '../components/Underscore';
import UnderscoreThin from '../components/UnderscoreThin';

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <main>
      <h1>All Unversities</h1>
      <Underscore />
      <UniList />
      <UnderscoreThin />
      <Submit />
      <UnderscoreThin />
      <style jsx>{`
      .underscore {
        margin: 40px auto;
      }
      .underscore img {
        margin: 0 auto;
        display: block;
      }
    `}</style>
    </main>
  </App>
))