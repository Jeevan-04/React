import styles from './Home.module.css'
import Navigation from '../../components/navigation/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../../slices/userSlice'

export default function Home() {


  let username = useSelector((state)=>{return state.user.value})

  let products = useSelector((state)=>state.product.value)

  let dispatch = useDispatch()

  return (
    <>
      <Navigation/>
      <div className={styles.container}><h1>home {username} <button onClick={()=>{dispatch(changeName("Jeevan Naidu"))}}>Change Redux</button></h1></div>
    </>
  )
}
