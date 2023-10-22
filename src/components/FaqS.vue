<template>
    <section class="lg:px-20">
        <h2 class="text-center mb-10">Frequently Asked <span class="text-primary">Questions</span></h2>
        <div v-for="item in FaqList" class="py-5 space-y-3 border-b border-black">
            <!-- FAQ Question -->
            <div @click="activeFaq(item.id)" class="flex justify-between gap-x-4 cursor-pointer">
                <h4>{{ item.question }}</h4>
                <span @click="activeFaq(item.id)" :class="[faqTab === item.id ?'rotate-[135deg] duration-300': '-rotate-45']" class="block h-3 w-3 cursor-pointer border-2 border-t-0 border-r-0 border-primary"></span>
            </div>
            <!-- FAQ Answer -->
            <p :class="[faqTab === item.id ?'': 'hidden']">
                {{ item.answer }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const faqTab = ref(0)
function activeFaq(num){
    faqTab.value = num
}
const FaqList = [
    {
        id: 0,
        question: "How does Bloom by Spring Financial help me manage my finances?",
        answer: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future.",
    },
    {
        id: 1,
        question: "How does the budgeting template work?",
        answer: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future.",
    },
    {
        id: 2,
        question: "How does the debt analysis and paydown plan work?",
        answer: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future.",
    },
    {
        id: 3,
        question: "What does the 1 on 1 coaching with my financial concierge entail?",
        answer: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future.",
    },
]
</script>