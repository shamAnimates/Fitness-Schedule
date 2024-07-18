import React from "react";

function ScheduleToday({ day, action, exercises }) {
  return (
    <div className="schedule-box">
      <dl>
        <dt>
          <div className="day"><span>{day} </span></div>
          <div className="action"><span>{action}</span></div>
        </dt>
        <dd>
          {Array.isArray(exercises) ? (
            <ul>
              {exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          ) : (
            <p>{exercises}</p>
          )}
        </dd>
      </dl>
    </div>
  );
}

export default ScheduleToday;
