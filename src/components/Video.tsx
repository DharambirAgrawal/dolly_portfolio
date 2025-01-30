import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const Video: React.FC = () => {
  // Create a ref for the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Toggle video play/pause
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle state
    }
  };

  return (
    <section id="video" className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-70" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Watch My Introduction
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn more about my journey in accounting and my professional
            aspirations.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group hover:scale-105 transition-all duration-500">
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300" />

            {/* Video Element */}
            <video
              ref={videoRef}
              src="/images/introduction.mp4"
              className="w-full h-full"
            />

            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg hover:bg-blue-700 focus:outline-none"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Accounting Journey
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              In this video, I share my passion for accounting and my vision for
              the future of financial reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
