"use client";

import type { Resource } from "@/lib/resources";
import { TagInput } from "./TagInput";

const fieldClasses =
  "mt-1.5 w-full rounded-[5px] border border-ef-border bg-white px-4 py-3 text-[1.0625rem] outline-none focus:border-ef-indigo focus:ring-1 focus:ring-ef-indigo";

type GeneratorFormProps = {
  resource: Resource;
  isGenerating: boolean;
  yearGroups: string[];
  onToggleYearGroup: (yearGroup: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  interests: string[];
  onInterestsChange: (tags: string[]) => void;
  onSubmit: () => void;
  submitLabel?: string;
};

export function GeneratorForm({
  resource,
  isGenerating,
  yearGroups,
  onToggleYearGroup,
  location,
  onLocationChange,
  interests,
  onInterestsChange,
  onSubmit,
  submitLabel = "Generate teaching resource",
}: GeneratorFormProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div>
        <span className="block text-base font-bold">Year group</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {resource.yearGroups.map((yg) => {
            const selected = yearGroups.includes(yg);
            return (
              <button
                key={yg}
                type="button"
                aria-pressed={selected}
                onClick={() => onToggleYearGroup(yg)}
                className={`ef-pill !px-3.5 !py-2 transition ${
                  selected
                    ? "!bg-ef-indigo !text-white"
                    : "!border !border-ef-border !bg-white hover:!border-ef-indigo"
                }`}
              >
                {yg}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-base font-bold">
          Location
        </label>
        <p className="mt-0.5 text-sm text-ef-indigo/60">
          Pre-filled from your school profile
        </p>
        <input
          id="location"
          value={location}
          required
          className={fieldClasses}
          onChange={(e) => onLocationChange(e.target.value)}
        />
      </div>

      <TagInput
        id="interests"
        label="Student interests"
        hint="Press Enter after each one"
        placeholder="Add an interest…"
        tags={interests}
        onChange={onInterestsChange}
      />

      <button
        type="submit"
        disabled={isGenerating}
        className="ef-btn mt-1 justify-self-start !px-7 !py-3 !text-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isGenerating ? "Generating…" : submitLabel}
      </button>
    </form>
  );
}
