<script lang="ts">
	import { page } from '$app/stores';

	$: currentRoute = $page.route.id;

	const links = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Services',
			url: '/services'
		},
		{
			name: 'About Us',
			url: '/about-us'
		},
		{
			name: 'Gallery',
			url: '/gallery'
		}
	];
</script>


<nav class="fixed top-0 inset-x-0 z-50 bg-white min-h-[60px] flex items-center shadow shadow-gray-100">
	<div class="wrapper text-gray-700 flex justify-between">
		<a class="text-2xl tracking-tight font-bold" href="/">Yacht Haulers </a>

		<div class="flex space-x-6 items-center text-gray-500 font-semibold text-sm">
			{#each links as link (link.url)}
				<a class:text-primary-500={currentRoute === link.url} class="hover:text-primary-500" href="{link.url}">{link.name}</a>
			{/each}
		</div>
	</div>
</nav>

