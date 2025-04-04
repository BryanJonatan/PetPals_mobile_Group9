import { useServices } from "../../context/services/ServicesContext";
import React from "react";
import ServiceCard from "./ServiceCard";
import Loading from "../../loading";

import ItemNotFound from "../ItemNotFound";
import IService from "../../interface/service/IService";
interface ServiceListProps {
  filteredServices: IService[];
}

const ServiceList: React.FC<ServiceListProps> = ({ filteredServices }) => {
  const { loading } = useServices();

  return (
    <>
      {loading ? (
        <Loading />
      ) : filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      ) : (
        <ItemNotFound
          image_url="/img/service-not-found.png"
          size={200}
          message="Service Not Found"
        />
      )}
    </>
  );
};

export default ServiceList;
