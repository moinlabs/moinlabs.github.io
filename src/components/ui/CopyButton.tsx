import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="glass inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium hover:border-accent/60"
      aria-live="polite"
    >
      {copied ? <FiCheck className="text-accent-emerald" /> : <FiCopy />}
      {copied ? "Copied" : label}
    </button>
  );
}
