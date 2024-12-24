<script lang="ts">
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';

	let { data } = $props();
	let messageContent = $state();
</script>

<svelte:head>
	<title>Gửi tin nhắn ẩn danh!</title>
</svelte:head>

<div>
	<h1>Chào mọi người, mình là bkhang</h1>
	<h2>{data.requestIp}</h2>
	<textarea name="" id="" bind:value={messageContent}></textarea>
	<button
		class=""
		onclick={() => {
			addDoc(collection(db, 'messages'), {});
		}}>Gửi tin nhắn ẩn danh!</button
	>
</div>
