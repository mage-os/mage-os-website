<template>
  <div
    class="
      flex flex-col md:flex-row
      max-w-4xl
      my-10
      rounded
      overflow-hidden
    "
  >
    <div
      class="
        md:flex items-center justify-center
        md:w-1/2
        bg-orange-400
      "
    >
      <div class="p-8 sm:p-12 md:p-0">
        <h2 class="text-3xl font-semibold text-gray-100">
          Sign the letter
        </h2>
        <p class="mt-2 text-white">
          Do you support this idea? <br />
          Let other know about it!
        </p>
      </div>
    </div>

    <div
      class="
        flex items-center justify-center
        md:w-1/2
        p-4 md:p-12
        bg-gray-100
      "
    >
      <form
        class="flex flex-col w-full"
        @submit.prevent="subscribe"
      >
        <label for="input" lass="label">
          Email
        </label>
        <input
          id="input"
          class="input"
          type="email"
          v-model="email"
          required
        />

        <label for="email" lass="label">
          Name
        </label>
        <input
          id="email"
          class="input"
          type="text"
          v-model="name"
          required
        />

        <label for="company" class="label">
          Company (optional)
        </label>
        <input
          id="company"
          class="input"
          type="text"
          v-model="company"
        />

        <button
          class="
            py-3 px-4
            text-gray-100 font-semibold
            rounded
            bg-primary
            hover:bg-gray-600
          "
          type="submit"
        >
          Sign the letter
        </button>

        <div
          v-if="msg"
          class="
            flex justify-between
            mt-4 px-6 py-4
            bg-orange-100
            rounded
            text-orange-600
            font-semibold
          "
        >
          {{ msg }}
        </div>
      </form>
    </div>
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
        email: '',
        name: '',
        company: '',
        msg: ''
      }
    },
    methods: {
      async subscribe() {
        try {
          const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
              groupId: this.groupId,
              email: this.email,
              name: this.name,
              company: this.company
            })
          })

          if (response.status === 200) {
            this.msg = 'Letter signed!'
            window.dispatchEvent(new Event('letter-signed'))
          } else {
            this.msg = 'Something went wrong!'
          }
        }
        catch (error) {
          this.msg = error.message
        }
      }
    }
  }
</script>

<style scoped>
  .label {
    @apply mb-2;
  }

  .input {
    @apply py-3 px-4 mb-4;
    @apply bg-white;
    @apply rounded;
  }
</style>
