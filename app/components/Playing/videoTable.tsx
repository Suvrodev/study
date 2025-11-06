"use client";

import { Play } from "lucide-react";
import React from "react";
import { videos } from "@/app/components/Playing/videos";

interface VideoTableProps {
  videos: typeof videos;
  onSelectVideo: (video: (typeof videos)[0]) => void;
}

const VideoTable: React.FC<VideoTableProps> = ({ videos, onSelectVideo }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-zinc-200 dark:border-zinc-700 text-left text-sm sm:text-base">
        <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
          <tr>
            <th className="px-4 py-2">তারিখ</th>
            <th className="px-4 py-2">দিন</th>
            <th className="px-4 py-2">শিক্ষক</th>
            <th className="px-4 py-2">বিষয়</th>
            <th className="px-4 py-2 text-center">Play</th>
          </tr>
        </thead>
        <tbody>
          {videos.length > 0 ? (
            videos.map((v, i) => (
              <tr
                key={i}
                className="border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <td className="px-4 py-2">{v.date}</td>
                <td className="px-4 py-2">{v.day}</td>
                <td className="px-4 py-2">{v.teacher}</td>
                <td className="px-4 py-2">{v.topic}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => onSelectVideo(v)}
                    className="inline-flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300 w-9 h-9"
                    title="Play Video"
                  >
                    <Play size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-6 text-zinc-500 dark:text-zinc-400"
              >
                কোনো ভিডিও পাওয়া যায়নি।
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VideoTable;
