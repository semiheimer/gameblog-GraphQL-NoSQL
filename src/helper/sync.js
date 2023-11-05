import Author from "../models/Author.model.js";
import Review from "../models/Review.model.js";
import Game from "../models/Game.model.js";
export default async function () {
  await Author.deleteMany();
  await Author.create([
    {
      _id: "6547946b096476d9706f06a9",
      name: "use01",
      verified: true,
    },
    {
      _id: "6547946b096476d9706f06ab",
      name: "use02",
      verified: true,
    },
    {
      _id: "6547946b096476d9706f06aa",
      name: "use03",
      verified: true,
    },
  ]);

  await Game.deleteMany();
  await Game.create([
    {
      _id: "6547946d096476d9706f06b6",
      title: "Zelda Tears of The Kingdom",
      platform: ["Switch"],
    },
    {
      _id: "6547946d096476d9706f06b8",
      title: "Final Fantasy",
      platform: ["PS5", "Xbox", "PC"],
    },
    ,
    {
      _id: "6547946d096476d9706f06b7",
      title: "Elden Ring",
      platform: ["PS5", "Xbox", "PC"],
    },
    ,
    {
      _id: "6547946d096476d9706f06b9",
      title: "Mario Kart",
      platform: ["Switch"],
    },
  ]);

  await Review.deleteMany();
  await Review.create([
    {
      rating: 9,
      content: "lorem ipsum",
      author_id: "6547946b096476d9706f06a9",
      game_id: "6547946d096476d9706f06b6",
    },
    {
      rating: 10,
      content: "lorem ipsum",
      author_id: "6547946b096476d9706f06ab",
      game_id: "6547946d096476d9706f06b8",
    },
    {
      rating: 7,
      content: "lorem ipsum",
      author_id: "6547946b096476d9706f06aa",
      game_id: "6547946d096476d9706f06b7",
    },
    {
      rating: 5,
      content: "lorem ipsum",
      author_id: "6547946b096476d9706f06ab",
      game_id: "6547946d096476d9706f06b9",
    },
    {
      rating: 8,
      content: "lorem ipsum",
      author_id: "6547946b096476d9706f06ab",
      game_id: "6547946d096476d9706f06b7",
    },
  ]),
    console.log("Synchronized.");
}
