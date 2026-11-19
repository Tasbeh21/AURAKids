
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">AURA | Kids</p>

        <h1>
          Create a magical space
          <br />
          for your little one.
        </h1>

        <p className="hero-description">
          Discover beautiful furniture and décor designed
          to make every child's room special.
        </p>

        <a href="/products" className="hero-button">
          Explore Collection
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/e7/54/68/e7546836a79134fb2e9cf004c35780e8.jpg"
          alt="Kids room interior"
        />
      </div>
    </section>
  );
}
