<script>
	import Carrousel from "$lib/carrousel.svelte"
	import Cta from "$lib/cta.svelte";
	import Features from "$lib/features.svelte";
	import SuportText from "$lib/suportText.svelte";
  import Title from "$lib/title.svelte"

  let formShowed = false

</script>
<main class="h-screen w-full relative">
  <div class="w-full h-full
              grid grid-rows-3 md:grid-rows-none md:grid-cols-2
    ">
    <div class=" 
                w-full h-full overflow-hidden 
                {formShowed ? 'row-span-3' : 'row-span-2'} md:row-span-1 md:col-start-2
      ">
      <Carrousel {formShowed} />
    </div>
    <div class="absolute top-0 left-0
                h-full w-full
                p-6 md:p-10
                grid grid-rows-3 md:grid-cols-2              
    ">
      <Title />
      <SuportText />
      <div class="md:col-start-1 grid grid-rows-2">
        <Features />
        <Cta bind:show={formShowed} />
      </div>

    </div>
  </div>
</main>