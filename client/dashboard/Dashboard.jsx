import React, { useState, useEffect } from 'react';

import Metric from '../metric/Metric';

import './dashboard.scss';

const Dashboard = () => {
  const [conversionRate, setConversionRate] = useState('0');
  const [appsSubmitted, setAppsSubmitted] = useState('0');
  const [interviewsReceived, setInterviewsReceived] = useState('0');
  const [offersReceived, setOffersReceived] = useState('0');
  const [rejectionsReceived, setRejectionsReceived] = useState('0');
  const [waitingOn, setWaitingOn] = useState('0');

  useEffect(() => {
    // Put fetch request here
    console.log('test');
  });

  return (
    <div className="dashboard">
      <Metric />
      <Metric />
      <Metric />
      <Metric />
      <Metric />
      <Metric />
    </div>
  );
};

export default Dashboard;
