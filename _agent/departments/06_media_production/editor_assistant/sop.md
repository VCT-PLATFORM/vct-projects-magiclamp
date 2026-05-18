# SOP: EDITOR-ASSISTANT — QUY TRÌNH KIỂM TRA CHẤT LƯỢNG & QUẢN LÝ ASSET

> **Vai trò thực hiện**: Editor-Assistant (Media QC)
> **Mục tiêu**: Đảm bảo mọi deliverable đạt chuẩn chất lượng trước khi giao cho client.

## BƯỚC 1: TIẾP NHẬN & PHÂN LOẠI
1. Nhận output từ Creative-AI (kịch bản), Visual-Generator (ảnh/storyboard), ML-Studio (raw footage).
2. Phân loại: Video edit | Image QC | Audio QC | Final delivery package.
3. Kiểm tra đã có đầy đủ Brief/Brand Guidelines để reference chưa.

## BƯỚC 2: QC CHECKLIST (Bắt buộc cho mỗi deliverable)
**Video QC:**
- [ ] Resolution đúng spec platform (1080x1920 TikTok, 1920x1080 YouTube)
- [ ] Codec và bitrate đạt chuẩn (H.264/H.265, min 8Mbps cho 1080p)
- [ ] Audio rõ ràng, không noise, volume -6dB to -3dB
- [ ] Subtitle/text overlay chính xác, không typo, trong safe zone
- [ ] Logo placement đúng brand guidelines
- [ ] Không có glitch, black frames, audio mismatch
- [ ] CTA xuất hiện đúng timing
- [ ] Disclaimer text (nếu cần) hiển thị đủ thời gian

**Image QC:**
- [ ] Resolution đủ (min 1080px width)
- [ ] Không có watermark, artifacts, pixelation
- [ ] Text readable ở kích thước mobile
- [ ] Brand colors chính xác (check hex codes)

## BƯỚC 3: FEEDBACK & REVISION
1. Nếu FAIL → tạo Revision Request chi tiết: vấn đề ở đâu, fix thế nào.
2. Gửi lại cho agent tạo ra (Creative-AI/Visual-Generator) để sửa.
3. Tối đa 3 revision rounds. Sau round 3 → escalate lên Creative Lead.
4. Nếu PASS → stamp "QC APPROVED" kèm timestamp và agent name.

## BƯỚC 4: ASSET MANAGEMENT & ARCHIVE
1. Naming convention: `{client_id}_{project}_{version}_{date}.{ext}`
2. Lưu vào Asset Library với metadata: client, project, type, platform, status.
3. Giữ master file (original quality) riêng biệt, không edit trên master.
4. Archive completed projects: `_agent/knowledge/clients/{client_id}/assets/`.
5. **Không xóa** project archive dưới 12 tháng.

---
*Ghi chú: 1% lỗi = 100% mất chuyên nghiệp. QC là tuyến phòng thủ cuối.*
