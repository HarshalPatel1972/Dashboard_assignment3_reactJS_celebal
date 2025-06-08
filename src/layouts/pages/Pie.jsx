import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

// Mock data for the Pie Chart (Project Cost Breakdown example from original image)
const pieChartData = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

const Pie = () => {
  // Legend settings
  const legendSettings = { visible: true, position: "Top" }; // Position top as per original image

  // Tooltip settings
  const tooltip = { enable: true };

  // Data label settings for percentages on slices
  const dataLabel = {
    visible: true,
    position: "Inside",
    name: "text", // Use the 'text' field from data for labels
    font: {
      fontWeight: "600",
      color: "#fff", // White text for better contrast on colored slices
    },
    connectorStyle: { length: "20px" }, // Length of connector line if position is 'Outside'
  };

  // Colors for pie slices - matching original image's feel
  const pieColors = [
    "#00BDAE",
    "#357CD2",
    "#FFC542",
    "#FF5C8E",
    "#7352FF",
    "#0097FF",
    "#F48225",
  ];

  return (
    <div className="pie-chart-page">
      <h1 className="page-title">Pie Chart</h1>
      <div className="chart-container page-content">
        <AccumulationChartComponent
          id="pie-chart"
          height="420px"
          legendSettings={legendSettings}
          tooltip={tooltip}
          title="Project Cost Breakdown"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject
            services={[
              PieSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieChartData}
              xName="x"
              yName="y"
              type="Pie"
              innerRadius="40%" // Makes it a donut chart
              explode={true} // Allows slices to "explode" on hover
              explodeOffset="10%" // Distance for explosion
              explodeIndex={0} // Default exploded slice
              dataLabel={dataLabel} // Apply data labels
              palettes={pieColors} // Apply custom colors
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pie;
