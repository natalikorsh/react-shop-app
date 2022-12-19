import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToCart = Function.prototype } = props;

  if (!goods.length) {
    return <h2>Nothing here</h2>
  }

  return (<div className="goods">
    { goods.map((item) => (
      <GoodsItem key={item.mainId} {...item} addToCart={addToCart}/>
    ))}
  </div>);
}

export {GoodsList};