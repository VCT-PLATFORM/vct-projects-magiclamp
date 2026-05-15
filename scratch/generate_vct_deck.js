const pptxgen = require('pptxgenjs');

let pres = new pptxgen();

// Define VCT Platform Theme Colors (Teal/Blue)
const COLORS = {
    PRIMARY: '14B8A6', // Teal
    SECONDARY: '3B82F6', // Blue
    ACCENT: 'FFFFFF', // White
    DARK: '0F172A',
    SLATE: '475569'
};

const titleStyle = { x: 0.5, y: 0.5, w: '90%', h: 1, fontSize: 36, bold: true, color: COLORS.PRIMARY, align: 'center' };
const darkSlideStyle = { fill: { color: COLORS.DARK } };

// Slide 1: Title
let s1 = pres.addSlide(darkSlideStyle);
s1.addText('VCT PLATFORM', { x: 0, y: '30%', w: '100%', align: 'center', fontSize: 54, bold: true, color: COLORS.PRIMARY });
s1.addText('GIẢI PHÁP AI-OS TOÀN DIỆN CHO MAGIC LAMP', { x: 0, y: '45%', w: '100%', align: 'center', fontSize: 24, color: COLORS.ACCENT });
s1.addText('Kiến tạo Media House tự hành bằng HERA Protocol V5.4', { x: 0, y: '60%', w: '100%', align: 'center', fontSize: 18, color: '94A3B8' });

// Slide 2: The Partnership
let s2 = pres.addSlide();
s2.addText('VCT x Magic Lamp: Hợp tác Chiến lược', titleStyle);
s2.addText([
    { text: '• VCT Platform cung cấp hạ tầng phần cứng và hệ điều hành AI.\n', options: { bullet: true } },
    { text: '• Magic Lamp vận hành sáng tạo và kinh doanh dựa trên đội ngũ Agent.\n', options: { bullet: true } },
    { text: '• Mục tiêu: Xây dựng Agency Media số 1 khu vực dựa trên AI.', options: { bullet: true } }
], { x: 1, y: 2, w: 8, h: 3, fontSize: 20 });

// Slide 3: HERA V5.4 Architecture
let s3 = pres.addSlide(darkSlideStyle);
s3.addText('Hệ Điều Hành HERA V5.4', { ...titleStyle, color: COLORS.ACCENT });
const features = [
    { t: 'Multi-Tenant Isolation', d: 'Bảo mật tuyệt đối dữ liệu khách hàng của Magic Lamp.' },
    { t: 'Autonomous Learning', d: 'Agent tự giỏi lên sau mỗi dự án thực tế.' },
    { t: 'Scale-on-Demand', d: 'Mở rộng quy mô phục vụ hàng trăm nhãn hàng cùng lúc.' }
];
features.forEach((f, idx) => {
    let y = 2 + (idx * 1.2);
    s3.addShape(pres.ShapeType.rect, { x: 0.5, y: y, w: 9, h: 1, fill: { color: '1E293B' }, line: { color: COLORS.PRIMARY, width: 1 } });
    s3.addText(f.t, { x: 0.7, y: y + 0.2, fontSize: 22, bold: true, color: COLORS.PRIMARY });
    s3.addText(f.d, { x: 0.7, y: y + 0.5, fontSize: 16, color: '94A3B8' });
});

// Slide 4: Specialized Agent Roster
let s4 = pres.addSlide();
s4.addText('Đội Ngũ Nhân Sự Số Chuyên Trách', titleStyle);
const agents = [
    ['Market-Researcher', 'Creative-AI', 'Ads-Manager', 'Crisis-Response'],
    ['Brand-Architect', 'Visual-Generator', 'Ecom-Agent', 'IP-Guard']
];
agents.forEach((row, rIdx) => {
    row.forEach((agent, cIdx) => {
        let x = 0.5 + (cIdx * 2.3);
        let y = 2 + (rIdx * 1.5);
        s4.addShape(pres.ShapeType.rect, { x: x, y: y, w: 2, h: 1, fill: { color: COLORS.PRIMARY }, rectRadius: 0.1 });
        s4.addText(agent, { x: x, y: y, w: 2, h: 1, align: 'center', fontSize: 16, color: COLORS.ACCENT, bold: true });
    });
});

// Slide 5: Implementation Roadmap
let s5 = pres.addSlide();
s5.addText('Lộ trình Triển khai cho Magic Lamp', titleStyle);
const steps = [
    { p: 'GĐ 1: Thiết lập hạ tầng & Bảo mật (Rule 25)' },
    { p: 'GĐ 2: Huấn luyện Bản năng Agent (Context Loading)' },
    { p: 'GĐ 3: Chạy thử nghiệm Pilot (Trial Project)' },
    { p: 'GĐ 4: Vận hành Toàn diện & Tự tiến hóa' }
];
steps.forEach((s, idx) => {
    let y = 2 + (idx * 0.8);
    s5.addText(`${idx + 1}. ${s.p}`, { x: 1, y: y, w: 8, fontSize: 18, color: COLORS.DARK, bold: idx === 1 });
});

// Slide 6: VCT Support Commitment
let s6 = pres.addSlide(darkSlideStyle);
s1.addText('CAM KẾT ĐỒNG HÀNH', { x: 0, y: '40%', w: '100%', align: 'center', fontSize: 40, bold: true, color: COLORS.PRIMARY });
s1.addText('VCT Platform — Đối tác công nghệ tin cậy của Magic Lamp', { x: 0, y: '55%', w: '100%', align: 'center', fontSize: 20, color: COLORS.ACCENT });

pres.writeFile({ fileName: 'D:/vct-projects/magiclamp/VCT_MAGIC_LAMP_SOLUTION.pptx' })
    .then(fileName => console.log(`Created file: ${fileName}`));
