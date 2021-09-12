<template>
  <div
    class="mt-8"
    v-if="people.length > 0"
  >
    <p class="font-semibold text-xl mb-2">
      Companies &amp; individuals who signed this letter
      <span v-if="newSigns > 0" class="font-normal">
        ({{ newSigns }} new sign{{ newSigns > 1 ? 's' : '' }} since opening)
      </span>
    </p>

    <ul class="grid sm:grid-cols-2">
      <li
        v-for="({ name, company, avatar }) in people.slice(0, slice)"
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

    <p
      class="block"
      v-if="people.length > slice"
    >
      And {{ people.length - slice }} more...
      <button
        class="
          ml-2 py-1 px-2
          border-secondary border-1
          rounded-xl
          text-sm font-semibold
        "
        @click="slice += 100"
      >
        Show more
      </button>
    </p>
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
      slice: 20,
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
      const people = await fetch(`/api/subscribers-list?groupId=${this.groupId}`).then(res => res.json())
      this.people = people
    }
  }
}
</script>
