import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  LineSeries,
  DateTime,
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

// --- Mock Data for Charts ---
const revenueChartData = [
  { month: "Jan", budget: 400, expense: 200 },
  { month: "Feb", budget: 300, expense: 180 },
  { month: "Mar", budget: 350, expense: 250 },
  { month: "Apr", budget: 380, expense: 220 },
  { month: "May", budget: 420, expense: 280 },
  { month: "Jun", budget: 450, expense: 300 },
  { month: "Jul", budget: 480, expense: 320 },
];

const earningsChartData = [
  // Monthly revenue for bar chart
  { month: "Jan", earnings: 100 },
  { month: "Feb", earnings: 120 },
  { month: "Mar", earnings: 150 },
  { month: "Apr", earnings: 130 },
  { month: "May", earnings: 160 },
  { month: "Jun", earnings: 180 },
  { month: "Jul", earnings: 200 },
];

const yearlySalesData = [
  // Data for Pie/Donut chart
  { x: "25%", y: 25 },
  { x: "35%", y: 35 },
  { x: "15%", y: 15 },
  { x: "25%", y: 25 },
];
const yearlySalesColors = ["#00BDAE", "#357CD2", "#FFC542", "#FF5C8E"]; // Example colors

const Ecommerce = () => {
  // --- Chart Axis & Global Settings ---
  const chartArea = { border: { width: 0 } };
  const tooltip = { enable: true };
  const legendSettings = {
    visible: true,
    position: "Bottom",
    textStyle: {
      color: document.documentElement.style.getPropertyValue(
        "--text-color-primary"
      ),
    },
  };

  // Primary X/Y Axis for Revenue Bar Chart
  const revenuePrimaryXAxis = {
    valueType: "Category",
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
  };
  const revenuePrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelFormat: "{value}",
  };

  // Primary X/Y Axis for Earnings Bar Chart (inside Earnings card)
  const earningsPrimaryXAxis = {
    valueType: "Category",
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: "transparent" }, // Hide labels
  };
  const earningsPrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: "transparent" }, // Hide labels
  };

  return (
    <div className="ecommerce-dashboard">
      <h1 className="page-title">Ecommerce Dashboard</h1>

      {/* Section 1: Top Summary Cards */}
      <div className="summary-cards-grid">
        {/* Card 1: Earnings */}
        <div className="card earnings-card">
          <p className="card-title">Earnings</p>
          <p className="card-value">₹63,448.78</p>
          <button className="card-button">Download</button>
          <div className="card-graphic">💰</div> {/* Placeholder for graphic */}
        </div>

        {/* Card 2: Customers */}
        <div className="card simple-card">
          <p className="card-value">39,354</p>
          <p className="card-title">
            Customers <span className="text-red small-text">-4%</span>
          </p>
        </div>

        {/* Card 3: Products */}
        <div className="card simple-card">
          <p className="card-value">4,396</p>
          <p className="card-title">
            Products <span className="text-green small-text">+23%</span>
          </p>
        </div>

        {/* Card 4: Sales */}
        <div className="card simple-card">
          <p className="card-value">423,39</p>
          <p className="card-title">
            Sales <span className="text-green small-text">+38%</span>
          </p>
        </div>

        {/* Card 5: Refunds */}
        <div className="card simple-card">
          <p className="card-value">39,354</p>
          <p className="card-title">
            Refunds <span className="text-red small-text">-12%</span>
          </p>
        </div>
      </div>

      {/* Section 2: Revenue Updates and Main Earnings Chart */}
      <div className="revenue-charts-grid">
        {/* Revenue Updates (Left side) */}
        <div className="revenue-updates-panel">
          <h2 className="section-heading">Revenue Updates</h2>
          <div className="revenue-metrics mb-4">
            <p className="metric-value">
              ₹93,438 <span className="text-green small-text">23%</span>
            </p>
            <p className="metric-label">Budget</p>
            <p className="metric-value">₹48,487</p>
            <p className="metric-label">Expense</p>
          </div>
          {/* Revenue Bar/Line Chart */}
          <div className="medium-chart">
            {" "}
            {/* Container for the chart */}
            <ChartComponent
              id="revenue-chart"
              height="100%"
              primaryXAxis={revenuePrimaryXAxis}
              primaryYAxis={revenuePrimaryYAxis}
              chartArea={chartArea}
              tooltip={tooltip}
              legendSettings={{ visible: true, position: "Top" }} // Specific legend for this chart
              background="transparent" // Keep background transparent
            >
              <Inject
                services={[
                  ColumnSeries,
                  LineSeries,
                  Category,
                  Tooltip,
                  Legend,
                  DateTime,
                ]}
              />
              <SeriesCollectionDirective>
                {/* Expense Bar Series */}
                <SeriesDirective
                  dataSource={revenueChartData}
                  xName="month"
                  yName="expense"
                  name="Expense"
                  type="Column"
                  width={0.2}
                  marker={{ visible: false }}
                  fill="#808080" // Grey for Expense
                />
                {/* Budget Bar Series */}
                <SeriesDirective
                  dataSource={revenueChartData}
                  xName="month"
                  yName="budget"
                  name="Budget"
                  type="Column"
                  width={0.2}
                  marker={{ visible: false }}
                  fill="#0F75D2" // Blue for Budget (primary color)
                />
                {/* Revenue Line Series (adjust data if needed) */}
                {/* For simplicity, we'll use budget as proxy for revenue line for now.
                    Ideally, this would be a separate data set. */}
                <SeriesDirective
                  dataSource={revenueChartData}
                  xName="month"
                  yName="budget" // Using budget as proxy for revenue line
                  name="Revenue"
                  type="Line"
                  width={2}
                  marker={{ visible: true, width: 8, height: 8 }}
                  fill="#00BDAE" // Example color for line
                />
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
          <button className="download-report-button">Download Report</button>
        </div>

        {/* Earnings Card (Right side, larger) */}
        <div className="earnings-main-card">
          <h2 className="section-heading">Earnings</h2>
          <p className="metric-value-large">₹63,448.78</p>
          <p className="metric-label-large">Monthly revenue</p>
          {/* Earnings Bar Chart */}
          <div className="large-chart">
            <ChartComponent
              id="earnings-main-chart"
              height="100%"
              primaryXAxis={earningsPrimaryXAxis}
              primaryYAxis={earningsPrimaryYAxis}
              chartArea={chartArea}
              tooltip={tooltip}
              legendSettings={{ visible: false }}
              background="transparent"
              palettes={["#FFFFFF"]} // Ensure bars are white
            >
              <Inject services={[ColumnSeries, Category, Tooltip]} />
              <SeriesCollectionDirective>
                <SeriesDirective
                  dataSource={earningsChartData}
                  xName="month"
                  yName="earnings"
                  type="Column"
                  width={0.6} // Make bars wider
                  marker={{ visible: false }}
                  fill="#FFFFFF" // White bars on blue background
                />
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
        </div>
      </div>

      {/* Section 3: Yearly Sales and Other Charts (Bottom section) */}
      <div className="bottom-charts-grid">
        {/* Yearly Sales (Pie/Donut Chart) */}
        <div className="yearly-sales-panel">
          <h2 className="section-heading">Yearly sales</h2>
          <p className="metric-value">₹43,246</p>
          <div className="small-chart">
            <AccumulationChartComponent
              id="yearly-sales-chart"
              height="100%"
              legendSettings={{ visible: false }} // Legend usually hidden or outside for small pie
              tooltip={tooltip}
              background="transparent"
            >
              <Inject
                services={[
                  PieSeries,
                  AccumulationTooltip,
                  AccumulationDataLabel,
                ]}
              />
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                  dataSource={yearlySalesData}
                  xName="x"
                  yName="y"
                  type="Pie"
                  innerRadius="60%" // Make it a donut
                  explode={true}
                  explodeOffset="10%"
                  startAngle={0}
                  endAngle={360}
                  radius="70%"
                  dataLabel={{
                    visible: true,
                    position: "Outside",
                    name: "x", // Use 'x' field for label (e.g., '25%')
                    font: {
                      fontWeight: "600",
                      color: document.documentElement.style.getPropertyValue(
                        "--text-color-primary"
                      ),
                    },
                    connectorStyle: { length: "20px", type: "Curve" },
                  }}
                  palettes={yearlySalesColors}
                />
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
        </div>

        {/* Placeholder for additional charts if needed */}
        <div className="chart-placeholder other-chart">
          Recent Transactions/Sales Overview (Placeholder)
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
