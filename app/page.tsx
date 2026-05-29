import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              The Ultimate Business Growth Braintrust
            </h1>
            <a
              href="#booking"
              className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get Strategic Advice from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              11 World-Class Business Experts
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Without the $50K Mastermind Price Tag
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
            You're at a crossroads. You've built something real — but you're stuck. Not because you lack intelligence or work ethic.
            You're stuck because you're making decisions in a vacuum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-webinar"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg shadow-amber-600/20"
            >
              Register for Free Weekly Webinar
            </a>
            <a
              href="#intensive"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white text-lg font-semibold rounded-lg transition-colors border border-slate-700"
            >
              Book Board Meeting Intensive
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">
              The Problem with "Winging It" at Six Figures
            </h3>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                When you're just starting, intuition works. Trial and error gets you moving. Hustle covers mistakes.
              </p>
              <p>
                But once you're generating real revenue, the stakes change.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {[
                  { problem: "Wrong hiring decision?", cost: "Six months and $60K lost" },
                  { problem: "Bad positioning pivot?", cost: "Your best clients stop recognizing you" },
                  { problem: "Pricing too low?", cost: "You're a hostage to volume" },
                  { problem: "Wrong constraint focus?", cost: "Operational chaos" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400 mb-2">{item.problem}</p>
                    <p className="text-slate-400">{item.cost}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-semibold text-white mt-8">
                Every decision compounds. And most business owners are making these calls without strategic counsel — because they can't afford $2,000/hour consultants or $50K mastermind seats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 11 Experts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-center">
            The 11 Experts in Your Corner
          </h3>
          <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            A synthesized advisory system drawing on the combined intelligence of world-class business strategists
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Hormozi",
                expertise: "Offer Engineering & Scaling",
                description: "Built 3 companies to $100M+ valuations. Expert in constraint theory, value equation, scaling roadmaps.",
              },
              {
                name: "Chris Voss",
                expertise: "Negotiation & Influence",
                description: "Former FBI lead hostage negotiator (93% success rate). Master of tactical empathy.",
              },
              {
                name: "Dan Kennedy",
                expertise: "Direct Response & Positioning",
                description: "40+ years consulting billion-dollar brands. Expert in premium pricing, takeaway selling.",
              },
              {
                name: "Gary Halbert",
                expertise: "Copywriting & Psychology",
                description: "600 million+ direct mail pieces. Master of human behavior in marketing.",
              },
              {
                name: "Gary Vaynerchuk",
                expertise: "Social Media & Brand Building",
                description: "Built VaynerMedia into global agency. Expert in attention arbitrage, personal brand leverage.",
              },
              {
                name: "Ian Altman",
                expertise: "B2B Sales & Trust-Based Selling",
                description: "Trained 10,000+ executives. Expert in long sales cycles, integrity-based closing.",
              },
              {
                name: "Naval Ravikant",
                expertise: "Wealth Philosophy & Leverage",
                description: "Co-founder of AngelList. Expert in specific knowledge, productizing yourself.",
              },
              {
                name: "Neil Napier",
                expertise: "AI Automation & Systems",
                description: "Built 6 businesses generating $15M+. Expert in workflow automation, AI delegation.",
              },
              {
                name: "Russell Brunson",
                expertise: "Funnel Architecture & Storytelling",
                description: "Built ClickFunnels to $1B+ in sales. Expert in hook-story-offer, persuasion systems.",
              },
              {
                name: "Seth Godin",
                expertise: "Niche Marketing & Positioning",
                description: "21 bestselling books. Expert in being remarkable, building permission assets.",
              },
              {
                name: "Tony Robbins",
                expertise: "Peak Performance & Scaling",
                description: "47 years coaching world leaders. Expert in state management, breakthrough psychology.",
              },
            ].map((expert, i) => (
              <div
                key={i}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-amber-600/50 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {expert.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{expert.name}</h4>
                <p className="text-amber-400 font-semibold mb-3 text-sm">{expert.expertise}</p>
                <p className="text-slate-400 text-sm">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-center">
            How The Expert Routing System Works
          </h3>
          <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            Most business advice is generic. The Braintrust uses a diagnostic routing system to identify your exact constraint and apply the right frameworks.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Where You Actually Are",
                description: "Revenue, team size, business model, current capacity",
              },
              {
                step: "2",
                title: "What's Actually Blocking You",
                description: "Demand vs supply constraint, positioning vs delivery, mindset vs strategy",
              },
              {
                step: "3",
                title: "Which Frameworks Apply",
                description: "2-3 expert strategies that will unlock your next stage of growth",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Example Scenarios */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: "You're busy but broke",
                diagnosis: "Supply-constrained (too much demand, not enough capacity)",
                expert: "Alex Hormozi — Constraint Theory",
                solution: "Raise prices 30-50%, improve delivery ratios, build recruiting system",
                outcome: "Same effort, 2x revenue",
              },
              {
                scenario: "Prospect ghosted after great meeting",
                diagnosis: "Sales process breakdown",
                expert: "Chris Voss — Negotiation & Proof of Life",
                solution: '"Have you given up on this project?" (No-oriented question)',
                outcome: "Deal reactivated or clean closure",
              },
              {
                scenario: "Can't charge premium prices",
                diagnosis: "Positioning failure",
                expert: "Dan Kennedy — Magnetic Marketing",
                solution: "Shift to prescriptive authority, implement application process",
                outcome: "3x pricing with better clients",
              },
              {
                scenario: "Drowning in manual work",
                diagnosis: "Leverage problem",
                expert: "Neil Napier — AI Systems Architecture",
                solution: "Map workflow, identify automation wins, implement AI delegation",
                outcome: "15 hours/week back",
              },
            ].map((example, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <p className="font-bold text-amber-400 mb-3 text-lg">{example.scenario}</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <p><span className="font-semibold text-white">Diagnosis:</span> {example.diagnosis}</p>
                  <p><span className="font-semibold text-white">Expert:</span> {example.expert}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {example.solution}</p>
                  <p><span className="font-semibold text-amber-400">Outcome:</span> {example.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Webinar Section */}
      <section id="free-webinar" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-amber-600/30 shadow-2xl shadow-amber-600/10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                FREE WEEKLY WEBINAR
              </span>
              <h3 className="text-4xl font-bold text-white mb-4">
                Expert Diagnosis Webinar
              </h3>
              <p className="text-xl text-slate-300 mb-2">
                Which of the 11 experts does your business need most right now?
              </p>
              <p className="text-lg text-slate-400">
                Every Thursday at 12:00 PM Mountain Time
              </p>
            </div>

            <div className="space-y-4 text-slate-300 mb-8">
              <p className="text-center">In this 60-minute live session, you'll discover:</p>
              <ul className="space-y-3 max-w-2xl mx-auto">
                {[
                  "The Expert Routing System and how to diagnose your constraint",
                  "Real business case studies using the 11 expert frameworks",
                  "Live Q&A where we diagnose attendee businesses",
                  "How to apply the Braintrust system to your specific situation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendly Embed */}
            <div className="bg-slate-950/50 rounded-lg p-8 border border-slate-700">
              <p className="text-center text-slate-400 mb-6">Register for the next webinar:</p>
              <div className="calendly-inline-widget" data-url="https://calendly.com/dseils-ds/expert-diagnosis-webinar" style={{ minWidth: "320px", height: "630px" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Meeting Intensive */}
      <section id="intensive" className="bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-center">
            The Board Meeting Intensive
          </h3>
          <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
            A 90-minute strategic session designed to give you the same clarity you'd get from a $50K/year mastermind — in a single conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* What You Get */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">What You Get:</h4>
              <div className="space-y-4">
                {[
                  {
                    phase: "Phase 1: Business Audit (20 min)",
                    details: "Map your current state: revenue, team, bottleneck, what you've tried, desired outcome",
                  },
                  {
                    phase: "Phase 2: Expert Diagnosis (30 min)",
                    details: "Identify your primary constraint, which frameworks apply, 2-3 specific strategies",
                  },
                  {
                    phase: "Phase 3: Strategic Plan (30 min)",
                    details: "Clear prioritization, tactical steps, decision framework for 90 days, resources",
                  },
                  {
                    phase: "Phase 4: Q&A (10 min)",
                    details: "Final questions, edge cases, clarifications",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="font-bold text-amber-400 mb-2">{item.phase}</p>
                    <p className="text-slate-300 text-sm">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">What's Included:</h4>
              <div className="space-y-3">
                {[
                  "90-minute live strategic session",
                  "Business audit & constraint diagnosis",
                  "Expert framework mapping",
                  "Tactical action plan",
                  "Written session summary",
                  "7-day email support",
                  "7-day money-back guarantee",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg border border-amber-600/30">
                <p className="text-sm text-slate-400 mb-2">Investment:</p>
                <p className="text-5xl font-bold text-white mb-1">$1,500</p>
                <p className="text-slate-400 text-sm mb-4">Limited to 3 sessions per week</p>
                <a
                  href="#booking"
                  className="block w-full px-6 py-4 bg-amber-600 hover:bg-amber-700 text-white text-center font-semibold rounded-lg transition-colors"
                >
                  Book Your Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is Donald Seils */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-8 text-center">
            Who Is Donald Seils?
          </h3>
          <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-6xl">
                  DS
                </div>
                <p className="text-center text-sm text-slate-500 mt-4">[Your headshot will replace this placeholder]</p>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Donald Seils is a <span className="text-amber-400 font-semibold">tech founder</span> with over 40 years of experience navigating high-stakes environments and building systems under pressure.
                </p>
                <p>
                  He served as a <span className="font-semibold text-white">U.S. Army helicopter pilot</span> during the Vietnam era — learning decision-making in life-or-death situations where hesitation kills and clarity wins.
                </p>
                <p>
                  He spent 41 years as an <span className="font-semibold text-white">Episcopal priest</span>, guiding communities through crisis, conflict, and change. He learned how people actually make decisions, what drives behavior, and how to counsel through complexity.
                </p>
                <p>
                  He built and operated <span className="font-semibold text-white">multiple businesses</span> — including a video production company (500+ projects), a professional face painting operation, and now Front Range Mobile Marketing Solutions, helping local businesses implement AI and custom operating systems.
                </p>
                <p className="text-white font-semibold text-lg">
                  He doesn't teach from a book. He synthesizes from lived experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your Board Meeting Intensive
            </h3>
            <p className="text-xl text-slate-300 mb-2">
              90 minutes of expert-level strategic thinking
            </p>
            <p className="text-lg text-slate-400">
              Next available: Thursdays at 12:00 PM MT
            </p>
          </div>

          {/* Booking Form/Calendly */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="calendly-inline-widget" data-url="https://calendly.com/dseils-ds/board-meeting-intensive" style={{ minWidth: "320px", height: "700px" }}></div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-4">Or contact directly:</p>
              <a href="mailto:dseils.ds@gmail.com" className="text-amber-400 hover:text-amber-300 font-semibold">
                dseils.ds@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-400 text-sm">
            <p>✓ 7-day money-back guarantee</p>
            <p>✓ Limited to 3 sessions per week</p>
            <p>✓ Secure payment via Stripe</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-slate-400">
              <strong className="text-white">Donald Seils</strong> | Tech Founder | Front Range Mobile Marketing Solutions
            </p>
            <p className="text-slate-500 text-sm">
              40+ years navigating high-stakes decisions | Vietnam-era pilot | Episcopal priest | Serial entrepreneur
            </p>
            <p className="text-slate-500 text-sm">
              <a href="mailto:dseils.ds@gmail.com" className="hover:text-amber-400">
                dseils.ds@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}
