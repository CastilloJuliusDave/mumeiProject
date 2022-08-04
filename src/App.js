import friend from './assets/friend.png';
import ohHi from './assets/ohHi.mp3';
import './App.css';
let clickCounter = 0;
let clickCountGlobal = localStorage.clickcount1 ? localStorage.clickcount1 : 0;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.redbubble.com/i/photographic-print/Hololive-Mumei-friend-by-SwampySoup/87223807.6Q0TX" id="friend-shop" >
          <img src={friend} className="Friend-logo" alt="logo" />
        </a>
        <div id="global">{clickCountGlobal}</div>
        <div id="local">{clickCounter}</div>
        <div className="button-wrapper">
        <audio id="audio" src={ohHi}></audio>
          <button id="oh-Hi" 
            type="button" 
            onClick={() => {
              var audio = document.getElementById("audio");
              audio.play();
              console.log("hi");
              if (typeof(Storage) !== "undefined") {
                if (localStorage.clickcount1) {
                  localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
                  clickCounter = clickCounter+1
                } else {
                  clickCounter = 1;
                  localStorage.clickcount1 = 1;
                }
                clickCountGlobal = localStorage.clickcount1;
                document.getElementById("global").innerHTML = clickCountGlobal;
                document.getElementById("local").innerHTML = clickCounter;
                console.log('clickCountGlobal--', clickCountGlobal);
                console.log('clickCounter--', clickCounter);
              } else {
                clickCounter = "Sorry, your browser does not support web storage...";
              }
            }}>
            oh Hi!
          </button> 
        </div>
      </header>
    </div>
  );
}

export default App;
