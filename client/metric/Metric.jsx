import React from 'react';

import './metric.scss';

const Metric = ({ title, data, threshold }) => {
  const isConversionRate = title === 'Conversion Rate';
  const needsPercentSign = data !== '0' && isConversionRate;

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
        {data}
        {needsPercentSign ? '%' : ''}
      </h1>
      <p style={{ fontSize: '13px' }}>{isConversionRate ? 'Phone Screens / Applications Submitted' : ' '}</p>
    </div>
  );
};

export default Metric;
