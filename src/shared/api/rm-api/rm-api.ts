import axios from 'axios';

export type TLocationTypeUnion =
  | 'Space station'
  | 'Fantasy town'
  | 'Microverse'
  | 'Cluster'
  | 'Resort'
  | 'Planet'
  | 'Dream'
  | 'TV';

type TGetLocationsQueryParams = {
  type?: TLocationTypeUnion;
  page?: number;
};

class RickAndMortyApi {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://rickandmortyapi.com/api/location';
  }

  getLocations = (params?: TGetLocationsQueryParams) => {
    return axios.get(this.baseUrl, { params });
  };
}

export const rmApi = new RickAndMortyApi();
