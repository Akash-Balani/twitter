import React from 'react';
import Sidebar from './Sidebar.jsx';
import Feed from './Feed.jsx'
import Panel from './Panel.jsx'

function Home(props) {
    return (
        <div class="app-container">
            <div class="main">
                <Sidebar />
                <Feed />
                <Panel />
            </div>
        </div>
    );
}

export default Home;