<template>
	<div class="row" v-for="color in colors" :key="color">
		<div class="column small--third space--1 column--middle">
			<div
				:class="`background--${lowerCase(
					color
				)} color--accent border-radius--1 width--10
					height--10 border--1 `"
			></div>
			<h4
				style="margin-left: 1em; margin-top: 0"
				:class="`color--${lowerCase(color)}`"
			>
				{{ color }}
			</h4>
		</div>
		<div class="column small--third column--middle">
			<pre>
				<code>--{{ lowerCase(color) }}
.background--{{ lowerCase(color) }}
.color--{{ lowerCase(color) }}</code>
			</pre>
		</div>
		<div v-if="shades" class="column small-full space--1 column--middle">
			<div class="row gap--1">
				<span
					v-for="idx in 9"
					:key="idx"
					:class="`background--${lowerCase(color)}-${
						idx * 10
					} space--1 font-size--2 border-radius--1`"
					style="position: relative"
					>{{ idx * 10 }}
					<span class="tooltip">
						<code>--{{ lowerCase(color) }}-{{ idx * 10 }}</code>
					</span>
				</span>
			</div>
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