import { Base, register } from "./Base"

export class Gravel extends Base {
	readonly type = "gravel"
	readonly walkable = true
}
register("gravel", Gravel)
