// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import {
  FaUser,
  FaHeart,
  FaMoneyBill,
  FaExchangeAlt,
  FaChartPie,
  FaTags,
  FaCalendar,
  FaCog,
  FaBell,
  FaSearch,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="sidebar-logo">Board.</h1>
        <ul className="sidebar-nav">
          <li><FaChartPie className="nav-icon" /> Dashboard</li>
          <li><FaTags className="nav-icon" /> Transactions</li>
          <li><FaCalendar className="nav-icon" /> Schedules</li>
          <li><FaUser className="nav-icon" /> Users</li>
          <li><FaCog className="nav-icon" /> Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-dashboard">
        {/* Top Bar */}
        <div className="dashboard-topbar">
          <h2 className="topbar-title">Dashboard</h2>
          <div className="topbar-right">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <FaBell className="topbar-icon" />
            <img
              src="https://i.pravatar.cc/40"
              className="profile-avatar"
              alt="profile"
            />
          </div>
        </div>

        {/* Metric Cards */}
        <div className="metric-cards">
          <div className="metric-card total-revenue">
            <span className="card-icon"><FaMoneyBill /></span>
            <span className="card-text">Total Revenues</span>
            <p className="card-value">$2,129,430</p>
          </div>
          <div className="metric-card total-transactions">
            <span className="card-icon"><FaExchangeAlt /></span>
            <span className="card-text">Total Transactions</span>
            <p className="card-value">1,520</p>
          </div>
          <div className="metric-card total-likes">
            <span className="card-icon"><FaHeart /></span>
            <span className="card-text">Total Likes</span>
            <p className="card-value">9,721</p>
          </div>
          <div className="metric-card total-users">
            <span className="card-icon"><FaUser /></span>
            <span className="card-text">Total Users</span>
            <p className="card-value">892</p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="activities-card">
          <div className="activities-header">
            <h2>Activities</h2>
            <span>May - June 2021</span>
          </div>
          <div className="chart-placeholder">Chart goes here</div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-cards">
          <div className="top-products-card">
            <h2>Top Products</h2>
            <p className="placeholder-content">Chart or list goes here</p>
          </div>
          <div className="schedule-card">
            <h2>Today’s Schedule</h2>
            <p className="placeholder-content">Meeting or schedule list</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
