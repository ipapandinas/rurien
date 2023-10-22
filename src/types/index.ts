import type { ImageMetadata } from "astro";

export type GalleryMedia = {
  image: ImageMetadata;
  title: string;
  size: string;
  technique: string;
};
