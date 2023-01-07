<script lang="ts">
	import { fade } from 'svelte/transition'
  
  export let show: Boolean

  let isSocial = false
</script>

<section class="min-w-max
                flex justify-center items-center">
  {#if (show)}
  <form class="p-10 max-w-sm bg-slate-50 shadow-2xl
               border-2 rounded-xl
               flex flex-col gap-2"
  in:fade="{{delay: 250}}" method="POST" >
    <label class="flex flex-col">
      <span class="text-gray-700 font-medium">Nome Completo</span>
      <input class="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200 bg-slate-50
                    focus:ring-0 focus:border-black"
      type="text" name="name" />
    </label>
    <label class="flex flex-col">
      <span class="text-gray-700 font-medium">Email</span>
      <input class="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200 bg-slate-50
                    focus:ring-0 focus:border-black"
        type="email" name="email" />
    </label>
    <label class="flex flex-col">
      <span class="text-gray-700 font-medium">Telefone (Whatsapp)</span>
      <input class="mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200 bg-slate-50
                    focus:ring-0 focus:border-black"
             type="text" name="fone"
      />
    </label>
    <label class="flex flex-col gap-2">
      <span class="text-gray-700 font-medium">Você faz parte de algum projeto social ou igreja local?</span>
      <input type="checkbox" name="isSocial" bind:checked={isSocial} class="rounded-full"/>
    </label>
    {#if (isSocial === true)}
      <label class="flex flex-col">
        <span class="text-gray-700 font-medium">Qual o nome?</span>
        <input class="mt-0
                      block
                      w-full
                      px-0.5
                      border-0 border-b-2 border-gray-200 bg-slate-50
                      focus:ring-0 focus:border-black"
                type="text" name="social"
        />
      </label>
    {/if}
    <label class="flex flex-col gap-2">
      <span class="text-gray-700 font-medium">Concordo em investir o valor de R$ 15,00 para confirmar minha inscrição.</span>
      <input type="checkbox" name="knowPayment" class="rounded-full"/>
    </label>
    <button class="bg-green-500 hover:bg-green-400 
                   text-white font-bold 
                    py-2 px-4
                    mt-5 
                    border-b-4 border-green-700 hover:border-green-500 rounded
    ">Confirmar Inscrição</button>
  </form>
  {/if}
</section>