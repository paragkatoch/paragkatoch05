import Image, { StaticImageData } from "next/image";

/**
 * Wrapper Component for Next.js Image Component
 * @param {String} style styles for wrapper of image component
 * @param {ImageProps} image_component_props props for the nextjs image component
 */
export default function CustomImage({
	style = "",
	src = "",
	alt = "",
	...imageProperties
}: {
	style: string;
	src: string | StaticImageData;
	alt: string;
	[key: string]: unknown;
}) {
	// src and alt destructed to prevent eslint warning
	return (
		<div className={style} style={{ position: "relative" }}>
			<Image
				src={src}
				alt={alt}
				{...imageProperties}
				placeholder="blur"
				blurDataURL={`data:image/svg+xml;base64,${toBase64(
					shimmer("100%", "100%")
				)}`}
			/>
		</div>
	);
}

const shimmer = (w: string, h: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ececec" offset="20%" />
      <stop stop-color="#f5f5f5" offset="50%" />
      <stop stop-color="#ececec" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ececec" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);
