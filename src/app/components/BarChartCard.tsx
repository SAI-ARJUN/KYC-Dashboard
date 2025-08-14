'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BarChartCard({ data }: { data: any }) {
  const chartData = data.barChart.today.map((item: any, index: number) => ({
    name: item.name,
    Today: item.value,
    Yesterday: data.barChart.yesterday[index].value
  }));

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="card-title">KYC Comparison</h2>
        <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="cursor-pointer hover:text-blue-500">Today</span>
          <span className="cursor-pointer hover:text-blue-500">Yesterday</span>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Today" fill="#1E3A8A" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Yesterday" fill="#3B82F6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
