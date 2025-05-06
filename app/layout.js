import '.app/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Business Site',
  description: 'A business site built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
