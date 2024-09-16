const Person = ({ name, image, age }) => {
  return (
    <>
      <article className="person">
        <img
          src={image}
          alt={name}
          style={{ width: "100px", height: "100px" }}
          className="img"
        />
        <div>
          <h1>{name}</h1>
          <p>{age} years</p>
        </div>
      </article>
    </>
  );
};
export default Person;
