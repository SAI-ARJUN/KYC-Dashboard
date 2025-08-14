import { NextResponse } from 'next/server';

export async function GET() {
  const sampleData = {
    kycStatus: [
      { name: 'KYC Initiated', count: 45 },
      { name: 'Under Process', count: 30 },
      { name: 'Registered', count: 20 },
      { name: 'Validated', count: 15 },
      { name: 'Hold', count: 8 },
      { name: 'Docs Pending', count: 12 }
    ],
    totalKYCs: {
      new: { count: 100, change: 5 },
      modified: { count: 50, change: -3 }
    },
    barChart: {
      today: [
        { name: 'A', value: 40 },
        { name: 'B', value: 30 }
      ],
      yesterday: [
        { name: 'A', value: 35 },
        { name: 'B', value: 25 }
      ]
    },
    categories: {
      individual: { RI: 60, NRI: 40 },
      nonIndividual: { RI: 50, NRI: 50 }
    },
    circular: [
      { name: 'Solicited', value: 60 },
      { name: 'Unsolicited', value: 40 }
    ],
    panStats: {
      solicited: { withImage: 30, withoutImage: 20 },
      dataReceived: { withImage: 25, withoutImage: 15 }
    }
  };

  return NextResponse.json(sampleData);
}
