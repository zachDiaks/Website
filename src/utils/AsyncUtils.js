export default class AsyncUtils {
    static async waitFor(conditionFunction, timeout = 10000, interval = 200) {
        const startTime = Date.now();

        while (!conditionFunction()) {
            if (Date.now() - startTime > timeout) {
                throw new Error("Timeout waiting for condition");
            }
            await new Promise((resolve) => setTimeout(resolve, interval));
        }
    }
}