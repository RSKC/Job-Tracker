import React, { useState, useEffect } from 'react';

import Metric from '../metric/Metric';

import './dashboard.scss';

const Dashboard = () => {
  // const [conversionRate, setConversionRate] = useState('0');
  // const [appsSubmitted, setAppsSubmitted] = useState('0');
  // const [interviewsReceived, setInterviewsReceived] = useState('0');
  // const [offersReceived, setOffersReceived] = useState('0');
  // const [rejectionsReceived, setRejectionsReceived] = useState('0');
  // const [waitingOn, setWaitingOn] = useState('0');

  const [conversionRate, setConversionRate] = useState('20');
  const [appsSubmitted, setAppsSubmitted] = useState('100');
  const [interviewsReceived, setInterviewsReceived] = useState('20');
  const [offersReceived, setOffersReceived] = useState('3');
  const [rejectionsReceived, setRejectionsReceived] = useState('45');
  const [waitingOn, setWaitingOn] = useState('32');

  const conversionRateThreshold = 20;
  const offersReceivedThreshold = 10;

  // useEffect(() => {
  //   /*
  //   Response object:

  //   {
  //    conversionRate: string,
  //    appsSubmitted: string,
  //    interviewsReceived: string,
  //    offersReceived: string,
  //    rejectionsReceived: string,
  //    waitingOn: string
  //   }
  //   */

  //   fetch('http://localhost:3000/metrics')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newConversionRate = res.conversionRate;
  //       const newAppsSubmitted = res.appsSubmitted;
  //       const newInterviewReceived = res.interviewsReceived;
  //       const newOffersReceived = res.offersReceived;
  //       const newRejectionReceived = res.rejectionsReceived;
  //       const newWaitingOn = res.waitingOn;

  //       setConversionRate(newConversionRate);
  //       setAppsSubmitted(newAppsSubmitted);
  //       setInterviewsReceived(newInterviewReceived);
  //       setOffersReceived(newOffersReceived);
  //       setRejectionsReceived(newRejectionReceived);
  //       setWaitingOn(newWaitingOn);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="dashboard">
      <Metric
        data={conversionRate}
        title={'Conversion Rate'}
        threshold={conversionRateThreshold}
      />
      <Metric
        data={appsSubmitted}
        title={'Apps Submitted'}
        threshold={'None'}
      />
      <Metric
        data={interviewsReceived}
        title={'Interviews Received'}
        threshold={'None'}
      />
      <Metric
        data={offersReceived}
        title={'Offers Received'}
        threshold={offersReceivedThreshold}
      />
      <Metric
        data={rejectionsReceived}
        title={'Rejections Received'}
        threshold={'None'}
      />
      <Metric data={waitingOn} title={'Waiting On'} threshold={'None'} />
    </div>
  );
};

export default Dashboard;
