export default function CategoryCard({ name, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={name} />

      <div className="category-overlay">
        <h3>{name}</h3>
        <button>Explore</button>
      </div>
    </div>
  );
}

