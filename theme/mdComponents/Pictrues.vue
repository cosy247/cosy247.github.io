<template>
	<div class='Pictrues'>Pictrues
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Pictrues',
	components: {},
	data: () => ({}),
	computed: {},
	watch: {},
	methods: {},
	created() {
		console.log(this);
	},
	mounted() {},
	destroy() {},
};
</script>

<style scoped>
.Pictrues {
	position: relative;
}
</style>
