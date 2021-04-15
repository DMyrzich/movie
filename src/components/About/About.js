import React from 'react';
import './About.css';

const About = () => {

    return (<div style={{ padding: 25 }}>
        <div className="aboutme">
            <img alt="H" src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"></img>
            <p style={{ color: '#1E88E5', fontSize: 100, margin: 0 }}>+</p>
            <div>
                <h3 style={{ margin: 0 }}>Василий Пароцкий</h3>
                <button className="waves-effect waves-light btn-small darken-1">Напишите мне</button>
            </div>
        </div>
    </div>
    )
}

export default About;