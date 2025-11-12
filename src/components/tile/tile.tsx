import { Component, h, Prop, Host } from "@stencil/core"
import { model } from "../../model"
import { graphics } from "./graphics"

@Component({
	tag: "aron-tile",
	styleUrl: "tile.css",
	scoped: true,
})
export class AronTile {
	@Prop() tile: model.Tile
	render() {
		return (
			<Host
				style={{
					left: (this.tile?.position.x * 64).toString() + "px",
					top: (this.tile?.position.y * 64).toString() + "px",
				}}>
				<img src={graphics[this.tile.variant] ?? graphics[this.tile.type]} />
				<span>{this.tile.position.toString()}</span>
			</Host>
		)
	}
}
