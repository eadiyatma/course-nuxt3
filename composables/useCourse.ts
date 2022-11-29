import courseData from "./courseData";

type Lesson = {
  title: String;
  slug: String;
  number: number;
  downloadUrl: String;
  videoId: number;
  text: String;
  sourceUrl?: String;
  path: String;
};

type Chapter = {
  title: String;
  slug: string;
  number: number;
  lessons: Lesson[];
};

type Course = {
  title: String;
  chapters: Chapter[];
};

export const useCourse = (): Course => {
  const chapters: Chapter[] = courseData.chapters.map((chapter) => {
    const lessons: Lesson[] = chapter.lessons.map((lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));
    return {
      ...chapter,
      lessons,
    };
  });
  return {
    ...courseData,
    chapters,
  };
};
