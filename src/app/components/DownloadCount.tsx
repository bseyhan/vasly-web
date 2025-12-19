'use client';

import { useEffect, useState } from 'react';

export default function DownloadCount() {
  const [downloads, setDownloads] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch('/api/downloads');
        const data = await response.json();
        if (data.downloads !== undefined) {
          setDownloads(data.downloads);
        }
      } catch (error) {
        console.error('Failed to fetch downloads:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDownloads();
  }, []);

  if (loading || downloads === null || downloads === 0) {
    return null;
  }

  // Format number with spaces (Norwegian format)
  const formattedDownloads = downloads.toLocaleString('no-NO');

  return (
    <div className="download-count-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      <span>{formattedDownloads}+ nedlastninger</span>
    </div>
  );
}
