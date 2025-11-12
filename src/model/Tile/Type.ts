export type Type = (typeof Type.values)[number]

export namespace Type {
	export const values = ["grass", "rock", "water", "gravel", "forest"] as const
}
