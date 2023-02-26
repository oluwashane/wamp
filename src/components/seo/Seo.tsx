import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// default meta
const defaultMeta = {
  title: 'Nogic JQS',
  siteName: 'Nogic JQS',
  description: 'A starter BoilerPlate for Nogic',
  url: 'https://nogicjqs.com',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

export type SeoProps = {
  date?: string;
  templateTitle?: string;
};

export const Seo: FC<SeoProps> = (props: SeoProps) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta.title =
    props.templateTitle != null
      ? `${props.templateTitle} | ${meta.siteName}`
      : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta
        content={meta.description}
        name="description"
      />
      <meta
        property="og:url"
        content={`${meta.url}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`${meta.url}${router.asPath}`}
      />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta
        property="og:site_name"
        content={meta.siteName}
      />
      <meta
        property="og:description"
        content={meta.description}
      />
      <meta property="og:title" content={meta.title} />
      <meta
        name="image"
        property="og:image"
        content={meta.image}
      />
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta
        name="twitter:description"
        content={meta.description}
      />
      <meta name="twitter:image" content={meta.image} />
      {meta.date != null && (
        <>
          <meta
            property="article:published_time"
            content={meta.date}
          />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Theodorus Clarence"
          />
        </>
      )}

      {/* Favicons */}
      {/* {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))} */}
      <meta
        name="msapplication-TileColor"
        content="#ffffff"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
