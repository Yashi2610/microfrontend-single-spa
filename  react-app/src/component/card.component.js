import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
export default function Card({ item, handleClick }) {
  const { title, author, price, img } = item;

  return (
    <>
      <div className="container">
        <div className="cards">
          <div className="image_box">
            <img src={img} alt="" />
          </div>

          <div className="details">
            <p className="title">{title}</p>

            <p>{author}</p>

            <p>Price - {price}Rs</p>

            <button onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
