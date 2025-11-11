import { Base, register } from "./Base"

export class Forest extends Base {
	readonly type = "forest"
	readonly walkable = false
}
register("forest", Forest)
