import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Panel(props) {
    return (
        <div className="rightside">
            <div className="srch">
              <div className="search">
                <div className="inps"><FontAwesomeIcon icon={faSearch} /><input type="text" className="inp-search" placeholder="Search Twitter" ></input></div>
              </div>
            </div>

            <div className="populer"></div>
            <div className="liked"></div>
            <div className="follo"></div>
          </div>
    );
}

export default Panel;