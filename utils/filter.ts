import { listOfUniversities } from "config/mock-data";

const filterUniversitiesIds = (filters: any) => {
    const filtersKeys = Object.keys(filters);
    if (filters.length === 0) {
        return listOfUniversities.map((u) => u.id);
    }
    console.log('filters', filters);
    console.log('filtersKeys', filtersKeys);
    return listOfUniversities.filter((university) => filtersKeys.every((key) => {
        if (filters[key] && (university as any)[key]) {
            return filters[key]?.includes((university as any)[key]);
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