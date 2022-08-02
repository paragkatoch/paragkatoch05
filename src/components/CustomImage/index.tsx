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
			<Image src={src} alt={alt} {...imageProperties} />
		</div>
	);
}
