import React from 'react';
import styles from './styles.module.css';

const Skeleton = ({ count = 1, type = 'banner' }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={type == 'banner' ? styles.bannerList : styles.list}>
          {Array.from({ length: count }).map((_, index) => (
            <li
              key={index}
              className={type === 'banner' ? styles.bannerItem : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <ul className={styles.cardList}>
          <li className={type === 'banner' ? styles.banner : styles.item}></li>
        </ul>
      )}
    </>
  );
};

export default Skeleton;