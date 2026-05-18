# 🧭 ROUTING INDEX — Magic Lamp AI Dynamic Topology (V2.0-MCP)

> **Mục đích**: Định nghĩa luồng phối hợp linh hoạt giữa các phòng ban Media & Quản trị.
> **Upgrade V2.0**: 5-Signal DAG Classification + Department-based dispatch + MCP routing.

---

## I. 5-SIGNAL CLASSIFICATION ENGINE

Mỗi incoming task được phân loại qua 5 tín hiệu:

| Signal | Description | Values |
|:-------|:------------|:-------|
| **Urgency** | Mức độ khẩn cấp | CRITICAL / HIGH / MEDIUM / LOW |
| **Domain** | Lĩnh vực nghiệp vụ | CONTENT / ADS / FINANCE / LEGAL / HR / ECOM / LIVE / BRAND |
| **Complexity** | Độ phức tạp | SIMPLE (1 agent) / MODERATE (2-3 agents) / COMPLEX (DAG) |
| **Client_ID** | Mã khách hàng | NULL (internal) / CLIENT_xxx |
| **Dept_Affinity** | Phòng ban chính | 01-08 |

---

## II. DEFAULT TOPOLOGIES (Luồng công việc chuẩn)

| Loại công việc | Topology (DAG) | Departments |
|:---------------|:---------------|:------------|
| **Marketing Toàn diện** | `market_researcher` → `ml_strategy` → `brand_architect` → `media_planner` → `creative_ai` → `ads_manager` | 03, 06 |
| **Sản xuất AI-Hybrid** | `creative_ai` → `visual_generator` → `ml_studio` → `editor_assistant` | 06, 04 |
| **Xử lý Khủng hoảng** | `crisis_response` → `ml_strategy` → `ml_account` → `jen` → CHAIRMAN | 07, 03, 01 |
| **Bảo vệ Bản quyền** | `ip_guard` → `ml_legal` → `ml_account` | 07, 02, 03 |
| **Sản xuất Video** | `ml_account` → `creative_ai` → `ml_studio` → `editor_assistant` → `ml_account` | 03, 06, 04 |
| **Xử lý Feedback** | `ml_account` → `creative_ai` → `editor_assistant` → Client | 03, 06 |
| **Chiến dịch Live** | `ml_strategy` → `creative_ai` → `ml_studio` → `live_ops` → `ads_manager` | 03, 06, 04, 05 |
| **Tăng trưởng SEO** | `seo_specialist` → `creative_ai` → `social_growth` | 03, 06 |
| **Quản trị Sàn** | `ecom_agent` → `ads_manager` → `ml_finance` | 05, 03, 02 |
| **Tuyển Idol** | `ml_hr` → `ml_legal` → `jen` → CHAIRMAN | 04, 02, 01 |
| **Tài chính/Thuế** | `ml_finance` → `ml_legal` → CHAIRMAN | 02 |
| **Hợp đồng Khách** | `ml_account` → `ml_legal` → `ml_finance` → `jen` | 03, 02, 01 |
| **Kiểm toán Nội bộ** | `financial_auditor` → `ml_finance` → `jen` → CHAIRMAN | 08, 02, 01 |

---

## III. DEPARTMENT ROUTING TABLE

| Dept ID | Department | Lead Agent | Agents | Domain Keywords |
|:--------|:-----------|:-----------|:-------|:----------------|
| 01 | Executive | jen | jen | strategy, planning, escalation |
| 02 | Legal & Finance | ml_finance | ml_finance, ml_legal | contract, tax, budget, legal, audit |
| 03 | Growth & Sales | ml_account | ml_account, ml_strategy, ads_manager, seo_specialist, social_growth, media_planner, market_researcher, brand_architect | marketing, ads, seo, growth, client, campaign |
| 04 | Operations & HR | ml_hr | ml_hr, ml_admin, ml_studio | hiring, idol, studio, equipment, schedule |
| 05 | Product | ecom_agent | ecom_agent, live_ops | shopee, lazada, tiktok shop, livestream, gmv |
| 06 | Media Production | creative_ai | creative_ai, visual_generator, editor_assistant | script, video, design, content, storyboard |
| 07 | Brand Protection | ip_guard | ip_guard, crisis_response | copyright, crisis, PR, takedown |
| 08 | Quality & Audit | financial_auditor | financial_auditor | audit, hera, scoring, compliance |

---

## IV. DEPARTMENT QUALITY GATES

| Dept Lead | Chịu trách nhiệm | Gatekeeper cho |
|:----------|:------------------|:---------------|
| **Chairman** | Executive | Quyết định chiến lược & Ngân sách lớn |
| **ML-Account** | Growth/Sales | Feedback & Hài lòng khách hàng |
| **ML-Finance** | Legal/Finance | Tính chính xác của số liệu & Pháp lý HĐ |
| **Creative-AI** | Media Production | Chất lượng kịch bản & Viral Factor |
| **ML-Studio** | Operations | Sẵn sàng của thiết bị & Studio |
| **ML-HR** | Operations/HR | Nhân sự Idol & Vận hành Studio |
| **Ecom-Agent** | Product | Gian hàng & Hiệu suất Live |
| **Financial-Auditor** | Quality | HERA Scores & Compliance |

---

## V. HANDOFF RULES (V2.0 Enhanced)

1. **Context First**: Khi giao việc cho Agent tiếp theo, phải kèm theo `task_id`, `client_id`, `context_summary`, `deadline`.
2. **Deadline-driven**: Mọi task trong luồng phải có thời gian hoàn thành dự kiến.
3. **Feedback Loop**: Nếu bước sau thấy dữ liệu bước trước không đạt → Fail-fast, trả lại ngay.
4. **MCP Protocol**: Mọi handoff PHẢI sử dụng structured TaskContext qua MCP.
5. **Audit Trail**: Mọi handoff được log vào `_agent/memory/handoff_log.json`.
6. **Acknowledgment**: Agent nhận task PHẢI acknowledge trong vòng 5 phút hoặc auto-escalate.

---
> *Routing Index V2.0-MCP — Intelligence flows where it's needed.*
