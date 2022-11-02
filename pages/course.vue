<template>
  <div class="prose mb-12">
    <h1>
      <span class="font-medium">
        Course:
        <span class="font-bold">Mastering Nuxt 3</span>
      </span>
    </h1>
  </div>

  <div class="flex flex-row justify-center flex-grow">
    <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col">
      <h3>Chapters</h3>
      <!-- All the lessons for the course listed here -->
      <div class="flex flex-col gap-2">
        <div v-for="chapter in chapters" :key="chapter.slug">
          <h4>
            {{ chapter.title }}
          </h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            :to="`/course/chapter/${chapter.slug}/lesson/${lesson.slug}`"
            class="flex flex-row gap-2 py-1 no-underline"
            :class="lesson.path == $route.fullPath ? 'text-blue-500' : ''"
          >
            <span class="text-gray-500">{{ index + 1 }}</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="prose p-12 bg-white rounded-md w-[65ch]">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const { chapters } = useCourse();
</script>
