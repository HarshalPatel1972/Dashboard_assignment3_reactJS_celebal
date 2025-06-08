import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  CandleSeries,
  DateTime,
  Logarithmic,
  Crosshair,
  Zoom,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

// Helper function to generate mock financial data (simple OHLC structure)
const generateFinancialData = () => {
  const data = [];
  let currentPrice = 120;
  const startDate = new Date(2020, 0, 1); // Start from Jan 1, 2020
  for (let i = 0; i < 200; i++) {
    // Generate 200 data points
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i * 3); // Every 3 days to simulate trading days

    const open = currentPrice;
    const close = open + (Math.random() - 0.5) * 10;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    data.push({
      x: date,
      open: open,
      high: high,
      low: low,
      close: close,
      volume: Math.floor(Math.random() * 1000000),
    });
    currentPrice = close + (Math.random() - 0.5) * 5; // Next starting price
  }
  return data;
};

const financialChartData = generateFinancialData(); // Generate data when component mounts

const Financial = () => {
  const primaryXAxis = {
    valueType: "DateTime",
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    labelFormat: "MMM dd", // Example: Jan 01
    rangePadding: "None", // No extra padding at ends
  };

  const primaryYAxis = {
    labelFormat: "{value}",
    lineStyle: { width: 0 },
    majorGridLines: { width: 1, color: "#e0e0e0" }, // Light grid lines
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minimum: 100, // Example min value for price
    maximum: 180, // Example max value for price
    interval: 20,
  };

  const chartArea = { border: { width: 0 } };
  const tooltip = { enable: true };
  const legendSettings = { visible: false }; // Often hidden for financial charts
  const crosshair = { enable: true, line: { width: 1, color: "#ccc" } };
  const zoomSettings = {
    enableSelectionZooming: true,
    enableMouseWheelZooming: true,
    enablePinchZooming: true,
  };

  return (
    <div className="financial-chart-page">
      <h1 className="page-title">Financial Chart</h1>
      <div className="chart-container page-content">
        <ChartComponent
          id="financial-chart"
          height="420px"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={chartArea}
          tooltip={tooltip}
          legendSettings={legendSettings}
          crosshair={crosshair}
          zoomSettings={zoomSettings}
          title="AAPL Historical (Mock Data)" // Example title
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject
            services={[
              CandleSeries,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
              Legend,
              Tooltip,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={financialChartData}
              xName="x"
              open="open"
              high="high"
              low="low"
              close="close"
              volume="volume"
              name="AAPL"
              type="Candle" // Use CandleSeries for candlestick
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
