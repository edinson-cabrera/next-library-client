import { Book } from "@/shared/models/book.model";
import BookItemComponent from "./book-item.component";
import { useGridHook } from "../hooks/useGrid.hook";

const books = [
  {
    id: "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
    name: "Harry Potter",
    author: "J.K. Rowling",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: "3FA85F64-5717-4562-B3FC-2C963F66AFA7",
    name: "It",
    author: "Stephen King",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: "3FA85F64-5717-4562-B3FC-2C963F66AFA8",
    name: "La última ola",
    author: "Daniel Ruiz",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: "3FA85F64-5717-4562-B3FC-2C963F66AFA9",
    name: "Robot Salvaje",
    author: "Peter Brown",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function GridBooksComponent() {
  const { selectBook, isBookSelected, handleSend } = useGridHook();

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Books</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {books.map((book: Book) => (
            <div key={book.id} onClick={() => selectBook(book.id)}>
              <BookItemComponent
                book={book}
                isSelected={isBookSelected(book.id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={handleSend}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrar
        </button>
      </div>
    </div>
  );
}
