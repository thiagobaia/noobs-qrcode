<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <span>{{ register_user.mensagem }}</span>
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
             alt="Workflow"/>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input id="name" name="name" v-model="name" type="text" autocomplete="current-text" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Name"/>
          </div>
          <div>
            <input id="age" name="age" v-model="age" type="number" autocomplete="current-number" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Age"/>
          </div>
          <div>

            <input id="email-address" name="email" v-model="email" type="email" autocomplete="email" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Email address"/>
          </div>
          <div>
            <input id="password" name="password" v-model="password" type="password" autocomplete="current-password"
                   required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password"/>
          </div>
        </div>
        <div>
          <button @click.prevent="onSubmit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "Register.vue",
  data() {
    return {
      name: '',
      age: '',
      email: '',
      password: '',
      mensagem: ''
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    onSubmit() {
      const register_user = {
        name: this.name,
        age: this.age,
        email: this.email,
        password: this.password,
      }
      this.registerUser(register_user);
    }
  },
  computed: {
    ...mapGetters(["register_user"]),
  },
}
</script>





