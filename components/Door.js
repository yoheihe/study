'use client';
import React, { useState, useEffect } from 'react';
import styles from './door.module.css';

const Door = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true); // ページロード後に扉を開く
      setTimeout(() => {
        setHidden(true); // アニメーション後に完全に非表示
      }, 2000); // 扉が開く時間と同じ
    }, 500);
  }, []);

  return (
    !hidden && ( // hidden が true になったらコンポーネントごと削除
      <div className={`${styles.doorContainer} ${open ? styles.open : ''}`}>
        <div className={styles.doorLeft}></div>
        <div className={styles.doorRight}></div>
      </div>
    )
  );
};

export default Door;
