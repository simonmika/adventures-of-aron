import { Base, types } from "./Base"
import { Grass } from "./Grass"
import { Rock } from "./Rock"
import { Type } from "./Type"
import { Water } from "./Water"

export { Grass, Rock, Water, Base, Type }

export function load(type: Type): Base {
	const t = types[type]
	return t ? new t() : new Rock()
}
