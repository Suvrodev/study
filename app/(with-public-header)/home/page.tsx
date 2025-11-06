"use client";

import TopicFilter from "@/app/components/Playing/TopicFilter";
import VideoModal from "@/app/components/Playing/VideoModal";
import { videos } from "@/app/components/Playing/videos";
import VideoTable from "@/app/components/Playing/videoTable";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState<null | (typeof videos)[0]>(
    null
  );
  const [selectedTopic, setSelectedTopic] = useState("All");

  const topics = [
    "All",
    "Bangla-i",
    "Bangla-ii",
    "English-i",
    "English-ii",
    "Gk-i",
    "Gk-ii",
    "Math",
    "Science",
  ];

  const filteredVideos =
    selectedTopic === "All"
      ? videos
      : videos.filter((v) => v.topic === selectedTopic);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 dark:bg-black py-10 px-4">
      <main className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6">
        {/* Header Section */}
        <div className="flex flex-col items-center sm:items-start mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <h1 className="text-2xl font-semibold mt-4">🎓 Class Video List</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-center sm:text-left mt-2">
            নিচের টেবিল থেকে ক্লিক করে ভিডিও চালাতে পারো।
          </p>
        </div>

        {/* Topic Filter */}
        <TopicFilter
          topics={topics}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />

        {/* Table Section */}
        <VideoTable videos={filteredVideos} onSelectVideo={setSelectedVideo} />
      </main>

      {/* Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};

export default Home;
