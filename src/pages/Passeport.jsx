export default function Passeport({go}) {
  return (
    <div style={{textAlign:'center',padding:'40px'}}>
      <h1 style={{color:'#CFAF6E'}}>Passeport</h1>
      <p>Gold Pass - 2000 MAD</p>
      <p>Free Pass - 0 MAD</p>
      <button onClick={()=>go('home')} style={{background:'#CFAF6E',padding:'10px 20px',border:0,borderRadius:'6px',marginTop:'20px'}}>Back</button>
    </div>
  )
}