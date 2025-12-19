import { NextResponse } from 'next/server';
import * as jose from 'jose';

// Cache the result for 1 hour
let cachedData: { downloads: number; timestamp: number } | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

async function generateJWT() {
  const privateKey = process.env.APPLE_PRIVATE_KEY!;
  const keyId = process.env.APPLE_KEY_ID!;
  const issuerId = process.env.APPLE_ISSUER_ID!;

  const key = await jose.importPKCS8(privateKey, 'ES256');
  
  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg: 'ES256', kid: keyId, typ: 'JWT' })
    .setIssuer(issuerId)
    .setIssuedAt()
    .setExpirationTime('20m')
    .setAudience('appstoreconnect-v1')
    .sign(key);

  return jwt;
}

async function fetchDownloads(): Promise<number> {
  const jwt = await generateJWT();
  
  // Get the app ID first
  const appsResponse = await fetch(
    'https://api.appstoreconnect.apple.com/v1/apps?filter[bundleId]=com.vasly.app',
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  if (!appsResponse.ok) {
    console.error('Failed to fetch apps:', await appsResponse.text());
    throw new Error('Failed to fetch apps');
  }

  const appsData = await appsResponse.json();
  
  if (!appsData.data || appsData.data.length === 0) {
    // Try without filter to see all apps
    const allAppsResponse = await fetch(
      'https://api.appstoreconnect.apple.com/v1/apps',
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const allAppsData = await allAppsResponse.json();
    console.log('All apps:', JSON.stringify(allAppsData, null, 2));
    throw new Error('App not found');
  }

  const appId = appsData.data[0].id;

  // Fetch sales reports - we need to use the Sales and Trends API
  // For now, return a placeholder - the Sales API requires different endpoint
  // We'll use the Analytics API instead
  
  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  // Try to get app analytics
  const analyticsResponse = await fetch(
    `https://api.appstoreconnect.apple.com/v1/apps/${appId}/perfPowerMetrics`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  // The App Store Connect API doesn't directly expose download counts
  // We need to use the Sales Reports endpoint which requires a different approach
  // For now, let's return the app info to confirm connection works
  
  console.log('App found:', appsData.data[0].attributes.name);
  
  // Return -1 to indicate we need to implement sales reports
  return -1;
}

export async function GET() {
  try {
    // Check environment variables
    if (!process.env.APPLE_PRIVATE_KEY || !process.env.APPLE_KEY_ID || !process.env.APPLE_ISSUER_ID) {
      return NextResponse.json(
        { error: 'Missing Apple API credentials' },
        { status: 500 }
      );
    }

    // Check cache
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json({ downloads: cachedData.downloads, cached: true });
    }

    const downloads = await fetchDownloads();
    
    // Update cache
    cachedData = { downloads, timestamp: Date.now() };

    return NextResponse.json({ downloads, cached: false });
  } catch (error) {
    console.error('Error fetching downloads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch download count', details: String(error) },
      { status: 500 }
    );
  }
}
