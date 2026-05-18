# PATTERN: Content Production Assembly Line — 10 scripts/day capacity

## Pattern Type: Strategic
## Applicable To: creative_ai, visual_generator, editor_assistant, ml_strategy

## Problem
Client yêu cầu 30 videos/tháng (ngành thời trang). Nếu làm tuần tự (research → write → design → review), chỉ output được 5 videos/tháng.

## Solution: Assembly Line Model
```
Station 1 (ML-Strategy):  Trend batch research → Output: 10 trend briefs/tuần
    ↓ (parallel feed)
Station 2 (Creative-AI):  Script batch writing → Output: 3 scripts/ngày từ mỗi brief
    ↓ (parallel feed)
Station 3 (Visual-Gen):   Visual batch creation → Output: storyboard + thumbnail/script
    ↓
Station 4 (Editor-Asst):  QC batch review → Output: approved deliverables
    ↓
Station 5 (ML-Account):   Client delivery → Feedback loop back to Station 1
```

## Key Principles
1. **Batch over Single**: Làm 10 scripts cùng lúc nhanh hơn làm 10 scripts riêng lẻ.
2. **Template + Variation**: Tạo template structure, chỉ thay đổi hook/product/CTA.
3. **Parallel Stations**: Station 2 không đợi Station 1 finish hết — feed liên tục.
4. **Quality Gate at Station 4**: Chỉ 1 điểm QC, không review ở mỗi station.

## Expected Output
- 10 scripts/ngày (capacity)
- 3-5 final videos/ngày (after production)
- 30-50 videos/tháng (sustainable)

## Tags
`#production` `#assembly_line` `#scaling` `#batch_processing` `#capacity`
