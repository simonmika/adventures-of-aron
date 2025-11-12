import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-layer",
	styleUrl: "style.css",
	scoped: true,
})
export class AronLayer {
	@Prop() map: model.Map
	@Prop() scope: model.Bounds
	@Prop() layer: model.Tile.Layer
	render() {
		return (
			<Host style={{ width: ((this.scope.size.width + 1) * 64).toString() + "px" }}>
				{[...this.map.layer(this.layer, this.scope)].map(tile => (
					<aron-tile tile={tile}></aron-tile>
				))}
			</Host>
		)
	}
}
