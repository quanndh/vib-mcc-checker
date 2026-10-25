"use client";
import { useMemo, useState } from "react";
import groups from "@/data/mcc.json";
import { highlights, promos, tierRows, tiers } from "@/data/card";

const lookup = new Map<string, string>();
for (const g of groups) for (const c of g.codes) lookup.set(c, g.category);

export default function Home() {
  const [value, setValue] = useState("");
  const results = useMemo(() => {
    const codes = [...new Set(value.split(" ").filter(Boolean).map((c) => c.padStart(4, "0")))];
    return codes.map((code) => ({ code, category: lookup.get(code) }));
  }, [value]);

  return (
    <>
    <section className="snap hero">
      <div className="wrap hero-grid">
        <main>
          <p className="label">VIB One Card · MCC</p>
          <h1>MCC Hoàn tiền</h1>
          <label htmlFor="mcc" className="label">Mã MCC</label>
          <input
            id="mcc"
            inputMode="numeric"
            placeholder="5311 7011 6300"
            value={value}
            autoFocus
            autoComplete="off"
            onChange={(e) => setValue(e.target.value.replace(/[^\d ]/g, "").replace(/ {2,}/g, " ").replace(/(\d{4})(?=\d)/g, "$1 "))}
          />
          <div className="result-slot" aria-live="polite">
            {results.map((result) => (
              <div key={result.code} className={`result ${result.category ? "yes" : "no"}`}>
                <span className="status">{result.category ? "Có" : "Không"}</span>
                <span className="code">{result.code}</span>
                <span className="detail">{result.category ?? "Không có trong danh sách"}</span>
              </div>
            ))}
          </div>
          <a className="btn" href="#card">Xem quyền lợi thẻ ↓</a>
        </main>
        <div className="shapes" aria-hidden="true">
          <span className="s-circle" />
          <span className="s-arch" />
          <span className="s-tri" />
          <span className="s-block" />
          <div className="mini signature">
            <span className="chip" />
            <span className="brand">VIB One Card</span>
            <span className="mini-foot"><span className="num">•••• 2026</span><span className="tier-name">Signature</span></span>
          </div>
        </div>
      </div>
    </section>

    <section id="card" className="snap">
      <div className="wrap">
        <div className="book">
          <span className="tab">01 · Quyền lợi</span>
          <h2>Một thẻ, ba hạng</h2>
          <p className="lead">Nâng cấp quyền lợi theo thời gian, không cần đổi thẻ.</p>
          <div className="facts">
            {highlights.map((h) => (
              <div key={h.label}>
                <p className="label">{h.label}</p>
                <p className="fact">{h.value}</p>
                <p>{h.note}</p>
              </div>
            ))}
          </div>
          <div className="tiers" role="table" aria-label="So sánh hạng thẻ">
            {tiers.map((t) => (
              <div key={t.name} role="rowgroup" className={"featured" in t ? "tier featured" : "tier"}>
                <div className="tier-head" role="row">
                  <div className={`mini ${t.name.toLowerCase()}`} aria-hidden="true">
                    <span className="chip" />
                    <span className="brand">VIB One Card</span>
                    <span className="mini-foot"><span className="num">•••• 2026</span><span className="tier-name">{t.name}</span></span>
                  </div>
                  <div>
                    {"featured" in t && <span className="flag">Cao nhất</span>}
                    <h3 role="columnheader">{t.name}</h3>
                    <p className="label">{t.limit}</p>
                  </div>
                </div>
                <div className="tier-rows">
                  {tierRows.map((r) => (
                    <div key={r.key} className="row" role="row">
                      <span className="label" role="cell">{r.label}</span>
                      <span role="cell">{String(t[r.key])}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="promos" className="snap">
      <div className="wrap cover">
        <span className="confetti c1" aria-hidden="true" />
        <span className="confetti c2" aria-hidden="true" />
        <span className="confetti c3" aria-hidden="true" />
        <p className="label">02 · Ưu đãi</p>
        <h2>Ưu đãi &amp; tiện ích</h2>
        <ol className="promos">
          {promos.map((p, i) => (
            <li key={p.title}>
              <span className={`badge b${i % 3}`} aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="source">
          Nguồn:{" "}
          <a href="https://www.vib.com.vn/vn/the-tin-dung/vib-one-card" target="_blank" rel="noreferrer">vib.com.vn</a>.
          Thông tin có thể thay đổi theo chính sách VIB.
        </p>
        <footer>
          <div>
            <p className="fname">Quan Nguyen</p>
            <p className="foot-note">Công cụ cá nhân · không liên kết với VIB</p>
          </div>
          <a href="https://github.com/quanndh" target="_blank" rel="noreferrer">GitHub @quanndh</a>
        </footer>
      </div>
    </section>
    </>
  );
}
