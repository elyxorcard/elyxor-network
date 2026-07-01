import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CardPreview from "@/components/CardPreview";
import WalletBalance from "@/components/WalletBalance";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CardPreview />
      <WalletBalance />
    </>
  );
}
