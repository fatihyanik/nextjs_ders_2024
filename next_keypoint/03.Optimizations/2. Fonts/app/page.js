import "./style.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <main>
      <h1>Font optimizations</h1>
      <main className={roboto.className}>Hello Google Font</main>
    </main>
  );
}
