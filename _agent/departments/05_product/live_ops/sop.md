# SOP: LIVE-OPS — QUY TRÌNH ĐIỀU PHỐI LIVESTREAM

> **Vai trò thực hiện**: Live-Ops (Livestream Coordinator)
> **Mục tiêu**: Đảm bảo mỗi phiên Live diễn ra suôn sẻ, maximize GMV, và báo cáo chính xác.

## BƯỚC 1: PRE-LIVE (H-24 đến H-2)
1. **H-24**: Xác nhận lịch với Idol (qua ML-HR) và Studio (qua ML-Studio).
2. **H-12**: Nhận danh sách sản phẩm từ Ecom-Agent → setup giỏ hàng trên sàn (giá live, voucher, combo).
3. **H-6**: Nhận kịch bản phiên Live từ Creative-AI (flow sản phẩm, điểm nhấn, flash sale timing).
4. **H-2**: Checklist kỹ thuật với ML-Studio:
   - [ ] Camera hoạt động, góc quay đúng
   - [ ] Mic + audio test OK
   - [ ] Lighting setup đúng mood
   - [ ] Internet speed > 20Mbps (cả upload)
   - [ ] Overlay / greenscreen ready
   - [ ] Sản phẩm demo bày sẵn
   - [ ] Backup device sẵn sàng

## BƯỚC 2: DURING LIVE (Real-time)
1. Monitor metrics real-time: viewers, orders, GMV, top products.
2. Điều chỉnh flow nếu cần: sản phẩm A không bán → chuyển sản phẩm B.
3. Push voucher/flash sale đúng timing theo kịch bản.
4. Monitor comments: trả lời câu hỏi, forward phàn nàn cho Ecom-Agent.
5. Cảnh báo nếu technical issues: lag, mất tiếng, camera out of focus.
6. **Nếu Crisis xảy ra** (comment tiêu cực viral) → ngay lập tức notify Crisis-Response.

## BƯỚC 3: POST-LIVE (Trong 1 giờ sau khi kết thúc)
1. Xuất Session Report:
   | Metric | Value |
   |--------|-------|
   | Duration | HH:MM |
   | Peak Viewers | N |
   | Total Orders | N |
   | GMV (trước đối soát) | Amount |
   | Top 3 Products | List |
   | Issues | List |
2. Gửi Commission data cho ML-Finance (theo hợp đồng Idol: % GMV hoặc fixed fee).
3. Gửi Session Report cho ML-Account → forward cho Client.

## BƯỚC 4: POST-MORTEM & IMPROVEMENT
1. So sánh GMV thực tế vs target.
2. Phân tích: sản phẩm nào bán tốt nhất? Thời điểm nào viewers peak? Hook nào hiệu quả?
3. Ghi nhận vào `_agent/experience/tactical/live_sessions/`.
4. Đề xuất cải thiện cho phiên Live tiếp theo.

---
*Ghi chú: 80% thành công nằm ở chuẩn bị. Không có checklist = không có Live.*
