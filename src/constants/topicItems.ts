export type TopicItem = {
  id: string;
  label: string;
};

export const TOPIC_ITEMS = {
  t01: [
    { id: "subsubtopic2", label: "นิยาม" },
    { id: "subsubtopic3", label: "หัวใจสำคัญ" },
  ],
  t02: [{ id: "subsubtopic1", label: "ทำความรู้จัก เครือข่าย TK Park" }],
  t03: [
    { id: "subsubtopic4", label: "เต็มรูปแบบ" },
    { id: "subsubtopic5", label: "พัฒนาและต่อยอด" },
    { id: "subsubtopic6", label: "พันธมิตรการเรียนรู้" },
  ],
  t04: [{ id: "subsubtopic7", label: "เครื่องมือสนับสนุนเครือข่าย" }],
  t05: [{ id: "subsubtopic8", label: "องค์ประกอบสำคัญ 4 ด้าน" }],
  t06: [
    { id: "subsubtopic9", label: "หลักการออกแบบพื้นที่" },
    { id: "subsubtopic10", label: "ตัวอย่างหลากรูปแบบ" },
    { id: "subsubtopic11", label: "ข้อแนะนำในการออกแบบพื้นที่" },
  ],
  t07: [{ id: "subsubtopic12", label: "เพลย์สเปซ (Play Space)" }],
  t08: [{ id: "subsubtopic13", label: "ประเภทของงบประมาณ" }],
  t09: [
    { id: "subsubtopic14", label: "ผู้ใช้บริการ" },
    { id: "subsubtopic15", label: "ค่าบริการ" },
    { id: "subsubtopic16", label: "การใช้พื้นที่" },
    { id: "subsubtopic17", label: "ช่วงเวลาเปิดทำการ" },
  ],
  t10: [
    { id: "subsubtopic18", label: "คุณสมบัติบุคลากร" },
    { id: "subsubtopic19", label: "ขอบเขตงานและบทบาท" },
    { id: "subsubtopic20", label: "การกำหนดจำนวนบุคลากร" },
    { id: "subsubtopic21", label: "การทดสอบบริการ" },
  ],
  t11: [
    { id: "subsubtopic22", label: "กลุ่มครอบครัวพร้อมเด็กเล็ก" },
    { id: "subsubtopic23", label: "กลุ่มนักเรียน" },
    { id: "subsubtopic24", label: "กลุ่มวัยรุ่นและนักศึกษา" },
    { id: "subsubtopic25", label: "กลุ่มผู้ใหญ่" },
    { id: "subsubtopic26", label: "กลุ่มผู้สูงอายุ" },
  ],
  t12: [
    { id: "subsubtopic27", label: "อ่านไปงีบไป" },
    { id: "subsubtopic28", label: "เด็กเต้นเร็วสูงอายุเต้นช้า" },
    { id: "subsubtopic29", label: "จริงจังอนาคต" },
  ],
  t13: [
    { id: "subsubtopic30", label: "ยะลา" },
    { id: "subsubtopic31", label: "ปัตตานี" },
    { id: "subsubtopic32", label: "พะเยา" },
    { id: "subsubtopic33", label: "นครราชสีมา" },
  ],
} satisfies Record<string, TopicItem[]>;

export const SUBSUBTOPIC_LABELS: Record<string, string> = Object.fromEntries(
  Object.values(TOPIC_ITEMS)
    .flat()
    .map((item) => [item.id, item.label]),
);
