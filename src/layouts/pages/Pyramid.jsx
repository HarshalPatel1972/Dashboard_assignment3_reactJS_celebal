import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PyramidSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

// Mock data for the Pyramid Chart (Food Comparison Chart example from original image)
const pyramidChartData = [
  { x: "Sweet Treats", y: 120, text: "120 cal" },
  { x: "Milk, Yoghurt, Cheese", y: 435, text: "435 cal" },
  { x: "Vegetables", y: 470, text: "470 cal" },
  { x: "Meat, Poultry, Fish", y: 475, text: "475 cal" },
  { x: "Fruits", y: 520, text: "520 cal" },
  { x: "Bread, Rice, Pasta", y: 530, text: "530 cal" },
];

const Pyramid = () => {
  // Legend settings
  const legendSettings = { visible: true, position: "Top" };

  // Tooltip settings
  const tooltip = { enable: true };

  // Data label settings for values inside pyramid segments
  const dataLabel = {
    visible: true,
    position: "Inside",
    name: "text", // Use the 'text' field from data for labels
    font: {
      fontWeight: "600",
      color: "#fff", // White text for better contrast
    },
  };

  return (
    <div className="pyramid-chart-page">
      <h1 className="page-title">Pyramid Chart</h1>
      <div className="chart-container page-content">
        <AccumulationChartComponent
          id="pyramid-chart"
          height="420px"
          legendSettings={legendSettings}
          tooltip={tooltip}
          title="Food Comparison Chart"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject
            services={[
              PyramidSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pyramidChartData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="60%" // Width of the pyramid
              height="80%" // Height of the pyramid
              neckWidth="15%" // Width of the neck (top part)
              neckHeight="20%" // Height of the neck
              gapRatio={0.03} // Gap between segments
              dataLabel={dataLabel}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
