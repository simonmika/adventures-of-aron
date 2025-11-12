export type Direction = (typeof Direction.values)[number]
export namespace Direction {
	export const values = ["left", "right", "up", "down"] as const
}
