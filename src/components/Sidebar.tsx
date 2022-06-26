import { gql, useQuery } from "@apollo/client";

//components
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      lessonType
      availableAt
    }
  }
`;

interface GerLessonsQueryResponse {
  lessons: {
    id: string;
    slug: string;
    title: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

const Sidebar = () => {
  const { data } = useQuery<GerLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block">
        Conograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            slug={lesson.slug}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
