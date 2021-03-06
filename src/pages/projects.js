import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import Search from '../components/search';

class ProjectsIndex extends React.Component {
  render() {
    const{data,location} = this.props;
    const searchIndices = [
      { name: `Project`, title: `Project`, hitComp: `CardHit` },
    ]

    return (
      <Page>
        <SEO 
          title={data.contentfulPage.metaTitle} 
          description={data.contentfulPage.metaDescription}
        />
        <Hero title={data.contentfulPage.title} body="" className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Search collapse indices={searchIndices} />
        </Main>
      </Page>
    )
  }
}

export default ProjectsIndex

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "projects" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`