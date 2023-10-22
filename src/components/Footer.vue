<template>
    <footer class="p-8 lg:p-20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
       <div class="lg:flex justify-between">
        <div class="pb-10">
            <img src="../assets/trustpilot.png" alt="trustpilot">
        </div>
        <!-- Footer Links Desktop only -->
        <div class="hidden lg:flex gap-x-20">
            <div v-for="item in footerLink">
                <p class="text-lg font-semibold text-text-base pb-4">{{ item.title }}</p>
                <ul>
                    <li v-for="link in item.links" class="py-2">
                        <a href="">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="text-lg font-semibold text-text-base pb-4">Connect</p>
                <ul>
                    <li class="flex gap-4 py-2">
                        <img class="w-3" src="../assets/socialicon/facebook-f.svg" alt="">
                        <a href="">Facebook</a>
                    </li>
                    <li class="flex gap-4 py-2">
                        <img class="w-4" src="../assets/socialicon/twitter.svg" alt="">
                        <a href="">Twitter</a>
                    </li>
                    <li class="flex gap-4 py-2">
                        <img class="w-4" src="../assets/socialicon/instagram.svg" alt="">
                        <a href="">Instagram</a>
                    </li>
                    <li class="flex gap-4 py-2">
                        <img class="w-4" src="../assets/socialicon/linkedin-in.svg" alt="">
                        <a href="">Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Footer Links Small Device -->
        <div class="lg:hidden">
            <div v-for="item in footerLink">
                <div @click="activeAccordion(item.id)" class="flex justify-between items-center gap-x-4 cursor-pointer">
                    <p class="text-lg font-semibold text-text-base py-4">{{ item.title }}</p>
                    <span @click="activeAccordion(item.id)" :class="[footerAccordion === item.id ?'rotate-[135deg] duration-300': '-rotate-45']" class="block h-3 w-3 cursor-pointer border-2 border-t-0 border-r-0 border-black"></span>
                </div>
                <ul class="border-b border-black pb-5">
                    <li v-for="link in item.links" class="py-2" :class="[footerAccordion === item.id ?'': 'hidden']">
                        <a href="">{{ link.title }}</a>
                    </li>
                </ul>
            </div>
            <p class="text-lg font-semibold text-text-base py-8">Connect</p>
            <ul class="flex flex-wrap gap-y-5">
                <li class="w-1/2 flex gap-4 py-2">
                    <img class="w-3" src="../assets/socialicon/facebook-f.svg" alt="">
                    <a href="">Facebook</a>
                </li>
                <li class="w-1/2 flex gap-4 py-2">
                    <img class="w-4" src="../assets/socialicon/twitter.svg" alt="">
                    <a href="">Twitter</a>
                </li>
                <li class="w-1/2 flex gap-4 py-2">
                    <img class="w-4" src="../assets/socialicon/instagram.svg" alt="">
                    <a href="">Instagram</a>
                </li>
                <li class="w-1/2 flex gap-4 py-2">
                    <img class="w-4" src="../assets/socialicon/linkedin-in.svg" alt="">
                    <a href="">Linkedin</a>
                </li>
            </ul>
        </div>
       </div>

       <!-- Copyright -->
       <hr class="my-16">
       <div class="space-y-8">
        <p>Copyright © 2021 Spring Financial Inc. All rights reserved.  Spring Financial Inc. and its loans are not affiliated with any credit bureaus.</p>
        <p>Privacy Policy  |  General Terms | Website Terms of Service</p>
        <p class="text-sm">To qualify for The Foundation, you must have an active account with a bank or financial institution, as approved by Spring Financial, and a valid government-issued Canadian ID. The Foundation is available in all provinces except Saskatchewan, Quebec, and New Brunswick. All guarantee references are made in connection to the Evergreen Loan. To qualify for the Evergreen Loan, you must first successfully complete 12 months on The Foundation and save $750, have an active account with a bank or financial institution, as approved by Spring Financial, and a valid government-issued Canadian ID.</p>
       </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';
const footerAccordion = ref(0)
function activeAccordion(num){
    footerAccordion.value = num
}
const footerLink = [
    {
        id: 0,
        title: "Products",
        links: [
            {title: 'The Foundation', path: '/'},
            {title: 'Evergreen Loan', path: '/'},
            {title: 'Personal Loan', path: '/'},
            {title: 'Mortgages', path: '/'}
        ]
    },
    {
        id: 1,
        title: "About Us",
        links: [
            {title: 'Who We Are', path: '/'},
            {title: 'Work With Us', path: '/'}
        ]
    },
    {
        id: 2,
        title: "Resources",
        links: [
            {title: 'Blog', path: '/'},
            {title: 'Help Centre', path: '/'},
            {title: '1-888-781-8439', path: '/'}
        ]
    }
]
</script>
