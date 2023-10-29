// import '@/app/ui/global.css'
import './ui/global.css';

// Error in "/app/layout.tsx"
// https://nextjs.org/learn/dashboard-app/optimizing-fonts-images

import { inter } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
