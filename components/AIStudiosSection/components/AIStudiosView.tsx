import StudioItem, { AIStudio } from "./StudioItem";

type Props = {
  AIStudios: AIStudio[] | null;
  error?: boolean;
};

const AIStudiosView = ({ AIStudios, error }: Props) => {
  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            AI Reinvention Studios
          </h2>
          <p className="text-gray-600">
            There was an error loading the studios. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="ai-studios-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Descriptive Title */}
        <h2
          id="ai-studios-title"
          className="text-3xl font-bold text-center text-gray-800 mb-6"
        >
          AI Reinvention Studios
        </h2>

        {/* Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-md:px-8 ">
          {AIStudios?.map((aiStudio: AIStudio) => (
            <StudioItem {...aiStudio} key={aiStudio.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIStudiosView;
