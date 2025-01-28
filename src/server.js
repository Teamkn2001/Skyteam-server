require("dotenv").config();

try {
  const app = require("./app");
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}


// require("./mongoDatabase")
// .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
// .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   })
// .finally(() => {
//     console.log("Closing server");
//   });
