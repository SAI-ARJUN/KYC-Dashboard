'use client';

import { useState } from 'react';
import DashboardTabs from './DashboardTabs';
import TotalKycSection from './TotalKycSection';
import StatusCards from './StatusCards';
import BarChartCard from './BarChartCard';
import Categories from './Categories';
import CircularChartCard from './CircularChartCard';
import PanStats from './PanStats';

type Range = 'today' | 'month' | 'custom';
type View = 'individual' | 'nonIndividual';

export default function Dashboard({ data }: { data: any }) {
  const [range, setRange] = useState<Range>('today');
  const [view, setView] = useState<View>('individual');
  const [customRange, setCustomRange] = useState<{ from: string; to: string } | null>(null);

  // 🔹 Filter data based on current view & range
  const filteredData = {
    ...data,
    // Example filter for Bar Chart
    barChart: {
      today: data.barChart.today.filter((item: any) =>
        view === 'individual'
          ? item.name.includes('Individual')
          : item.name.includes('Non-Individual')
      ),
      yesterday: data.barChart.yesterday.filter((item: any) =>
        view === 'individual'
          ? item.name.includes('Individual')
          : item.name.includes('Non-Individual')
      )
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Tabs for Range & View */}
      <DashboardTabs
        range={range}
        setRange={setRange}
        view={view}
        setView={setView}
        setCustomRange={setCustomRange}
      />

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TotalKycSection data={filteredData} />
        <div className="lg:col-span-2">
          <StatusCards data={filteredData} />
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BarChartCard data={filteredData} />
        </div>
        <Categories data={filteredData} />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CircularChartCard data={filteredData} />
        <PanStats data={filteredData} />
      </div>
    </div>
  );
}
