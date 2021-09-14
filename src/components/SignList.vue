<template>
  <div
    class="mt-4"
    ref="list"
    v-if="people.length > 0"
  >
    <p class="font-semibold text-xl mb-2">
      Companies &amp; individuals who signed this letter:
    </p>

    <p class="flex items-center flex-col sm:flex-row mb-6">
      {{ people.length }} people signed this letter{{ newSigns > 0 ? `, ${newSigns} new since you are there` : '' }}

      <a
        href="#sign-form"
        class="
          ml-2 px-4 py-1
          text-gray-100 font-semibold
          rounded
          bg-primary
          hover:bg-gray-600
          transition-colors
        "
      >
        Sign the letter
      </a>
    </p>

    <ul class="grid sm:grid-cols-2">
      <li
        v-for="({ name, company, avatar }) in people"
        :key="name"
        class="
          flex flex-row items-center
          mb-2
          text-sm text-gray-700
        "
      >
        <img
          class="inline w-5 h-5 mr-2 rounded-full"
          :src="avatar"
        />
        {{ name }}{{ company ? ` @ ${company}` : '' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    groupId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initialCount: 0,
      people: []
    }
  },
  computed: {
    newSigns() {
      return this.people.length - this.initialCount
    }
  },
  async mounted() {
    await this.getPeople()
    this.initialCount = this.people.length

    window.addEventListener('letter-signed', this.getPeople)

    setInterval(this.getPeople, 1000 * 60)

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.getPeople()
      }
    })

    observer.observe(this.$refs.list)
  },
  methods: {
    async getPeople() {
      try {
        const people = await fetch(`/api/subscribers-list?groupId=${this.groupId}`).then(res => res.json())
        this.people = people.reverse()
      } catch (e) {
        // We hit an FUNCTION_INVOCATION_FAILED server error.
      }
    }
  }
}
</script>
