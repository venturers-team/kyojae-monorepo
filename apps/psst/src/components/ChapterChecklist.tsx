import { useEffect, useState } from 'react';

type Props = {
  chapter: string;
  items: string[];
};

export default function ChapterChecklist({ chapter, items }: Props) {
  const storageKey = `psst_checklist_${chapter}`;
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, hydrated, storageKey]);

  const toggle = (idx: number) =>
    setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const done = Object.values(checked).filter(Boolean).length;
  const pct = items.length === 0 ? 0 : Math.round((done / items.length) * 100);

  return (
    <div className="psst-checklist">
      <div className="psst-checklist-header">
        <div className="psst-checklist-title">
          <span className="psst-checklist-kicker">SELF REVIEW</span>
          <span className="psst-checklist-progress">
            {done} / {items.length}
          </span>
        </div>
        <div className="psst-checklist-bar" aria-hidden>
          <div className="psst-checklist-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <ul className="psst-checklist-list">
        {items.map((item, idx) => (
          <li key={idx}>
            <label className={checked[idx] ? 'is-checked' : ''}>
              <input
                type="checkbox"
                checked={!!checked[idx]}
                onChange={() => toggle(idx)}
              />
              <span className="psst-checklist-box" aria-hidden>
                {checked[idx] ? '✓' : ''}
              </span>
              <span className="psst-checklist-text">{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <style>{`
        .psst-checklist {
          margin: 2rem 0;
          padding: 1.4rem 1.6rem 1.6rem;
          border-radius: 16px;
          border: 1px solid var(--psst-line, rgba(255, 255, 255, 0.08));
          background: var(--psst-bg-raise, #18181B);
        }
        .psst-checklist-header {
          margin-bottom: 1.2rem;
        }
        .psst-checklist-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.7rem;
        }
        .psst-checklist-kicker {
          font-family: var(--sl-font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          color: var(--psst-primary, #818CF8);
          font-weight: 600;
        }
        .psst-checklist-progress {
          font-family: var(--sl-font-mono);
          font-size: 0.85rem;
          color: var(--psst-ink-mute, #A1A1AA);
        }
        .psst-checklist-bar {
          width: 100%;
          height: 4px;
          background: var(--psst-bg-mute, #131316);
          border-radius: 999px;
          overflow: hidden;
        }
        .psst-checklist-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #818CF8 0%, #A78BFA 50%, #C084FC 100%);
          border-radius: 999px;
          transition: width 300ms ease;
        }
        .psst-checklist-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }
        .psst-checklist-list label {
          display: grid;
          grid-template-columns: 22px 1fr;
          align-items: flex-start;
          gap: 0.8rem;
          cursor: pointer;
          padding: 0.5rem 0.5rem 0.5rem 0;
          border-radius: 8px;
          transition: background 160ms ease;
        }
        .psst-checklist-list label:hover {
          background: var(--psst-bg-mute, #131316);
        }
        .psst-checklist-list input[type='checkbox'] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .psst-checklist-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 1.5px solid var(--psst-line-strong, rgba(255, 255, 255, 0.14));
          color: transparent;
          font-size: 0.85rem;
          font-weight: 700;
          transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
          margin-top: 0.15rem;
        }
        .psst-checklist-list label.is-checked .psst-checklist-box {
          background: var(--psst-primary, #818CF8);
          border-color: var(--psst-primary, #818CF8);
          color: white;
        }
        .psst-checklist-text {
          color: var(--psst-ink, #FAFAFA);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .psst-checklist-list label.is-checked .psst-checklist-text {
          text-decoration: line-through;
          color: var(--psst-ink-mute, #A1A1AA);
        }
      `}</style>
    </div>
  );
}
