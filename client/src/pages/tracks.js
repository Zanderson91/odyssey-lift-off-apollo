import React from "react";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import { Layout, QueryResult } from "../components";

/** TRACKS gql query to retreive all tracks */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tacks Page is Catstonauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track, idx) => (
          <TrackCard key={`${track.id}-${idx}`} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
