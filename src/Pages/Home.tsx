import AnswerOption from "../Components/AnswerOption";
import Question from "../Components/Question";
import StickyFooter from "../Components/StickyFooter";
import QuestionBlock from "../Components/QuestionBlock";

const CenteredContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
};

const Home = () => {
  return (
    <div style={CenteredContainer}>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "50px",
          color: "#000000",
        }}
      >
        Quiz
      </h1>
      <QuestionBlock />
      <QuestionBlock />
      <QuestionBlock />
      <StickyFooter />
    </div>
  );
};

export default Home;
