import { Base, types } from "./Base"
import { Grass } from "./Grass"
import { Rock } from "./Rock"
import { Type } from "./Type"
import { Gravel } from "./Gravel"
import { Water } from "./Water"

export { Grass, Rock, Water, Gravel, Base, Type }

export function load(type: Type): Base {
	const t = types[type]
	return t ? new t() : new Rock()
}
