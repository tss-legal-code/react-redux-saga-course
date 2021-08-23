import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbiddenWords = ["foo", "bar", "spam", "abracadabra"]

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddenWords.filter(oneOfForbiddenWords => action.payload.title.includes(oneOfForbiddenWords))
                if (found.length) {
                    return dispatch(showAlert(`forbidden words detected: ${found.join(", ")}`))
                }
            }
            return next(action)
        }
    }
}

