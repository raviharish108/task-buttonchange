import Button from '@mui/material/Button';
import { useState } from "react";
import Rating from '@mui/material/Rating';
export function Shopping({ items }) {
  return (
    <div>
      <h1 className='heading'>Welcome to my  Shoppingggg</h1>
      <div className="shop">
        {items.map((item) => <Content Item={item} />)}
      </div>
    </div>
  );
}
function Content({ Item }) {
  let [card, setcard] = useState(true);
  const temp = {
    value: card ? "add to cart" : "remove from cart"
  };

  const ratin = (Item.rate / 1000) * 10;
  const ratingg = ratin / 2;

  return (
    <div className="container">
      <img className="poster" src={Item.img} alt={Item.name} />
      <h3>{Item.name}</h3>
      <h3 className="rate">RS:{Item.rate}</h3>
      <Rating name="read-only" value={ratingg} readOnly />
      <Button variant="contained" onClick={() => setcard(!card)}>{temp.value}</Button>

    </div>

  );
}
