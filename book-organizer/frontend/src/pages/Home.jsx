import React from "react";
import books from "../img/books.png";
import community from "../img/community.png";
import room from "../img/room.png";
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1 className="text-white text-center text-3xl m-8">Book Organizer</h1>
      <p className="m-12 text-teal-50" id="blog-1">
        <img src={books} alt="books" align="left" />
        You can create your own library to organize your books , also you can
        find a huge collection of books from different categories
      </p>
      <p className="m-12 text-teal-50" id="blog-2">
        <img src={community} alt="books" align="right" />
        With the community you can talk with a lot of other readers and share
        your books and passion.
      </p>
      <p className="m-10 text-teal-50" id="blog-3">
        <img src={room} alt="books" align="left" className="h-32" />
        With the community you can talk with a lot of other readers and share
        your books and passion.
      </p>
      <Link to="/register">
        <button className="my-40 mx-20 w-64 text-xl text-white">Start Now</button>
      </Link>
    </div>
  );
}

export default Home;
