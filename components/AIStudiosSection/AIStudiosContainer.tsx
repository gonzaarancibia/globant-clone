import { fetchAIStudios } from "../../helpers/fetchAIStudios";
import AIStudiosSection from "./components/AIStudiosView";

const AIStudiosContainer = async () => {
  let AIStudios = null;
  let error = false;

  try {
    AIStudios = await fetchAIStudios();
  } catch (err) {
    error = true;
  }

  return <AIStudiosSection AIStudios={AIStudios} error={error} />;
};

export default AIStudiosContainer;
