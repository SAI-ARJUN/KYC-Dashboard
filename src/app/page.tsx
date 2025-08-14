'use client';
import { useEffect, useState } from 'react';
import DashboardTabs from './components/DashboardTabs';
import TotalKycSection from './components/TotalKycSection';
import StatusCards from './components/StatusCards';
import BarChartCard from './components/BarChartCard';
import Categories from './components/Categories';
import CircularChartCard from './components/CircularChartCard';
import PanStats from './components/PanStats';

type Range = 'today' | 'month' | 'custom';
type View = 'individual' | 'nonIndividual';

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [range, setRange] = useState<Range>('today');
  const [view, setView] = useState<View>('individual');
  const [customRange, setCustomRange] = useState<{ from: string; to: string } | null>(null);

  useEffect(() => {
    // You could pass query params for real filtering; for now client-side
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (<div key={i} className="bg-gray-200 rounded-lg h-40" />))}
      </div>
    );
  }

  return (
    <div className="p-0 md:p-0">
      <div className="p-4 md:p-6 space-y-6">
        <DashboardTabs range={range} setRange={setRange} view={view} setView={setView} setCustomRange={setCustomRange} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <StatusCards data={data} />
            <TotalKycSection data={data} />
            <BarChartCard data={data} view={view} range={range} customRange={customRange} />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Categories data={data} />
            <CircularChartCard data={data} />
            <PanStats data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
