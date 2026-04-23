"use client";

import { useState } from "react";

type TranscriptEvent =
  | { type: "user"; content: string }
  | { type: "text"; content: string }
  | { type: "tool"; name: string; input: Record<string, unknown> | null; result: string; failed: boolean };

type Tab = {
  title: string;
  subtitle: string;
  muxPlaybackId: string;
  transcript: TranscriptEvent[];
};

const tabs: Tab[] = [
  {
    title: "Button doesn't work",
    subtitle: "Creating a new task does nothing",
    muxPlaybackId: "4qzqK2nSFoP02ppOu6fi9kcf02aVtvaj3ZK02pqpjBVhiQ",
    transcript: [
      { type: "user", content: "The form to add a new task isn't doing anything" },
      { type: "text", content: "I'll investigate why the form to add a new task isn't working. Let me start by exploring the recording to understand what's happening." },
      { type: "tool", name: "Timeline", input: null, result: "AssertionFailed: No absolute time at first checkpoint", failed: true },
      { type: "tool", name: "ReactComponents", input: null, result: "Component:Provider:5 rendered at Point:Provider:5\n  Component:BrowserRouter:5\n    Component:App:5\n      Component:TasksListPage:5\n        Component:CreateTaskModal:5 (rendered 12 times)", failed: false },
      { type: "tool", name: "ConsoleMessages", input: null, result: "A total of 1 messages were logged to the console\n[console.info] (Point:152): \"%cDownload the React DevTools...\"", failed: false },
      { type: "tool", name: "SearchSources", input: { pattern: "CreateTaskModal" }, result: "### https://sales-crm-1771358279.netlify.app/src/components/tasks/CreateTaskModal.tsx\n hits | L | code\n------|------|------\n   14 |   46 | if (!open) return null", failed: false },
      { type: "text", content: "Let me look at the CreateTaskModal component more closely to understand its implementation, especially the form submission logic." },
      { type: "tool", name: "ReadSource", input: { path: "src/components/tasks/CreateTaskModal.tsx" }, result: " hits | L | code\n------|------|------\n     |   *1 | import { useState, useEffect } from 'react'\n  14 |   46 | if (!open) return null\n  12 |   68 | <div data-testid=\"create-task-modal\">\n  12 |   81 | <form onSubmit={handleSubmit}>\n   1 |   53 | e.preventDefault()\n   0 |   54 | if (!title.trim()) return", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/components/tasks/CreateTaskModal.tsx", line: 70 }, result: " hits | L | code\n------|------|------\n  12 |   68 | <div className=\"fixed inset-0 z-50\">\n   1 |   53 | function handleSubmit(e) {\n   1 |   54 |   e.preventDefault()\n   0 |   55 |   if (!title.trim()) return\n   1 |   56 |   onSave({ title, description, due_date, priority })\n   1 |   57 | }", failed: false },
      { type: "text", content: "I can see the form submission logic. Line 53-54 shows `handleSubmit` was called once, but let me check where the `onSave` callback leads to. Let me look at TasksListPage to see how the modal's onSave is handled." },
      { type: "tool", name: "SearchSources", input: { pattern: "handleCreateTask" }, result: "### https://sales-crm-1771358279.netlify.app/src/pages/TasksListPage.tsx\n hits | L | code\n------|------|------\n   1 |   73 | async function handleCreateTask(task) {", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/pages/TasksListPage.tsx", line: 73 }, result: " hits | L | code\n------|------|------\n   1 |   73 | async function handleCreateTask(task) {\n   1 |   83 |   const payload = { ...task, created_at: Date.now() }\n   1 |   92 |   setCreateModalOpen(false)\n   0 |   94 | // missing: fetch('/api/tasks', { method: 'POST', body: JSON.stringify(payload) })\n   1 |   95 | }", failed: false },
      { type: "text", content: "I found the issue! Looking at `handleCreateTask` (lines 73-93):\n\n1. Line 83 shows the function **was called once** (hit count: 1)\n2. Lines 84-90 build the payload object\n3. Line 92 closes the modal with `setCreateModalOpen(false)` (hit count: 1)\n4. **But there's no `fetch` call to actually save the task!**\n\nThe function closes the modal at the end, but it never makes a network request to persist the new task. The payload is built but never sent to the server.\n\n## Root Cause\n\nThe `handleCreateTask` function in `TasksListPage.tsx` is **missing the API call** to create the task. It:\n1. Builds the payload object ✓\n2. Closes the modal ✓\n3. **Does NOT call `fetch` to POST the task to the backend** ✗\n\nCompare this to line 65-70 where `fetch` is used to load deals — a similar pattern should exist after building the payload on line 92, but it's missing." },
    ],
  },
  {
    title: "Broken data import",
    subtitle: "CRM clients not added correctly",
    muxPlaybackId: "g8gJI73WhFi9019AXDaerLF00019T00YDvKCJvjWEEy8voM",
    transcript: [
      { type: "user", content: "After I import contacts the client names are wrong" },
      { type: "text", content: "I'll investigate why client names are wrong after importing contacts. Let me start by exploring the recording to understand what happened." },
      { type: "tool", name: "Timeline", input: null, result: "AssertionFailed: No absolute time at first checkpoint", failed: true },
      { type: "tool", name: "ConsoleMessages", input: null, result: "A total of 1 messages were logged to the console\n[console.info] (Point:4): \"%cDownload the React DevTools...\"", failed: false },
      { type: "tool", name: "NetworkRequest", input: null, result: "A total of 15 network requests were received\n\nPOST /.netlify/functions/clients — body: {\"name\":\"active\",\"type\":\"organization\",\"status\":\"TechCorp\"}\nPOST /.netlify/functions/clients — body: {\"name\":\"prospect\",\"type\":\"organization\",\"status\":\"Globex\"}\nPOST /.netlify/functions/clients — body: {\"name\":\"active\",\"type\":\"organization\",\"status\":\"Initech\"}", failed: false },
      { type: "text", content: "I can see there are multiple POST requests creating clients and GET requests fetching them. Let me search for import-related code and look at the POST request bodies to understand what's being sent." },
      { type: "tool", name: "NetworkRequest", input: { requestId: "75068.10" }, result: "A POST network request with ID 75068.10 was made to https://sales-crm-1771358279.netlify.app/.netlify/functions/clients\n\nRequest body:\n{\n  \"name\": \"active\",\n  \"type\": \"organization\",\n  \"status\": \"TechCorp Inc\"\n}\n\nResponse: 200 OK", failed: false },
      { type: "text", content: "I found the bug! The client names being sent are \"active\", \"prospect\", and \"active\" instead of actual company/contact names. Let me search for the import code to understand where this mapping goes wrong." },
      { type: "tool", name: "ListSources", input: { pathGlob: "**/*Client*" }, result: "11 source(s) found:\n- src/components/clients/ImportDialog.tsx\n- src/components/clients/ClientCard.tsx\n- src/pages/ClientsListPage.tsx", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/pages/ClientsListPage.tsx" }, result: " hits | L | code\n------|------|------\n     |  254 | // CSV columns: Name, Type, Status, Tags, Primary Contact, Open Deals\n   3 |  256 | const name = row[2] ?? ''       // reads Status column as name\n   3 |  257 | const type = row[1] ?? 'organization'\n   3 |  258 | const status = row[0] ?? 'prospect'  // reads Name column as status", failed: false },
      { type: "text", content: "**Found the bug!** The code comments on lines 256-258 reveal the issue clearly:\n\n```javascript\nconst name = row[2] ?? ''       // reads Status column as name\nconst type = row[1] ?? 'organization'\nconst status = row[0] ?? 'prospect'  // reads Name column as status\n```\n\n**The column mapping is incorrect.** The CSV columns are: `Name, Type, Status, Tags, Primary Contact, Open Deals`. However, the code reads `row[2]` (Status column) as the client **name**, and `row[0]` (Name column) as the **status**.\n\n**The fix:** Change to `name = row[0]` and `status = row[2]`." },
    ],
  },
  {
    title: "Sluggish page load",
    subtitle: "Dashboard takes too long to populate",
    muxPlaybackId: "JWKSQrDAM7NSh9GZ730000YtvBwEWptCNSneUCrTZ21kQ",
    transcript: [
      { type: "user", content: "The dashboard takes way too long to load" },
      { type: "text", content: "I'll investigate the dashboard loading performance by first understanding the timeline of events and looking for any delays or bottlenecks." },
      { type: "tool", name: "Timeline", input: null, result: "AssertionFailed: No absolute time at first checkpoint", failed: true },
      { type: "tool", name: "NetworkRequest", input: null, result: "A total of 16 network requests were received\n\nGET /.netlify/functions/clients?page=1&sort=updated_at — 412ms\nGET /.netlify/functions/clients?page=1&sort=updated_at — 398ms (duplicate!)\nGET /.netlify/functions/clients?page=1&sort=updated_at — 401ms (duplicate!)\nGET /.netlify/functions/clients/1 — 387ms\nGET /.netlify/functions/clients/2 — 401ms\nGET /.netlify/functions/clients/3 — 389ms\n...9 more individual client requests", failed: false },
      { type: "text", content: "I notice there are **duplicate requests** to the same clients endpoint and **9 individual client detail requests**. Let me get more details on the timing and look at the code to understand what's happening." },
      { type: "tool", name: "NetworkRequest", input: { requestId: "89400.7" }, result: "A GET network request with ID 89400.7 was made to /.netlify/functions/clients/3\nDuration: 389ms\nResponse: 200 OK\n{\"id\":3,\"name\":\"Initech\",\"type\":\"organization\",\"status\":\"active\"}", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/store/clientsSlice.ts" }, result: " hits | L | code\n------|------|------\n     |   *1 | import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'\n   6 |   15 | export const fetchClients = createAsyncThunk(\n   6 |   16 |   'clients/fetchAll',\n   6 |   17 |   async () => fetch('/.netlify/functions/clients?page=1&sort=updated_at').then(r => r.json())\n   6 |   18 | )", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/pages/ClientsListPage.tsx", line: 70 }, result: " hits | L | code\n------|------|------\n  26 |   29 | const [hydrating, setHydrating] = useState(false)\n   6 |   48 | const data = await loadClients()   // first fetch\n   6 |   54 | dispatch(fetchClients())           // second fetch (redundant!)\n   3 |   69 | for (const id of clientIds) {\n   3 |   70 |   const res = await fetch(`/.netlify/functions/clients/${id}`) // serial!\n   3 |   71 |   setClients(prev => [...prev, await res.json()])\n   3 |   72 | }", failed: false },
      { type: "text", content: "I've found the root cause. Let me confirm my understanding by looking at how the page loads and the useEffect." },
      { type: "tool", name: "ReadSource", input: { path: "src/pages/ClientsListPage.tsx", line: 85 }, result: " hits | L | code\n------|------|------\n   6 |   85 | useEffect(() => {\n   6 |   86 |   loadClients()           // fires on mount\n   6 |   87 |   dispatch(fetchClients()) // also fires on mount — same data!\n   6 |   88 | }, [])", failed: false },
      { type: "text", content: "Now I have a complete picture of the performance issue.\n\n## Root Cause Analysis\n\nThe dashboard is slow due to **two major issues** in `ClientsListPage.tsx`:\n\n### 1. Duplicate API Requests\nThe code makes **3 identical requests** to `/.netlify/functions/clients?page=1&sort=updated_at`. The `dispatch(fetchClients())` at line 54 is completely redundant — `loadClients` at line 48 already fetched the same data.\n\n### 2. N+1 Query Pattern\nAfter fetching the client list, the code loops through **each client** and fetches them **individually and sequentially** (lines 69-72). With 9 clients, that's 9 serial network round-trips after an already-redundant index call.\n\n**Fix:** Remove the redundant `fetchClients` dispatch, and replace the serial `for` loop with `Promise.all()` to fetch client details in parallel." },
    ],
  },
  {
    title: "Flashing content",
    subtitle: "Empty deals list shown briefly",
    muxPlaybackId: "wZfgg01KFpLucarzVWKjmeFb3lcQuyVeeHQ00Y02It02cFw",
    transcript: [
      { type: "user", content: "When adding a new deal the deals list flashed as empty before updating" },
      { type: "text", content: "I'll investigate why the deals list flashes empty when adding a new deal. Let me start by exploring the timeline and React rendering behavior to understand what's happening." },
      { type: "tool", name: "Timeline", input: null, result: "AssertionFailed: No absolute time at first checkpoint", failed: true },
      { type: "tool", name: "ReactRenders", input: null, result: "No React renders found in the specified range.", failed: false },
      { type: "tool", name: "ConsoleMessages", input: null, result: "A total of 1 messages were logged to the console\n[console.info] (Point:3): \"%cDownload the React DevTools...\"", failed: false },
      { type: "text", content: "Let me search for deal-related code and look at the React components to understand the structure." },
      { type: "tool", name: "ReactComponents", input: null, result: "Component:Provider:1 rendered at Point:Provider:1\n  Component:BrowserRouter:1\n    Component:App:1\n      Component:ClientDetailPage:1\n        Component:DealsSection:1 (rendered 8 times)\n          deals.length === 0: true (hits: 8)\n          \"No deals\" empty state: rendered 30 times", failed: false },
      { type: "text", content: "I can see a `DealsSection` and `AddDealModal` component. Line 31-32 in DealsSection.tsx shows that when `deals.length === 0`, it shows \"No deals\". Let me look at the DealsSection component rendering and the state management to understand the flash." },
      { type: "tool", name: "ReadSource", input: { path: "src/components/client-detail/DealsSection.tsx" }, result: " hits | L | code\n------|------|------\n  42 |   31 | if (deals.length === 0)\n  30 |   32 |   return <div>No deals</div>\n   8 |   40 | return <DealsList deals={deals} />", failed: false },
      { type: "tool", name: "ReadSource", input: { path: "src/pages/ClientDetailPage.tsx", line: 120 }, result: " hits | L | code\n------|------|------\n   1 |  133 | if (res.ok) {\n   1 |  134 |   setAddDealOpen(false)\n   1 |  136 |   setDeals([])        // <-- clears deals immediately!\n   1 |  137 |   loadClientData()    // async refetch — takes ~400ms\n   1 |  138 | }", failed: false },
      { type: "text", content: "**Found the bug!**\n\nLooking at line 136 in `handleAddDeal`:\n\n```javascript\nif (res.ok) {\n  setAddDealOpen(false)\n  setDeals([])        // <-- Line 136: This clears the deals array!\n  loadClientData()    // <-- This reloads data, but there's a delay\n}\n```\n\nThe code explicitly sets `deals` to an empty array immediately after successfully adding a deal, *before* `loadClientData()` finishes. During the network round-trip (~400ms), the component re-renders with an empty array, causing the \"No deals\" empty state to flash.\n\n## Root Cause\n\nIn `ClientDetailPage.tsx` at **line 136**, `setDeals([])` clears the list before fresh data arrives. The `loadClientData()` call is async — so there's a visible gap where `deals === []`.\n\n**Fix:** Remove `setDeals([])` on line 136. The `loadClientData()` refetch will update the list once it completes — no need to clear it first." },
    ],
  },
];

// --- Sub-components ---

function ToolCallItem({ event }: { event: Extract<TranscriptEvent, { type: "tool" }> }) {
  const [open, setOpen] = useState(false);
  const resultPreview = event.result?.substring(0, 60) ?? "Completed";

  return (
    <div className="my-0.5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-left text-xs transition-all hover:border-border/80 hover:bg-surface-hover cursor-pointer"
      >
        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
          {event.failed ? (
            <span className="text-xs text-red-400">✗</span>
          ) : (
            <span className="text-xs text-green-400">✓</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <span className="block font-mono font-medium text-foreground text-[11px]">{event.name}</span>
          <span className="mt-0.5 line-clamp-1 text-[10px] text-muted">{resultPreview}</span>
        </div>
        <span className="ml-auto flex-shrink-0 text-muted text-[10px]">{open ? "▾" : "▸"}</span>
      </button>

      {open && (
        <div className="mt-1 rounded-lg border border-border bg-surface-hover p-3 text-xs space-y-3">
          {event.input != null && (
            <div>
              <span className="font-semibold text-muted uppercase tracking-wider text-[10px]">Input</span>
              <pre className="mt-1 overflow-x-auto whitespace-pre-wrap rounded border border-border bg-background p-2 font-mono text-[10px] text-muted leading-relaxed">
                {JSON.stringify(event.input, null, 2)}
              </pre>
            </div>
          )}
          {event.result != null && (
            <div>
              <span className="font-semibold text-muted uppercase tracking-wider text-[10px]">Result</span>
              <pre className="mt-1 max-h-48 overflow-auto whitespace-pre-wrap rounded border border-border bg-background p-2 font-mono text-[10px] text-muted leading-relaxed">
                {event.result}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SimpleMarkdown({ text }: { text: string }) {
  // Render basic markdown: code blocks, inline code, bold, headings
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      // Code block
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="my-2 overflow-x-auto rounded border border-border bg-background p-2 font-mono text-[10px] text-muted leading-relaxed whitespace-pre-wrap">
          {codeLines.join("\n")}
        </pre>
      );
    } else if (line.startsWith("### ")) {
      elements.push(<p key={i} className="font-semibold text-foreground text-xs mt-3 mb-1">{line.slice(4)}</p>);
    } else if (line.startsWith("## ")) {
      elements.push(<p key={i} className="font-semibold text-foreground text-xs mt-3 mb-1">{line.slice(3)}</p>);
    } else if (line.startsWith("# ")) {
      elements.push(<p key={i} className="font-semibold text-foreground text-xs mt-2 mb-1">{line.slice(2)}</p>);
    } else if (line === "") {
      elements.push(<div key={i} className="h-1.5" />);
    } else {
      // Inline formatting
      elements.push(
        <p key={i} className="text-xs leading-relaxed text-muted">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }
  return <div className="space-y-0.5">{elements}</div>;
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("`")) {
      parts.push(
        <code key={match.index} className="rounded border border-border bg-surface-hover px-1 py-0.5 font-mono text-[10px] text-foreground">
          {token.slice(1, -1)}
        </code>
      );
    } else {
      parts.push(<strong key={match.index} className="font-semibold text-foreground">{token.slice(2, -2)}</strong>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function ChatTranscript({ events }: { events: TranscriptEvent[] }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-xs font-semibold text-foreground">Chat transcript with Replay MCP</h3>
      </div>

      <div className="flex flex-col gap-2">
        {events.map((event, i) => {
          if (event.type === "user") {
            return (
              <div key={i} className="ml-auto w-fit max-w-[70%]">
                <div className="rounded-lg bg-surface-hover px-4 py-3 text-xs leading-relaxed text-foreground shadow-sm border border-border">
                  {event.content}
                </div>
              </div>
            );
          }
          if (event.type === "text") {
            return (
              <div key={i} className="mr-auto w-[85%]">
                <div className="px-1 py-1 text-xs leading-relaxed">
                  <SimpleMarkdown text={event.content} />
                </div>
              </div>
            );
          }
          if (event.type === "tool") {
            return <ToolCallItem key={i} event={event} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

// --- Main Component ---

export default function BugToFixTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-fade {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>

      <p className="text-sm font-medium uppercase tracking-widest text-brand-pink text-center mb-4">
        Replay MCP in action
      </p>
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
        From bug to fix — without touching DevTools
      </h2>
      <p className="text-muted text-center max-w-2xl mx-auto mb-16">
        Your coding agent uses Replay MCP to time-travel through the recording and
        deliver the root cause — while you do something else.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Left: tab selectors */}
        <div className="md:w-[280px] shrink-0 flex flex-col gap-2">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.title}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setActiveTab(index)}
                className={`group relative text-left rounded-xl px-5 py-4 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-pink/10 dark:bg-brand-pink/5 border border-transparent"
                    : "border border-transparent hover:border-border"
                }`}
              >
                <div
                  className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200 ${
                    isActive ? "bg-brand-pink" : "bg-border"
                  }`}
                />
                <div className="pl-3">
                  <h3
                    className={`text-sm font-semibold mb-0.5 transition-colors ${
                      isActive ? "text-foreground" : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p className="text-xs text-muted/70 leading-relaxed">{tab.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: video + chat transcript */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Video */}
          <div
            key={`video-${activeTab}`}
            className="chat-fade rounded-2xl border border-border bg-black overflow-hidden"
            style={{ aspectRatio: "554/327" }}
          >
            <video
              key={tabs[activeTab].muxPlaybackId}
              src={`https://stream.mux.com/${tabs[activeTab].muxPlaybackId}/high.mp4`}
              poster={`https://image.mux.com/${tabs[activeTab].muxPlaybackId}/thumbnail.jpg?time=0&width=1108`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Chat transcript */}
          <div
            key={`chat-${activeTab}`}
            className="chat-fade rounded-2xl border border-border bg-surface overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-hover/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <span className="text-xs text-muted ml-2 font-mono">replay-mcp — agent session</span>
            </div>

            <div className="p-5 max-h-96 overflow-y-auto">
              <ChatTranscript events={tabs[activeTab].transcript} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
