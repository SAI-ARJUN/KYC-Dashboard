'use client';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CircularChartCard({ data }: { data: any }) {
  const COLORS = ['#1E3A8A', '#3B82F6', '#10B981', '#F59E0B'];

  return (
    <div className="card">
      <h2 className="card-title">Solicited & Unsolicited</h2>
      <div className="chart-container">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data.circular}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              label
            >
              {data.circular.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
