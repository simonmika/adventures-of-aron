import { Base, register } from "./Base"

export class Water extends Base {
	readonly type = "water"
	readonly layer = "ground"
	readonly walkable = false
}
register("water", Water)
