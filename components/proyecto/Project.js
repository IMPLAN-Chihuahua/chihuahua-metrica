import NextLink from 'next/link';
import styles from './Project.module.css';

const Project = (props) => {
  const { name, url, image } = props;

  return (
    <NextLink href={url}>
      <div className={`${styles['card-proyecto']} ${styles['curve-borders']} ${styles['center-content']}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`${styles.overlay} ${styles['curve-borders']} ${styles['center-content']}`}>
          <div className={styles['gradient-wrapper']}>
            <h5 className={styles['card-title']}>{name}</h5>
          </div>
        </div>
      </div>
    </NextLink>
  )
}

export default Project;