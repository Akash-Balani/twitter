import React, { Component } from 'react';
import Prop from './Prop.js';

class Props extends Component {
    render() {
        return (
            <>
           <div className="Container">
             <Prop text="hii"/>
              <Prop text="hello"/>
              <Prop text="hello1"/>
              <Prop text="hello2"/>
           </div>
            </>
        );
    }
}

export default Props;