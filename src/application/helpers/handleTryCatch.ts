import { handleErrorAPI } from "./handleErrorAPI";

const handleTryCatch = async (handling: () => Promise<any>): Promise<any | void> => {
    try {
        return await handling();
    } catch (error) {
        handleErrorAPI(error);
    }
};

export default handleTryCatch;
