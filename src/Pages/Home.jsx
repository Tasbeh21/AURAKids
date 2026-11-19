import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const categories = [
    {
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lighting",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Wall Décor",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="categories">
      <p>EXPLORE OUR COLLECTION</p>

      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}
