import { NextResponse } from 'next/server';

export async function GET() {
  const mongoUrl = process.env.MONGODB_URL;
  console.log('MONGODB_URL in API:', mongoUrl ? 'Present' : 'Missing');
  return NextResponse.json({ mongoUrlPresent: !!mongoUrl });
}
