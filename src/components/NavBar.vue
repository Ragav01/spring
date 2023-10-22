
<template>
    <nav class="md:flex justify-between max-w-screen-xl mx-auto absolute left-0 right-0 z-10 py-5 space-y-3"
    :class="[open ? 'bg-white' :'bg-transparent']">
      <!-- logo -->
      <RouterLink to="/">
        <img class="w-[84px] h-[32px]" src="../assets/sprint-logo.png" alt="Logo-spring">
      </RouterLink>
      <!-- Toggle button -->
      <button @click="MenuOpen()" class="absolute md:hidden top-2 right-4">
        <!-- Open Icon -->
        <svg :class="[open ? 'hidden': 'block']" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33325 6.66663H26.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.33325 16H26.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.33325 25.3334H26.6666" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- Close Icon -->
        <svg :class="[open ? 'block': 'hidden']" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3334 6.66663L6.66675 25.3333M6.66675 6.66663L25.3334 25.3333" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </button>
      <!-- Navigation Links -->
      <ul  class="md:flex md:items-center gap-x-8 md:static absolute left-0 md:w-auto w-full bg-white md:bg-transparent" 
           :class="[open ? 'block': 'hidden']">
        <li v-for="link in Links" class="p-6 md:p-0">
            <RouterLink :to="link.link" class="flex items-center space-x-2 font-medium text-text-base hover:text-primary">
                <p>{{link.name}}</p>
                <span v-if="link.dropdown">
                    <svg class="mt-0.5" width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.248 0.763672L12.0703 0.585938C11.9434 0.458984 11.7656 0.458984 11.6387 0.585938L6.6875 5.53711L1.71094 0.585938C1.58398 0.458984 1.40625 0.458984 1.2793 0.585938L1.10156 0.763672C0.974609 0.890625 0.974609 1.06836 1.10156 1.19531L6.45898 6.55273C6.58594 6.67969 6.76367 6.67969 6.89062 6.55273L12.248 1.19531C12.375 1.06836 12.375 0.890625 12.248 0.763672Z" fill="black"/> </svg>
                </span>
            </RouterLink>
        </li>
      </ul>
    </nav>
</template>

<script>
 import { ref } from 'vue'
 import { RouterLink } from 'vue-router'
 export default{
   setup(){
    let open = ref(false)
    let Links = [
      {name: "Products", link: "/", dropdown: true},
      {name: "Reviews", link: "/thankyou", dropdown: false},
      {name: "Blog", link: "/", dropdown: false},
      {name: "About", link: "/", dropdown: true},
      {name: "Help Centre", link: "/", dropdown: false}
    ]

    function MenuOpen(){
      open.value = !open.value
    }
    return {Links, open, MenuOpen}
  }
 }
</script>
