
import React from "react";
import PetCard from "./PetCard";
import IPet from "../../interface/pet/IPet";
import { usePets } from "../../context/pets/PetsContext";
import ItemNotFound from "../ItemNotFound";
import Loading from "../../loading";
interface PetListProps {
  filteredPets: IPet[];
}

const PetList: React.FC<PetListProps> = ({ filteredPets }) => {
  const { loading } = usePets();

  return (
    <>
      {loading ? (
        <Loading />
      ) : filteredPets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {filteredPets.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </div>
      ) : (
        <ItemNotFound
          image_url="/img/pet-not-found.png"
          size={200}
          message="Pet Not Found"
        />
      )}
    </>
  );
};

export default PetList;
