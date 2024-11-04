import { Spin } from "antd"

// common render loading when porps isLoading is true
const Loading = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) return null;

    return (
        <Spin size="large" className="flex items-center justify-center w-full h-screen" />
    )
}

export default Loading