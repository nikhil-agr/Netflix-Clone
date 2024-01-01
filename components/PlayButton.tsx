import { useRouter } from "next/router";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
      text-black
      bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-xs lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        justify-center
        hover:bg-neutral-300
        transition
        // gap-2
      "
    >
      <FaPlay size={15} /> Play
    </button>
  );
};

export default PlayButton;
