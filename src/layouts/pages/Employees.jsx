import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Inject,
  Toolbar,
  Search,
} from "@syncfusion/ej2-react-grids";

// Mock data for Employees (similar to original image)
const employeesData = [
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Designation: "Sales Representative",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=NancyD&size=32",
  },
  {
    EmployeeID: 2,
    Name: "Andrew Fuller",
    Designation: "Marketing Head",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=AndrewF&size=32",
  },
  {
    EmployeeID: 3,
    Name: "Janet Leverling",
    Designation: "HR",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=JanetL&size=32",
  },
  {
    EmployeeID: 4,
    Name: "Margaret Peacock",
    Designation: "Marketing Head",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MargaretP&size=32",
  },
  {
    EmployeeID: 5,
    Name: "Steven Buchanan",
    Designation: "HR",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=StevenB&size=32",
  },
  {
    EmployeeID: 6,
    Name: "Laura Callahan",
    Designation: "Sales Representative",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=LauraC&size=32",
  },
  {
    EmployeeID: 7,
    Name: "Michael Suyama",
    Designation: "HR",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MichaelS&size=32",
  },
  {
    EmployeeID: 8,
    Name: "Robert King",
    Designation: "Sales Representative",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=RobertK&size=32",
  },
  {
    EmployeeID: 9,
    Name: "Anne Dodsworth",
    Designation: "Marketing Head",
    Country: "USA",
    HireDate: "01/02/2021",
    ReportsTo: "Carson",
    EmployeeImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=AnneD&size=32",
  },
];

// Template for displaying Employee Image and Name
const employeeGridTemplate = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-8 h-8"
      src={props.EmployeeImage}
      alt="employee-image"
    />
    <p>{props.Name}</p>
  </div>
);

const Employees = () => {
  return (
    <div className="employees-page">
      <h1 className="page-title">Employees</h1>
      <div className="grid-container page-content">
        <GridComponent
          id="employees-grid"
          dataSource={employeesData}
          allowPaging={true} // Enable pagination
          allowSorting={true} // Enable sorting by columns
          allowFiltering={true} // Enable filtering
          toolbar={["Search"]} // Add search to toolbar
          width="auto" // Let container determine width
        >
          <ColumnsDirective>
            <ColumnDirective
              headerText="Employee"
              width="150"
              template={employeeGridTemplate}
              textAlign="Left"
            />
            <ColumnDirective
              field="Designation"
              headerText="Designation"
              width="150"
              textAlign="Left"
            />
            <ColumnDirective
              field="Country"
              headerText="Country"
              width="100"
              textAlign="Center"
            />
            <ColumnDirective
              field="HireDate"
              headerText="Hire Date"
              width="120"
              format="yMd" // Format as Year-Month-Day
              textAlign="Center"
            />
            <ColumnDirective
              field="ReportsTo"
              headerText="Reports To"
              width="120"
              textAlign="Left"
            />
            <ColumnDirective
              field="EmployeeID"
              headerText="Employee ID"
              width="80"
              textAlign="Center"
              isPrimaryKey={true} // Important for data operations like editing/deleting
            />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Toolbar, Search]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Employees;
