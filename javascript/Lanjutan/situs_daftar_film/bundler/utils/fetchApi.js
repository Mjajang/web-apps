var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import config from "../config.js";
export const fetchApi = (method, path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${config.BASE_URL}${path}`, {
            method: method,
            headers: {
                "x-rapidapi-key": config.API_KEY,
                "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
            },
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const result = yield response.json();
        return result;
    }
    catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
    }
});
