<template>
	<div>
		<input type="txet" placeholder="请输入文字" v-model="msg" @keypress.enter="enter">
		<p>{{upper}}</p>
	</div>
</template>
<style scoped>
	p{
		font-size: 2rem;
		color: blue;
	}
</style>
<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'hello Vue.js App'
			}
		},
		methods: {
			enter() {
				alert(this.msg);
			}
		},
		computed: {
			upper() {
				return this.msg.toUpperCase();
			}
		}
	}
</script>