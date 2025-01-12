import { useQuery } from 'react-query';

const fetchAnimals = async () => {
    const response = await fetch('https://stapi.co/api/v1/rest/animal/search');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useExampleQuery = () => {
    return useQuery('animals', fetchAnimals);
};