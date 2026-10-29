"use client";
import { useState } from "react";
import Link from "next/link";
import { featured, installment, merchants } from "@/data/promos";

const today = new Date(new Date().toDateString());
function endTime(text: string) {
  const dates = text.match(/\d{2}\/\d{2}\/\d{4}/g) ?? [];
  const d = dates.pop();
  if (!d || (/^Từ/.test(text) && dates.length === 0)) return Infinity; // start date only

  const [dd, mm, yy] = d.split("/").map(Number);
  return new Date(yy, mm - 1, dd).getTime();
}
const byEnd = <T,>(list: T[], key: (x: T) => string) => [...list].sort((a, b) => endTime(key(a)) - endTime(key(b)));
const sortedFeatured = byEnd(featured, (p) => p.period);
const sortedMerchants = byEnd(merchants, (m) => m.end);
function daysLeft(text: string) {
  const t = endTime(text);
  if (t === Infinity) return null;
  const n = Math.round((t - today.getTime()) / 864e5);
  return n >= 0 && n <= 30 ? n : null;
}
function Ending({ text }: { text: string }) {
  const n = daysLeft(text);
  return n === null ? null : <span className="p-ending">{n === 0 ? "Hết hạn hôm nay" : `Còn ${n} ngày`}</span>;
}

const categories = ["Tất cả", ...new Set(merchants.map((m) => m.category))];

export default function Promotions() {
  const [cat, setCat] = useState("Tất cả");
  const shown = cat === "Tất cả" ? sortedMerchants : sortedMerchants.filter((m) => m.category === cat);

  return (
    <div className="promo-page wrap">
      <Link href="/" className="back">← ONE Mcc</Link>
      <p className="label">Ưu đãi thẻ · VIB One Card</p>
      <h1>Ưu đãi thẻ</h1>

      <h2>Chương trình nổi bật</h2>
      <div className="p-grid">
        {sortedFeatured.map((p) => (
          <a key={p.url} className="p-card" href={p.url} target="_blank" rel="noreferrer">
            <span className={`p-art t${sortedFeatured.indexOf(p) % 4}`} aria-hidden="true">{p.title.match(/\d[\d.]*\s?(%|VNĐ|triệu|USD)|0%|One Card/)?.[0] ?? "VIB"}</span>
            <Ending text={p.period} />
            <div>
              <h3>{p.title}</h3>
              <p className="p-meta">{p.period}</p>
              <p className="p-meta">{p.audience}</p>
            </div>
          </a>
        ))}
      </div>

      <h2>Ưu đãi đối tác</h2>
      <div className="chips">
        {categories.map((c) => (
          <button key={c} className={c === cat ? "chip-btn on" : "chip-btn"} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="p-grid">
        {shown.map((m) => (
          <a key={m.id} className="p-card" href={m.url} target="_blank" rel="noreferrer">
            <span className={`p-art t${categories.indexOf(m.category) % 4}`} aria-hidden="true">{m.offer}</span>
            <Ending text={m.end} />
            <div>
              <h3>{m.name}</h3>
              <p className="p-meta">{m.category} · HSD {m.end}</p>
            </div>
          </a>
        ))}
      </div>

      <a className="btn" href={installment.url} target="_blank" rel="noreferrer">
        Trả góp 0% tại {installment.count}+ đối tác →
      </a>
      <p className="source">Nguồn: vib.com.vn. Bấm vào ưu đãi để xem chi tiết trên trang VIB.</p>
    </div>
  );
}
