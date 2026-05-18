# 🏗️ SYSTEM DESIGN PLAYBOOK — Magic Lamp AI

> **Version**: V1.0 | **Purpose**: Architecture decisions and design patterns for the AI Media House.

---

## I. CORE ARCHITECTURE PRINCIPLES

1. **Antigravity-Native**: Leverage Antigravity AI as the LLM engine. No external API costs.
2. **MCP-First**: All inter-agent communication through Model Context Protocol.
3. **File-as-Database**: Use filesystem (Markdown/JSON/YAML) as primary data store.
4. **Stateless Agents**: Agents read from Memory/Experience Library, never hold local state.
5. **Client Isolation**: Strict data partitioning by CLIENT_ID.

## II. SYSTEM LAYERS

```
┌──────────── LAYER 0: MCP INFRASTRUCTURE ──────────────┐
│ Agent Registry │ MCP Servers (4) │ Scoring Engine   │
│ (A2A Discovery)│ Business Domain  │ HERA Score Calc  │
│ 23 Agent Cards │ Experience Lib   │ Credit Assignment│
│                │ Knowledge Vault  │ RoPE Triggers    │
└────────────────────────────────────────────────────────┘
                    │         │         │
                    ▼         ▼         ▼
┌──────────── LAYER 1: ORCHESTRATOR (JEN ML) ───────────┐
│ 5-Signal Classify → DAG Construct → MCP Dispatch      │
│ Topology Planning → Multi-Model Select → Synthesis    │
└────────────────────────────────────────────────────────┘
                    │         │         │
                    ▼         ▼         ▼
┌──────────── LAYER 1.5: 8 DEPARTMENTS ─────────────────┐
│ Exec│Legal│Growth│Ops│Product│Media│Brand│QA          │
│ Jen │CFO  │CMO   │COO│VP Prod│Lead │Guard│Auditor     │
└────────────────────────────────────────────────────────┘
                    │         │         │
                    ▼         ▼         ▼
┌──────────── LAYER 2: EXPERIENCE LIBRARY ──────────────┐
│ Tactical (Trajectories)│Strategic (Patterns)│Structural│
└────────────────────────────────────────────────────────┘
                    │         │         │
                    ▼         ▼         ▼
┌──────────── LAYER 3: 23 EXECUTION AGENTS ─────────────┐
│ SOUL.md + sop.md + config.yaml + MEMORY.md            │
│ MCP Client → Consume tools                            │
│ A2A Card → Register capabilities                      │
└────────────────────────────────────────────────────────┘
```

## III. DESIGN PATTERNS

### Pattern 1: DAG Task Decomposition
Complex tasks are decomposed into a Directed Acyclic Graph:
```
Chairman Request → Jen classifies → Build DAG → Execute in parallel where possible → Synthesize
```

### Pattern 2: Experience-First Resolution
Before executing any task, agents MUST:
1. Check Experience Library cache (Rule #15: CACHE BEFORE QUERY)
2. Search for similar past trajectories
3. Only if no match → execute from scratch

### Pattern 3: Circuit Breaker
```
Attempt 1 → Fail → Attempt 2 → Fail → Attempt 3 → Fail → CIRCUIT OPEN → Failover/Alert
```

### Pattern 4: Back-Pressure
Agent receiving > 3 concurrent tasks → Reject with back-pressure signal → Jen re-routes.

### Pattern 5: Sharded Knowledge
Each agent loads ONLY knowledge shards from their domain:
- `ml_finance` → `knowledge/clients/*/finance/`
- `creative_ai` → `knowledge/clients/*/content/`
- `seo_specialist` → `knowledge/clients/*/seo/`

## IV. DATA FLOW

```
External Input (Brief/Webhook/Email)
    → Inbox Processing (Gateway)
    → Jen Classification (5-Signal)
    → Agent Dispatch (MCP)
    → Agent Execution (with Experience Library)
    → Output to Outbox
    → Delivery (Client/Platform/Internal)
    → Experience Capture (Trajectory)
```

## V. SECURITY MODEL

| Level | Access | Agents |
|:------|:-------|:-------|
| L4 (Sandbox) | No external calls without approval | All agents default |
| L3 (Approval) | Execute with Chairman gate | ML-Legal, ML-Finance |
| L2 (Execute+Report) | Auto-execute, report after | Ads-Manager, Live-Ops |
| L1 (Autonomous) | Full autonomy | Creative-AI, SEO, Research |

---
> *System Design Playbook V1.0 — Architecture is destiny.*
