<template>
    <section>
        <Swiper :slides-per-view="1" :space-between="50" :modules="modules" :pagination="true">
            <swiper-slide>
                <div class="bg-surface w-full h-[800px] lg:h-[520px] flex flex-col lg:flex-row gap-12 p-5 rounded-3xl">
                    <div class="lg:w-1/2 flex items-center justify-center">
                        <img class="h-[160px] sm:h-[380px] lg:h-auto" src="../assets/slide-budget.png" alt="Lear to Budget">
                    </div>
                    <div class="lg:w-1/2 lg:p-16 space-y-4 relative">
                        <h2 class="text-primary">Learn to Budget like the Pros</h2>
                        <p>Ready to take your budgeting skills to the next level? With Bloom by Spring Financial, you can learn to budget like the pros and achieve your financial goals.</p>
                        <p>Our customizable budgeting template makes it easy to track your spending and savings. We'll show you how to categorize your transactions and analyse your expenses, giving you a clear picture of where your money is going. Our expert financial concierges will provide you with valuable tips and strategies to help you make the most of your budget, whether you're saving for emergencies or planning for major purchases.</p>
                        <h5 class="font-medium lg:absolute bottom-8">Full Access to budgeting tools | Bill Tracking | Savings Analysis</h5>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-surface w-full h-[800px] lg:h-[520px] flex flex-col lg:flex-row gap-12 p-5 rounded-3xl">
                    <div class="lg:w-1/2 flex items-center justify-center">
                        <img class="h-[160px] sm:h-[380px] lg:h-auto" src="../assets/slide-debt.png" alt="Analysis">
                    </div>
                    <div class="lg:w-1/2 lg:p-16 space-y-4 relative">
                        <h2 class="text-primary">Understand your Debt and How to Lower It</h2>
                        <p>Debt can be a significant burden for many individuals and families. Understanding your debt and finding ways to lower it can be crucial steps towards achieving financial stability and freedom. With Bloom by Spring Financial, we provide comprehensive debt analysis and paydown plans to help you gain clarity on your debts and develop strategies to reduce them.</p>
                        <h5 class="font-medium lg:absolute bottom-8">Debt Analysis & Paydown Plan | Calculating Debt-to-Income Ratio</h5>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-surface w-full h-[800px] lg:h-[520px] flex flex-col lg:flex-row gap-12 pt-5 rounded-3xl">
                    <div class="lg:w-1/2 flex items-end justify-center">
                        <img class="h-[160px] sm:h-[380px] lg:h-auto" src="../assets/slide-coaching.png" alt="">
                    </div>
                    <div class="lg:w-1/2 p-5 lg:p-16 space-y-4 relative">
                        <h2 class="text-primary">1-on-1 Coaching and Exclusive Access to Events</h2>
                        <p>We offer 1-on-1 coaching with your dedicated financial concierge. With our personalized coaching sessions, you'll have the opportunity to discuss your financial goals, ask questions, and receive tailored advice and recommendations. Whether you need help creating a budget, strategizing debt paydown, or planning for major financial milestones, our financial concierge will be there to provide expert guidance every step of the way. Experience the benefits of 1-on-1 coaching on your path to financial success.</p>
                        <h5 class="font-medium lg:w-[390px] lg:absolute bottom-6">1-on-1 Coaching with Your Financial Concierge | Monthly Progress Calls | Credit Consultation</h5>
                    </div>
                </div>
            </swiper-slide>
        </Swiper>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

