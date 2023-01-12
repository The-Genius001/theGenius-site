import './App.css';
var page;
function pageapp(){
 
return(0);
}
function App() {
  if (page="home"||page==""){
  
  return (
    <div className="theGenius">
      <header className="App-header">
        <title>theGenius</title>
        
        <div className="header">
          <button>GAMES</button>
          <button>PROJECTS</button>
          <button>HOME</button>
          <button onClick={pageapp}>APPS</button>
          <button>NEWS</button>
        </div>
        
        <h2 className="t">theGenius</h2>
        <p>
          "simply genius"
        </p>
        
        <button> EXPLORE</button>
      
          <h2 className="t"> UKNOWN DEAPTHS</h2>
          <p>
            A game about exploration and mystery
          </p>
          <a className="small" href="l">UNKNOWN DEAPTHS</a>

          <h2 className="t">NEWS</h2>
        <p>
          see updates on all of my projects that I am doing rn.
        </p>
        
        <button>GO THERE</button>
      </header>
    </div>
  );
}else if(page="ud"){
return(<h1> this is a page about unknown deapths</h1>);
}else{
  return(<div>
    <h2> ERROR page does not exist i think </h2>
  <a className='small' onClick={page="home"} >GO HOME</a>
  </div>
  )
}
}
function ud(){
page="ud";
}

export default App;
