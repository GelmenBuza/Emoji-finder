import axios from "axios";
import type { EmojiItem } from '../interface/emoji';


const BASE_URL = 'http://localhost:3000/api';

export const getEmojis = async (query?: string) => {

    try {
        const params = query ? {q: query} : undefined;

        const response = await axios.get<EmojiItem[]>(`${BASE_URL}/emojis`, { params });

        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }

};
