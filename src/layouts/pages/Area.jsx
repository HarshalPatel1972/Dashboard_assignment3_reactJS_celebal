import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  AreaSeries,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

// Mock data for the Area Chart (Inflation Rate example from original image)
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 3.4 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2.0 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.0 },
    { x: new Date(2008, 0, 1), y: 2.2 },
    { x: new Date(2009, 0, 1), y: 2.5 },
    { x: new Date(2010, 0, 1), y: 2.7 },
    { x: new Date(2011, 0, 1), y: 2.8 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.5 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 1.9 },
    { x: new Date(2007, 0, 1), y: 2.2 },
    { x: new Date(2008, 0, 1), y: 2.0 },
    { x: new Date(2009, 0, 1), y: 2.4 },
    { x: new Date(2010, 0, 1), y: 2.3 },
    { x: new Date(2011, 0, 1), y: 2.0 },
  ],
];

const Area = () => {
  const primaryXAxis = {
    valueType: "DateTime",
    labelFormat: "y",
    intervalType: "Years",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
    tooltip: { enable: true },
  };

  const primaryYAxis = {
    labelFormat: "{value}%",
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    tooltip: { enable: true },
  };

  const chartArea = { border: { width: 0 } };
  const tooltip = { enable: true };
  const legendSettings = { visible: true };

  return (
    <div className="area-chart-page">
      <h1 className="page-title">Area Chart</h1>
      <div className="chart-container page-content">
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={chartArea}
          tooltip={tooltip}
          legendSettings={legendSettings}
          title="Inflation Rate in percentage"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject
            services={[AreaSeries, SplineAreaSeries, DateTime, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={areaChartData[0]}
              xName="x"
              yName="y"
              name="USA"
              type="SplineArea" // Using SplineArea for smoother curves
              opacity={0.6} // Make it semi-transparent for overlapping effect
              fill="#357CD2" // Example color for USA
              border={{ width: 0 }}
            />
            <SeriesDirective
              dataSource={areaChartData[1]}
              xName="x"
              yName="y"
              name="France"
              type="SplineArea"
              opacity={0.6}
              fill="#00BDAE" // Example color for France
              border={{ width: 0 }}
            />
            <SeriesDirective
              dataSource={areaChartData[2]}
              xName="x"
              yName="y"
              name="Germany"
              type="SplineArea"
              opacity={0.6}
              fill="#FFC542" // Example color for Germany
              border={{ width: 0 }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
