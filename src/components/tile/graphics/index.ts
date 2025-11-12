import { model } from "../../../model"

import grass from "./grass.svg"
import rock from "./rock.svg"
import water from "./water.svg"
import gravel from "./gravel.svg"
import forest from "./forest.svg"

export const graphics: Partial<Record<model.Tile.Type | model.Tile.Variant, string>> = {
	grass,
	"grass-grass-grass-grass-grass": grass,
	rock,
	water,
	gravel,
	forest,
}
