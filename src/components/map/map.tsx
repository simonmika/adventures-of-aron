import { Component, h, Prop } from "@stencil/core"
import { Map, Position } from "../../model"

@Component({
	tag: "aron-map",
	styleUrl: "map.css",
	scoped: true,
})
export class AronMap {
	@Prop() map: Map
	@Prop() offset: Position
	render() {
		const result: any[] = []
		const viewport = this.map.size
		for (let y = 0; y < viewport.height; y++)
			for (let x = 0; x < viewport.width; x++)
				result.push(<aron-tile map={this.map} position={this.offset.add(new Position(x, y))}></aron-tile>)
		return result
	}
}
