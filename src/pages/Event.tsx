import { useParams } from "react-router-dom";

//components
import Video from "../components/Video";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 flex justify-center items-center">
            <h2 className="text-2xl font-bold">Selecione uma aula</h2>
          </div>
        )}

        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
