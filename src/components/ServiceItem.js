import React from 'react';
import styles from '../styles/service-item.module.css';

const ServiceItem = ({ service }) => {
  return (
    <p className={styles.title}>
      {service.title}
    </p>
  );
}

export default ServiceItem
