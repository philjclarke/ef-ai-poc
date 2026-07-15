"use client";

import { useState } from "react";

type TagInputProps = {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
  tags: string[];
  onChange: (tags: string[]) => void;
};

export function TagInput({ id, label, hint, placeholder, tags, onChange }: TagInputProps) {
  const [draft, setDraft] = useState("");

  function commitDraft() {
    const value = draft.trim().replace(/,+$/, "");
    if (value && !tags.includes(value)) {
      onChange([...tags, value]);
    }
    setDraft("");
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commitDraft();
    } else if (event.key === "Backspace" && !draft && tags.length) {
      onChange(tags.slice(0, -1));
    }
  }

  return (
    <div>
      <label htmlFor={id} className="block text-base font-bold">
        {label}
      </label>
      <p className="mt-0.5 text-sm text-ef-indigo/60">{hint}</p>
      <div className="mt-1.5 flex flex-wrap items-center gap-2 rounded-[5px] border border-ef-border bg-white px-3 py-2 focus-within:border-ef-indigo focus-within:ring-1 focus-within:ring-ef-indigo">
        {tags.map((tag) => (
          <span key={tag} className="ef-pill items-center gap-1.5">
            {tag}
            <button
              type="button"
              aria-label={`Remove ${tag}`}
              className="text-ef-indigo/50 hover:text-ef-indigo"
              onClick={() => onChange(tags.filter((t) => t !== tag))}
            >
              ×
            </button>
          </span>
        ))}
        <input
          id={id}
          value={draft}
          placeholder={tags.length ? "" : placeholder}
          className="min-w-32 flex-1 bg-transparent py-1.5 text-[1.0625rem] outline-none placeholder:text-ef-indigo/40"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={commitDraft}
        />
      </div>
    </div>
  );
}
