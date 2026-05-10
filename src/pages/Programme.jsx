export default function Programme({go}) {
  return (
    <div style={{textAlign:'center',padding:'40px'}}>
      <h1 style={{color:'#CFAF6E'}}>Programme</h1>
      <p>22 June - ElGrandeToto - 22:00</p>
      <p>23 June - Manal - 20:30</p>
      <button onClick={()=>go('home')} style={{background:'#CFAF6E',padding:'10px 20px',border:0,borderRadius:'6px',marginTop:'20px'}}>Back</button>
    </div>
  )
}