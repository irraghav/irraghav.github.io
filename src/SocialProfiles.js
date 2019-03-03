import React, { Component } from 'react';
import SOCIALPROFILELIST from './data/socialProfiles.js';

class SocialProfile extends Component{
    render(){
        //console.log("social.profile props", this.props);
        const {title,alt,link,image} = this.props.profile;
        return(
            <div className="social-profile-container">
                <a href={link} title={title}>
                 <img src={image} alt={alt} className="social-profile-image"/>           
                </a>
            </div>
        )
    }
};

class SocialProfiles extends Component{
    render(){
        return(
            <div className="social-profiles-wrapper">
                <div>{
                    SOCIALPROFILELIST.map(PROFILE => {
                        return(<SocialProfile key={PROFILE.id} profile={PROFILE}/>);
                    })
                }
                </div>
                <div>This site is created with React by Raghav Sharma</div>    
            </div>
        )
    }
}

export default SocialProfiles;
