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
		const result: any[] = []
		for (let y = this.scope.top; y <= this.scope.bottom; y++)
			for (let x = this.scope.left; x <= this.scope.right; x++)
				result.push(<aron-tile map={this.map} position={new model.Point(x, y)}></aron-tile>)
		return <Host style={{ width: ((this.scope.size.width + 1) * 64).toString() + "px" }}>{result}</Host>
	}
}
