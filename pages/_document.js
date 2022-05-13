import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet"/>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-9506GFX7X1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                         function gtag(){
                        dataLayer.push(arguments);
                         }
                         gtag('js', new Date());
                          gtag('config', 'G-9506GFX7X1', {
                        page_path: window.location.pathname,
                          });
                        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
