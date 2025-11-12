import { Component, h, Prop } from "@stencil/core"
import { model } from "../../model"
import { graphics } from "./graphics"

@Component({
	tag: "aron-tile",
	styleUrl: "tile.css",
	scoped: true,
})
export class AronTile {
	@Prop() map: model.Map
	@Prop() position: model.Point
	render() {
		const tile = this.map.get(this.position)
		return tile && <img src={graphics[tile.variant] ?? graphics[tile.type]} />
	}
}
