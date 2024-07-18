import React from "react"

const currentDate = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[currentDate. getDay()];

function Heading(){
    return <div className="heading"><h1 className="headingText">{currentDayOfWeek}'s Schedule</h1></div>
}

export default Heading;
