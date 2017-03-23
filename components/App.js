import Head from 'next/head'

export default ({ children }) => (
  <main>
    <Head>
      <title>StudyCZ.com</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <style jsx global>{`
      * {
        font-family: 'Roboto', sans-serif;
      }
      h1 {
        margin-top:80px;
        margin-bottom: 0;
        font-size: 40px;
        font-weight: 500;
        text-align:center
      }
      h2 {
        font-weight: 200;
        text-align:center;
      }
      .underscore: {
        margin-bottom: 40px;
      }
      body {
        width: 1200px;
        margin: 0 auto;
        padding: 25px 50px;
      }
      a {
        color: #000000;
      }
      p {
        font-size: 20px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #0178D9;
        border: 0;
        color: white;
        display: flex;
        font-size: 16px;
        padding: 10px 20px;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </main>
)
