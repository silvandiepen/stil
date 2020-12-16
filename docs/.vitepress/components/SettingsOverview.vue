<template>
	<div class="settings-overview">
		<table>
			<thead>
				<tr>
					<th>key</th>
					<th>value</th>
					<th>code</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="key in Object.keys(settings)">
					<td>
						<code>{{ key }}</code>
					</td>
					<td>
						<p v-html="toReadable(settings[key])"></p>
					</td>
					<td>
						<code>{{ toSassValue(settings[key]) }}</code>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="typescript">
import DefaultSettings from "../../default.json";

export default {
	computed: {
		settings() {
			return DefaultSettings;
		},
	},
	methods: {
		isSassNumber(value) {
			if (typeof value == "string") {
				return value.startsWith("0.");
			}
			return parseInt(value) > 0;
		},
		isSassFunction(value) {
			if (typeof value == "string") {
				if (
					["calc(", "min(", "max(", "var(", "url("].some((v) =>
						value.includes(v)
					)
				)
					return true;
				return false;
			}
			return false;
		},
		toSassValue(value) {
			if (
				typeof value == "number" ||
				this.isSassNumber(value) ||
				this.isSassFunction(value)
			) {
				return value;
			}
			if (typeof value == "string") {
				return value;
			}
			if (Array.isArray(value)) {
				return value.join(", ");
			}
			if (Array.isArray(value)) {
				return `(${values.join(", ")})`;
			}
			if (typeof value == "object") {
				let values = [];

				Object.keys(value).forEach((item) => {
					values.push(`${item}: ${value[item]}`);
				});

				return `(${values.join(",\n")})`;
			}
		},
		toReadable(value) {
			if (typeof value == "string" || typeof value == "number") {
				return value;
			}
			if (Array.isArray(value)) {
				return value.join(", ");
			}
			if (typeof value == "object") {
				let values = [];

				Object.keys(value).forEach((item) => {
					values.push(`${item}: ${value[item]}<br>`);
				});

				return values.join("\n");
			}
		},
	},
};
</script>