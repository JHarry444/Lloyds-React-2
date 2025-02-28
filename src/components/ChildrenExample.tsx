import { ReactNode } from "react";

const ChildrenExample = ({ children }: { children: ReactNode | ReactNode[] }) => {
    return (<>
        <div style={{ border: "2px dotted white" }}>
            {children}
        </div>

    </>);
}

export default ChildrenExample;