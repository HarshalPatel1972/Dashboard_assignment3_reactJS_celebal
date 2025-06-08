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
  Selection,
  Search,
  Edit, // Include Edit for potential future use
} from "@syncfusion/ej2-react-grids";

// Mock data for Customers (similar to original image)
const customersData = [
  {
    CustomerID: 1001,
    Name: "Nirav Joshi",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#00C292",
    Weeks: 40,
    Budget: "₹2.4k",
    Location: "India",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=NiravJ&size=32",
    Email: "niravj@gmail.com",
  },
  {
    CustomerID: 1002,
    Name: "Sunil Joshi",
    ProjectName: "Elite Admin",
    Status: "Active",
    StatusBg: "#00C292",
    Weeks: 11,
    Budget: "₹3.9k",
    Location: "India",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=SunilJ&size=32",
    Email: "sunilj@gmail.com",
  },
  {
    CustomerID: 1003,
    Name: "Andrew McDownland",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    StatusBg: "#fbc500",
    Weeks: 24,
    Budget: "₹24.5k",
    Location: "USA",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=AndrewM&size=32",
    Email: "andrewmc@gmail.com",
  },
  {
    CustomerID: 1004,
    Name: "Christopher Jamil",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    StatusBg: "#00C292",
    Weeks: 34,
    Budget: "₹16.5k",
    Location: "USA",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=ChrisJ&size=32",
    Email: "christoj@gmail.com",
  },
  {
    CustomerID: 1005,
    Name: "Michael Suyama",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    StatusBg: "#EF4444",
    Weeks: 34,
    Budget: "₹16.5k",
    Location: "USA",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MichaelS2&size=32",
    Email: "michaels@gmail.com",
  },
  {
    CustomerID: 1006,
    Name: "Nirav Joshi",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#00C292",
    Weeks: 40,
    Budget: "₹2.4k",
    Location: "India",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=NiravJ2&size=32",
    Email: "niravj2@gmail.com",
  },
  {
    CustomerID: 1007,
    Name: "Sunil Joshi",
    ProjectName: "Elite Admin",
    Status: "Pending",
    StatusBg: "#fbc500",
    Weeks: 19,
    Budget: "₹1.9k",
    Location: "India",
    CustomerImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=SunilJ2&size=32",
    Email: "sunilj2@gmail.com",
  },
];

// Template for displaying Customer Image and Name/Email
const customerGridTemplate = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-8 h-8"
      src={props.CustomerImage}
      alt="customer-image"
    />
    <div>
      <p className="font-semibold">{props.Name}</p>
      <p className="text-sm text-gray-500">{props.Email}</p>
    </div>
  </div>
);

// Template for displaying Status with a colored background
const customerStatusTemplate = (props) => (
  <div
    className="flex justify-center items-center gap-2"
    style={{
      backgroundColor: props.StatusBg,
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      color: "white",
      fontWeight: "bold",
    }}
  >
    <span
      className="dot"
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        width: "8px",
        height: "8px",
      }}
    ></span>
    <span>{props.Status}</span>
  </div>
);

const Customers = () => {
  return (
    <div className="customers-page">
      <h1 className="page-title">Customers</h1>
      <div className="grid-container page-content">
        <GridComponent
          id="customers-grid"
          dataSource={customersData}
          allowPaging={true} // Enable pagination
          allowSorting={true} // Enable sorting by columns
          allowFiltering={true} // Enable filtering
          toolbar={["Delete", "Search"]} // Toolbar with Delete and Search
          editSettings={{ allowDeleting: true, allowEditing: true }} // Enable deleting for toolbar 'Delete'
          selectionSettings={{ type: "Multiple" }} // Allow multiple row selection
          width="auto" // Let container determine width
        >
          <ColumnsDirective>
            {/* Checkbox column for selection */}
            <ColumnDirective type="checkbox" width="50" />
            <ColumnDirective
              headerText="Customer"
              width="180"
              template={customerGridTemplate}
              textAlign="Left"
            />
            <ColumnDirective
              field="ProjectName"
              headerText="Project Name"
              width="150"
              textAlign="Left"
            />
            <ColumnDirective
              field="Status"
              headerText="Status"
              template={customerStatusTemplate}
              width="120"
              textAlign="Center"
            />
            <ColumnDirective
              field="Weeks"
              headerText="Weeks"
              width="90"
              textAlign="Center"
            />
            <ColumnDirective
              field="Budget"
              headerText="Budget"
              width="120"
              textAlign="Center"
            />
            <ColumnDirective
              field="Location"
              headerText="Location"
              width="100"
              textAlign="Left"
            />
            <ColumnDirective
              field="CustomerID"
              headerText="Customer ID"
              width="80"
              textAlign="Center"
              isPrimaryKey={true} // Crucial for selection and delete operations
            />
          </ColumnsDirective>
          <Inject
            services={[Page, Sort, Filter, Toolbar, Selection, Search, Edit]}
          />
        </GridComponent>
      </div>
    </div>
  );
};

export default Customers;
