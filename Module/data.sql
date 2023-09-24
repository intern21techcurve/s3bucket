const mysql = require('../config/connection');

CREATE TABLE jobmanagement (
  id INT AUTO_INCREMENT PRIMARY KEY,
  purchageRequest VARCHAR(50),
  purchageDescription VARCHAR(100),
  category VARCHAR(100),
  location VARCHAR(100),
  purchageGroup VARCHAR(100),
  purchageQuantity VARCHAR(100),
  purchageUnit INT,
  startDate VARCHAR(50),
  endDate VARCHAR(50),
  deliveryDate VARCHAR(50)
);