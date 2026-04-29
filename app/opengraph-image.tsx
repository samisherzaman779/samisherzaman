// # app/opengraph-image.tsx
import { createPortfolioOgImage, ogImageSize } from "@/lib/create-og-image";

export const alt = "Sami Sherzaman — Full-Stack & AI Developer portfolio";

export const size = ogImageSize;

export const contentType = "image/png";

export default function OpenGraphImage() {
  return createPortfolioOgImage();
}