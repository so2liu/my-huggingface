import { PropsWithChildren } from "react"

const Model: React.FC<PropsWithChildren> = (props) => {
    return <div className="m-2 p-2 border rounded-lg">
        {props.children}
    </div>
}

export default Model