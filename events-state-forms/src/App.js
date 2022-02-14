import MyClassComponent from "./Components/Counter";

function App() {
  return (
    <>
      <MyClassComponent onClick={console.log('wqdwqd')}/>
    {/* <button onClick={event => console.log(event)}>Click me!</button> */}
    </>
   
  );
}


export default App;
