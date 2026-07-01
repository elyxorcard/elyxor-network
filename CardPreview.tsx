export default function CardPreview() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-10 text-white">
        <h2 className="text-3xl font-bold">
          ElyxorCard
        </h2>

        <p className="mt-10 tracking-widest">
          **** **** **** 2048
        </p>

        <div className="mt-8 flex justify-between">
          <span>Crypto Balance</span>
          <span>◎ 52.37 SOL</span>
        </div>
      </div>
    </section>
  );
}
