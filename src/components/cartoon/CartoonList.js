import Cartoon from "./Cartoon";

function CartoonList(props) {
  return (
    <div className="row gy-5 gx-5">
      {props.cartoons.map((cartoon) => {
        return (
          <Cartoon
            key={cartoon.id}
            id={cartoon.id}
            title={cartoon.title}
            image={cartoon.image}
            year={cartoon.year}
            country={cartoon.country}
          />
        );
      })}
    </div>
  );
}

export default CartoonList;
