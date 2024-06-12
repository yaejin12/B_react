import Card from "./UI/Card";

const Greet = (ccc) => {
  return (
    <>
      <Card>
        <h1>
          Hello Pretty Jin
          {ccc.children}
        </h1>
      </Card>
    </>
  );
};

export default Greet;
