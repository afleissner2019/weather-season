import React from 'react'
import "./WeatherShow.css"

const weatherDesign = {
    summer:{
        notification:  "Let us beat the heat",
        iconName: "sun"
    },

    winter: {
        notification: "OMG!!!! I am freezing, it is sooo cold",
        iconName: "snowflake"

    }
}

const showWeather = (latitude, month) =>{
    if(month > 2 && month < 9 ){
        return latitude > 0 ? "summer" : "winter"
    } else {
        return latitude > 0 ? "winter" : "summer"
    }

}

const WeatherShow = (props) => {
    console.log(props.latitude);
    const weather = showWeather(props.latitude, new Date().getMonth())
    console.log(weather);
    const {notification, iconName} = weatherDesign[weather]
    return (
        <div className= {`weather-show ${weather}`}>
            <i className={`icon-left huge loading ${iconName} icon `}/>
            <h1>{notification}</h1>
            <i className={`icon-right huge loading ${iconName} icon `}/>
        </div>
    )
}

export default WeatherShow
