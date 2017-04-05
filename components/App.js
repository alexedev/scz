import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title>StudyCZ.com</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper">
      {children}
      <footer>
        StudyCZ.com &copy; 2013-2017
      </footer>
    </div>
    
    <style jsx global>{`
      * {
        font-family: 'Roboto', sans-serif;
      }
      .wrapper {
        display: flex;  
        flex-flow: column wrap;
        text-align: center;
        min-height: 100vh;
        align-items: center;
      }
      main, footer {
        padding: 10px;
        flex: 1 100%;
      }
      .Grid {
        display: flex;
      }
      .Grid-cell {
        flex: 1;
      }
      /* With gutters */
      .Grid--gutters {
        margin: -1em 0 0 -1em;
      }
      .Grid--gutters > .Grid-cell {
        padding: 1em 0 0 1em;
      }

      /* Alignment per row */
      .Grid--top {
        align-items: flex-start;
      }
      .Grid--bottom {
        align-items: flex-end;
      }
      .Grid--center {
        align-items: center;
      }

      /* Alignment per cell */
      .Grid-cell--top {
        align-self: flex-start;
      }
      .Grid-cell--bottom {
        align-self: flex-end;
      }
      .Grid-cell--center {
        align-self: center;
      }

      /* Base classes for all media */
      .Grid--fit > .Grid-cell {
        flex: 1;
      }
      .Grid--full > .Grid-cell {
        flex: 0 0 100%;
      }
      .Grid--1of2 > .Grid-cell {
        flex: 0 0 50%
      }
      .Grid--1of3 > .Grid-cell {
        flex: 0 0 33.3333%
      }
      .Grid--1of4 > .Grid-cell {
        flex: 0 0 25%
      }

      /* Small to medium screens */
      @media (min-width: 24em) {
        .small-Grid--fit > .Grid-cell {
          flex: 1;
        }
        .small-Grid--full > .Grid-cell {
          flex: 0 0 100%;
        }
        .small-Grid--1of2 > .Grid-cell {
          flex: 0 0 50%
        }
        .small-Grid--1of3 > .Grid-cell {
          flex: 0 0 33.3333%
        }
        .small-Grid--1of4 > .Grid-cell {
          flex: 0 0 25%
        }
      }

      /* Large screens */
      @media (min-width: 48em) {
        .large-Grid--fit > .Grid-cell {
          flex: 1;
        }
        .large-Grid--full > .Grid-cell {
          flex: 0 0 100%;
        }
        .large-Grid--1of2 > .Grid-cell {
          flex: 0 0 50%
        }
        .large-Grid--1of3 > .Grid-cell {
          flex: 0 0 33.3333%
        }
        .large-Grid--1of4 > .Grid-cell {
          flex: 0 0 25%
        }
      }
      h1 {
        margin-top:50px;
        margin-bottom: 0;
        font-size: 40px;
        font-weight: 500;
        text-align:center;
      }
      h2 {
        font-weight: 200;
        text-align:center;
      }
      a {
        color: #000000;
      }
      p {
        font-size: 20px;
        line-height: 24px;
      }
      button, .button {
        flex: 1;
        background-color: #0178D9;
        border: 0;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
      .button.with-caret {
        align-items: center;
        display: flex;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </div>
)
