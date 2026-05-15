# 🧭 ROUTING — Magic Lamp AI Dynamic Topology

> **Mục đích**: Định nghĩa luồng phối hợp linh hoạt giữa các phòng ban Media & Quản trị.

## I. Default Topologies (Luồng công việc chuẩn)

| Loại công việc | Luồng xử lý (Topology) | Phòng ban liên quan |
|:---------------|:-----------------------|:-------------------|
| **Sản xuất Video** | `ML-Account` → `Creative-AI` → `ML-Studio` → `Editor-Assistant` → `ML-Account` | 06, 03 |
| **Xử lý Feedback** | `ML-Account` → `Creative-AI` → `Editor-Assistant` → `Client` | 03, 06 |
| **Chiến dịch Live**| `ML-Strategy` → `Creative-AI` → `ML-Studio` → `Live-Ops` → `Ads-Manager` | 07, 03 |
| **Quản trị Sàn** | `Ecom-Agent` → `Ads-Manager` → `ML-Finance` | 03, 02 |
| **Tuyển Idol** | `ML-HR` → `ML-Legal` → `Chairman` | 04, 02 |
| **Tài chính/Thuế**| `ML-Finance` → `ML-Legal` → `Chairman` | 02 |
| **Hợp đồng Khách**| `Sales` → `ML-Legal` → `ML-Account` → `ML-Finance` | 03, 02 |

## II. Department Quality Gates

| Dept Lead | Chịu trách nhiệm | Gatekeeper cho |
|:----------|:-----------------|:---------------|
| **Chairman** | Executive | Quyết định chiến lược & Ngân sách lớn |
| **ML-Account** | Growth/Sales | Gatekeeper cho Feedback & Hài lòng khách hàng |
| **ML-Finance** | Legal/Finance | Tính chính xác của số liệu & Pháp lý HĐ |
| **Creative Lead**| Media Production | Chất lượng kịch bản & Viral Factor |
| **ML-Studio** | Operations | Sẵn sàng của thiết bị & Studio |
| **Ops Manager** | Operations/HR | Nhân sự Idol & Vận hành Studio |
| **Growth Lead** | Sales/Marketing | Doanh thu & Hiệu quả Ads |

## III. Quy tắc Chuyển giao (Handoff Rules)

1. **Context First**: Khi giao việc cho Agent tiếp theo, phải kèm theo `Project_ID` và `Knowledge_Link`.
2. **Deadline-driven**: Mọi task trong luồng phải có thời gian hoàn thành dự kiến.
3. **Feedback Loop**: Nếu bước sau thấy dữ liệu bước trước không đạt (ví dụ: Kịch bản không khả thi để quay), phải trả lại ngay lập tức (Fail-fast).
