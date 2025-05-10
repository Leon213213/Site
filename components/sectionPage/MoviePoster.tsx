import React from "react";
import CarouselVideo from "@/components/CarouselVideo";
import Videos from "@/data/Videos";

const MoviePosterCarousel = ({ movieID }: { movieID: number }) => {
  // Find the movie by ID
  const movie = Videos.find((video) => video.id === movieID);

  if (!movie) {
    return;
  }

  // Extract the poster and video URLs
  const { poster, videoURI } = movie;
  const videos = videoURI.map((item) => item.video);

  return <CarouselVideo poster={poster} videos={videos} />;
};

export default MoviePosterCarousel;
