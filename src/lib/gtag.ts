/* eslint-disable @typescript-eslint/no-unsafe-assignment */

declare global {
	interface Window {
		gtag: (type: string, id: unknown, config: unknown) => void;
	}
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

const gtag = {
	// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
	pageview: (url: unknown) => {
		window.gtag("config", GA_TRACKING_ID, {
			page_path: url,
		});
	},

	// https://developers.google.com/analytics/devguides/collection/gtagjs/events
	event: ({
		action,
		category,
		label,
		value,
	}: {
		action: unknown;
		category: unknown;
		label: unknown;
		value: unknown;
	}) => {
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	},
};

export default gtag;
