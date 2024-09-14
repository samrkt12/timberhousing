"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

type VideoSectionProps = {
  src: string;
};

const VideoSection = ({ src }: VideoSectionProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video") as HTMLVideoElement | null;

    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        className="w-full max-h-[800px] relative bg-[#F6F3F6] flex items-center justify-center overflow-hidden  lg:pb-16 "
        onClick={() => setIsLightboxOpen(true)}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto object-cover lg:rounded-[12px] cursor-pointer"
        />
      </section>

      {/* Lightbox for displaying video */}
      {isLightboxOpen && (
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          plugins={[Video]}
          slides={[
            {
              type: "video",
              autoPlay: true,
              loop: true,
              sources: [
                {
                  src: src,
                  type: "video/mp4",
                },
              ],
            },
          ]}
        />
      )}
    </>
  );
};

export default VideoSection;
