import { Book } from "@/shared/models/book.model";

interface Props {
  book: Book;
  isSelected: boolean;
}

export default function BookItemComponent(props: Props) {


  return (
    <div
      className={`group ${props.isSelected ? "bg-blue-200" : ""}`}
    >
      <div key={"test"} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={props.book.imageSrc}
            alt={props.book.imageAlt}
            className="size-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.book.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{props.book.author}</p>
      </div>
    </div>
  );
}