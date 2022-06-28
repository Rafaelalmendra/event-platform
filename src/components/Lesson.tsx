import { Link, useParams } from "react-router-dom";
import ptBR from "date-fns/locale/pt-BR";
import { isPast, format } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  lessonSlug: string;
  title: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = ({ lessonSlug, title, availableAt, type }: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm' ",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === lessonSlug;

  return (
    <Link to={`/event/lesson/${lessonSlug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex gap-[0.625rem] items-center text-sm  font-medium ${
                isActiveLesson ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircle size={20} /> Conteúdo liberado
            </span>
          ) : (
            <span className="flex gap-[0.625rem] items-center text-sm text-orange-500 font-medium">
              <Lock size={20} /> Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={` mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
