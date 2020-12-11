<template>
	<!-- <div class="row" v-for="color in colors" :key="color">
		<div class="column small--third medium--fifth space--1 column--middle">
			<div
				:class="`background--${lowerCase(
					color
				)} color--accent border-radius--1 width--10
					height--10 border--1 `"
			></div>
			<h4 style="margin-left: 1em" :class="`color--${lowerCase(color)}`">
				{{ color }}
			</h4>
		</div>
		<div class="column small--third medium--fifth column--middle">
			<pre>
				<code>
					--{{ lowerCase(color) }}
					.background--{{ lowerCase(color) }}
					.color--{{ lowerCase(color) }}
				</code>
			</pre>
		</div>
		<div v-if="shades" class="column medium--two-fifth space--1 column--middle">
			<div class="row gap--1">
				<span
					v-for="idx in 9"
					:key="idx"
					:class="`background--${lowerCase(color)}-${
						idx * 10
					} space--1 font-size--2 border-radius--1`"
					>{{ idx * 10 }}</span
				>
			</div>
		</div>
	</div> -->

	<div v-for="color in colors" :key="color" style="display: flex">
		<div class="space--1">
			<div style="display: flex; width: 100%">
				<div
					:class="`background--${lowerCase(
						color
					)} flex-shrink: 0;display:block; color--accent border-radius--1 width--10
					height--10 border--1 `"
				></div>
				<h4
					style="margin-left: 1em; width: 100%"
					:class="`color--${lowerCase(color)}`"
				>
					{{ color }}
				</h4>
				<div>
					<span
						v-if="shades"
						style="margin-left: 1em; position: relative; top: -0.5em"
						v-for="idx in 9"
						:key="idx"
						:class="`background--${lowerCase(color)}-${
							(10 - idx) * 10
						} space--1 font-size--2 border-radius--1`"
						>{{ (10 - idx) * 10 }}</span
					>
				</div>
			</div>
			<pre>
				<code>
--{{ lowerCase(color) }}
.background--{{ lowerCase(color) }}
.color--{{ lowerCase(color) }}
				</code>
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		colors: {
			type: Array,
			default: [],
		},
		shades: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		lowerCase: (str) => str.toLowerCase(),
	},
};
</script>