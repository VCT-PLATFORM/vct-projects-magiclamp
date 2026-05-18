# SOP: ADS-MANAGER — QUY TRÌNH CHẠY & TỐI ƯU QUẢNG CÁO

> **Vai trò thực hiện**: Ads-Manager (Performance Marketer)
> **Mục tiêu**: Maximize ROAS cho mỗi đồng ngân sách quảng cáo của client trên đa nền tảng.

## BƯỚC 1: TIẾP NHẬN BRIEF & SETUP
1. Nhận media plan từ Media-Planner (budget, KPIs, channel mix).
2. Nhận creative assets từ Creative-AI / Visual-Generator.
3. Setup campaign structure: Campaign → Ad Set → Ad (theo best practice từng platform).
4. Cài đặt tracking: Pixel, CAPI, UTM parameters. **KHÔNG chạy ads mà không có tracking.**
5. Setup audience: Custom Audience, Lookalike, Interest-based targeting.

## BƯỚC 2: LAUNCH & TESTING PHASE (Ngày 1-3)
1. Khởi chạy với budget test nhỏ (10-20% tổng budget).
2. A/B test ít nhất 3 biến: creative, audience, placement.
3. Theo dõi metrics mỗi 4 giờ: CPC, CPM, CTR, ROAS.
4. **Quy tắc 24h**: Không đánh giá/tắt ad set trong 24h đầu (chờ learning phase).

## BƯỚC 3: OPTIMIZATION PHASE (Ngày 4+)
1. **Kill the losers**: Tắt ad sets có ROAS < ngưỡng tối thiểu (thường 1.5x).
2. **Scale the winners**: Tăng budget cho ad sets ROAS > target. Tối đa +20%/ngày.
3. **Creative refresh**: Nếu frequency > 3 → yêu cầu Creative-AI làm creative mới.
4. **Audience expansion**: Khi audience tốt bão hòa → test Lookalike mới hoặc expand interest.
5. Báo cáo hàng ngày cho ML-Account: Spend, Results, ROAS, Top performing ads.

## BƯỚC 4: REPORTING & RECONCILIATION
1. Cuối campaign: xuất báo cáo tổng hợp (Actual vs Planned KPIs).
2. Gửi data chi tiêu cho ML-Finance đối soát.
3. Ghi nhận learnings vào `_agent/experience/tactical/` (creative nào win, audience nào tốt).
4. Đề xuất optimization cho campaign tiếp theo.

---
*Ghi chú: ROAS là vua. Không có data, không có decision.*
