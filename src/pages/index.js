import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import heroStyles from '../components/hero.module.css'
import ProjectGrid from '../components/project-grid'

class RootIndex extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const resources = get(this, 'props.data.allContentfulResource.edges')


    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={heroStyles.hero}>
          Home
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Recent Projects</h2>
          <ProjectGrid nodes={projects} />
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Resources</h2>
          <ProjectGrid nodes={resources} />
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulProject {
      edges {
        node {
          title
          slug

        }
      }
    }
    allContentfulResource {
      edges {
        node {
          title

        }
      }
    }
  }
`
