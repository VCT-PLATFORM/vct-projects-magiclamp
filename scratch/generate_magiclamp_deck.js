const pptxgen = require('pptxgenjs');

let pres = new pptxgen();

// Define Theme Colors
const COLORS = {
    PRIMARY: '1E2761', // Dark Navy
    SECONDARY: 'CADCFC', // Ice Blue
    ACCENT: 'FFFFFF', // White
    DARK: '121212',
    GOLD: 'D4AF37'
};

// Common Slide Styles
const titleStyle = { x: 0.5, y: 0.5, w: '90%', h: 1, fontSize: 36, bold: true, color: COLORS.PRIMARY, align: 'center' };
const darkSlideStyle = { fill: { color: COLORS.PRIMARY } };

// Slide 1: Title
let s1 = pres.addSlide(darkSlideStyle);
s1.addText('MAGIC LAMP\nAI-FIRST ENTERPRISE', {
    x: 0, y: '30%', w: '100%', align: 'center', fontSize: 54, bold: true, color: COLORS.ACCENT
});
s1.addText('The Future of Media Production & Marketing Automation', {
    x: 0, y: '55%', w: '100%', align: 'center', fontSize: 24, color: COLORS.SECONDARY
});
s1.addText('HERA PROTOCOL V5.4', {
    x: 0, y: '85%', w: '100%', align: 'center', fontSize: 18, color: COLORS.GOLD, bold: true
});

// Slide 2: The Vision
let s2 = pres.addSlide();
s2.addText('Tầm nhìn: "Media-as-a-Service" Tự hành', titleStyle);
s2.addShape(pres.ShapeType.rect, { x: 0.5, y: 1.4, w: 9, h: 0.05, fill: { color: COLORS.PRIMARY } });
s2.addText([
    { text: '• Vượt qua giới hạn của Agency truyền thống\n', options: { bullet: true, indentLevel: 0 } },
    { text: '• Hệ điều hành AI hoạt động 24/7 không nghỉ\n', options: { bullet: true, indentLevel: 0 } },
    { text: '• Tối ưu hóa lợi nhuận bằng dữ liệu và tự động hóa\n', options: { bullet: true, indentLevel: 0 } },
    { text: '• Giải phóng tối đa nguồn lực con người cho sáng tạo', options: { bullet: true, indentLevel: 0 } }
], { x: 1, y: 2, w: 8, h: 3, fontSize: 20, color: COLORS.DARK });

// Slide 3: HERA Protocol V5.4
let s3 = pres.addSlide();
s3.addText('Kiến trúc HERA V5.4 — Trí tuệ Phân cấp', titleStyle);
const steps = [
    { title: 'Autonomous Evolution', desc: 'Tự học và đúc kết kinh nghiệm sau mỗi task thành công.' },
    { title: 'Elastic Sharding', desc: 'Nạp kiến thức thông minh, bảo mật dữ liệu khách hàng tuyệt đối.' },
    { title: 'Self-Healing', desc: 'Tự phát hiện lỗi và đề xuất bản vá quy trình ngay lập tức.' }
];
steps.forEach((step, idx) => {
    let y = 2 + (idx * 1.2);
    s3.addShape(pres.ShapeType.rect, { x: 0.5, y: y, w: 9, h: 1, fill: { color: 'F5F5F5' }, line: { color: COLORS.SECONDARY, width: 1 } });
    s3.addText(step.title, { x: 0.7, y: y + 0.2, fontSize: 22, bold: true, color: COLORS.PRIMARY });
    s3.addText(step.desc, { x: 0.7, y: y + 0.5, fontSize: 16, color: '555555' });
});

// Slide 4: Departmental Structure
let s4 = pres.addSlide();
s4.addText('Cơ cấu 8 Phòng ban AI chuyên biệt', titleStyle);
const depts = [
    ['01 Strategy', '02 Finance', '03 Growth', '04 Ops/HR'],
    ['05 Product', '06 Creative', '07 Tech', '08 Legal']
];
depts.forEach((row, rIdx) => {
    row.forEach((dept, cIdx) => {
        let x = 0.5 + (cIdx * 2.3);
        let y = 2 + (rIdx * 1.5);
        s4.addShape(pres.ShapeType.rect, { x: x, y: y, w: 2, h: 1, fill: { color: COLORS.PRIMARY }, rectRadius: 0.1 });
        s4.addText(dept, { x: x, y: y, w: 2, h: 1, align: 'center', fontSize: 18, color: COLORS.ACCENT, bold: true });
    });
});

// Slide 5: Marketing Powerhouse
let s5 = pres.addSlide();
s5.addText('Cỗ máy Marketing Toàn năng', titleStyle);
const mkt = [
    { role: 'Researcher', task: 'Nghiên cứu đối thủ & Insight khách hàng' },
    { role: 'Architect', task: 'Định vị thương hiệu & Storytelling' },
    { role: 'Planner', task: 'Lập kế hoạch Media & Forecast KPIs' },
    { role: 'SEO & Social', task: 'Thống trị tìm kiếm & Lan tỏa cộng đồng' }
];
mkt.forEach((item, idx) => {
    let y = 2 + (idx * 0.8);
    s5.addText(item.role, { x: 1, y: y, w: 2, fontSize: 20, bold: true, color: COLORS.PRIMARY });
    s5.addText(item.task, { x: 3.5, y: y, w: 6, fontSize: 18, color: '333333' });
    s5.addShape(pres.ShapeType.line, { x: 1, y: y + 0.5, w: 8, h: 0, line: { color: 'CCCCCC', width: 0.5 } });
});

