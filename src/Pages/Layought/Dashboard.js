import React from 'react';
import styles from '../../Style/Dashboard.module.css'; // Import the CSS module styles for the dashboard

function Dashboard() {
  // Replace this with personalized information for the authenticated user
  const username = 'John Doe';

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.welcomeMessage}>Welcome, {username}!</h2>

      {/* Dashboard Cards */}
      <div className={styles.cardsContainer}>
        {/* Visit Details Card */}
        <div className={styles.dashboardCard}>
          <h3>Visit Details</h3>
          <p>Add your visit details here...</p>
        </div>

        {/* Location Details Card */}
        <div className={styles.dashboardCard}>
          <h3>Location Details</h3>
          <p>Add location details here...</p>
        </div>

        {/* Property Profile Card */}
        <div className={styles.dashboardCard}>
          <h3>Property Profile</h3>
          <p>Add property profile information here...</p>
        </div>

        {/* Photo Card */}
        <div className={styles.dashboardCard}>
          <h3>Photo</h3>
          <p>Add photos of your property here...</p>
        </div>

        {/* Pricing and Others Card */}
        <div className={styles.dashboardCard}>
          <h3>Pricing and Others</h3>
          <p>Add pricing and other details here...</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
