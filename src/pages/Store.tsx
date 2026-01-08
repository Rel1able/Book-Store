

export default function Store() {

    //will be taken from an API
    const bookGenres = [
  "Fiction",
  "Non-Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Horror",
  "Biography",
  "History",
  "Self-Help",
  "Philosophy",
  "Poetry",
  "Children's",
  "Young Adult",
  "Graphic Novel",
  "Adventure",
  "Classic",
  "Crime",
  "Science",
];

    return (

        <div>
            <h1 className="font-bold text-2xl dark:text-gray-200 text-center mt-8">Shop Now</h1>
            <div>
                <div>
                    <h2 className="font-bold text-xl dark:text-white">Genres</h2>
                    <ul>
                        {bookGenres.map((genre) => (
                            <li className="dark:text-white">{genre}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    {/*filter dropdown*/}
                    <div>

                    </div>
                    {/*books container*/}
                    <div className="grid-cols-4">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}