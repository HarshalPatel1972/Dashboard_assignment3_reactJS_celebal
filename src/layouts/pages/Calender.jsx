import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

// Mock data for calendar events (similar to original image)
const calendarData = [
  {
    Id: 1,
    Subject: "Exploration of Beldelgaue Star",
    StartTime: new Date(2021, 0, 10, 10, 0), // Jan 10, 2021, 10:00 AM
    EndTime: new Date(2021, 0, 10, 11, 0),
    Location: "Space Center USA",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Thule Air Crash Report",
    StartTime: new Date(2021, 0, 11, 12, 0), // Jan 11, 2021, 12:00 PM
    EndTime: new Date(2021, 0, 11, 13, 0),
    Location: "Newyork City",
    CategoryColor: "#357CD2",
  },
  {
    Id: 3,
    Subject: "Blue Moon Eclipse",
    StartTime: new Date(2021, 0, 12, 9, 30), // Jan 12, 2021, 9:30 AM
    EndTime: new Date(2021, 0, 12, 10, 30),
    Location: "Space Center USA",
    CategoryColor: "#7fa900",
  },
  {
    Id: 4,
    Subject: "Mysteries of Bermuda Triangle",
    StartTime: new Date(2021, 0, 13, 11, 0), // Jan 13, 2021, 11:00 AM
    EndTime: new Date(2021, 0, 13, 12, 0),
    Location: "Bermuda",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 5,
    Subject: "Glaciers and Snowflakes",
    StartTime: new Date(2021, 0, 15, 11, 30), // Jan 15, 2021, 11:30 AM
    EndTime: new Date(2021, 0, 15, 12, 30),
    Location: "Himalaya",
    CategoryColor: "#00bdae",
  },
  {
    Id: 6,
    Subject: "Life on Mars",
    StartTime: new Date(2021, 0, 16, 9, 0), // Jan 16, 2021, 9:00 AM
    EndTime: new Date(2021, 0, 16, 10, 0),
    Location: "Space Center USA",
    CategoryColor: "#f57a00",
  },
  {
    Id: 7,
    Subject: "Milky Way as Melting pot",
    StartTime: new Date(2021, 0, 13, 1, 0), // Jan 13, 2021, 1:00 PM
    EndTime: new Date(2021, 0, 13, 2, 0),
    Location: "Space Center USA",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 8,
    Subject: "Facts of Humming Birds",
    StartTime: new Date(2021, 0, 16, 12, 30), // Jan 16, 2021, 12:30 PM
    EndTime: new Date(2021, 0, 16, 13, 30),
    Location: "California",
    CategoryColor: "#357CD2",
  },
  {
    Id: 9,
    Subject: "Alien Civilization",
    StartTime: new Date(2021, 0, 10, 2, 0), // Jan 10, 2021, 2:00 PM
    EndTime: new Date(2021, 0, 10, 3, 0),
    Location: "Space Center USA",
    CategoryColor: "#7fa900",
  },
  {
    Id: 10,
    Subject: "The Cycle of Seasons",
    StartTime: new Date(2021, 0, 13, 2, 30), // Jan 13, 2021, 2:30 PM
    EndTime: new Date(2021, 0, 13, 3, 30),
    Location: "Research Center USA",
    CategoryColor: "#ea7a57",
  },
  {
    Id: 11,
    Subject: "Sky Gazers",
    StartTime: new Date(2021, 0, 15, 3, 0), // Jan 15, 2021, 3:00 PM
    EndTime: new Date(2021, 0, 15, 4, 0),
    Location: "Greenland",
    CategoryColor: "#00bdae",
  },
  {
    Id: 12,
    Subject: "Water from the Milky Way",
    StartTime: new Date(2021, 0, 10, 4, 0), // Jan 10, 2021, 4:00 PM
    EndTime: new Date(2021, 0, 10, 5, 0),
    Location: "Space Center USA",
    CategoryColor: "#f57a00",
  },
];

const Calendar = () => {
  return (
    <div className="calendar-page">
      <h1 className="page-title">Calendar</h1>
      <div className="calendar-container">
        <ScheduleComponent
          height="650px" // Adjusted height to fit the page better
          selectedDate={new Date(2021, 0, 10)} // Start date visible in the original image
          eventSettings={{
            dataSource: calendarData,
            fields: {
              id: "Id",
              subject: { name: "Subject", default: "No Title" },
              startTime: { name: "StartTime" },
              endTime: { name: "EndTime" },
              location: { name: "Location" },
              categoryColor: { name: "CategoryColor" },
            },
          }}
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
