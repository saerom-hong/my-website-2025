import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const BricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-groteque',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Saerom Hong',
  description: 'The personal website of Saerom Hong – software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BricolageGrotesque.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
