export default function Home({go}) {
  const btn={background:'#CFAF6E',color:'#000',border:0,padding:'10px 20px',margin:'5px',borderRadius:'6px',cursor:'pointer',fontWeight:'bold'}
  
  return (
    <div style={{textAlign:'center',padding:'30px 20px'}}>
      <img src="/banner.jpg" style={{width:'100%',maxWidth:'700px',height:'400px',objectFit:'cover',borderRadius:'10px'}} alt=""/>
      <h2 style={{fontSize:'40px',margin:'20px 0'}}>Rhythms of the World</h2>
      <p style={{color:'#CFAF6E',marginBottom:'30px'}}>20-28 June 2026</p>
      <button onClick={()=>go('programme')} style={btn}>Programme</button>
      <button onClick={()=>go('planning')} style={btn}>Planning</button>
      <button onClick={()=>go('passeport')} style={btn}>Passeport</button>
      <button onClick={()=>go('programme')} style={btn}>Artists</button>
    </div>
  )
}