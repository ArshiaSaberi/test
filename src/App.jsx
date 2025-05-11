import './App.css'
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state);

 
 
 
  return (
    <>
    <p>salam : {count}</p>
    <button onClick={()=>{
      dispatch({type:"P"})
    }}>click</button>
    </>
  )
}

export default App
