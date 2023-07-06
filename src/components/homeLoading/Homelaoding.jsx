"use client";

import React, { useState, useEffect } from "react";
import Title from "../../shared/title/Title";
import Button from "../../shared/button/Button";
import ContainerFluid from "./../../layout/container-fluid/ContainerFluid";
import styles from "./homeloading.module.scss";
import Link from "next/link";

import HashLoader from "react-spinners/HashLoader";

const Homeloading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <section>
      <ContainerFluid>
        <div className={styles.section}>
          <div className={styles.contents}>
            {loading ? (
              <HashLoader
                color={"#000000"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <div className={styles.herotitles}>
                <Title
                  title="We are The Incubator"
                  subtitle="Weekly updates on music, style, culture and much more.."
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/home">
                    <Button type="button" buttonType="primary">
                      Check all Post
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </ContainerFluid>
    </section>
  );
};

export default Homeloading;
