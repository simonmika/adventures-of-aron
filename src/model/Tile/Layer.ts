export type Layer = (typeof Layer.values)[number]

export namespace Layer {
	export const values = ["ground", "canopy"] as const
}
