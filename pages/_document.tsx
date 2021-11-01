/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
            <title>Storyflow</title>
            <meta name="description" content="Improve storytelling by just adding a video widget to your website in seconds." />
            <meta property="og:title" content="Storyflow" />
            <meta property="og:description" content="Immersive storytelling redefined for web." />
            <meta property="og:image" content="/storyflow-meta.svg" />
            <meta property="og:url" content="https://storyflow.video" />
          
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://storyflow.video/" />
            <meta property="og:title" content="Storyflow" />
            <meta property="og:description" content="Improve storytelling by just adding a video widget to your website in seconds." />
            <meta property="og:image" content="/storyflow-meta.svg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://storyflow.video/" />
            <meta property="twitter:title" content="Storyflow" />
            <meta property="twitter:description" content="Improve storytelling by just adding a video widget to your website in seconds." />
            <meta property="twitter:image" content="/storyflow-meta.svg" />
            <link rel="icon" href="/storyflow-favicon.svg" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
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