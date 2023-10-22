<template>
    <section class="flex justify-center">
        <!-- Mobile Mockup Desktop Only -->
        <div class="w-6/12  hidden md:flex lg:justify-center">
            <img src="../assets/mobile-mockup.png" alt="App">
        </div>
        <div class="md:w-5/12 space-y-10 lg:pr-10">
            <h2 class="text-center md:text-left">Gain <span class="text-primary">Ongoing Support From Experts</span> and Take Control of Your Financial Well-Being.</h2>
            <!-- Mobile Mockup Small Device Only -->
            <div class="md:hidden flex justify-center">
                <img src="../assets/mobile-mockup.png" alt="App">
            </div>
            <ul class="relative">
                <li 
                v-for="item in supports"
                class="pl-10 py-2 before:block before:h-5 before:w-3 before:border-b-4 before:border-r-4 before:rotate-45 before:border-primary before:absolute before:left-0"
                >
                <h4 class="font-normal">{{ item.title }}</h4>
                </li>
            </ul>
            <PrimaryButton>Apply Now</PrimaryButton>
        </div>
    </section>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue';

const supports= [
    {title: 'Financial Relief and Stress-Free Budgeting'},
    {title: 'Accelerating Debt Payoff'},
    {title: 'Achieving Personal Savings Goals'},
    {title: 'Mastering Money Management'},
    {title: 'Confidence in Financial Decisions'},
]
</script>