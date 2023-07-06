"use client";

import React, { useState, useEffect } from "react";
import styles from "../../components/homeLoading/homeloading.module.scss";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.section}>
          <div className={styles.contents}>
            <HashLoader
              color={"#000000"}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div>waiting</div>
      )}
    </div>
  );
};

export default Home;
