<template>
	<div class="row" v-for="color in colors" :key="color">
		<div class="column small--third medium--fifth space--1 column--middle">
			<div
				:class="`background--${lowerCase(
					color
				)} color--accent border-radius--1 width--10
					height--10 border--1 `"
			></div>
		</div>
		<div
			class="column small--third medium--fifth space--1 column--middle"
			:class="`color--${lowerCase(color)}`"
		>
			<h4>Aa</h4>
		</div>
		<div class="column small--third medium--fifth column--middle">
			{{ color }}
		</div>
		<div class="column medium--two-fifth space--1 column--middle">
			<div class="row row--space-between">
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
	</div>
</template>

<script>
export default {
	props: {
		colors: {
			type: Array,
			default: [],
		},
	},
	methods: {
		lowerCase: (str) => str.toLowerCase(),
	},
};
</script>