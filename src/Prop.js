import React, { Component, use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
class Prop extends Component {
constructor(props){
    super(props);
    
}
    render() {
        let newdata = [];
        function handlClick(evt) {


            newdata = (JSON.parse(localStorage.getItem('Text')) != null ? JSON.parse(localStorage.getItem('Text')) : [])
            newdata.push(evt)
            console.log(newdata);
            localStorage.setItem('Text', JSON.stringify(newdata));
            
            // access to e.target here
            // const b= evt.value;
            // console.log(b);

            console.log(evt);

        }
        return (
            <>
                {/* <p>{this.props.text}</p> */}
                <ul >
                    <li className="tt">{this.props.text}</li>
                    <li><FontAwesomeIcon icon={faEllipsisH} /></li>
                </ul>
                <div className="twiittss1"><ul >
                    <li><button className="comment" onClick={() => console.log("comment")}>
                        <FontAwesomeIcon icon={faComment} />100
                    </button></li>
                    <li><button className="recomment" onClick={() => console.log("re comment")}>
                        <FontAwesomeIcon icon={faRetweet} />200
                    </button></li>
                    <li><button className="like" onClick={handlClick(this.props.text)}>
                        <FontAwesomeIcon icon={faHeart} />300
                    </button></li>
                    <li><button className="share" onClick={() => console.log("sahre")}>
                        <FontAwesomeIcon icon={faShare} />
                    </button></li>
                </ul></div>
            </>
        );
    }
}

export default Prop;