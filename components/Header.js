import Link from 'next/link'

export default ({ pathname }) => (
  <header>
    <div className="logo">
        <Link prefetch href='/'>
          <a><img src="/static/logo.svg" /></a>
        </Link>
    </div>
    <nav>
      <Link prefetch href='/services'>
        <a className={pathname === '/services' && 'is-active'}>SERVICES</a>
      </Link>
      <Link prefetch href='/base'>
        <a className={pathname === '/base' && 'is-active'}>CATALOG</a>
      </Link>
      <Link prefetch href='/contact'>
        <a className={pathname === '/contact' && 'is-active'}>CONTACTS</a>
      </Link>
    </nav>
  <style jsx>{`
      header {
        padding: 10px;
        flex: 1 100%;
        display: flex;
        flex-flow: row wrap;
      }
      
      nav {
        padding: 10px;
        flex: 1 100%;
        display: flex;
      }

      .logo {
        padding: 10px;
        flex: 1 100%;
      }

      @media all and (min-width: 600px) {
        .logo, nav { flex: 1 auto; }
      }

      a {
        font-weight: 300;
        font-size: 24px;
        text-decoration: none;
        letter-spacing: 0.15em;
        padding: 10px;
        flex: 1 30%;
      }

      a.is-active {
        font-weight: 500;
      }
    `}</style>
  </header>
)
