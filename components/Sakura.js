"use client";
import React, { useEffect, useState } from "react";
import styles from "./Sakura.module.css";

const Sakura = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const numPetals = 20; // 桜の数
    setPetals([...Array(numPetals).keys()]);
  }, []);

  return (
    <>
      {petals.map((i) => (
        <div
          key={i}
          className={styles.sakura}
          style={{
            left: `${Math.random() * 100}vw`, // ランダムな位置
            animationDuration: `${Math.random() * 5 + 5}s`, // ランダムな落下時間
            animationDelay: `${Math.random() * 5}s`, // ランダムな開始時間
          }}
        />
      ))}
    </>
  );
};

export default Sakura;
