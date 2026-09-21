import React from "react";
import { Helmet } from "react-helmet-async";
import { NAME, URL } from "../data/data";
import { SEOProps } from "../types/types";

const Seo: React.FC<SEOProps> = ({
  lang,
  url,
  metaDescription,
  keywords,
  title,
  author,
  image: metaImage,
  theme,
}) => {
  return (
    <Helmet>
      <html data-theme={theme} data-react-helmet="true" lang={lang} />

      {/* Primary meta */}
      <title>{title}</title>
      <meta name="title" content={title} data-react-helmet="true" />
      <meta
        name="description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta name="keywords" content={keywords.join(", ")} data-react-helmet="true" />
      <meta name="author" content={author} data-react-helmet="true" />
      <link rel="canonical" href={url} data-react-helmet="true" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta property="og:site_name" content={NAME} data-react-helmet="true" />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta
        property="og:description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:url" content={url} data-react-helmet="true" />
      <meta property="og:locale" content="en_US" data-react-helmet="true" />
      <meta
        property="og:image"
        content={metaImage.src}
        data-react-helmet="true"
      />
      <meta property="og:image:alt" content={`${NAME} — portfolio preview`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
      <meta name="twitter:title" content={title} data-react-helmet="true" />
      <meta
        name="twitter:description"
        content={metaDescription}
        data-react-helmet="true"
      />
      <meta name="twitter:image" content={metaImage.src} />

      {/* Personal-portfolio structured hints */}
      <meta name="profile:username" content={NAME} />
    </Helmet>
  );
};

export default Seo;
