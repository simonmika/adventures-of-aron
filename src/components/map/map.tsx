import { Component, h, Host, Prop } from "@stencil/core"
import { model } from "../../model"

@Component({
	tag: "aron-map",
	styleUrl: "map.css",
	scoped: true,
})
export class AronMap {
	@Prop() map: model.Map
	@Prop() scope: model.Bounds
	render() {
		return (
			<Host style={{ width: ((this.scope.size.width + 1) * 64).toString() + "px" }}>
				{[...this.map.ground(this.scope)].map(tile => (
					<aron-tile tile={tile}></aron-tile>
				))}
				{[...this.map.canopy(this.scope)].map(tile => (
					<aron-tile tile={tile}></aron-tile>
				))}
			</Host>
		)
	}
}
