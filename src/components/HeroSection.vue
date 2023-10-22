

<template>
    <main class="bg-gradient-to-b from-[#DAFFE3] via-[#F7FEF9] to-white">
      <div class="md:flex items-center justify-between max-w-screen-xl mx-auto space-y-10 pt-20 lg:pt-0 min-h-screen ">
        <!-- Content-Wrapper -->
        <div class="md:w-6/12 lg:w-5/12 space-y-5">
          <h1>Say Hello to Your New <span class="text-primary">All-in-One</span> Financial Concierge</h1>
          <p>Say goodbye to the hassle of managing your finances! Our all-in-one financial management service takes care of everything for you, so you can focus on what really matters.</p>
          <!-- Receive Promotions Form  -->
          <div class="hidden md:block">
            <PromoForm/>
          </div>
        </div>
        <!-- Image wrapper -->
        <div class="w-full md:w-5/12 lg:w-4/12 relative">
            <div class="flex gap-5 mt-5">
                <img class="hidden md:block" src="../assets/hero-image.png" alt="Bloom-app">
                <img class="block md:hidden w-full" src="../assets/hero-image-mobile.png" alt="Bloom-app">
                <span class="hidden md:block  bg-primary opacity-30 h-20 w-16 mt-16 rounded-tl-[40px] rounded-br-[40px] "></span>
            </div>
        </div>
        <!-- Receive Promotions Form mobile  -->
        <div class="md:hidden block">
            <PromoForm/>
          </div>
      </div>
    </main>
</template>

<script setup>
import PromoForm from './PromoForm.vue'

</script>