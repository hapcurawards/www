"use client";

import { useEffect, useState } from "react";

/**
 * ClientBody component voorkomt Hydration Mismatch-fouten 
 * die kunnen optreden bij client-side state (zoals taalwissels en slideshows) in Next.js.
 */
export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Rendert een neutrale donkere achtergrond tijdens de initiële server-side render
    return <div className="bg-background min-h-screen" />;
  }

  return <>{children}</>;
}