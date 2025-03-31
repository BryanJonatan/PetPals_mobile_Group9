"use client";

import BigHeroContent from "../../components/ContentTemplate/BigHeroContent";
import NormalContent from "../../components/ContentTemplate/NormalContent";
import FilterModal from "../../components/modals/FilterModal";
import PageNotFound from "../../components/PageNotFound";
import ServiceHero from "../../components/Services/ServiceHero";
import ServiceList from "../../components/Services/ServiceList";
import { useServices } from "../../context/services/ServicesContext";
import React, { useEffect, useState } from "react";
import { useDebounce } from "react-use";

const Services = () => {
  const { services, filters, fetchServices, error } = useServices();

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(
    () => {
      setDebouncedSearchTerm(filters.searchValue);
    },
    500,
    [filters.searchValue]
  );

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    fetchServices();
  }, [debouncedSearchTerm]);

  return (
    <>
      {error ? (
        <NormalContent>
          <PageNotFound image_url="/img/page-not-found.png" message="" />
        </NormalContent>
      ) : (
        <BigHeroContent>
          <ServiceHero />
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 mt-20">
            <ServiceList filteredServices={services} />
          </div>
          <FilterModal filterType="services" />
        </BigHeroContent>
      )}
    </>
  );
};

export default Services;
