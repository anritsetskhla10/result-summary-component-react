
import Reaction from '/images/icon-reaction.svg'
import Memory from '/images/icon-memory.svg'
import Verbal from '/images/icon-verbal.svg'
import Visual from '/images/icon-visual.svg'



import './card.css'

export default function Card(){
    return(
        <div className="result-summary">
        <div className="result">
        <h2>Your Result</h2>
        
        <div className="point">
            <p className="big">76</p>
            <p className="small">of 100</p>
        </div>
        <h3>Great</h3>
        <p className="details">Your performance exceed 65% of the people conducting the test here!</p>
        
        </div>
        
        
        <div className="summary">
        
            <h2>Summary</h2>
        <div className="wrapper">
        <div className="reaction common">
            <div className="flex-group">
                <img src={Reaction} alt="reaction image"/>
                <h3>Reaction</h3>
            </div>
            <p>80  <span> / 100</span></p>
        </div>
        
        <div className="memory common">
            <div className="flex-group">
                <img src={Memory} alt="memory image"/>
                <h3>Reaction</h3>
            </div>
            <p>92  <span> / 100</span></p>
        </div>
        
        <div className="verbal common">
            <div className="flex-group">
                <img src={Verbal} alt="verbal image"/>
                <h3>Reaction</h3>
            </div>
            <p>61  <span> / 100</span></p>
        </div>
        
        <div className="visual common">
            <div className="flex-group">
                <img src={Visual} alt="visual image"/>
                <h3>Reaction</h3>
            </div>
            <p>73  <span> / 100</span></p>
        </div>
        
        </div>
             <button>Continue</button>
        
        </div>
        
        
        
            </div>
                
    )
}
