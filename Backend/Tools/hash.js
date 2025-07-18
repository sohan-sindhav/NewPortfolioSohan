// tools/hash.js
import bcrypt from "bcrypt";

const password = "Sohan@123***";
bcrypt.hash(password, 10).then((hash) => {
  console.log("HASHED PASSWORD:", hash);
});
