# Slantwear
Clothing brand
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slantwear</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Navbar -->
  <header class="navbar">
    <div class="logo">Slantwear</div>
    <nav>
      <a href="index.html">Home</a>
      <a href="#shop">Shop</a>
      <a href="admin.html">Admin</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1>Welcome to Slantwear</h1>
    <p>Your premium clothing brand</p>
    <a href="#shop" class="btn">Shop Now</a>
  </section>

  <!-- Shop Section -->
  <section id="shop" class="shop">
    <h2>Our Collection</h2>
    <div class="products" id="products-container">
      <!-- Products load dynamically from products.json -->
    </div>
  </section>

  <footer>
    <p>© 2025 Slantwear. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
