"use client";

import { useState } from "react";
import type { Resource } from "@/lib/resources";
import { mockSchoolProfile } from "@/lib/resources";
import type { GenerateRequest } from "@/lib/types";
import { TagInput } from "./TagInput";

const fieldClasses =
  "mt-1.5 w-full rounded-[5px] border border-ef-border bg-white px-4 py-3 text-[1.0625rem] outline-none focus:border-ef-indigo focus:ring-1 focus:ring-ef-indigo";

type GeneratorFormProps = {
  resource: Resource;
  isGenerating: boolean;
  onGenerate: (request: GenerateRequest) => void;
};

export function GeneratorForm({ resource, isGenerating, onGenerate }: GeneratorFormProps) {
  const [topic, setTopic] = useState(resource.defaultTopic);
  const [yearGroup, setYearGroup] = useState(resource.yearGroups[0]);
  const [location, setLocation] = useState(mockSchoolProfile.location);
  const [interests, setInterests] = useState<string[]>([]);
  const [occupations, setOccupations] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onGenerate({
      webAccountId: mockSchoolProfile.webAccountId,
      resourceId: resource.slug,
      topic,
      yearGroup,
      location,
      interests,
      occupations,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="topic" className="block text-base font-bold">
            Topic
          </label>
          <input
            id="topic"
            value={topic}
            required
            className={fieldClasses}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="yearGroup" className="block text-base font-bold">
            Year group
          </label>
          <select
            id="yearGroup"
            value={yearGroup}
            className={fieldClasses}
            onChange={(e) => setYearGroup(e.target.value)}
          >
            {resource.yearGroups.map((yg) => (
              <option key={yg}>{yg}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-base font-bold">
          Location
        </label>
        <p className="mt-0.5 text-sm text-ef-indigo/60">
          Pre-filled from your school profile ({mockSchoolProfile.schoolName}) — edit if
          you like
        </p>
        <input
          id="location"
          value={location}
          required
          className={fieldClasses}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <TagInput
        id="interests"
        label="Student interests"
        hint="Press Enter after each one — e.g. Minecraft, gymnastics, football"
        placeholder="Add an interest…"
        tags={interests}
        onChange={setInterests}
      />

      <TagInput
        id="occupations"
        label="Parent / caregiver occupations"
        hint="Press Enter after each one — e.g. warehouse manager, physiotherapist"
        placeholder="Add an occupation…"
        tags={occupations}
        onChange={setOccupations}
      />

      <button
        type="submit"
        disabled={isGenerating}
        className="ef-btn mt-1 justify-self-start !px-9 !py-4 !text-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isGenerating ? "Generating…" : "Generate teaching resource"}
      </button>
    </form>
  );
}
