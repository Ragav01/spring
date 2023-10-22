
<template>
    <section>
        <div class="mt-16 lg:h-[580px] md:flex shadow-lg rounded-2xl overflow-hidden">
            <div class="lg:w-1/2 p-8 py-16 lg:p-16 flex flex-col items-center justify-between bg-surface">
                <div class="">
                    <img class="mx-auto" src="../assets/bloom-logo.png" alt="">
                    <h5>by Spring Financial</h5>
                </div>
                <div class="text-center space-y-5">
                    <h2>We offer <span class="text-primary">the most wallet-friendly</span> financial guidance.</h2>
                    <h5>CA$ <span class="text-5xl">9.99</span>/month</h5>
                </div>
                <h4 class="text-center">Thank you for choosing Bloom by Spring Financial.</h4>
            </div>
            <div class="lg:w-1/2 p-8 py-16 lg:p-16 flex flex-col gap-y-8">
                <div class="space-y-3">
                    <h2>You’re all set!</h2>
                    <h4 class="font-normal">Our financial advisor will contact you shortly for introductory.</h4>
                </div>
                <div class="space-y-3">
                    <h5 class="text-lg font-medium text-primary">We will contact you to : </h5>
                    <form action="" class="space-y-16">
                        <div class="space-y-4">
                            <div class="flex items-center gap-x-3">
                                <input type="radio" class="h-4 w-4" id="number1" name="number">
                                <label for="number1" class="font-medium">+1-778_8##-1234</label>
                            </div>
                            <div class="flex items-center gap-x-3">
                                <input type="radio" class="h-4 w-4" id="number2" name="number">
                                <label for="number2" class="font-medium">Add new phone number</label>
                            </div>
                            <div class="flex border-2 rounded-xl lg:w-[320px] h-14">
                                <div class="px-3 flex items-center gap-3 cursor-pointer border-r-2">
                                    <img class="w-10" src="../assets/canada-flag.svg" alt="">
                                    <svg width="18" height="18" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.248 0.763672L12.0703 0.585938C11.9434 0.458984 11.7656 0.458984 11.6387 0.585938L6.6875 5.53711L1.71094 0.585938C1.58398 0.458984 1.40625 0.458984 1.2793 0.585938L1.10156 0.763672C0.974609 0.890625 0.974609 1.06836 1.10156 1.19531L6.45898 6.55273C6.58594 6.67969 6.76367 6.67969 6.89062 6.55273L12.248 1.19531C12.375 1.06836 12.375 0.890625 12.248 0.763672Z" fill="black"/> </svg>
                                </div>
                                <input type="number" placeholder="(_ _ _)_ _ _-_ _ _" class="appearance-none px-4  outline-none bg-transparent">
                            </div>
                        </div>
                        <div class="mt-5">
                            <button class="text-base font-medium bg-primary text-white w-full md:w-[320px] h-[54px] rounded-full duration-300 hover:shadow-xl shadow-primary">Complete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <div class="bg-[#FBFBFB]">
        <section class="md:flex justify-between space-y-8">
        <div class="md:w-4/12">
            <h4 class="text-primary pb-3">What’s next?</h4>
            <h2>Steps to Navigate Bloom by Spring Financial</h2>
        </div>
        <div class="md:w-6/12">
            <div class="relative p-8 pt-0 border-l-2 border-green-300">
                <span class="block h-4 w-4 bg-primary absolute -left-[9px] rounded-full"></span>
                <h4 class="leading-[1] pb-3">Step 1</h4>
                <p>Our Financial Expert Will Reach Out for the Introductory Call.</p>
            </div>
            <div class="relative p-8 pt-0 border-l-2 border-green-300">
                <span class="block h-4 w-4 bg-primary absolute -left-[9px] rounded-full"></span>
                <h4 class="leading-[1] pb-3">Step 2</h4>
                <p>When You're Ready to Sign Up, We'll Assist You in Setting Up the Payment Plan.</p>
            </div>
            <div class="relative p-8 pt-0 border-l-2 border-green-300">
                <span class="block h-4 w-4 bg-primary absolute -left-[9px] rounded-full"></span>
                <h4 class="leading-[1] pb-3">Step 3</h4>
                <p>Our Advisor Will Provide Guidance on Utilizing Budgeting Tools, Setting Up a Savings Plan, and Understanding Billing Overviews.</p>
            </div>
            <div class="relative p-8 pt-0 border-l-2 border-transparent">
                <span class="block h-4 w-4 bg-primary absolute -left-[9px] rounded-full"></span>
                <h4 class="leading-[1] pb-3">Step 4</h4>
                <p>Access 1-on-1 Monthly Meetings with Your Advisor and Enjoy Fee-Free Cancellation Anytime.</p>
            </div>
        </div>
    </section>
    </div>
</template>

<script setup>
const steps = [
    {
        title: 'Steps 1',
        description: "Our Financial Expert Will Reach Out for the Introductory Call."
    },
    {
        title: 'Steps 2',
        description: "When You're Ready to Sign Up, We'll Assist You in Setting Up the Payment Plan."
    },
    {
        title: 'Steps 3',
        description: "Our Advisor Will Provide Guidance on Utilizing Budgeting Tools, Setting Up a Savings Plan, and Understanding Billing Overviews."
    },
    {
        title: 'Steps 4',
        description: "Access 1-on-1 Monthly Meetings with Your Advisor and Enjoy Fee-Free Cancellation Anytime."
    }
]
</script>