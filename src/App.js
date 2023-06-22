import './App.css';
import Players from './components/Players';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { getDocs, collection, updateDoc, doc} from 'firebase/firestore';

function App() {

  const [users, setUsers] = useState([])
 
  useEffect(() => {
    const playerListRef = collection(db, "players")
    const getPlayers = async () => {
      
      try {
        const dataList = await getDocs(playerListRef)
        const filteredData = dataList.docs.map((doc) =>({...doc.data(), id: doc.id}))
        console.log(filteredData)
        setUsers(filteredData)
      } catch (err) {
        console.error(err)
      }
      
    } 
    getPlayers()
  }, []);
  
  const changeColor = async (newColor, id) => {
    if (!users.some((user) => user['color'] === newColor)){  
      setUsers(users.map((user) => (user.id === id) ? {...user, color: newColor} : user))
      const targetPlayer = doc(db, "players", id)
      await updateDoc(targetPlayer, {color: newColor})   
    }else{
      return
    }
  }

  return (
      <div className="App">
        <h1 style={{fontSize: "80px"}}>Game Lobby</h1>
        <div className='lobby'>
          <Players users={users} changeColor={changeColor}/>
        </div>
      </div>
  );
}

export default App;
