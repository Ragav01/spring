<template>
    <form class="space-y-4 pt-4">
        <div class="flex gap-3">
            <input type="text" placeholder="First Name">
            <input type="text" placeholder="Last Name">
        </div>
        <input type="text" placeholder="Email Address">
        <!-- Terms and conditions -->
        <div class="flex gap-3 py-3">
            <!-- Coustom Checkbox -->
            <input type="checkbox" id="receivePromo" class="peer hidden">
            <label for="receivePromo" class="peer block relative h-10 w-10 border rounded-full peer-checked:border-2 peer-checked:border-primary cursor-pointer
                before:hidden peer-checked:before:block before:h-5 before:w-2 before:border-r-2 before:border-b-2 before:rotate-45 before:border-primary before:absolute before:left-3.5 before:top-1.5">
            </label>
            <p class="flex-1 text-xs">
                Receive promotions and updates from Spring Financial. It’s free and you can opt out at any time. By clicking “continue” you agree to the <a href="#" class="link">terms and conditions</a> and <a href="#" class="link">privacy policy.</a>
            </p>
        </div>
        <!-- Action Button -->
        <PrimaryButton>
            <span class="hidden md:block">Apply Now</span>
            <span class="block md:hidden">Book an Introductory Call</span>
        </PrimaryButton>
    </form>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue';

</script>