// Slide 6: Generative Production
let s6 = pres.addSlide();
s6.addText('Sản xuất Nội dung bằng AI', titleStyle);
s6.addText('Visual Generator & Auto-Script Forge', { x: 0.5, y: 1.5, w: 9, align: 'center', fontSize: 24, color: '888888' });
s6.addText([
    { text: '• Biến ý tưởng thành Storyboard trực quan trong giây lát\n', options: { bullet: true } },
    { text: '• Tự động tạo bối cảnh ảo (Virtual Studio) đẳng cấp\n', options: { bullet: true } },
    { text: '• Kịch bản Viral được tối ưu hóa theo thuật toán nền tảng\n', options: { bullet: true } },
    { text: '• Giảm 80% thời gian sản xuất hậu kỳ', options: { bullet: true } }
], { x: 1.5, y: 2.5, w: 7, h: 3, fontSize: 20 });

// Slide 7: Performance & E-commerce
let s7 = pres.addSlide();
s7.addText('Vận hành Sàn & Ads Hiệu suất cao', titleStyle);
s7.addText('Ecom-Agent & Ads-Manager', { x: 0.5, y: 1.5, w: 9, align: 'center', fontSize: 24, color: '888888' });
s7.addText([
    { text: '• Quản trị gian hàng đa kênh 24/7 (Shopee, TikTok, Lazada)\n', options: { bullet: true } },
    { text: '• Tự động tối ưu hóa giá thầu Ads để đạt ROAS cao nhất\n', options: { bullet: true } },
    { text: '• Live-Ops: Điều phối phiên Live, gắn giỏ hàng & tracking real-time\n', options: { bullet: true } },
    { text: '• Đối soát tài chính tự động ngay sau phiên livestream', options: { bullet: true } }
], { x: 1.5, y: 2.5, w: 7, h: 3, fontSize: 20 });

// Slide 8: Security & Context Isolation
let s8 = pres.addSlide(darkSlideStyle);
s8.addText('Bảo mật Đa khách hàng (Multi-Tenancy)', { ...titleStyle, color: COLORS.ACCENT });
s8.addText('Cơ chế "Ngăn khoang ký ức" tuyệt đối', { x: 0.5, y: 1.5, w: 9, align: 'center', fontSize: 24, color: COLORS.SECONDARY });
s8.addShape(pres.ShapeType.rect, { x: 1, y: 2.5, w: 8, h: 2, fill: { color: COLORS.ACCENT, transparency: 90 }, line: { color: COLORS.GOLD, width: 2 } });
s8.addText('RULE 25: CLIENT CONTEXT ISOLATION\n\nMọi Agent bắt buộc phải cô lập bộ nhớ theo CLIENT_ID.\nTuyệt đối không rò rỉ dữ liệu giữa các khách hàng khác nhau.', {
    x: 1, y: 2.5, w: 8, h: 2, align: 'center', fontSize: 22, color: COLORS.ACCENT, bold: true
});

// Slide 9: The Shield (Crisis & IP)
let s9 = pres.addSlide();
s9.addText('Khiên bảo vệ Thương hiệu & Bản quyền', titleStyle);
s9.addText([
    { text: '• Crisis-Response: Phát hiện và xử lý khủng hoảng PR thần tốc\n', options: { bullet: true } },
    { text: '• IP-Guard: Tự động quét và gỡ bỏ các nội dung re-up vi phạm\n', options: { bullet: true } },
    { text: '• Bảo vệ 24/7 mọi tài sản số và danh tiếng của khách hàng\n', options: { bullet: true } },
    { text: '• Giảm thiểu rủi ro pháp lý và thiệt hại doanh thu', options: { bullet: true } }
], { x: 1.5, y: 2.5, w: 7, h: 3, fontSize: 20 });

// Slide 10: Conclusion
let s10 = pres.addSlide(darkSlideStyle);
s10.addText('ĐỒNG HÀNH CÙNG KỶ NGUYÊN AI', {
    x: 0, y: '40%', w: '100%', align: 'center', fontSize: 48, bold: true, color: COLORS.ACCENT
});
s10.addText('Magic Lamp — Nâng tầm doanh nghiệp bạn bằng Trí tuệ Tự hành', {
    x: 0, y: '55%', w: '100%', align: 'center', fontSize: 22, color: COLORS.SECONDARY
});
s10.addText('Contact: magiclamp.vn', {
    x: 0, y: '85%', w: '100%', align: 'center', fontSize: 18, color: COLORS.GOLD
});

pres.writeFile({ fileName: 'D:/vct-projects/magiclamp/MAGIC_LAMP_CAPABILITY_PROFILE.pptx' })
    .then(fileName => console.log(`Created file: ${fileName}`));
