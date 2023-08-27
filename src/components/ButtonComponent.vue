<script setup>

    const props = defineProps ({
      text: String
    });
    </script>

<template>
    <button>{{ props.text }}</button>
</template>


<style scoped>

</style>