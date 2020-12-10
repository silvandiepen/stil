<template>
	<table class="wrap middle">
		<thead>
			<tr>
				<th>Color</th>
				<th></th>
				<th>Name</th>
				<th>Variants</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="color in colors" :key="color">
				<td>
					<div
						:class="`background--${lowerCase(
							color
						)} color--accent border-radius--1 width--10
					height--10 border--1`"
					></div>
				</td>
				<td :class="`color--${lowerCase(color)}`"><h4>Aa</h4></td>
				<td>{{ color }}</td>
				<td>
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
				</td>
			</tr>
		</tbody>
	</table>
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