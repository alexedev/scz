import Link from 'next/link'

export default ({ pathname }) => (
  <header>
  <div className="container">
    <div className="col">
        <Link prefetch href='/'>
          <a><img src="/static/logo.svg" /></a>
        </Link>
    </div>
    <div className="col">
      <Link prefetch href='/services'>
        <a className={pathname === '/services' && 'is-active'}>SERVICES</a>
      </Link>
      <Link prefetch href='/base'>
        <a className={pathname === '/base' && 'is-active'}>CATALOG</a>
      </Link>
      <Link prefetch href='/contact'>
        <a className={pathname === '/contact' && 'is-active'}>CONTACTS</a>
      </Link>
    </div>
    </div>
  <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-weight: 300;
        font-size: 24px;
        margin-right: 30px;
        text-decoration: none;
        letter-spacing: 0.15em;
      }
      .is-active {
        font-weight: 500;
      }
      .container {
        align-items: center;
        justify-content: center;
        display: flex;
      }
      .col {
        flex: 1;
      }
    `}</style>
</header>
 
)
