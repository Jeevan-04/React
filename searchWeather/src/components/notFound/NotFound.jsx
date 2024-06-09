import styles from './NotFound.module.css';

export default function NotFound() {

  return (
    <div className={styles.notFound}>
      <h1>City Not Found</h1>
      <button onClick={() => history.push('/')}>Back to Search</button>
    </div>
  );
}
