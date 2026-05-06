import "./card.style.css"
type ProductCardProps = {
 
  image: string;
  title: string;
};

const ProductCard = ({ image, title  }: ProductCardProps) => {
  return (
    <div className="product-card">
     
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;