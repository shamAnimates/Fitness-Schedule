import { useState } from 'react';
import Heading from './components/Heading';
import ScheduleToday from './components/schedule';
import fitnessSchedule from '../public/Planning/planning';
import Footer from './components/Footer';

const currentDate = new Date();
const id = currentDate.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[id];

const obj = fitnessSchedule.find(item => item.key === id);

function App() {
  return (
    <div className='app'>
      <Heading />
      {obj && <ScheduleToday 
                day={obj.day}
                action={obj.action}
                exercises={obj.exercises}
              />}
      <Footer />
    </div>
  );
}

export default App;
