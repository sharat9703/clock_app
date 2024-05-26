import './App.css';

function App() {
  return (
    <div className="App">
         <div className='wrapper'>
             <div className='heading'>
                 <h2>25 + 5 Clock</h2>
             </div>
             <div className='sub-wrap'>
                 <div className='labels' id='break-label'>
                      <h3>Break Length</h3>
                      <div className='sub-box'>
                      <div id='break-decrement'>symbol</div>
                      <div id='break-length'>5</div>
                      <div id='break-increment'>symbol</div>
                      </div>
                  </div>
                 <div className='labels' id='session-label'>
                      <h3>Session Length</h3>
                      <div className='sub-box'>
                      <div id='session-decrement'>symbol</div>
                      <div id='session-length'>25</div>
                      <div id='session-increment'>symbol</div>
                      </div>
                  </div>
             </div>
             <div className='timer-box'>
                <div id='timer-label'>Session</div>
                <div id='time-left'>25:00</div>
             </div>
             <div className='controls'>
                <div id='start_stop'>start/pause</div>
                <div id='reset'>reset</div>
             </div>
             <div className='credits'>
                <h4>Designed and Coded by</h4>
                <h4>Sharat Yaragatti</h4>
             </div>
         </div>        
    </div>
  );
}

export default App;
