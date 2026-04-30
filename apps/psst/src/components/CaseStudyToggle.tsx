import { useEffect, useState } from 'react';

type Props = {
  chapter: string;
  children: React.ReactNode;
};

export default function CaseStudyToggle({ chapter, children }: Props) {
  const storageKey = `psst_case_open_${chapter}`;
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'true') setOpen(true);
    } catch {}
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, String(open));
    } catch {}
  }, [open, hydrated, storageKey]);

  return (
    <div className={`psst-case-toggle ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="psst-case-trigger"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="psst-case-kicker">CASE STUDY</span>
        <span className="psst-case-label">
          {open ? '관통 사례 분해 접기' : '관통 사례 분해 펼치기'}
        </span>
        <span className="psst-case-icon" aria-hidden>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && <div className="psst-case-body">{children}</div>}
      <style>{`
        .psst-case-toggle {
          margin: 2rem 0;
          border-radius: 16px;
          border: 1px solid var(--psst-line, rgba(255, 255, 255, 0.08));
          background: var(--psst-bg-raise, #18181B);
          overflow: hidden;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .psst-case-toggle.is-open {
          border-color: var(--psst-primary, #818CF8);
          box-shadow: 0 12px 30px -16px rgba(129, 140, 248, 0.4);
        }
        .psst-case-trigger {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1.1rem 1.4rem;
          background: transparent;
          color: var(--psst-ink, #FAFAFA);
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--sl-font);
          font-size: 0.98rem;
          font-weight: 500;
          transition: background 160ms ease;
        }
        .psst-case-trigger:hover {
          background: var(--psst-bg-mute, #131316);
        }
        .psst-case-kicker {
          font-family: var(--sl-font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          color: var(--psst-primary, #818CF8);
          padding: 0.3rem 0.6rem;
          border: 1px solid var(--psst-primary, #818CF8);
          border-radius: 999px;
          background: var(--psst-primary-soft, rgba(129, 140, 248, 0.15));
        }
        .psst-case-label {
          color: var(--psst-ink-soft, #D4D4D8);
        }
        .psst-case-icon {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--psst-bg-mute, #131316);
          color: var(--psst-primary, #818CF8);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .psst-case-body {
          padding: 1.2rem 1.4rem 1.6rem;
          border-top: 1px solid var(--psst-line, rgba(255, 255, 255, 0.08));
          color: var(--psst-ink-soft, #D4D4D8);
          font-size: 0.95rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
