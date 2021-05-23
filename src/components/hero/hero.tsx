import { Component, h, Host, Prop } from "@stencil/core"
import { Hero } from "../../model"
import hero from "./hero.svg"

@Component({
	tag: "aron-hero",
	styleUrl: "hero.css",
	scoped: true,
})
export class AronHero {
	@Prop() hero: Hero
	render() {
		return (
			<Host
				style={{
					left: (this.hero.position.x * 256).toString() + "px",
					top: (this.hero.position.y * 256).toString() + "px",
				}}>
				<img src={hero} />
			</Host>
		)
	}
}
