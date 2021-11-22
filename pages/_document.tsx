import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="keywords" content="stories, web stories, video" />
          <meta name="author" content="Sharath Challa" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Add interactive web stories to your website with just few bytes of JavaScript.
            Web stories is a way to reach a unique audience within a new storytelling experience. Storyflow integration supercharges your user experience with a floating stories widget." />
          <meta property="og:title" content="Storyflow" />
          <meta property="og:description" content="Add interactive web stories to your website with just few bytes of JavaScript.
          Web stories is a way to reach a unique audience within a new storytelling experience. Storyflow integration supercharges your user experience with a floating stories widget." />
          <meta property="og:image" content="/storyflow-meta.svg" />
          <meta property="og:url" content="https://storyflow.video" />
          <link rel="icon" href="/storyflow-favicon.svg" />
          <link rel="apple-touch-icon" href="/storyflow-favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
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
    )
  }
}

export default MyDocument