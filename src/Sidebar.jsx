import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
function Sidebar(props) {
    return (
        <div className="leftside">
            <div className="left1">
                <ul>
                    <li className="twi"><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><a href="#"><FontAwesomeIcon icon={faHome} /><b>Home</b></a></li>
                    <li>
                        {/* <Link to="Likedone" element=<A/> /></Link> */}
                        <FontAwesomeIcon icon={faHeart} /><b>Liked Ones</b></li>
                    <li><a href="#"><FontAwesomeIcon icon={faHashtag} /><b>Explore</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faBell} /><b>Notifications</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /><b>Messages</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faBookmark} /><b>Bookmarks</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faStream} /><b>Lists</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUser} /><b>Profiles</b></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faEllipsisH} /><b>More</b></a></li>
                </ul>
                <button className="btn-twitt">Tweet</button>
                <div className="left2">
                    <div>
                        <ul>
                            <li>
                                <a href="#"><FontAwesomeIcon icon={faUserCircle} /></a>
                                Logged In User
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;