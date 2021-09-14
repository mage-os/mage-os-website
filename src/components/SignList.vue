<template>
  <div class="mt-8 underline">
      <a href="#sign-form">Skip the list of names and go directly to the form.</a>
  </div>
  <div
    class="mt-4"
    v-if="people.length > 0"
  >
    <p class="font-semibold text-xl mb-2">
      Companies &amp; individuals who signed this letter:
      <span v-if="newSigns > 0" class="font-normal">
        ({{ newSigns }} new signature{{ newSigns > 1 ? 's' : '' }} since opening)
      </span>
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

    observer.observe(this.$el)
  },
  methods: {
    async getPeople() {
      try {
        const people = await fetch(`/api/subscribers-list?groupId=${this.groupId}`).then(res => res.json())
        this.people = people
      } catch (e) {
        // We hit an FUNCTION_INVOCATION_FAILED server error.
      }
    }
  }
}
</script>
