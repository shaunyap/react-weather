var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className='text-center'>About</h1>
            <p>This is a weather application built on React. I built this for the Complete React Web App Developer Course.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href='https://facebook.github.io/react'>React.js</a> - this was the JavaScript framework used.
                </li>
                <li>
                    <a href='http://openweathermap.org'>Open Weather Map</a> - I used Open Weather Map to search for the weather by city name.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
