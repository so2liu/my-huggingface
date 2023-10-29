import { PropsWithChildren } from "react"

const Model: React.FC<PropsWithChildren> = (props) => {
    return <div>
        {props.children}
    </div>
}

export default Model