<script>
	import Carrousel from "$lib/carrousel.svelte"
	import Cta from "$lib/cta.svelte";
	import Features from "$lib/features.svelte";
	import Form from "$lib/form.svelte";
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
                {formShowed ? 'row-span-3' : 'row-span-2'} md:col-start-2
      ">
      <Carrousel {formShowed} />
    </div>
  </div>
  <div class="absolute top-0 left-0
              h-screen w-full
              p-6 md:p-10
              grid grid-rows-1 md:grid-cols-2           
  ">
    <div class="h-full w-full grid grid-rows-3 {formShowed ? 'invisible md:visible': 'visible'} bg-slate-600">
      <Title />
      <SuportText />
      <div class="row-start-3 flex flex-col md:flex-col-reverse">
        <Features />
        <Cta bind:show={formShowed} />
      </div>
    </div>
    {#if (formShowed)}
      <div class="md:col-start-2 bg-slate-200   min-h-max">
        <Form show={formShowed} />
      </div>
    {/if}
  </div>
</main>