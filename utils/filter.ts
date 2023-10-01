import { listOfUniversities } from "config/mock-data";
import { intersection } from "lodash";

const filterUniversitiesIds = (filters: any) => {
    const filtersKeys = Object.keys(filters);
    if (filters.length === 0) {
        return listOfUniversities.map((u) => u.id);
    }

    return listOfUniversities.filter((university) => filtersKeys.every((key) => {
        if (filters[key]?.length && ((university as any)[key])?.length) {
            return intersection(filters[key], (university as any)[key]).length > 0;
        } else if (((university as any)[key])?.length === 0 || filters[key]?.length === 0) {
            return true;
        }
        return false;
    })).map((u) => u.id);
}

export const filterValues = (filters: any) => {
    const ids = filterUniversitiesIds(filters);
    return {
        best: listOfUniversities.filter((u) => ids.includes(u.id)),
        notBest: listOfUniversities.filter((u) => !ids.includes(u.id)),
    }
}