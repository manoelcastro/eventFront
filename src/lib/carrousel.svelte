<script lang="ts">
  import carrousel1 from '$lib/assets/carrousel1.jpg'
  import carrousel2 from '$lib/assets/carrousel2.jpg'
  import carrousel3 from '$lib/assets/carrousel3.jpg'
  import carrousel4 from '$lib/assets/carrousel4.jpg'
  import carrousel5 from '$lib/assets/carrousel5.jpg'
  import carrousel6 from '$lib/assets/carrousel6.jpg'
  import carrousel7 from '$lib/assets/carrousel7.jpeg'
  import carrousel8 from '$lib/assets/carrousel8.jpg'
  import carrousel9 from '$lib/assets/carrousel9.jpeg'
  import carrousel10 from '$lib/assets/carrousel10.jpg'
  import carrousel11 from '$lib/assets/carrousel11.jpg'
  import carrousel12 from '$lib/assets/carrousel12.jpg'
  import carrousel13 from '$lib/assets/carrousel13.jpg'
  import carrousel14 from '$lib/assets/carrousel14.jpg'

  export let formShowed: Boolean

  const pictures = [
    carrousel1,
    carrousel2,
    carrousel3,
    carrousel4,
    carrousel5,
    carrousel6,
    carrousel7,
    carrousel8,
    carrousel9,
    carrousel10,
    carrousel11,
    carrousel12,
    carrousel13,
    carrousel14
  ]

  let carrouselState = 0

  $: show = pictures[carrouselState]

  let actualInterval = setInterval(() => next(), 4000)

  const next = (interval?: NodeJS.Timer) => {
    if (interval) {
      refreshInterval(interval)
    }

    carrouselState = carrouselState + 1 === pictures.length ? 0 : carrouselState + 1
  }

  const previus = (interval: NodeJS.Timer) => {
    refreshInterval(interval)

    carrouselState = carrouselState - 1 < 0 ? pictures.length - 1 : carrouselState - 1
  }

  const refreshInterval = (interval?: NodeJS.Timer) => {
    if (interval) clearInterval(interval)

    actualInterval = setInterval(() => next(), 4000)
  }
</script>

<figure class="h-full w-full
               brightness-50 md:brightness-100 {formShowed === true ? 'blur-sm brightness-50' : ''}
">
  <img class="h-full w-full object-cover" src={show} alt="Imagens de KidsGames">
</figure>