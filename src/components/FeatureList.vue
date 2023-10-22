<template>
    <div class="bg-surface">
        <section>
            <h2 class="mb-5 md:mb-14 sm:text-center">Bloom by Spring Financial Concierge <span class="text-primary">features</span></h2>
            <!-- Feature Desktop Only -->
            <div class="hidden lg:flex justify-center gap-20">
                <!-- Tabs -->
                <ul class="w-5/12 bg-white px-10 rounded-3xl">
                    <li 
                    v-for="item in tabList" 
                    @click="activeTab(item.id)" 
                    :class="[Tab === item.id ?'text-primary': '']"
                    class="py-8  font-normal cursor-pointer duration-300 border-b last:border-0 hover:text-primary"
                    >
                        <h4 class="font-normal">{{ item.title }}</h4>
                    </li>
                </ul>
                <!-- Tab Contents -->
                <div class="w-5/12">
                    <!-- Tab Contents Area -->
                    <div 
                        v-for="item in tabList" 
                        :class="[Tab === item.id ?'block': 'hidden']"
                        class="space-y-5"
                    >
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                    <!-- Form Subscription -->
                    <div class="space-y-5 mt-12">
                        <div class="flex items-center gap-5 ">
                            <img src="../assets/bloom-logo.png" alt="bloom-logo">
                            <h5 class="">by Spring Financial</h5>
                        </div>
                        <h3>Join today for just $9.99/month</h3>
                        <form action="">
                            <input type="text" placeholder="Email Address" class="mb-10">
                            <PrimaryButton>Start Now</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Feature Accordion Mobile and Tablet Only -->
            <div class="lg:hidden bg-white px-5 rounded-xl">
                <div v-for="item in tabList" class="py-6 font-normal cursor-pointer duration-300 border-b last:border-0">
                    <div class="flex justify-between items-center">
                        <h4 :class="[Tab === item.id ?'font-semibold': 'font-normal']">{{ item.title }}</h4>
                        <span class="p-3" @click="activeTab(item.id)">
                            <svg :class="[Tab === item.id ?'rotate-45  duration-200': '']" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 1L6 11" stroke="#11A404" stroke-width="2" stroke-linecap="round"/> <path d="M11 6L1 6" stroke="#11A404" stroke-width="2" stroke-linecap="round"/> </svg>
                        </span>
                    </div>
                    <div class="py-4 space-y-5" :class="[Tab === item.id ?'block': 'hidden']">
                        <p>{{ item.description }}</p>
                        <PrimaryButton>Join Now</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import PrimaryButton from '../components/PrimaryButton.vue'
const Tab = ref(0)
const tabList = [
    {
        id: 0,
        title: "Budgeting Template & Usage Instructions",
        description: "We provide you with a budgeting template that is customizable to your needs. We'll guide you on how to use and categorize your transactions so that you can keep track of your spending and savings. We'll give you an overview of your bills on your banking and create a quick schedule for your reoccurring bills. "
    },
    {
        id: 1,
        title: "Debt Analysis & Paydown Plan",
        description: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future."
    },
    {
        id: 2,
        title: "DTI Calculation & Customer Factors",
        description: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future."
    },
    {
        id: 3,
        title: "Bill Overview & Quick Scheduling",
        description: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future."
    },
    {
        id: 4,
        title: "1-on-1 Coaching with Spring Financial Concierge",
        description: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future."
    },
    {
        id: 5,
        title: "Monthly Financial Concierge Call",
        description: "Debt analysis and paydown plan: Our debt analysis and paydown plan service is designed to provide you with a comprehensive analysis of your debts. We will carefully analyze your debts and create a detailed paydown plan that includes specific dates and recommended payment amounts for each tradeline or debt. With this plan in hand, you'll have a clear roadmap to help you effectively manage and reduce your debts. By following our expert recommendations, you can take control of your financial situation and work towards a debt-free future."
    }
]
function activeTab(num){
    Tab.value = num
}
</script>