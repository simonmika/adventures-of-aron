import { model } from "../../../model"

import grass from "./grass.svg"
import rock from "./rock.svg"
import water from "./water.svg"
import gravel from "./gravel.svg"
import forest from "./forest.svg"

export const graphics: Record<model.Tile.Type, string> = {
	grass,
	rock,
	water,
	gravel,
	forest,
}
