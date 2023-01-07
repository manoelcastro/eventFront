<script lang="ts">
  import magic from '$lib/assets/magic.png'
  import love from '$lib/assets/love.png'
  import time from '$lib/assets/time.png'
  import bible from '$lib/assets/bible.png'

  const show = [
    {
      image: time,
      text: 'Alcance tempo de qualidade com crianças'
    },
    {
      image: love,
      text: 'Fale do amor de Jesus sem pregar'
    },
    {
      image: bible,
      text: 'Pratique e ensine os valores cristãos'
    },
    {
      image: magic,
      text: 'Ensine de forma criativa e divertida'
    }
  ]
</script>

<div class="grid grid-cols-4 py-3
            w-full h-full
">
  {#each show as feature (feature)}  
  
  <div class="p-2 w-full md:w-9/12
              border shadow-xl rounded-2xl 
              flex flex-col justify-around items-center
              hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50
  ">
      <figure>
        <img class="w-5 md:w-10 object-cover" src={feature.image} alt="imageFeature">
      </figure>
      <span class="font-light md:font-semibold text-[8px] md:text-[10px] font-['Inter'] text-center">{feature.text}</span>
    </div>
  {/each}
</div>