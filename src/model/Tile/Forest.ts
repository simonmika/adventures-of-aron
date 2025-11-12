import { Base, register } from "./Base"

export class Forest extends Base {
	readonly type = "forest"
	readonly layer = "canopy"
	readonly walkable = false
}
export namespace Forest {}
register("forest", Forest)
