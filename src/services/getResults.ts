import axios from "axios";
import { Result } from "../types";
import { SetStateAction } from "react";

export const getResults = (searchTerm: string) => {
    return fetchResults(searchTerm).then();
};
const fetchResults = async (
    searchTerm: string,
): Promise<SetStateAction<Result[]>> => {
    const response = await axios.get(
        "https://localhost:3010/users/" + searchTerm,
    );
    console.log(response);

    return response.data;
};
