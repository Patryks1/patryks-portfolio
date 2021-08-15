import { GA_TRACKING_ID } from '../util/gtag';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document';

const title = 'Patryk Slowinski | Portfolio';
const description = 'Patryk Slowinski personal portfolio';
const image = `${process.env.SITE_URL}/images/snapshots/homepage-snapshot.png`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head lang="en">
          <base href="" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={process.env.SITE_URL} />
          <meta name="author" content="Patryk Slowinski" />
          <meta name="copyright" content="Patryk Slowinski @ 2021" />

          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={process.env.SITE_URL} />
          <meta property="og:type" content="website" />
          <meta itemProp="name" content={title} />
          <meta itemProp="url" content={process.env.SITE_URL} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />

          <meta itemProp="thumbnailUrl" content={image} />

          <link rel="image_src" href={image} />
          <meta itemProp="image" content={image} />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:url" content={process.env.SITE_URL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:site" content="@PatrykSlowinskiPortfolio" />
          <meta name="twitter:creator" content="@slowinskiPat" />

          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1500" />
          <meta property="og:image:height" content="530" />

          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
        </Head>
        <body className="bg-primary antialiased overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
