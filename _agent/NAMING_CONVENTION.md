# MAGIC LAMP: QUY TẮC ĐẶT TÊN TẬP TIN & THƯ MỤC (NAMING CONVENTION)

> **Mục tiêu:** Đảm bảo toàn bộ tài nguyên (Asset), bài viết (Post), kịch bản (Script) được tổ chức đồng nhất, dễ dàng tìm kiếm, lưu trữ và không bao giờ bị nhầm lẫn giữa các dự án/nền tảng.
> **Áp dụng:** Toàn bộ AI Agents (đặc biệt: Visual-Generator, Creative-AI, Editor-Assistant, Social-Growth).

---

## 1. CẤU TRÚC ĐẶT TÊN CHUNG (MASTER STRUCTURE)

Tất cả các tệp tin và thư mục làm việc phải tuân theo cú pháp chuẩn sau:
`[YYMMDD]_[ClientCode]_[CampaignName]_[Type]_[Variant/Platform].[ext]`

### Phân tích Cú pháp:
1. **[YYMMDD]:** Ngày tháng năm tạo file (Ví dụ: `260518` cho ngày 18/05/2026).
2. **[ClientCode]:** Mã viết tắt của khách hàng (Ví dụ: `ML` cho Magic Lamp, `VNM` cho Vinamilk).
3. **[CampaignName]:** Tên ngắn gọn của chiến dịch, viết liền không dấu, viết hoa chữ cái đầu (PascalCase). (Ví dụ: `AIAgentsIntro`, `SummerSale`).
4. **[Type]:** Loại tài nguyên (Ví dụ: `Caption`, `Visual`, `Video`, `Script`, `Report`).
5. **[Variant/Platform]** (Tùy chọn): Nền tảng đích hoặc số thứ tự version (Ví dụ: `FB`, `IG`, `TikTok`, `v1`, `v2`).

---

## 2. QUY TẮC ĐẶT TÊN THƯ MỤC SOCIAL POSTS

Thư mục lưu trữ bài đăng mạng xã hội (tại `docs/social_posts/`) phải tuân theo:
**Cú pháp:** `[YYMMDD]_[ClientCode]_[CampaignName]`

**Ví dụ thực tế:**
📁 `docs/social_posts/260518_ML_AIAgentsIntro/`

---

## 3. QUY TẮC ĐẶT TÊN TÀI NGUYÊN BÊN TRONG (ASSETS)

Bên trong thư mục dự án, tệp tin phải được phân loại rõ ràng theo `[Type]`:

- **Hình ảnh/Video:** `[YYMMDD]_[ClientCode]_[CampaignName]_Visual_[Variant].[ext]`
  - Ví dụ: `260518_ML_AIAgentsIntro_Visual_01.png`
- **Nội dung/Caption:** `[YYMMDD]_[ClientCode]_[CampaignName]_Caption_[Platform].txt`
  - Ví dụ: `260518_ML_AIAgentsIntro_Caption_IG.txt` (Dành riêng cho Instagram)
  - Ví dụ: `260518_ML_AIAgentsIntro_Caption_FB.txt` (Dành riêng cho Facebook)

---

## 4. QUY ĐỊNH BẮT BUỘC (RED LINES)
- 🚫 **KHÔNG SỬ DỤNG KHOẢNG TRẮNG:** Luôn dùng dấu gạch dưới `_` để phân cách các trường.
- 🚫 **KHÔNG DÙNG TIẾNG VIỆT CÓ DẤU:** Tuyệt đối không đặt tên file có dấu để tránh lỗi đường dẫn hệ thống.
- 🚫 **KHÔNG LƯU FILE RÁC:** Các tệp tin như `image.png` hay `caption.txt` chung chung là VI PHẠM tiêu chuẩn chất lượng và sẽ bị loại bỏ bởi Editor-Assistant.
