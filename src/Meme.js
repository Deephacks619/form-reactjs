import React from 'react';
import './header.css';
class Meme extends React.Component{
    constructor(){
        super()
        this.state={
            toptext:"",
            bottomtext:"",
            currentimg:"https://i.imgflip.com/2h4e0w.jpg",
            loadimg:[]
        }
        this.handlechange=this.handlechange.bind(this)
        this.hansubmit=this.hansubmit.bind(this)
    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((res)=>{
            const {memes} =res.data
            this.setState({loadimg:memes})
        })
    }
    handlechange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    hansubmit(event){
        event.preventDefault()
        const randnum=Math.floor(Math.random()*(this.state.loadimg.length))
        const randmemeimg=this.state.loadimg[randnum].url
        this.setState({currentimg:randmemeimg})
    }

    render(){
        return(
            <div className="meme">
                <form className="meme-form" onSubmit={this.hansubmit}>
                    <input type="text"
                    onChange={this.handlechange}
                    placeholder="enter top text"
                    name="toptext"
                    value={this.state.toptext}
                    >
                    </input>

                    <input type="text"
                    onChange={this.handlechange}
                    placeholder="enter bottom text"
                    name="bottomtext"
                    value={this.state.bottomtext}
                    >
                    </input>

                    <button type='submit'>submit</button>
                </form>
                <div className="memeimg">
                    <img src={this.state.currentimg} alt="img"></img>
                    <h2 className="top">{this.state.toptext}</h2>
                    <h2 className="bottom">{this.state.bottomtext}</h2>
                </div>
                
            </div>
        );
    }
}



export default Meme;