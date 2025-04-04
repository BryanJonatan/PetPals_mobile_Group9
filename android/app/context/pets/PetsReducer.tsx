
import { IPetFilterParams } from "../../interface/pet/IPetFilterParams";
import ISpecies from "../../interface/pet/ISpecies";
import { GlobalAction, GlobalActionType } from "../GlobalActions";
import IPet from "../../interface/pet/IPet";
import { INewPet } from "../../interface/pet/INewPet";

export interface PetState {
  species: ISpecies[];
  pets: IPet[];
  ownerPets: IPet[];
  filters: IPetFilterParams;
  pet: IPet;
  newPet: INewPet;
  loading: boolean;
  error: string | null;
}

export const initialState: PetState = {
  species: [],
  pets: [],
  ownerPets: [],
  filters: {
    searchValue: "",
    species: "",
    minAge: "",
    maxAge: "",
    minPrice: "",
    maxPrice: "",
  } as IPetFilterParams,
  pet: {} as IPet,
  newPet: {} as INewPet,
  loading: false,
  error: null,
};

export function PetsReducer(state: PetState, action: GlobalAction) {
  switch (action.type) {
    case GlobalActionType.GET_AVAILABLE_PETS:
      return { ...state, pets: action.payload };
    case GlobalActionType.GET_ALL_SPECIES:
      return { ...state, species: action.payload };
    case GlobalActionType.SET_PET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case GlobalActionType.RESET_PET_FILTERS:
      return {
        ...state,
        filters: {
          searchValue: "",
          species: "",
          minAge: "",
          maxAge: "",
          minPrice: "",
          maxPrice: "",
        },
      };
    case GlobalActionType.GET_PET_DETAIL:
      return { ...state, pet: action.payload };
    case GlobalActionType.SET_NEW_PET:
      return {
        ...state,
        newPet: {
          ...state.newPet,
          [action.payload.name]: action.payload.value,
        },
      };
    case GlobalActionType.RESET_NEW_PET:
      return {
        ...state,
        newPet: {
          name: "",
          breed: "",
          age: 0,
          speciesId: 0,
          description: "",
          price: 0,
          imageUrl: "",
          ownerId: 0,
        },
      };
    case GlobalActionType.ADD_NEW_PET:
      return { ...state };
    case GlobalActionType.EDIT_PET:
      return { ...state };
    case GlobalActionType.GET_OWNER_PETS:
      return { ...state, ownerPets: action.payload };
    default:
      return state;
  }
}
