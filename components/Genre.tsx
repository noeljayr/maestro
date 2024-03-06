import Link from "next/link";
import "@css/genre.css";

const genres = [
  { title: "Hip Hop", color: { backgroundColor: "#5547A5" } },
  { title: "R&B", color: { backgroundColor: "#A69984" } },
  { title: "Afro", color: { backgroundColor: "#A24C34" } },
  { title: "Amapiano", color: { backgroundColor: "#476A8A" } },
  { title: "Pop", color: { backgroundColor: "#0D4045" } },
  { title: "Reggae", color: { backgroundColor: "#0C51B7" } },
  { title: "Rock", color: { backgroundColor: "#758A47" } },
  { title: "Country", color: { backgroundColor: "#A57803" } },
];

function Genre() {
  return (
    <div className="genre-wrapper gap-2">
      {/* <Link
        className="flex items-center w-full justify-between text-sm"
        href="genre"
      >
        <span>Genre</span>
        View all
      </Link> */}

      {/* <span className="genreContainer grid"> */}
      {genres.map((genre) => {
        return (
          <Link
            key={genre.title}
            href={`explore/genre/${genre.title}`}
            style={genre.color}
            className={`genre p-0 bg-[${genre.color}]`}
          >
            {genre.title}
          </Link>
        );
      })}
      {/* </span> */}
    </div>
  );
}

export default Genre;
