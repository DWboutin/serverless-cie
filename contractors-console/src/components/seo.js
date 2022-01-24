/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectIntl } from 'react-intl'
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

function SEO({ intl, description, lang, meta, keywords, locale }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
        locale,
      }}
      title={intl.formatMessage({ id: 'metaTitle' })}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `locale`,
          content: locale,
        },
        {
          name: `place:location:latitude`,
          content: 46.81332219999999,
        },
        {
          name: `place:location:longitude`,
          content: -71.22411439999996,
        },
        {
          name: `description`,
          content: intl.formatMessage({ id: 'metaDescription' }),
        },
        {
          property: `og:title`,
          content: intl.formatMessage({ id: 'metaTitle' }),
        },
        {
          property: `og:site_name`,
          content: intl.formatMessage({ id: 'ogSiteName' }),
        },
        {
          property: `og:image`,
          content: `${process.env.SITE_URL}/site-image.jpg`,
        },
        {
          property: `og:url`,
          content: process.env.SITE_URL,
        },
        {
          property: `og:image:width`,
          content: 812,
        },
        {
          property: `og:image:height`,
          content: 721,
        },
        {
          property: `og:locale`,
          content: locale === 'fr' ? 'fr_ca' : 'en_us',
        },
        {
          property: `og:description`,
          content: intl.formatMessage({ id: 'metaDescription' }),
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: intl.formatMessage({ id: 'metaTitle' }),
        },
        {
          name: `twitter:image`,
          content: `${process.env.SITE_URL}/site-image.jpg`,
        },
        {
          name: `twitter:description`,
          content: intl.formatMessage({ id: 'metaDescription' }),
        },
        {
          name: `dc.description`,
          lang: locale,
          content: intl.formatMessage({ id: 'metaDescription' }),
        },
        {
          name: `dc.format`,
          scheme: 'IMT',
          content: 'text/html',
        },
        {
          name: `dc.identifier`,
          content: '/meta-tags/dublin/',
        },
        {
          name: `dc.source`,
          content: '/meta-tags/',
        },
        {
          name: `dc.title`,
          content: intl.formatMessage({ id: 'metaTitle' }),
        },
        {
          name: `dc.language`,
          content: locale,
        },
        {
          name: `dc.coverage`,
          content: 'Canada',
        },
        {
          name: `keywords`,
          content: intl.formatMessage({ id: 'metaKeywords' }),
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://www.google-analytics.com" />
      {locale === 'fr' && [
        <link
          rel="alternate"
          hrefLang="x-default"
          href={process.env.SITE_URL}
          key="alternate-x-default"
        />,
        <link
          rel="alternate"
          hrefLang="en-CA"
          href={process.env.SITE_LANG_URL}
          key="alternate-en-CA"
        />,
        <link
          rel="canonical"
          href={`${process.env.SITE_LANG_URL}/fr`}
          key="canonical"
        />,
      ]}
      {locale === 'en' && [
        <link
          rel="alternate"
          hrefLang="x-default"
          href={process.env.SITE_LANG_URL}
          key="alternate-x-default"
        />,
        <link
          rel="alternate"
          hrefLang="fr-CA"
          href={process.env.SITE_URL}
          key="alternate-fr-CA"
        />,
        <link
          rel="canonical"
          href={`${process.env.SITE_LANG_URL}/en`}
          key="canonical"
        />,
      ]}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default injectIntl(SEO)
