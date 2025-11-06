"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TopicFilterProps {
  topics: string[];
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
}

const TopicFilter: React.FC<TopicFilterProps> = ({
  topics,
  selectedTopic,
  setSelectedTopic,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (t: string) => {
    setSelectedTopic(t);
    setIsOpen(false); // close dropdown on select
  };

  return (
    <div className="mb-6">
      {/* --- Mobile Dropdown --- */}
      <div className="sm:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
        >
          <span>{selectedTopic}</span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 shadow-lg z-20">
            <div className="grid grid-cols-2 gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => handleSelect(t)}
                  className={`px-3 py-2 rounded-full border text-sm transition-all duration-200
                  ${
                    selectedTopic === t
                      ? "bg-zinc-800 text-white dark:bg-zinc-100 dark:text-black shadow-md"
                      : "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- Desktop Flex Layout --- */}
      <div className="hidden sm:flex flex-wrap gap-2">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => handleSelect(t)}
            className={`px-3 py-2 rounded-full border text-sm sm:text-base transition-all duration-200
            ${
              selectedTopic === t
                ? "bg-zinc-800 text-white dark:bg-zinc-100 dark:text-black shadow-md"
                : "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopicFilter;
