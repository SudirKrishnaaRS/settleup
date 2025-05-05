import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SettleUp",
  description:
    "SettleUp is a user-friendly app designed to simplify the process of settling shared bills. Whether you're splitting a dinner bill, vacation expenses, or group gifts, SettleUp quickly calculates what each person owes and helps facilitate seamless repayments. With its intuitive interface, the app ensures fair and accurate division of costs, saving time and reducing confusion in group transactions. Perfect for friends, family, roommates, and coworkers, SettleUp makes group financial management effortless. Try it today to streamline your shared expenses!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
