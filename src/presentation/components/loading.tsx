import { Spin } from "antd"

const Loading = ({ isLoading }: { isLoading: boolean }) => {
    if (!isLoading) return null;

    return (
        <Spin size="large" className="flex items-center justify-center w-full h-screen" />
    )
}

export default Loading
