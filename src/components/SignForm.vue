<template>
  <div
    id="sign-form"
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
          Let others know about it!
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
        <label for="input" class="label">
          Email
        </label>
        <input
          id="input"
          class="input"
          type="email"
          v-model="email"
          required
        />

        <label for="name" class="label">
          Name
        </label>
        <input
          id="name"
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
            transition-colors
          "
          type="submit"
          :disabled="isProcessing"
        >
          {{ isProcessing ? 'Processing...' : 'Sign the letter' }}
        </button>

        <div
          v-if="msg"
          :class="`
            flex justify-between
            mt-4 px-6 py-4
            rounded
            ${ msg.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600' }
            font-semibold
          `"
        >
          {{ msg.text }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      groupId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        email: '',
        name: '',
        company: '',
        msg: '',
        isProcessing: false
      }
    },
    methods: {
      async subscribe() {
        try {
          this.isProcessing = true
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
            this.msg = {
              type: 'success',
              text: 'Check your email to confirm your email address and complete the signing of the letter.'
            }
            window.dispatchEvent(new Event('letter-signed'))
          } else {
            const data = await response.json()
            this.msg = {
              type: 'error',
              text: data?.error?.message || 'Something went wrong!'
            }
          }

          this.isProcessing = false
        }
        catch (error) {
          this.msg = error.message
          this.isProcessing = false
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
