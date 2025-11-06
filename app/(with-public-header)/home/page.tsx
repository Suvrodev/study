"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react"; // Next.js এ already available

const Home = () => {
  const videos = [
    {
      date: "2025-11-05",
      day: "Wednesday",
      teacher: "Suvrodeb Howlader",
      link: "https://www.youtube.com/embed/4UpcXIF4kG4",
    },
    {
      date: "2025-11-06",
      day: "Thursday",
      teacher: "Prithila Pritha",
      link: "https://www.youtube.com/embed/DLzxrzFCyOs",
    },
    {
      date: "2025-11-07",
      day: "Friday",
      teacher: "Minar Rahman",
      link: "https://www.youtube.com/embed/tAGnKpE4NCI",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 dark:bg-black py-10 px-4">
      <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6">
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

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border border-zinc-200 dark:border-zinc-700 text-left text-sm sm:text-base">
            <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-2">তারিখ</th>
                <th className="px-4 py-2">দিন</th>
                <th className="px-4 py-2">শিক্ষক</th>
                <th className="px-4 py-2 text-center">Play</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((v, i) => (
                <tr
                  key={i}
                  className={`border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                    selectedVideo.link === v.link
                      ? "bg-zinc-100 dark:bg-zinc-800"
                      : ""
                  }`}
                >
                  <td className="px-4 py-2">{v.date}</td>
                  <td className="px-4 py-2">{v.day}</td>
                  <td className="px-4 py-2">{v.teacher}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => setSelectedVideo(v)}
                      className="inline-flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300 w-9 h-9"
                      title="Play Video"
                    >
                      <Play size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Video Player */}
        {selectedVideo && (
          <div className="video-wrapper mt-8 relative w-full pb-[56.25%]">
            <iframe
              src={selectedVideo.link}
              title={selectedVideo.teacher}
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
