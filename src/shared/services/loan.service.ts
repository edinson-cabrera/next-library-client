import httpClient from "./http-client";

class LoanService {
  async registerLoan(userId: string, bookIds: string[]) {
    return httpClient.post("/Loans/register", {
      userId,
      bookIds,
    });
  }
}

const loanService = new LoanService();
export default loanService;
