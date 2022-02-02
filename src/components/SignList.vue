<template>
  <div
    class="mt-4"
    v-if="subscribers.length > 0"
  >
    <p class="font-semibold text-xl mb-2">
      {{ subscribers.length }} Companies &amp; individuals signed this letter
    </p>

    <p class="flex items-center flex-col sm:flex-row mb-6">
      List is now closed, but you can
      <a
        href="#newsletter"
        class="
          ml-2 px-4 py-1
          text-gray-100 font-semibold
          rounded
          bg-primary
          hover:bg-gray-600
          transition-colors
        "
      >
        Subscribe to the newsletter
      </a>
    </p>

    <ul class="sm:grid sm:grid-cols-2">
      <li
        v-for="({ name, company, avatar }) in subscribers"
        :key="`${name}-${avatar}`"
        class="
          flex flex-row items-center
          mb-2
          text-sm text-gray-700
        "
      >
        <img
          class="inline w-5 h-5 mr-2 rounded-full"
          :data-src="avatar"
          width="20"
          height="20"
        />
        {{ name }}{{ company ? ` @ ${company}` : '' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    subscribers: {
      type: Array,
      required: true
    },
    groupId: {
      type: Number,
      required: true
    }
  },
  mounted() {
    const lazyImages = [...this.$el.querySelectorAll('img[data-src]')]

    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        }

        const lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        lazyImageObserver.unobserve(lazyImage)
      })
    })

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage)
    })
  }
}
</script>
