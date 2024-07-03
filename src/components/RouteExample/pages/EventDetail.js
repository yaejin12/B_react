import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function EventDetail() {
  const params = useParams();

  const date = useLoaderData();
  console.log("loader data", date);
  
  return (
    <>
      <h1>EventDetail</h1>
      <p>Event ID: {params.id}</p>
    </>
  );
}
