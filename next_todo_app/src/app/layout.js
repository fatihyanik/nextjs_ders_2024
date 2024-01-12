import { Asul } from "next/font/google";
import "./globals.css";

const asul = Asul({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Todo App",
  description: "Todo app allows user to add, edit and update their todo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asul.className}>{children}</body>
    </html>
  );
}