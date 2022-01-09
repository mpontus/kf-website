import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

export interface SEOProps extends HelmetProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
  twitterUsername?: string
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`

export function SEO(props: SEOProps) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const { defaultTitle, titleTemplate, defaultDescription, siteUrl } = site.siteMetadata
  const { title, description, image, article = false, twitterUsername, children, ...rest } = props
  return (
    <>
      <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={titleTemplate} {...rest}>
        <meta name="description" content={description ?? defaultDescription} />
        {image && <meta name="image" content={`${siteUrl}${image}`} />}
        <meta property="og:url" content={`${siteUrl}${pathname}`} />
        {article && <meta property="og:type" content="article" />}
        {title && <meta property="og:title" content={title ?? defaultTitle} />}
        {description && <meta property="og:description" content={description ?? defaultDescription} />}
        {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
        {title && <meta name="twitter:title" content={title ?? defaultTitle} />}
        {description && <meta name="twitter:description" content={description ?? defaultDescription} />}
        {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
      </Helmet>
      {children}
    </>
  )
}
