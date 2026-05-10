export default function Planning({go}) {
  return (
    <div style={{textAlign:'center',padding:'40px'}}>
      <h1 style={{color:'#CFAF6E'}}>Planning</h1>
      <p>My Schedule</p>
      <button onClick={()=>go('home')} style={{background:'#CFAF6E',padding:'10px 20px',border:0,borderRadius:'6px',marginTop:'20px'}}>Back</button>
    </div>
  )
}