const dbConnect = require("./dbConnect");

const insert = async () => {
  const db = await dbConnect();

  const result = await db.insertMany([
    {
      name: "Toshima",
      age: 34,
      faculty: "Doctor",
      roll: 23,
    },
    {
        name: "Shrinkhala",
        age: 12,
        faculty: "Architecture",
        roll: 123,
      }

  ]);
  if (result.acknowledged) {
    console.log("data Inserted Successfully");
  }
};
insert();
