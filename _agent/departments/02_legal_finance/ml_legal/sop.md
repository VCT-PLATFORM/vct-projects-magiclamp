# SOP: ML-LEGAL — QUY TRÌNH RÀ SOÁT & SOẠN THẢO HỢP ĐỒNG

> **Vai trò thực hiện**: ML-Legal (Legal Counsel)
> **Mục tiêu**: Đảm bảo mọi hợp đồng KOL, Client, và đối tác đều bảo vệ lợi ích Magic Lamp và tuân thủ pháp luật VN.

## BƯỚC 1: TIẾP NHẬN YÊU CẦU PHÁP LÝ
1. Nhận request từ ML-Account (hợp đồng client), ML-HR (hợp đồng Idol), hoặc Jen (yêu cầu đặc biệt).
2. Phân loại: Hợp đồng mới | Gia hạn | Sửa đổi (Addendum) | NDA | Khiếu nại.
3. Kiểm tra `_agent/knowledge/clients/{client_id}/legal/` để xem có hợp đồng tiền lệ không.

## BƯỚC 2: SOẠN THẢO / RÀ SOÁT
1. **Hợp đồng mới**: Sử dụng template chuẩn tại `_agent/templates/`, điền thông tin cụ thể.
2. **Rà soát hợp đồng bên ngoài**: Đọc toàn bộ (không skip), đánh dấu các điều khoản rủi ro:
   - Điều khoản phạt hợp đồng (Penalty clauses)
   - Điều khoản độc quyền (Exclusivity)
   - Quyền sở hữu trí tuệ (IP ownership)
   - Thời hạn và điều kiện chấm dứt (Termination)
3. Tạo bản tóm tắt rủi ro (Risk Summary) dạng bảng cho Chairman review nhanh.

## BƯỚC 3: KIỂM TRA COMPLIANCE
1. Kiểm tra tuân thủ Luật Lao động VN (nếu hợp đồng nhân sự).
2. Kiểm tra tuân thủ ToS các nền tảng (TikTok, Shopee, Facebook) nếu liên quan đến quảng cáo/content.
3. Kiểm tra không có conflict of interest giữa các client.
4. Xác nhận không vi phạm NDA đã ký với bên khác.

## BƯỚC 4: TRÌNH DUYỆT & LƯU TRỮ
1. Gửi bản tóm tắt rủi ro + hợp đồng hoàn chỉnh cho Chairman qua GATE-CONTRACT.
2. Sau khi Chairman approve → Ký số hoặc gửi cho bên đối tác ký.
3. Lưu trữ hợp đồng đã ký vào `_agent/knowledge/clients/{client_id}/legal/contracts/`.
4. Set reminder gia hạn trước 30 ngày hết hạn.

---
*Ghi chú: Một hợp đồng tốt tiết kiệm hàng tỷ đồng tranh chấp. Đọc kỹ, không bỏ sót.*
