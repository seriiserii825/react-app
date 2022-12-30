import AccordeonItem from "../projects/accordeon/AccordeonItem";
import questions from "../projects/accordeon/data";
const AccordeonPage = () => {
  return (
    <main className="main" style={{ background: "#e9d8a6" }}>
      <div className="accordeon__body">
        <div className="accordeon__container">
          <h3>questions and answers about login</h3>
          <section className="accordeon__info">
            {questions.map((question) => {
              return <AccordeonItem key={question.id} {...question} />;
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default AccordeonPage;
