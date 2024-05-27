import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown,faArrowUp,faPlay,faStop,faRepeat }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faArrowDown,faArrowUp,faPlay,faRepeat,faStop);

const arrow_up = <FontAwesomeIcon icon={faArrowUp}/>
const arrow_down = <FontAwesomeIcon icon={faArrowDown}/>
const icon_start =<FontAwesomeIcon icon={faPlay}/>
const icon_stop = <FontAwesomeIcon icon={faStop}/>
const icon_reset = <FontAwesomeIcon icon={faRepeat}/>
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
                      <div className='sub-el' id='break-decrement'>{arrow_down}</div>
                      <div className='sub-el' id='break-length'>5</div>
                      <div className='sub-el' id='break-increment'>{arrow_up}</div>
                      </div>
                  </div>
                 <div className='labels' id='session-label'>
                      <h3>Session Length</h3>
                      <div className='sub-box'>
                      <div className='sub-el' id='session-decrement'>{arrow_down}</div>
                      <div className='sub-el' id='session-length'>25</div>
                      <div className='sub-el' id='session-increment'>{arrow_up}</div>
                      </div>
                  </div>
             </div>
             <div className='timer-box'>
                <h3 id='timer-label'>Session</h3>
                <div id='time-left'>25:00</div>
             </div>
             <div className='controls'>
                <div id='start_stop'>{icon_start}{icon_stop}</div>
                <div id='reset'>{icon_reset}</div>
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
