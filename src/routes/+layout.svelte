<script lang="ts">
	import '../css/style.css';
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<NavBar />

<main class="min-h-[calc(100svh-190px)]">
	<slot />
</main>

<Footer />