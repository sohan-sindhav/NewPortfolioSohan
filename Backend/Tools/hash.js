// tools/hash.js
// Utility to generate bcrypt hash for admin passwords: node Tools/hash.js <password>
import bcrypt from "bcrypt";

const password = process.argv[2] || process.env.ADMIN_RAW_PASSWORD;

if (!password) {
  console.log("Usage: node Tools/hash.js <password_to_hash>");
  process.exit(1);
}

bcrypt.hash(password, 10).then((hash) => {
  console.log("HASHED PASSWORD:", hash);
  console.log("Add this hash to your .env file as ADMIN_PASSWORD");
});
