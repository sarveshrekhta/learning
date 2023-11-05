import React from "react"
import { redirect } from "next/navigation";
import baseUrl from "../../utils/baseUrl";

const API_URL = baseUrl;

export async function getRequest(url){
  const res = await fetch(API_URL + `${url}`, {cache : 'no-store'})
  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
    // redirect("/");
  }
  let result = await res.json();
  return result
}


