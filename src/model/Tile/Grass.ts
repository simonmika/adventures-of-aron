import { Base, register } from "./Base"

export class Grass extends Base {
	readonly type = "grass"
	readonly layer = "ground"
	readonly walkable = true
}
register("grass", Grass)
