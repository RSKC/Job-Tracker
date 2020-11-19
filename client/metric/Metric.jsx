import React from 'react';

import './metric.scss';

const Metric = ({ title, data, threshold }) => {
  const dataIsZero = data === '0';
  const needsPercentSign = data !== '0' && title === 'Conversion Rate';

  const black = '#000000';
  const green = '#27bc27';
  const yellow = '#d72828';

  let color;
  if (threshold === 'None') {
    color = black;
  } else {
    if (parseInt(data, 10) >= threshold) {
      color = green;
    } else {
      color = yellow;
    }
  }

  const dataStyles = { color };

  return (
    <div className="card">
      <p>{title}</p>
      <h1 style={dataStyles}>
        {dataIsZero ? 'None' : data}
        {needsPercentSign ? '%' : ''}
      </h1>
    </div>
  );
};

export default Metric;
