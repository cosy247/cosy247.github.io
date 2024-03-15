<template>
	<div class='Pictrues'>Pictrues
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
		console.log(123123);
		console.log(this.$slots);
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
