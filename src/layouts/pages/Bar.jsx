import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Legend,
  Tooltip,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

// Mock data for the Bar Chart (Olympic Medal Counts - RIO example from original image)
const barChartData = [
  { country: "USA", gold: 46, silver: 37, bronze: 38 },
  { country: "GBR", gold: 27, silver: 23, bronze: 17 },
  { country: "CHN", gold: 26, silver: 18, bronze: 26 },
];

const Bar = () => {
  const primaryXAxis = {
    valueType: "Category",
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    lineStyle: { width: 0 },
  };

  const primaryYAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelFormat: "{value}",
  };

  const chartArea = { border: { width: 0 } };
  const tooltip = { enable: true };
  const legendSettings = { visible: true };

  return (
    <div className="bar-chart-page">
      <h1 className="page-title">Bar Chart</h1>
      <div className="chart-container page-content">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={chartArea}
          tooltip={tooltip}
          legendSettings={legendSettings}
          title="Olympic Medal Counts - RIO"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject
            services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={barChartData}
              xName="country"
              yName="gold"
              name="Gold"
              type="Column"
              columnSpacing={0.1} // Space between groups of columns
              pointColorMapping="color" // If you want to color bars based on data field
              marker={{ dataLabel: { visible: false, position: "Top" } }} // Show data labels on top of bars
            />
            <SeriesDirective
              dataSource={barChartData}
              xName="country"
              yName="silver"
              name="Silver"
              type="Column"
              columnSpacing={0.1}
              pointColorMapping="color"
              marker={{ dataLabel: { visible: false, position: "Top" } }}
            />
            <SeriesDirective
              dataSource={barChartData}
              xName="country"
              yName="bronze"
              name="Bronze"
              type="Column"
              columnSpacing={0.1}
              pointColorMapping="color"
              marker={{ dataLabel: { visible: false, position: "Top" } }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
