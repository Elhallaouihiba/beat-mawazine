import { useState } from 'react'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Planning from './pages/Planning'
import Passeport from './pages/Passeport'

export default function App() {
  const [page, setPage] = useState('home')
  
  return (
    <div style={{background:'#000',minHeight:'100vh',color:'white'}}>
      <h1 style={{color:'#CFAF6E',textAlign:'center',padding:'20px',margin:0,borderBottom:'2px solid #CFAF6E'}}>
        MAWAZINE
      </h1>
      {page==='home' && <Home go={setPage}/>}
      {page==='programme' && <Programme go={setPage}/>}
      {page==='planning' && <Planning go={setPage}/>}
      {page==='passeport' && <Passeport go={setPage}/>}
    </div>
  )
}