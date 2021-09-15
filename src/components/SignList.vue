<template>
  <div
    class="mt-4"
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

    <ul class="sm:grid sm:grid-cols-2">
      <li
        v-for="({ name, company, avatar }) in people"
        :key="`${name}-${avatar}`"
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
    subscribers: {
      type: Array,
      required: true
    },
    groupId: {
      type: Number,
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
  created() {
    this.people = this.subscribers
  },
  async mounted() {
    await this.getPeople()
    this.initialCount = this.people.length

    setInterval(this.getPeople, 1000 * 60)
    window.addEventListener('letter-signed', this.getPeople)
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
