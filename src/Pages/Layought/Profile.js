import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import styles from '../../Style/Profile.module.css';

function Profile() {
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data from the backend API using POST method
    axios.post('http://localhost:8000/register')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h2 className={styles.profileTitle}>Welcome, {user.name}!</h2>
        <div className={styles.profileInfo}>
          <p className={styles.profileItem}>Email: {user.email}</p>
          {/* Display other user information */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
