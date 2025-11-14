import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sent Antuan Kilisesi - İstanbul Beyoğlu",
  description: "İstanbul'un en büyük Katolik kilisesi. Sent Antuan Bazilikası, ayin saatleri, dualar, cemaatlerimiz ve daha fazlası.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="font-sans antialiased bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
