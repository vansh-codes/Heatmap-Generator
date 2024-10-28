import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Heatmap Generator by Vansh Chaurasiya",
  description: "Generate Heatmap anytime anywhere for any repository of your choice",
  keywords: "LeetCode tracker, heatmap, coding progress, algorithm challenges, daily coding activity, Vansh Chaurasiya, problem solving, programming, software development, Vansh Chaurasiya github, vansh-codes, vansh codes, leetcode tracking, leetcode progress, leetcode heatmap, leetcode problems, leetcode solutions, leetcode patterns, leetcode mastery, leetcode improvement, leetcode journey, leetcode learning, leetcode algorithm, leetcode challenges, leetcode solutions, leetcode problems, leetcode patterns, leetcode mastery, leetcode improvement, leetcode journey, leetcode learning, leetcode algorithm, leetcode challenges",
  author: "Vansh Chaurasiya",
  robots: "index, follow",
  og: {
    title: "Heatmap Generator by Vansh Chaurasiya",
    description: "Generate Heatmap anytime anywhere for any repository of your choice",
    type: "website",
  },
  icon: {
    href: "/favicon.jpeg",
    type: "image/x-icon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.jpeg" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-900 to-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
