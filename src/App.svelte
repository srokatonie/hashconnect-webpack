<script lang="ts">

	import { HashConnect, HashConnectTypes } from 'hashconnect';

	let pairingString: string = null
	let connectionMessage: string = null

	const hashconnect = new HashConnect();
	const appMetadata: HashConnectTypes.AppMetadata = {
    name: "Svelte dApp ",
    description: "Svelte dApp",
    icon: "https://bafybeiglmlk7tmsfnyfmz2deyqcifb2u2t2axa26uwm6da4wybi7mbr3um.ipfs.dweb.link/"
	}

	async function onConnect() {
		connectionMessage = `Getting pairing string...`
		const initData = await hashconnect.init(appMetadata);
		const state = await hashconnect.connect();
		pairingString = hashconnect.generatePairingString(state, "testnet", false);
		hashconnect.findLocalWallets()
		if (pairingString) {
			connectionMessage = null
		}
	}

</script>

<main>
	<h1>Hello</h1>
	<p>
		<button on:click="{onConnect}">Connect</button>
	</p>

	{#if connectionMessage }
	<p><em>{connectionMessage}</em></p>
	{/if}

	{#if pairingString }
	<p><strong>Your pairingString:</strong></p>
	<p><code>{pairingString}</code></p>
	{/if}

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 640px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	code {
		word-break: break-all;
	}
</style>
