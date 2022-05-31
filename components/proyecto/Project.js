import NextLink from 'next/link';
import styles from './Project.module.css';

const Project = (props) => {
  const { name, url, image } = props;

  return (
    <NextLink href={url}>
      <div 
      onMouseOver={() => console.log('expand divider')}
      className={`${styles['card-proyecto']} ${styles['curve-borders']} ${styles['center-content']}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`overlay ${styles['curve-borders']} ${styles['center-content']}`}>
          <div className={styles['gradient-wrapper']}>
            <h5 className={styles['card-title']}>{name}</h5>
          </div>
        </div>
      </div>
    </NextLink>
  )
}

export default Project;