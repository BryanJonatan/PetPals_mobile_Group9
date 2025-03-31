"use client";

import NormalContent from "../../components/ContentTemplate/NormalContent";
import ItemNotFound from "../../components/ItemNotFound";
import Header from "../../components/MyPets/Header";
import MyPetTable from "../../components/MyPets/MyPetTable";
import PageNotFound from "../../components/PageNotFound";
import { usePets } from "../../context/pets/PetsContext";
import { useUsers } from "../../context/users/UsersContext";
import Loading from "../../loading";
import React, { useEffect } from "react";

const MyPets = () => {
  const { loggedInUser } = useUsers();
  const { ownerPets, fetchOwnerPets, error, loading } = usePets();

  useEffect(() => {
    fetchOwnerPets(loggedInUser.userId);
  }, []);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NormalContent>
            <div className="w-full max-w-lg sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto">
              <Header />
              {ownerPets.length > 0 ? (
                <MyPetTable />
              ) : (
                <ItemNotFound
                  image_url="/img/pet-not-found.png"
                  size={200}
                  message="Pet Not Found"
                />
              )}
            </div>
          </NormalContent>
        </>
      )}
    </>
  );
};

export default MyPets;
