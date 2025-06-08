import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

// Mock data for Kanban tasks (similar to original image)
const kanbanData = [
  {
    Id: "1",
    Title: "Task 1",
    Status: "To Do",
    Summary: "Analyze the new requirements gathered from the customer.",
    Type: "Story",
    Priority: "Low",
    Tags: "Analyze, Customer",
    Assignee: "Nancy Davolio",
    RankId: 1,
    Color: "#673BB7",
  },
  {
    Id: "2",
    Title: "Task 2",
    Status: "In Progress",
    Summary: "Improve application performance.",
    Type: "Bug",
    Priority: "High",
    Tags: "Performance, Bug",
    Assignee: "Andrew Fuller",
    RankId: 2,
    Color: "#C2E5CC",
  },
  {
    Id: "3",
    Title: "Task 3",
    Status: "To Do",
    Summary: "Arrange a web meeting with the customer to get new requirements.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Meeting, Customer",
    Assignee: "Janet Leverling",
    RankId: 3,
    Color: "#00C292",
  },
  {
    Id: "4",
    Title: "Task 8",
    Status: "Done",
    Summary: "Test the application in the IE browser.",
    Type: "Bug",
    Priority: "Normal",
    Tags: "Testing, IE",
    Assignee: "Steven Buchanan",
    RankId: 8,
    Color: "#E2974F",
  },
  {
    Id: "10",
    Title: "Task 10",
    Status: "To Do",
    Summary: "Show the retrieved data from the server in grid control.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Data, Grid",
    Assignee: "Laura Callahan",
    RankId: 4,
    Color: "#90CDF4",
  },
  {
    Id: "11",
    Title: "Task 11",
    Status: "In Progress",
    Summary: "Fix the issues reported in the IE browser.",
    Type: "Bug",
    Priority: "High",
    Tags: "IE, Bug",
    Assignee: "Robert King",
    RankId: 5,
    Color: "#FF5C8E",
  },
  {
    Id: "16",
    Title: "Task 16",
    Status: "Done",
    Summary: "Stored procedure for initial data binding of the grid.",
    Type: "Story",
    Priority: "Low",
    Tags: "Data, Grid",
    Assignee: "Anne Dodsworth",
    RankId: 9,
    Color: "#7352FF",
  },
  {
    Id: "17",
    Title: "Task 17",
    Status: "Done",
    Summary: "Analyze stored procedures.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Analyze, Procedures",
    Assignee: "Robert King",
    RankId: 10,
    Color: "#00C292",
  },
  {
    Id: "20",
    Title: "Task 20",
    Status: "To Do",
    Summary: "Enhance editing functionality.",
    Type: "Story",
    Priority: "Low",
    Tags: "Editing, Functionality",
    Assignee: "Nancy Davolio",
    RankId: 6,
    Color: "#E2974F",
  },
  {
    Id: "21",
    Title: "Task 21",
    Status: "In Progress",
    Summary: "Improve the performance of the editing functionality.",
    Type: "Bug",
    Priority: "High",
    Tags: "Performance, Editing",
    Assignee: "Andrew Fuller",
    RankId: 7,
    Color: "#673BB7",
  },
  {
    Id: "22",
    Title: "Task 22",
    Status: "To Do",
    Summary: "Arrange web meeting with the customer to show editing demo.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Meeting, Demo",
    Assignee: "Janet Leverling",
    RankId: 11,
    Color: "#00C292",
  },
];

const Kanban = () => {
  return (
    <div className="kanban-page">
      <h1 className="page-title">Kanban</h1>
      <div className="kanban-container">
        <KanbanComponent
          id="kanban"
          keyField="Status" // Maps tasks to columns based on Status field
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }} // Which fields to display on cards
          height="auto" // Adjust height as needed to fit content
          cssClass="e-kanban-overlay-wrap" // Specific class for potential styling issues if Syncfusion creates its own overlays
        >
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="To Do" />
            <ColumnDirective headerText="In Progress" keyField="In Progress" />
            <ColumnDirective headerText="Done" keyField="Done" />
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
