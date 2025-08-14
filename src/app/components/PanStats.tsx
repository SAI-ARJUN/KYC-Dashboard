'use client';

export default function PanStats({ data }: { data: any }) {
  return (
    <div className="card">
      <h2 className="card-title">PAN & Data Stats</h2>

      {/* PAN Solicited */}
      <div className="mb-4">
        <h3 className="card-subtitle mb-2">No. of PANs Solicited</h3>
        <div className="flex justify-between text-sm">
          <span>With Image</span>
          <span className="font-bold">{data.panStats.solicited.withImage}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Without Image</span>
          <span className="font-bold">{data.panStats.solicited.withoutImage}</span>
        </div>
      </div>

      {/* Data Received */}
      <div>
        <h3 className="card-subtitle mb-2">Data Received</h3>
        <div className="flex justify-between text-sm">
          <span>With Image</span>
          <span className="font-bold">{data.panStats.dataReceived.withImage}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Without Image</span>
          <span className="font-bold">{data.panStats.dataReceived.withoutImage}</span>
        </div>
      </div>
    </div>
  );
}
