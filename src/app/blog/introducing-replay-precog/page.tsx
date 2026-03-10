
"use client";
import { useState } from "react";

export default function ReplayBlogPost() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#fff", minHeight: "100vh", color: "#1a1a1a" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #e5e5e5", padding: "16px 24px", display: "flex", alignItems: "center", gap: "8px" }}>
        <a href="https://replay.io" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#FF4F00"/>
            <polygon points="12,10 24,16 12,22" fill="white"/>
          </svg>
        </a>
        <span style={{ color: "#999", fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>·</span>
        <a href="https://blog.replay.io" style={{ fontSize: "14px", color: "#555", textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 500 }}>All Posts</a>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 24px 80px" }}>
        
        {/* Tag */}
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4F00", fontFamily: "system-ui, sans-serif" }}>Tech</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "16px", fontFamily: "'Georgia', serif" }}>
          Introducing Replay Precog: Time-Travel Debugging for Code You Haven't Written Yet
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: "20px", color: "#555", lineHeight: 1.5, marginBottom: "32px", fontFamily: "system-ui, sans-serif", fontWeight: 400 }}>
          Inspired by the 2002 documentary <em>Minority Report</em>
        </p>

        {/* Byline */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid #e5e5e5" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #FF4F00, #ff8c5a)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "14px", fontFamily: "system-ui, sans-serif" }}>
            JL
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>Brian Hackett</div>
            <div style={{ fontSize: "13px", color: "#888", fontFamily: "system-ui, sans-serif" }}>April 1, 2025</div>
          </div>
        </div>

        {/* Hero image placeholder — abstract future/precog visualization */}
        <div style={{ 
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a3e 100%)", 
          borderRadius: "8px", 
          marginBottom: "40px", 
          padding: "48px 32px",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Grid lines */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,79,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,79,0,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          
          <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>⏩</div>
            <div style={{ color: "#FF4F00", fontFamily: "monospace", fontSize: "13px", letterSpacing: "0.1em", marginBottom: "8px" }}>REPLAY PRECOG</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "monospace", fontSize: "12px" }}>analyzing future execution state...</div>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
              {["line 47 — not yet written", "line 83 — 12 minutes from now", "line 102 — tomorrow, 2:14 PM"].map((label, i) => (
                <span key={i} style={{ 
                  background: "rgba(255,79,0,0.15)", 
                  border: "1px solid rgba(255,79,0,0.3)", 
                  color: "#ff8c5a", 
                  padding: "4px 10px", 
                  borderRadius: "4px", 
                  fontSize: "11px", 
                  fontFamily: "monospace" 
                }}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ fontSize: "17px", lineHeight: 1.75, color: "#1a1a1a" }}>

          <p style={{ marginBottom: "24px" }}>
            We've spent three years building the world's best time-travel debugger for the past. Today, we're announcing something considerably more ambitious.
          </p>

          <p style={{ marginBottom: "32px" }}>
            <strong>Replay Precog</strong> — deterministic debugging for bugs in code that doesn't exist yet.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "32px 0" }} />

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>The Problem With Debugging Today</h2>

          <p style={{ marginBottom: "24px" }}>
            Current debugging tools, including our own, share a fundamental limitation: they require the bug to have <em>already happened</em>. You write code. It ships. It breaks. You record. You replay. You find the root cause.
          </p>

          <p style={{ marginBottom: "24px" }}>
            This is, frankly, embarrassing. We've built a time machine that only goes backwards.
          </p>

          <p style={{ marginBottom: "40px" }}>
            Inspired by the 2002 documentary <em>Minority Report</em>, our research team asked a deceptively simple question: what if we could arrest the bug before it commits the crime?
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>How Precog Works</h2>

          <p style={{ marginBottom: "24px" }}>
            Precog is a new Replay MCP tool — <code style={{ background: "#f5f5f5", padding: "2px 6px", borderRadius: "4px", fontSize: "14px", fontFamily: "monospace" }}>replay_precog_analyze</code> — that integrates directly into your IDE. When you open a file, Precog begins analyzing the <em>potential</em> execution state of code you are currently typing.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Under the hood, we're running a speculative React reconciler across a probabilistic AST shadow DOM — essentially, a ghost renderer that simulates what your component <em>would</em> do if you finished writing it, based on your typing velocity, variable naming conventions, and your personal Redux anti-pattern fingerprint.
          </p>

          {/* Code block */}
          <div style={{ background: "#0d1117", borderRadius: "8px", padding: "24px", marginBottom: "32px", fontFamily: "monospace", fontSize: "13px", overflowX: "auto" }}>
            <div style={{ color: "#8b949e", marginBottom: "12px", fontSize: "12px" }}>bash</div>
            <div style={{ color: "#e6edf3" }}>npx replay-mcp precog --watch ./src/components/PaymentFlow.tsx</div>
          </div>

          <div style={{ background: "#0d1117", borderRadius: "8px", padding: "24px", marginBottom: "40px", fontFamily: "monospace", fontSize: "13px", lineHeight: 1.7, overflowX: "auto" }}>
            <div style={{ color: "#8b949e", marginBottom: "12px", fontSize: "12px" }}>output</div>
            <div style={{ color: "#ffa657" }}>⚠ PRECOG WARNING [line 47 — not yet written]</div>
            <div style={{ color: "#e6edf3" }}>You are about to introduce a useEffect dependency array</div>
            <div style={{ color: "#e6edf3" }}>omission. Predicted at 94.3% confidence.</div>
            <div style={{ color: "#e6edf3", marginTop: "12px" }}>Suggested fix (preemptive):</div>
            <div style={{ color: "#79c0ff" }}>  useEffect(() =&gt; {"{ ... }"}, [userId, cartTotal])</div>
            <div style={{ color: "#8b949e" }}>  {"// userId added. You were going to forget it again."}</div>
            <div style={{ marginTop: "16px" }}></div>
            <div style={{ color: "#f85149" }}>🔴 PRECOG CRITICAL [line 83 — 12 minutes from now]</div>
            <div style={{ color: "#e6edf3" }}>Imminent race condition detected in optimistic cart update.</div>
            <div style={{ color: "#e6edf3" }}>Root cause: you will name a variable 'data' instead of</div>
            <div style={{ color: "#e6edf3" }}>'cartData', colliding with outer scope. This mistake is</div>
            <div style={{ color: "#e6edf3" }}>consistent with your Tuesday afternoon commit history.</div>
            <div style={{ marginTop: "12px" }}></div>
            <div style={{ color: "#8b949e" }}>Replay recording pre-generated. Link: replay.io/precog/abc123</div>
            <div style={{ color: "#8b949e" }}>{"// Note: this recording depicts a future that can still be avoided."}</div>
          </div>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>The Precrime Dashboard</h2>

          <p style={{ marginBottom: "24px" }}>
            For teams, Precog ships with a new <strong>Precrime Dashboard</strong> — a real-time feed of bugs your engineers are statistically likely to introduce in the next 72 hours, ranked by predicted severity.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Engineering managers have described early access as "clarifying."
          </p>

          {/* Blockquote */}
          <blockquote style={{ borderLeft: "3px solid #FF4F00", paddingLeft: "20px", margin: "32px 0", color: "#555", fontStyle: "italic" }}>
            "I finally have data to back up what I've always suspected about our senior front-end engineer."
            <footer style={{ marginTop: "8px", fontSize: "14px", color: "#888", fontStyle: "normal" }}>— Series B fintech CTO, beta customer</footer>
          </blockquote>

          <p style={{ marginBottom: "40px" }}>
            We are not responsible for any personnel decisions made using Precog data.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>Precog for Vibe-Coded Apps</h2>

          <p style={{ marginBottom: "24px" }}>
            Precog has a special operating mode for apps built with Lovable, Base44, Replit, and similar tools: <strong>Ambient Precog</strong>.
          </p>

          <p style={{ marginBottom: "24px" }}>
            In this mode, there is no code to analyze — only vibes. Precog monitors the <em>emotional state of the prompt author</em> using keystroke cadence, sentence fragment length, and the ratio of exclamation points to question marks in your prompts. From this, it infers structural instability in the component tree before the component tree exists.
          </p>

          <p style={{ marginBottom: "16px" }}>Ambient Precog's most-triggered warning, across all beta users:</p>

          <div style={{ background: "#0d1117", borderRadius: "8px", padding: "24px", marginBottom: "40px", fontFamily: "monospace", fontSize: "13px", lineHeight: 1.7 }}>
            <div style={{ color: "#ffa657" }}>⚠ You are about to ask the AI to "just make it look more premium."</div>
            <div style={{ color: "#e6edf3" }}>This will cause three z-index bugs and a broken mobile navbar.</div>
            <div style={{ color: "#8b949e" }}>We've pre-filed the GitHub issue.</div>
          </div>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>Ethical Considerations</h2>

          <p style={{ marginBottom: "24px" }}>
            We consulted with legal on the implications of penalizing engineers for bugs they haven't written. Legal said this was "not their department." We consulted with our ethics board. We don't have an ethics board. We consulted with our investor. He said ship it.
          </p>

          <p style={{ marginBottom: "40px" }}>
            There is, however, one hard constraint we've built in: <strong>Precog will never surface a prediction with less than 60% confidence.</strong> Below that threshold, it's not a bug — it's just software engineering.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>Limitations (Current Beta)</h2>

          <ul style={{ paddingLeft: "24px", marginBottom: "40px" }}>
            {[
              "Precog cannot predict bugs introduced by other people's bad PRs landing in your branch. This is a known class of unpredictable chaos we call external state corruption and is philosophically outside our roadmap.",
              "TypeScript any renders Precog completely blind. This is intentional and we consider it a feature.",
              "Precog has no jurisdiction over CSS. No one does."
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: "16px", paddingLeft: "4px" }}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "16px", marginTop: "40px" }}>Availability</h2>

          <p style={{ marginBottom: "24px" }}>Replay Precog is available today for all teams on our Pro plan.</p>

          <p style={{ marginBottom: "16px" }}>To enable it, run:</p>

          <div style={{ background: "#0d1117", borderRadius: "8px", padding: "24px", marginBottom: "24px", fontFamily: "monospace", fontSize: "13px" }}>
            <div style={{ color: "#e6edf3" }}>npx replay-mcp precog --enable</div>
          </div>

          <p style={{ marginBottom: "40px", color: "#555" }}>
            Note: this command does nothing. Happy April 1st.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", margin: "40px 0" }} />

          {/* CTA */}
          <div style={{ background: "#fff8f5", border: "1px solid #ffd5c0", borderRadius: "8px", padding: "28px 32px", textAlign: "center" }}>
            <p style={{ marginBottom: "16px", fontFamily: "system-ui, sans-serif", fontSize: "15px", color: "#555" }}>
              We do, however, actually build the best debugging tools in the world for bugs that have already happened.
            </p>
            <a 
              href="https://replay.io" 
              style={{ 
                display: "inline-block",
                background: "#FF4F00", 
                color: "white", 
                padding: "12px 24px", 
                borderRadius: "6px", 
                textDecoration: "none", 
                fontWeight: 600, 
                fontFamily: "system-ui, sans-serif",
                fontSize: "14px"
              }}
            >
              Try Replay MCP →
            </a>
          </div>

        </div>

        {/* Footer meta */}
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #e5e5e5", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "#888" }}>
            <span>Date</span>
            <span style={{ display: "block", color: "#1a1a1a", fontWeight: 500, marginTop: "2px" }}>April 1, 2025</span>
          </div>
          <button 
            onClick={handleShare}
            style={{ 
              background: "none", 
              border: "1px solid #e5e5e5", 
              padding: "8px 16px", 
              borderRadius: "6px", 
              cursor: "pointer", 
              fontFamily: "system-ui, sans-serif", 
              fontSize: "13px",
              color: "#555"
            }}
          >
            {copied ? "✓ Copied" : "Share"}
          </button>
        </div>

        {/* Related posts */}
        <div style={{ marginTop: "56px" }}>
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", fontWeight: 600, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "20px" }}>Related posts</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { tag: "Tech", title: "Full Stack Time Travel Debugging", url: "https://blog.replay.io/full-stack-time-travel-debugging" },
              { tag: "Tech", title: "How to build a Time Machine", url: "https://blog.replay.io/how-to-build-a-time-machine" },
              { tag: "Changelog", title: "Introducing Replay MCP", url: "https://replay.io" },
            ].map((post, i) => (
              <a key={i} href={post.url} style={{ 
                display: "block",
                padding: "16px 0", 
                borderTop: "1px solid #e5e5e5",
                textDecoration: "none",
                color: "inherit"
              }}>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF4F00", fontFamily: "system-ui, sans-serif", marginBottom: "4px" }}>{post.tag}</div>
                <div style={{ fontSize: "15px", fontWeight: 600, fontFamily: "system-ui, sans-serif", color: "#1a1a1a" }}>{post.title}</div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "48px", fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "#ccc", textAlign: "center" }}>
          Powered by Notaku
        </div>
      </article>
    </div>
  );
}
