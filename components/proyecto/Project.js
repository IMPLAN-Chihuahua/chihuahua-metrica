import NextLink from 'next/link';
import styles from './Project.module.css';

const Project = (props) => {
  const { name, url, image } = props;

  return (
    <NextLink href={`${url}/#top`} passHref>
      <a>
        <div
          className={`${styles['card-proyecto']} ${styles['curve-borders']} ${styles['center-content']}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={`overlay ${styles['curve-borders']} ${styles['center-content']}`}>
            <div className='gradient-wrapper'>
              <h5 className={styles['card-title']}>{name}</h5>
            </div>
          </div>
        </div>
      </a>
    </NextLink>
  )
}

export default Project;