import { Base, register } from "./Base"

export class Grass extends Base {
	readonly type = "grass"
	readonly walkable = true
}
register("grass", Grass)
