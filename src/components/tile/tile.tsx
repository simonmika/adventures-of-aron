import { Component, h, Prop } from "@stencil/core"
import { Map, Point } from "../../model"
import { graphics } from "./graphics"

@Component({
	tag: "aron-tile",
	styleUrl: "tile.css",
	scoped: true,
})
export class AronTile {
	@Prop() map: Map
	@Prop() position: Point
	render() {
		const tile = this.map.get(this.position)
		return tile ? [<img src={graphics[tile.type]} />, <span>{this.position.toString()}</span>] : []
	}
}
