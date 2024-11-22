import React, { useState } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import Chatbot from '../components/Chatbot';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  const [selectedGraph, setSelectedGraph] = useState('line');

  const data = {
    companyGrowth: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Annual Revenue Growth',
          data: [5000, 7000, 6000, 7500, 8500, 9000, 10000],
          fill: false,
          borderColor: '#DDA53A', // Accent color (phoenix-gold)
          tension: 0.1,
        },
      ],
    },
    departmentBudget: {
      labels: ['Sales', 'Marketing', 'R&D', 'HR', 'Support'],
      datasets: [
        {
          label: 'Department Budget Allocation',
          data: [120000, 100000, 150000, 80000, 60000],
          backgroundColor: ['#003F4E', '#003366', '#DDA53A', '#E6F7F9', '#4bc0c0'],
        },
      ],
    },
    trafficSource: {
      labels: ['Direct', 'Referral', 'Social Media', 'Organic'],
      datasets: [
        {
          data: [60, 20, 10, 10],
          backgroundColor: ['#003F4E', '#003366', '#DDA53A', '#E6F7F9'],
        },
      ],
    },
    projectSuccess: {
      labels: ['On-time', 'Delayed', 'Canceled'],
      datasets: [
        {
          data: [75, 15, 10],
          backgroundColor: ['#DDA53A', '#003F4E', '#E6F7F9'],
        },
      ],
    },
  };

  const handleGraphChange = (e) => {
    setSelectedGraph(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-64 p-6 bg-gradient-to-b from-primary to-secondary text-white">
        <h2 className="text-2xl font-bold">Company Dashboard</h2>
        <div className="mt-6">
          <button className="w-full p-2 mb-4 rounded-md btn-accent" onClick={() => setSelectedGraph('line')}>
            Revenue Growth
          </button>
          <button className="w-full p-2 mb-4 rounded-md btn-accent" onClick={() => setSelectedGraph('bar')}>
            Budget Allocation
          </button>
          <button className="w-full p-2 mb-4 rounded-md btn-accent" onClick={() => setSelectedGraph('pie')}>
            Traffic Source
          </button>
          <button className="w-full p-2 mb-4 rounded-md btn-accent" onClick={() => setSelectedGraph('doughnut')}>
            Project Success Rate
          </button>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="mb-6">
          {selectedGraph === 'line' && (
            <>
              <h4 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-primary to-secondary text-white p-2 rounded">
                Annual Revenue Growth
              </h4>
              <div className="max-w-full sm:max-w-md mx-auto mb-6 p-4">
                <Line data={data.companyGrowth} />
              </div>
              <p className="mt-4 text-gray-700 font-serif">
                <strong>This line chart</strong> shows the company’s annual revenue growth. We have seen a steady increase in revenue since January, with a noticeable rise in July.
              </p>
            </>
          )}

          {selectedGraph === 'bar' && (
            <>
              <h4 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-primary to-secondary text-white p-2 rounded">
                Department Budget Allocation
              </h4>
              <div className="max-w-full sm:max-w-md mx-auto mb-6 p-4">
                <Bar data={data.departmentBudget} />
              </div>
              <p className="mt-4 text-gray-700 font-serif">
                This bar chart indicates the budget allocation across different departments. <em>Research and Development (R&D)</em> has the highest budget allocation.
              </p>
            </>
          )}

          {selectedGraph === 'pie' && (
            <>
              <h4 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-primary to-secondary text-white p-2 rounded">
                Traffic Source Distribution
              </h4>
              <div className="max-w-full sm:max-w-xs mx-auto mb-6 p-4">
                <Pie data={data.trafficSource} />
              </div>
              <p className="mt-4 text-gray-700 font-serif">
                This pie chart shows the distribution of traffic sources. <strong>Direct traffic</strong> is the largest contributor, accounting for 60% of total traffic.
              </p>
            </>
          )}

          {selectedGraph === 'doughnut' && (
            <>
              <h4 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-primary to-secondary text-white p-2 rounded">
                Project Success Rate
              </h4>
              <div className="max-w-full sm:max-w-xs mx-auto mb-6 p-4">
                <Doughnut data={data.projectSuccess} />
              </div>
              <p className="mt-4 text-gray-700 font-serif">
                This doughnut chart shows the success rate of our projects. <strong>75% of projects</strong> were completed on time, while <em>15%</em> were delayed.
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row border-b-4 border-primary py-6">
          <div className="w-full sm:w-1/2 pr-4 mb-6 sm:mb-0">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 mb-4">
              <h3 className="text-xl font-bold">Company Insights</h3>
            </div>
            <p className="text-gray-700 font-serif">
              The company has been performing well overall, but there are areas that need improvement. Increasing investment in market share and customer satisfaction would help us continue to grow.
            </p>
          </div>
          
          <div className="w-full sm:w-1/2 pl-4">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 mb-4">
              <h3 className="text-xl font-bold">Additional Insights</h3>
            </div>
            <p className="text-gray-700 font-serif">
              Our team is focusing on expanding into new markets while ensuring operational efficiency. We anticipate growth in customer engagement over the next quarter.
            </p>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Dashboard;
