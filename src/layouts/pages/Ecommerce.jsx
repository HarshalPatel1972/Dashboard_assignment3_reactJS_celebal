import React from "react";

const Ecommerce = () => {
  return (
    <div className="ecommerce-dashboard">
      <h1 className="page-title">Ecommerce Dashboard</h1>

      {/* Section 1: Top Summary Cards */}
      <div className="summary-cards-grid">
        {/* Card 1: Earnings */}
        <div className="card earnings-card">
          <p className="card-title">Earnings</p>
          <p className="card-value">$63,448.78</p>
          <button className="card-button">Download</button>
          <div className="card-graphic">💰</div> {/* Placeholder for graphic */}
        </div>

        {/* Card 2: Customers */}
        <div className="card simple-card">
          <p className="card-value">39,354</p>
          <p className="card-title">
            Customers <span className="text-red">-4%</span>
          </p>
        </div>

        {/* Card 3: Products */}
        <div className="card simple-card">
          <p className="card-value">4,396</p>
          <p className="card-title">
            Products <span className="text-green">+23%</span>
          </p>
        </div>

        {/* Card 4: Sales */}
        <div className="card simple-card">
          <p className="card-value">423,39</p>
          <p className="card-title">
            Sales <span className="text-green">+38%</span>
          </p>
        </div>

        {/* Card 5: Refunds */}
        <div className="card simple-card">
          <p className="card-value">39,354</p>
          <p className="card-title">
            Refunds <span className="text-red">-12%</span>
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
              $93,438 <span className="text-green small-text">23%</span>
            </p>
            <p className="metric-label">Budget</p>
            <p className="metric-value">$48,487</p>
            <p className="metric-label">Expense</p>
          </div>
          {/* Placeholder for Revenue Chart */}
          <div className="chart-placeholder medium-chart">
            Revenue Chart Placeholder
          </div>
          <button className="download-report-button">Download Report</button>
        </div>

        {/* Earnings Card (Right side, larger) */}
        <div className="earnings-main-card">
          <h2 className="section-heading">Earnings</h2>
          <p className="metric-value-large">$63,448.78</p>
          <p className="metric-label-large">Monthly revenue</p>
          {/* Placeholder for Earnings Bar Chart */}
          <div className="chart-placeholder large-chart">
            Earnings Bar Chart Placeholder
          </div>
        </div>
      </div>

      {/* Section 3: Yearly Sales and Other Charts (Bottom section) */}
      <div className="bottom-charts-grid">
        {/* Yearly Sales (Placeholder for Pie/Donut Chart) */}
        <div className="yearly-sales-panel">
          <h2 className="section-heading">Yearly sales</h2>
          <p className="card-value">₹63,448.78</p>
          <div className="chart-placeholder small-chart">
            Yearly Sales Chart Placeholder
          </div>
        </div>

        {/* Placeholder for additional charts if needed */}
        <div className="chart-placeholder other-chart">
          Other Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
