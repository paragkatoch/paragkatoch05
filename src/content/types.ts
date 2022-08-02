import { schemes, themes } from ".";

export type theme = typeof themes[keyof typeof themes] | "";
export type scheme = typeof schemes[keyof typeof schemes] | "";
