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
  Edit, // Include Edit for potential future use
} from "@syncfusion/ej2-react-grids";

// Mock data for Orders (similar to original image)
// Mock data for Orders (similar to original image)
const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Nancy Davolio",
    TotalAmount: "₹2000",
    OrderStatus: "Pending",
    StatusBg: "#fbc500",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=NancyDavolio&size=40", // Updated image source
  },
  {
    OrderID: 10249,
    CustomerName: "Andrew Fuller",
    TotalAmount: "₹3500",
    OrderStatus: "Completed",
    StatusBg: "#00C292",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=AndrewFuller&size=40", // Updated image source
  },
  {
    OrderID: 10250,
    CustomerName: "Janet Leverling",
    TotalAmount: "₹1500",
    OrderStatus: "Cancelled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=JanetLeverling&size=40", // Updated image source
  },
  {
    OrderID: 10251,
    CustomerName: "Margaret Peacock",
    TotalAmount: "₹4200",
    OrderStatus: "Rejected",
    StatusBg: "#EF4444",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MargaretPeacock&size=40", // Updated image source
  },
  {
    OrderID: 10252,
    CustomerName: "Steven Buchanan",
    TotalAmount: "₹1800",
    OrderStatus: "Pending",
    StatusBg: "#fbc500",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=StevenBuchanan&size=40", // Updated image source
  },
  {
    OrderID: 10253,
    CustomerName: "Laura Callahan",
    TotalAmount: "₹2900",
    OrderStatus: "Completed",
    StatusBg: "#00C292",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=LauraCallahan&size=40", // Updated image source
  },
  {
    OrderID: 10254,
    CustomerName: "Michael Suyama",
    TotalAmount: "₹800",
    OrderStatus: "Cancelled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MichaelSuyama&size=40", // Updated image source
  },
  {
    OrderID: 10255,
    CustomerName: "Robert King",
    TotalAmount: "₹5000",
    OrderStatus: "Completed",
    StatusBg: "#00C292",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=RobertKing&size=40", // Updated image source
  },
  {
    OrderID: 10256,
    CustomerName: "Nancy Davolio",
    TotalAmount: "₹2000",
    OrderStatus: "Pending",
    StatusBg: "#fbc500",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=NancyDavolio2&size=40", // Unique seed for duplicate name
  },
  {
    OrderID: 10257,
    CustomerName: "Andrew Fuller",
    TotalAmount: "₹3500",
    OrderStatus: "Completed",
    StatusBg: "#00C292",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=AndrewFuller2&size=40", // Unique seed for duplicate name
  },
  {
    OrderID: 10258,
    CustomerName: "Janet Leverling",
    TotalAmount: "₹1500",
    OrderStatus: "Cancelled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=JanetLeverling2&size=40", // Unique seed for duplicate name
  },
  {
    OrderID: 10259,
    CustomerName: "Margaret Peacock",
    TotalAmount: "₹4200",
    OrderStatus: "Rejected",
    StatusBg: "#EF4444",
    ProductImage:
      "https://api.dicebear.com/7.x/pixel-art/svg?seed=MargaretPeacock2&size=40", // Unique seed for duplicate name
  },
];

// Template for displaying Product and Customer Name
const customerGridTemplate = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-8 h-8"
      src={props.ProductImage}
      alt="product-image"
    />
    <p>{props.CustomerName}</p>
  </div>
);

// Template for displaying Order Status with a colored background
const orderStatusTemplate = (props) => (
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
    <span>{props.OrderStatus}</span>
  </div>
);

const Orders = () => {
  return (
    <div className="orders-page">
      <h1 className="page-title">Orders</h1>
      <div className="grid-container page-content">
        <GridComponent
          id="orders-grid"
          dataSource={ordersData}
          allowPaging={true} // Enable pagination
          allowSorting={true} // Enable sorting by columns
          allowFiltering={true} // Enable filtering
          width="auto" // Let container determine width
          editSettings={{ allowDeleting: true, allowEditing: true }} // Enable editing/deleting if needed
          toolbar={["Search", "Delete"]} // Add search and delete to toolbar
        >
          <ColumnsDirective>
            {/* Define columns with custom templates for visuals */}
            <ColumnDirective
              headerText="Product"
              template={customerGridTemplate}
              textAlign="Left"
              width="150"
            />
            <ColumnDirective
              field="OrderID"
              headerText="Order ID"
              textAlign="Center"
              width="100"
            />
            <ColumnDirective
              field="TotalAmount"
              headerText="Total Amount"
              format="C2" // Currency format
              textAlign="Center"
              width="120"
            />
            <ColumnDirective
              field="OrderStatus"
              headerText="Order Status"
              template={orderStatusTemplate}
              textAlign="Center"
              width="120"
            />
            {/* Add more columns as per the original design if needed: Product Image, Customer Name, ID, Price, Status, Country, Order ID, Product */}
            {/* This simplified set focuses on the core status visual and mock data */}
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Toolbar, Edit]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Orders;
