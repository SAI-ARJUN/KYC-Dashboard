'use client';
import { useState } from 'react';

type Range = 'today' | 'month' | 'custom';
type View = 'individual' | 'nonIndividual';

export default function DashboardTabs({
  range, setRange, view, setView, setCustomRange
}: {
  range: Range; setRange: (r: Range) => void;
  view: View; setView: (v: View) => void;
  setCustomRange: (r: { from: string; to: string } | null) => void;
}) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <div className="card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Time range */}
        <div className="flex gap-2 text-sm">
          {(['today','month','custom'] as Range[]).map(r => (
            <button
              key={r}
              onClick={() => { setRange(r); if (r !== 'custom') setCustomRange(null); }}
              className={`px-3 py-1 rounded-md border ${range===r ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'}`}
            >
              {r === 'today' ? 'Today' : r === 'month' ? 'This Month' : 'Custom'}
            </button>
          ))}
        </div>

        {/* Custom dates */}
        {range === 'custom' && (
          <div className="flex items-center gap-2 text-sm">
            <input type="date" value={from} onChange={e=>setFrom(e.target.value)} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700" />
            <span>-</span>
            <input type="date" value={to} onChange={e=>setTo(e.target.value)} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700" />
            <button
              onClick={() => setCustomRange(from && to ? { from, to } : null)}
              className="px-3 py-1 rounded-md bg-blue-600 text-white"
            >
              Apply
            </button>
          </div>
        )}

        {/* View toggle */}
        <div className="flex gap-2 text-sm">
          {(['individual','nonIndividual'] as View[]).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`px-3 py-1 rounded-md border ${view===v ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'}`}
            >
              {v === 'individual' ? 'Individual' : 'Non-Individual'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
