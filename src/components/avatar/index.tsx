import React from "react";
import { classNamesString } from "../../lib/classNames";
import "./Avatar.css";
import { getInitials, getInitialsFontSize, getRandomColor } from "./helpers";

export type AvatarProps = {
	/**
	 * Рекомендуемый сет значений: 96 | 88 | 80 | 72 | 64 | 56 | 48 | 44 | 40 | 36 | 32 | 28 | 24
	 */
	size?: number;
	name?: string;
	userId?: number;
} & React.ImgHTMLAttributes<HTMLElement>;

function Avatar({
	size = 48,
	name,
	src,
	className,
	srcSet,
	style,
	alt,
	crossOrigin,
	decoding,
	height,
	loading,
	referrerPolicy,
	sizes,
	useMap,
	width,
	userId,
}: AvatarProps) {
	const [failedImage, setFailedImage] = React.useState(true);

	const hasSrc = src || srcSet;

	const onImageError = () => {
		setFailedImage(true);
	};

	const onImageLoad = () => {
		setFailedImage(false);
	};

	return (
		<div
			className={classNamesString(
				"Avatar",
				`Avatar__size-${size}`,
				failedImage && "Avatar__failed",
				className
			)}
			role={hasSrc ? "img" : "presentation"}
			style={{
				...style,
				width: size,
				height: size,
				borderRadius: "50%",
				backgroundColor: failedImage
					? name
						? getRandomColor(userId)
						: "var(--colors-avatar-bg)"
					: "var(--colors-avatar-bg)",
			}}
		>
			{hasSrc && (
				<img
					crossOrigin={crossOrigin}
					decoding={decoding}
					height={height}
					loading={loading}
					referrerPolicy={referrerPolicy}
					sizes={sizes}
					src={src}
					srcSet={srcSet}
					useMap={useMap}
					width={width}
					onError={onImageError}
					onLoad={onImageLoad}
					className="Avatar__img"
					alt={alt}
				/>
			)}
			{failedImage && (
				<>
					{(name && (
						<div className="Avatar__children">
							<span
								aria-hidden="true"
								style={{ fontSize: getInitialsFontSize(size) }}
								className="Avatar__name"
							>
								{getInitials(name)}
							</span>
						</div>
					)) || (
						<svg
							viewBox="0 0 128 128"
							className="Avatar__svg"
							role="img"
							aria-label="avatar"
						>
							<path
								fill="white"
								d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
							></path>
							<path
								fill="white"
								d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
							></path>
						</svg>
					)}
				</>
			)}
		</div>
	);
}

export default Avatar;
