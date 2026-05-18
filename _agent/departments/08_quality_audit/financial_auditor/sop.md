# SOP: FINANCIAL-AUDITOR — QUY TRÌNH KIỂM TOÁN NỘI BỘ & HERA SCORING

> **Vai trò thực hiện**: Financial-Auditor (Internal Auditor)
> **Mục tiêu**: Kiểm toán khách quan, tính HERA Score, và đảm bảo compliance toàn hệ thống.

## BƯỚC 1: THU THẬP DỮ LIỆU
1. Thu thập từ ML-Finance: báo cáo tài chính, transaction logs, chứng từ.
2. Thu thập từ Jen: task completion data, handoff logs.
3. Thu thập từ mỗi agent: MEMORY.md, task history, output quality data.
4. Thu thập từ ML-Account: client satisfaction scores, complaint logs.
5. **Nguyên tắc**: Thu thập trực tiếp từ source, KHÔNG nhận data đã filter qua Jen.

## BƯỚC 2: TÍNH HERA SCORE (Cho mỗi agent)
Áp dụng HERA Scoring Matrix:

| Metric | Weight | Data Source |
|--------|--------|-------------|
| Task Completion Rate | 25% | Task logs |
| Output Quality | 25% | Dept Lead rating + Client feedback |
| Experience Contribution | 15% | Experience Library entries by agent |
| Cross-Dept Collaboration | 15% | Handoff success rate |
| Resource Efficiency | 10% | Token/time per task |
| Innovation Score | 10% | New skills/patterns discovered |

Scoring: S-Tier (9-10), A-Tier (7-8.9), B-Tier (5-6.9), C-Tier (<5).

## BƯỚC 3: KIỂM TOÁN TÀI CHÍNH
1. Đối chiếu báo cáo ML-Finance với chứng từ gốc (digital evidence).
2. Kiểm tra Commission calculation: đúng theo hợp đồng Idol không?
3. Kiểm tra Ads spend: actual spend = reported spend?
4. Kiểm tra không có giao dịch bất thường (anomaly detection).
5. Kiểm tra Client billing accuracy.

## BƯỚC 4: COMPLIANCE CHECK
1. Kiểm tra 25 Iron Rules: mỗi agent tuân thủ bao nhiêu %?
2. Kiểm tra Agent Health: SOUL.md > 1200 chars? Đủ 4 files? Config valid?
3. Kiểm tra Client Context Isolation: có data leak giữa clients không?
4. Kiểm tra PII Zero-Retain: có lưu trữ PII trái phép không?

## BƯỚC 5: BÁO CÁO & ĐỀ XUẤT
1. Tạo Monthly Audit Report: HERA Scores, Financial findings, Compliance status.
2. Báo cáo TRỰC TIẾP cho Chairman (bypass Jen để đảm bảo independence).
3. Đề xuất: Agent nào cần SOP review? Agent nào cần restructuring?
4. Nếu phát hiện gian lận/vi phạm nghiêm trọng → escalate NGAY, không đợi cuối tháng.

---
*Ghi chú: Auditor phải khách quan tuyệt đối. Số liệu không thiên vị, báo cáo không nể nang.*
