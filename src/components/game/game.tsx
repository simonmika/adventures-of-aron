import { Component, h, Listen, State } from "@stencil/core"
import { Direction, Game, Position } from "../../model"

@Component({
	tag: "aron-game",
	styleUrl: "game.css",
	scoped: true,
})
export class AronGame {
	@State() game: Game = Game.create()
	@Listen("keydown", { target: "window" })
	onKeyDown(event: KeyboardEvent) {
		let direction: Direction | undefined
		switch (event.key) {
			case "ArrowLeft":
				direction = "left"
				break
			case "ArrowRight":
				direction = "right"
				break
			case "ArrowUp":
				direction = "up"
				break
			case "ArrowDown":
				direction = "down"
				break
		}
		if (direction)
			this.game = this.game.move(direction)
	}
	render() {
		console.log("game", this.game)
		return [
			<aron-map map={this.game.map} offset={new Position(0, 0)}></aron-map>,
			<aron-hero hero={this.game.hero}></aron-hero>,
		]
	}
}
