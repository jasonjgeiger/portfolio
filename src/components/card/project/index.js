import React from "react";
import Link from '../../link'
import styles from './card-project.module.scss'

class ProjectCard extends React.Component {

  render(){
    const { hit } = this.props;
    return (
      <figure className={styles.card}>
        <div className={styles.image}>
          <img src={hit.thumbnail.file.url} title={hit.thumbnail.title} alt={hit.thumbnail.description}/>
        </div>
        <figcaption className={styles.caption}>
          <h3 className="type--subtitle1">{hit.title}</h3>
          <p className="type--body1">This is a static placeholder description that map not actually represent a realistic description length.</p>
          <Link to={`/projects/${hit.slug}`}>Read More</Link>
        </figcaption>
      </figure>
    );
  }
}


export default ProjectCard;