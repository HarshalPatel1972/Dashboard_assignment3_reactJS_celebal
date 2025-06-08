import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

// Mock data for the Line Chart (Inflation Rate example from original image)
const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 82 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];

const Line = () => {
  // Chart primary X-axis settings
  const primaryXAxis = {
    valueType: "DateTime",
    labelFormat: "y",
    intervalType: "Years",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
    tooltip: { enable: true },
  };

  // Chart primary Y-axis settings
  const primaryYAxis = {
    labelFormat: "{value}%", // Format Y-axis labels as percentage
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    tooltip: { enable: true },
  };

  // Chart Area Background to be transparent as per the original image
  const chartArea = { border: { width: 0 } };

  // Tooltip settings
  const tooltip = { enable: true };

  // Legend settings
  const legendSettings = { visible: true };

  return (
    <div className="line-chart-page">
      <h1 className="page-title">Line Chart</h1>
      <div className="chart-container page-content">
        {" "}
        {/* Use page-content for card styling */}
        <ChartComponent
          id="line-chart"
          height="420px"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={chartArea}
          tooltip={tooltip}
          legendSettings={legendSettings}
          title="Inflation Rate"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )} // Use theme variable for background
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={lineChartData[0]}
              xName="x"
              yName="y"
              name="Germany"
              type="Line"
              marker={{ visible: true, width: 10, height: 10, fill: "#00BDAE" }} // Example marker style
              width={2}
            />
            <SeriesDirective
              dataSource={lineChartData[1]}
              xName="x"
              yName="y"
              name="England"
              type="Line"
              marker={{ visible: true, width: 10, height: 10, fill: "#404041" }}
              width={2}
            />
            <SeriesDirective
              dataSource={lineChartData[2]}
              xName="x"
              yName="y"
              name="India"
              type="Line"
              marker={{ visible: true, width: 10, height: 10, fill: "#357CD2" }}
              width={2}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Line;
