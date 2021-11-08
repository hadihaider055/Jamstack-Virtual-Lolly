import React from "react";
import { Router } from "@reach/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import LollyTemplate from "../templates/lollyTemplate";
import Spinner from "../components/Spinner";

const VLolly = ({ location }) => {
  const path = location.pathname.replace("/v_lolly/", "");
  const { data, loading, error } = useQuery(GET_LOLLY_BY_PATH, {
    variables: { path },
  });
  if (error) {
    return (
      <h1 className="font-nunito absolute top-2/4 left-2/4 mt-16 -ml-10 text-2xl text-gray-200">
        Something went wrong. Please try again later.
      </h1>
    );
  }
  if (loading) {
    return (
      <>
        <Spinner
          width="w-24"
          height="h-24"
          display="absolute top-2/4 left-2/4"
          marginLeft="-ml-12"
          marginTop="-mt-12"
        />
        <h1 className="font-nunito absolute top-2/4 left-2/4 mt-16 -ml-10 text-2xl text-gray-200">
          Loading...
        </h1>
      </>
    );
  }
  return (
    <div>
      <Router basepath="/v_lolly">
        <LollyTemplate
          pageContext={data}
          path={`/${data.lollyByPath.lollyPath}`}
        />
      </Router>
    </div>
  );
};

export default VLolly;

const GET_LOLLY_BY_PATH = gql`
  query lollies($path: String!) {
    lollyByPath(lollyPath: $path) {
      colorBottom
      colorMiddle
      colorTop
      lollyPath
      message
      recipientName
      sender
    }
  }
`;
