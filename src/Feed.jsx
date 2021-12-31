import React, { useState } from 'react';


//font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faPoll } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';

//prop
import Prop from './Prop.js';



function Feed(props) {
    const [Data, setData] = useState("Text");
    const [List, setList] = useState([]);

    
    function getvalue(event) {
        // console.log(event.target.value);
        setData(event.target.value)
        // setName(event.target.value)
        
    }    
    function clearv(){
        setData("")
    }
    function listofitm(e) {
        // console.log(e);
        // e.preventdefault()
        setList((olditm) => {
            return [ Data]
        })
        // console.log("end");
        // setData(e.target.value = '');
        
    }

    return (
        <div className="centered">
            <div className="top">
                <a href='#'>Home</a>
            </div>
            <div className="cont">
                <div className="createtweet" >
                    <textarea className="imnp" placeholder="What's Happemning ?" rows="2" cols="50" onChange={getvalue} />
                    <div classNameName="listt">
                        <ol>
                            <li> <a href="#"> <FontAwesomeIcon icon={faImage} /> </a></li>
                            <li> <a href="#"> <FontAwesomeIcon icon={faPoll} /> </a></li>
                            <li> <a href="#"> <FontAwesomeIcon icon={faSmile} /> </a></li>
                            <li> <a href="#"> <FontAwesomeIcon icon={faCalendar} />  </a></li>
                            <li> <a href="#"> <FontAwesomeIcon icon={faMap} /> </a></li>
                            <button className="btn-tw" onClick={listofitm} > Tweeet</button>
                            
                        </ol>
                    </div>
                </div>
                <div className="twiittss">
                    <Prop text="lorem Ipsum" />
                </div>
                {List.map((itmvalue) => {
                    return <>
                        <div className="twiittss">
                            <Prop text={itmvalue} />
                        </div>
                    </>
                })}
                {/* <div className="twiittss"><Twitt text="new 1"/></div> */}
            </div>
        </div>
    );
}

export default Feed; 