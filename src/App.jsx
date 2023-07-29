import './App.css'
import Button from './components/Button'
import { MdCheckCircle } from "react-icons/md";

function App() {

 
  return (
    <>
      <Button disabled={true} icon={<MdCheckCircle />}/>
      <Button variant={'secondary'} title="Action 2" />
      <Button title="Action 3" icon={<MdCheckCircle />} handleClick={ ()=>{alert('click')} }/>
    </>
  )
}

export default App