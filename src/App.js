import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import "./styles/projects.css"

class App extends Component {
    state = {displayBio:false}
/*    constructor(){
        super();
        this.state = { displayBio:false };
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
*/
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
        }
    
    render(){
        return (
        <div>
            <h1>Hello!</h1>
            <p>My name is Raghav. I'm a Data - Developer.</p>
            <p>What does that mean?</p>
            <p>I am a developer who focused on data collection strategies</p>
            {
                this.state.displayBio ? (
                    <div>    
                        <p>I am always willing to learn something new. Last thing on the list: React.js</p>
                        <p> I am from New Delhi, but Toronto is Home #6ix</p>
                        <p> Data and Javascript is what i live by.</p>
                        <p> Expect work, I love the fact that i am a Cat Dad!</p>
                        <div><button onClick={this.toggleDisplayBio}>Show less</button></div>
                    </div>
                ): (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )
            }
            <hr/>
            <Projects/>
        </div>
        ); 
    }
}

export default App;