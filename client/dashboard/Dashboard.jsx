import React, { useState, useEffect } from 'react';

import Metric from '../metric/Metric';

import './dashboard.scss';

const Dashboard = () => {
  const [conversionRate, setConversionRate] = useState('0');
  const [numAppsSubmitted, setNumAppsSubmitted] = useState('0');
  const [numOnsiteReceived, setNumOnsiteReceived] = useState('0')
  const [numPhoneScreens, setNumPhoneScreens] = useState('0');
  const [numRejections, setNumRejections] = useState('0');
  const [numWaiting, setNumWaiting] = useState('0');

  const conversionRateThreshold = 20;

  useEffect(() => {
    /*
    Response object:

    {
     conversionRate: string,
     numAppsSubmitted: string,
     numOnsiteReceived: string,
     numPhoneScreens: string
     numRejections: string,
     numWaiting: string
    }
    */

    fetch('http://localhost:3000/metrics')
      .then((res) => res.json())
      .then((res) => {
        const newConversionRate = res.conversionRate;
        const newNumAppsSubmitted = res.numAppsSubmitted;
        const newNumOnsiteReceived = res.numOnSiteReceived;
        const newNumPhoneScreens = res.numPhoneScreens;
        const newNumRejections = res.numRejections;
        const newNumWaiting = res.numWaiting;

        setConversionRate(newConversionRate);
        setNumAppsSubmitted(newNumAppsSubmitted);
        setNumOnsiteReceived(newNumOnsiteReceived);
        setNumPhoneScreens(newNumPhoneScreens);
        setNumRejections(newNumRejections);
        setNumWaiting(newNumWaiting);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard">
      <Metric
        data={conversionRate}
        title={'Conversion Rate'}
        threshold={conversionRateThreshold}
      />
      <Metric
        data={numAppsSubmitted}
        title={'Apps Submitted'}
        threshold={'None'}
      />
      <Metric
        data={numOnsiteReceived}
        title={'Onsite Interviews Received'}
        threshold={'None'}
      />
      <Metric
        data={numPhoneScreens}
        title={'Phone Screens Received'}
        threshold={'None'}
      />
      <Metric
        data={numRejections}
        title={'Rejections Received'}
        threshold={'None'}
      />
      <Metric
        data={numWaiting}
        title={'Apps Waiting'}
        threshold={'None'}
      />
    </div>
  );
};

export default Dashboard;
