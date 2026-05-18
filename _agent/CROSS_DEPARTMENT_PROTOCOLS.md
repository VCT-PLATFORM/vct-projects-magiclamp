# 🔗 CROSS-DEPARTMENT PROTOCOLS — Magic Lamp Media

> **Version**: V1.0 | **Effective**: 2026-05-18
> **Purpose**: Standardize inter-department communication and handoff procedures.

---

## I. PROTOCOL REGISTRY

### PROTO-001: Client Onboarding Flow
```
03_growth_sales/ml_account → 02_legal_finance/ml_legal → 02_legal_finance/ml_finance → 01_executive/jen
```
- **Trigger**: New client brief received
- **Context Required**: Client name, budget, objectives, timeline
- **Output**: Signed contract + Project_MOC.md + CLIENT_ID assigned

### PROTO-002: Content Production Pipeline
```
03_growth_sales/ml_account → 06_media_production/creative_ai → 06_media_production/visual_generator → 04_operations_hr/ml_studio → 06_media_production/editor_assistant → 03_growth_sales/ml_account
```
- **Trigger**: Approved brief from client
- **Context Required**: Brand guidelines, reference content, target platform
- **Output**: Final deliverable + performance tracking setup

### PROTO-003: Campaign Launch
```
03_growth_sales/ml_strategy → 06_media_production/creative_ai → 03_growth_sales/ads_manager → 03_growth_sales/seo_specialist → 03_growth_sales/social_growth
```
- **Trigger**: Content approved by client
- **Context Required**: Budget, target audience, KPIs
- **Output**: Live campaign + real-time dashboard

### PROTO-004: Livestream Operations
```
05_product/live_ops → 04_operations_hr/ml_studio → 06_media_production/creative_ai → 03_growth_sales/ads_manager → 02_legal_finance/ml_finance
```
- **Trigger**: Livestream scheduled
- **Context Required**: Product list, Idol schedule, studio availability
- **Output**: Session report + revenue reconciliation

### PROTO-005: Crisis Management
```
07_brand_protection/crisis_response → 03_growth_sales/ml_strategy → 03_growth_sales/ml_account → 01_executive/jen → CHAIRMAN
```
- **Trigger**: Negative sentiment spike detected
- **Context Required**: Source, severity, affected client/brand
- **Output**: Response plan + execution report

### PROTO-006: IP Violation Response
```
07_brand_protection/ip_guard → 02_legal_finance/ml_legal → 03_growth_sales/ml_account → CHAIRMAN
```
- **Trigger**: Copyright infringement detected
- **Context Required**: Violation evidence, platform, infringing party
- **Output**: Takedown request + legal documentation

### PROTO-007: Talent Acquisition
```
04_operations_hr/ml_hr → 02_legal_finance/ml_legal → 01_executive/jen → CHAIRMAN
```
- **Trigger**: New Idol/KOC candidate
- **Context Required**: Portfolio, social metrics, terms
- **Output**: Signed contract + onboarding checklist

### PROTO-008: Financial Audit
```
08_quality_audit/financial_auditor → 02_legal_finance/ml_finance → 01_executive/jen → CHAIRMAN
```
- **Trigger**: Monthly/Quarterly audit schedule
- **Context Required**: Transaction logs, revenue data
- **Output**: Audit report + HERA scores

---

## II. HANDOFF RULES

1. **Structured Context**: Every handoff MUST include `{ task_id, client_id, dept_from, dept_to, context_summary, deadline }`.
2. **Acknowledgment**: Receiving agent MUST acknowledge within 5 minutes (simulated) or task auto-escalates.
3. **Quality Gate**: Dept Lead reviews output before cross-department handoff.
4. **Fail-Fast**: If receiving agent detects insufficient input, reject immediately with specific requirements.
5. **Audit Trail**: Every handoff logged to `_agent/memory/handoff_log.json`.

---

## III. ESCALATION MATRIX

| Level | Condition | Escalate To |
|:------|:----------|:------------|
| L1 | Task blocked > 1 hour | Department Lead |
| L2 | Cross-dept conflict | Jen (Chief of Staff) |
| L3 | Budget/Legal/Brand impact | Chairman |
| L4 | System failure | SRE + Chairman |

---
> *Magic Lamp Cross-Department Protocols V1.0 — Seamless collaboration, zero friction.*
