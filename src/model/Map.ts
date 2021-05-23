import { Position } from "./Position"
import * as Tile from "./Tile"

export class Map {
	readonly size: { readonly width: number; readonly height: number }
	private constructor(private readonly tiles: readonly Tile.Base[][]) {
		this.size = { width: tiles[0].length, height: tiles.length }
	}
	get(position: Position): Tile.Base | undefined {
		return position.x >= 0 && position.x < this.size.width && position.y >= 0 && position.y < this.size.height
			? this.tiles[position.y][position.x]
			: undefined
	}
	static load(data: Tile.Type[][]): Map {
		return new Map(data.map(row => row.map(Tile.load)))
	}
}
