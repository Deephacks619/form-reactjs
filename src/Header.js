import React from 'react';
import './header.css';
class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                <img src="https://lh3.googleusercontent.com/proxy/X-m8bpTLOihbofyWnbUmAc0VupdWfCA0iNTu_8UTHhv8fzyjhETjCxwa0A8LYoNikATGbgSmm5s4cQY_7n81VkwBZZ-mj5crGdcsABOxK2S4xTb3RBw8E3voC542VYhEqVpkfMX3gvHC" alt="meme" />
                <h1>MEME GENERATOR APP</h1>
                </div>
            </div>
        );
    }
}


export default Header;