import { createContext, useRef, useState } from 'react';
import styles from './App.module.css'
import A from './A';
import B from './B';
export const DataContext = createContext()

function App() {

  let [name,setName] = useState("jeevan")

  // let a=useRef()
  // let b=useRef()
  // function redhandle()
  // {
  //   a.current.style.backgroundColor="skyblue";
  // }
  // function bluehandle()
  // {
  //   b.current.style.backgroundColor="red";
  // }

  return (
    // <>
    //   <div className={styles.red} ref={a}><button onClick={redhandle}>RED</button></div>
    //   <div className={styles.blue} ref={b}><button onClick={bluehandle}>BLUE</button></div>
    // </>
    <>
      <DataContext.Provider value={{name:name}}>
        <A/>
        <B/>
      </DataContext.Provider>
    </>
  )
}

export default App
