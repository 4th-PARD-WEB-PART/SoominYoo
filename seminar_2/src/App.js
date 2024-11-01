function App(){
  return(
    <div>
      <h1>2차 세미나 Default Props 예시</h1>

      <p>defaultprops를 <strong>쓴</strong> 경우 : <Myname /></p>
      <p>defaultprops를 <strong>쓰지 않은</strong> 경우 : <Myname name = "권채채"/></p>
    </div>
  )
}
export default App;

function Myname(props){
  return <strong>Hello {props.name}!</strong>;
}

Myname.defaultProps = {
  name:'World',
}