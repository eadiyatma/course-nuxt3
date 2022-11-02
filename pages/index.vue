<template>
  <div class="p-4">
    <h1 class="text-2xl text-salmon">hello world</h1>
  </div>
</template>

<script setup>
const router = useRouter();
onMounted(() => {
  router.push(
    "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
  );
});
</script>
