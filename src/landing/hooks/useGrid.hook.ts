import loanService from "@/shared/services/loan.service";
import { useState } from "react";

interface UseGridHook {
  selectBook: (bookId: string) => void;
  getSelectedBook: () => string | null;
  isBookSelected: (bookId: string) => boolean;
  handleSend: () => void;
}

export const useGridHook = (): UseGridHook => {
  const [userSelectBook, setUserSelectBook] = useState<string | null>(null);

  const selectBook = (bookId: string) => {
    if (userSelectBook) {
      setUserSelectBook(null);
    }
    if (userSelectBook === bookId) {
      setUserSelectBook(null);
      return;
    } else {
      setUserSelectBook(bookId);
    }
  };

  const getSelectedBook = () => {
    return userSelectBook;
  };

  const isBookSelected = (bookId: string) => {
    return userSelectBook === bookId;
  };

  const handleSend = async () => {
    console.log("Sending book to server", userSelectBook);
    if(!userSelectBook) {
      return;
    }
    const res = await loanService.registerLoan("3FA85F64-5717-4562-B3FC-2C963F66AFA6", [
      userSelectBook,
    ]);
    console.log("Response", res);

  }

  return {
    getSelectedBook,
    selectBook,
    isBookSelected,
    handleSend,
  };
};
