import { useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './About.module.css'
export default function About() {
  let username = useSelector((state)=>{return state.user.value})
  return (
    <>
      <Navigation/>
      <div className={styles.container}><h1>About {username}</h1></div>
    </>
  )
}
