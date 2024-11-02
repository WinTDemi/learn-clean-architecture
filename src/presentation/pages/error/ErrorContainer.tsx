import { memo } from "react"
import Error from "../../components/error"

const ErrorContainer = () => {
    return (
        <Error isError={true} />
    )
}

export default memo(ErrorContainer)