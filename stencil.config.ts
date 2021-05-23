import { Config } from "@stencil/core"

export const config: Config = {
	namespace: "aron",
	taskQueue: "async",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
			buildDir: "",
		},
		{
			type: "dist-custom-elements-bundle",
		},
		{
			type: "www",
			serviceWorker: null, // disable service workers
			buildDir: "",
		},
	],
}
