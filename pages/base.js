import App from '../components/App'
import Header from '../components/Header'
import withData from '../lib/withData'
import UniList from '../components/UniList'
import Submit from '../components/Submit'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <article>
      <h1>Unversities of Czech Republic</h1>
      <div className="underscore"><img src="/static/underscore.svg" /></div>
      <UniList />
      <Submit />
      <style jsx>{`
      .underscore {
        margin: 40px auto;
      }
      .underscore img {
        margin: 0 auto;
        display: block;
      }
    `}</style>
    </article>
  </App>
))