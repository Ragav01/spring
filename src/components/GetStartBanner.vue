
<template>
    <div class="bg-gradient-to-t from-[#DAFFE3] via-[#F7FEF9] to-white ">
        <section class="h-[600px] lg:h-[746px] flex flex-col items-center justify-center gap-8">
            <div class="flex gap-2">
                <span class=" bg-primary h-[70px] w-[50px] mt-4 rounded-tr-[40px] rounded-bl-[40px]"></span>
                <span class=" bg-primary opacity-30 h-[100px] w-[70px]  rounded-tl-[40px] rounded-br-[40px]"></span>
            </div>
            <h2 class="text-center">Ready to Get Started? <span class="block text-primary">Bloom Into Financial Freedom.</span></h2>
            <PrimaryButton>Apply Now</PrimaryButton>
        </section>
    </div>
</template>
<script setup>
import PrimaryButton from './PrimaryButton.vue';

</script>