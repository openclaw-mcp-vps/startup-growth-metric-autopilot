export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-calculate startup growth metrics from{" "}
          <span className="text-[#58a6ff]">scattered data</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe, Google Analytics, and your database once. Get CAC, LTV, churn, MRR, and more — updated hourly, automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $29/mo
        </a>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            ["CAC", "Customer Acq. Cost"],
            ["LTV", "Lifetime Value"],
            ["Churn", "Monthly Rate"],
            ["MRR", "Recurring Revenue"],
          ].map(([metric, label]) => (
            <div key={metric} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{metric}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Growth Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Stripe + GA + DB integrations",
              "Hourly metric sync",
              "CAC, LTV, Churn, MRR dashboards",
              "Email digest reports",
              "Unlimited team members",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does it connect to my data?",
              "You provide API keys for Stripe and Google Analytics, and a read-only database connection string. Setup takes under 5 minutes.",
            ],
            [
              "How often are metrics updated?",
              "All metrics are recalculated every hour via background jobs. You can also trigger a manual sync at any time.",
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your dashboard with one click. No contracts, no questions asked.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Growth Metric Autopilot. All rights reserved.
      </footer>
    </main>
  );
}
