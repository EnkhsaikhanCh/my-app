import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";

export function StartPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
