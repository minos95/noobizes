import React, { useEffect } from "react";
import { clientHooks } from "./clientHooks";
import { gql, useQuery } from "@apollo/client";

const Getmatchs = gql`
  query Getmatchs {
    matchs {
      id
    }
  }
`;
export default () => {
  const { loading, error, data } = useQuery(Getmatchs);

  return [loading, error, data];
};
