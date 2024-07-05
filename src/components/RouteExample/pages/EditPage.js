import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditPage() {
  const ev = useRouteLoaderData("event-detail");
  return <EventForm method="Modify" event={ev} />;
}

export default EditPage;
