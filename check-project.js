const fs = require("fs");
const products = require("./products.json");
if (!Array.isArray(products) || products.length < 1) throw new Error("products.json must contain products");
for (const p of products) {
  if (!p.id || !p.name || !p.image || typeof p.price !== "number") throw new Error("Invalid product: " + JSON.stringify(p));
  if (!fs.existsSync("./public" + p.image)) throw new Error("Missing image: " + p.image);
}
for (const f of ["api/products.js", "api/newsletter.js", "api/orders.js", "index.html", "supabase-schema.sql"]) {
  if (!fs.existsSync(f)) throw new Error("Missing required file: " + f);
}
console.log(`Project check passed: ${products.length} products and all referenced image assets exist.`);
