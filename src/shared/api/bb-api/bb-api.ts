import axios from 'axios';

type TGetQuotesQueryParams = {
  author?: string;
  page?: number;
};

class BreakingBadApi {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://www.breakingbadapi.com/api/quotes';
  }

  getQuotes = (params?: TGetQuotesQueryParams) => {
    return axios.get(this.baseUrl, { params });
  };
}

export const bbApi = new BreakingBadApi();
