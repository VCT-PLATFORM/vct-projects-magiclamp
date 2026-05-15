# SOP-201: QUY TRÌNH QUẢN TRỊ TÀI CHÍNH AGENCY & ĐỐI SOÁT LIVE

> **Vai trò thực hiện**: ML-Finance (Accountant)
> **Mục tiêu**: Quản lý dòng tiền Agency minh bạch, đối soát chính xác doanh thu từ các sàn TMĐT.

## BƯỚC 1: GHI NHẬN DOANH THU & CHI PHÍ
1. **Dòng tiền vào**: Ghi nhận tạm ứng/thanh toán từ khách hàng cho các dịch vụ Media/Marketing.
2. **Dòng tiền ra**: Ghi nhận chi phí (Production cost, Ads spend, Lương Idol, Thuê Studio).
3. Sử dụng `finance-sync.js` để đồng bộ dữ liệu real-time lên Dashboard.

## BƯỚC 2: ĐỐI SOÁT LIVESTREAM (Live Reconcile)
1. Sau mỗi phiên Live, lấy dữ liệu từ các sàn (TikTok Shop, Shopee, Lazada).
2. So sánh doanh số thực tế vs Doanh số hiển thị trên live.
3. Tính toán hoa hồng (Commission) cho Idol/KOC theo thỏa thuận.

## BƯỚC 3: QUẢN LÝ NGÂN SÁCH QUẢNG CÁO (Ads Budget)
1. Theo dõi số dư các tài khoản quảng cáo (FB, GG, TikTok).
2. Cảnh báo khi ngân sách sắp hết hoặc chỉ số ROAS (Return on Ad Spend) thấp hơn ngưỡng cho phép.

## BƯỚC 4: BÁO CÁO TÀI CHÍNH ĐỊNH KỲ
1. Xuất báo cáo P&L (Lãi lỗ) hàng tuần cho Chairman.
2. Xuất báo cáo hiệu quả tài chính cho từng khách hàng (Campaign Report).
3. Đảm bảo mọi chứng từ hóa đơn được lưu trữ số hóa đúng quy định.

---
*Ghi chú: Số liệu không biết nói dối, hãy để dữ liệu dẫn dắt quyết định.*
