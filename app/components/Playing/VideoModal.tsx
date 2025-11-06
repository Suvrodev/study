"use client";
import { useRef } from "react";
import { X, ExternalLink } from "lucide-react";

interface VideoModalProps {
  video: {
    link: string;
    teacher: string;
    date: string;
    day: string;
  };
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePiP = async () => {
    try {
      // Picture-in-Picture works only for <video>, not iframe
      // So we open YouTube player directly
      window.open(video.link.replace("embed/", "watch?v="), "_blank");
    } catch (err) {
      console.error("PiP failed:", err);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg w-[90%] max-w-2xl relative p-4 animate-[fadeIn_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-700 dark:text-zinc-300 hover:text-red-500"
        >
          <X size={22} />
        </button>

        {/* PiP button */}
        <button
          onClick={handlePiP}
          className="absolute top-3 left-3 text-zinc-700 dark:text-zinc-300 hover:text-blue-500"
          title="Open in floating mode"
        >
          <ExternalLink size={22} />
        </button>

        <div className="relative w-full pb-[56.25%]">
          <iframe
            ref={iframeRef}
            src={video.link}
            title={video.teacher}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center mt-3 text-sm text-zinc-600 dark:text-zinc-300">
          {video.teacher} - {video.day}, {video.date}
        </p>
      </div>
    </div>
  );
};

export default VideoModal;
