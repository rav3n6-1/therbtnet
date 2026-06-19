/* ──────────────────────────────────────────────────────────────
 * TheRBT.net – Source Note Component
 *
 * Displays a small info box about content sources and a
 * reminder to verify with official resources.
 * ────────────────────────────────────────────────────────────── */

interface SourceNoteProps {
  className?: string;
}

export default function SourceNote({ className = "" }: SourceNoteProps) {
  return (
    <div
      className={`rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-xs text-slate-500 ${className}`}
    >
      <p className="font-medium text-slate-600">📝 Content Source Note</p>
      <p className="mt-1 leading-relaxed">
        This content is original educational material created by TheRBT.net for
        study and review purposes. It is not sourced from or endorsed by the
        BACB®. Always verify current requirements and information through
        official BACB resources at{" "}
        <a
          href="https://www.bacb.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:text-indigo-700 underline"
        >
          bacb.com
        </a>
        .
      </p>
    </div>
  );
}
