<script lang="ts">
	import { fade } from 'svelte/transition'

  export let show: Boolean
</script>

<div class="md:order-1 w-full h-full flex justify-center items-center">
  {#if (!show)}
    <button class="bg-gradient-to-l from-green-400 to-green-600
                  hover:brightness-90
                  w-full md:w-96 p-4 rounded-xl
                  font-['Poppins'] font-bold text-white shadow-sm
    " on:click={() => show = true} out:fade="{{delay: 250}}" >QUERO PARTICIPAR</button>
  {/if}
</div>