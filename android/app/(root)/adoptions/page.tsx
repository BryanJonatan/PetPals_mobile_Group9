"use client";

import PetHero from "../../components/Adoptions/PetHero";
import PetList from "../../components/Adoptions/PetList";
import BigHeroContent from "../../components/ContentTemplate/BigHeroContent";
import NormalContent from "../../components/ContentTemplate/NormalContent";
import FilterModal from "../../components/modals/FilterModal";
import PageNotFound from "../../components/PageNotFound";
import { usePets } from "../../context/pets/PetsContext";
import React, { useEffect, useState } from "react";
import { useDebounce } from "react-use";

const Adoptions = () => {
  const { pets, filters, fetchPets, error } = usePets();

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce the searchValue so that it updates after 500ms of inactivity
  useDebounce(
    () => {
      setDebouncedSearchTerm(filters.searchValue);
    },
    500,
    [filters.searchValue]
  );

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    fetchPets();
  }, [debouncedSearchTerm]);

  if (error) {
    return (
      <NormalContent>
        <PageNotFound
          image_url="/img/page-not-found.png"
          message="Pet not found"
        />
      </NormalContent>
    );
  }

  return (
    <BigHeroContent>
      <PetHero />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 mt-20">
        <PetList filteredPets={pets} />
      </div>
      <FilterModal filterType="pets" />
    </BigHeroContent>
  );
};

export default Adoptions;
