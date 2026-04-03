import type { FormVersion } from "./FormVersion"

const buttonStyle = {
    color: "#111827",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: 600
}

interface IProps {
    version: FormVersion
    setVersion: (version: FormVersion) => void
}

export default function FormButtons(props: IProps) {
    const { version, setVersion } = props

    return (
        <>
            <button
                onClick={() => setVersion("InStepsV1")}
                style={{ 
                    ...buttonStyle,
                    background: version === "InStepsV1" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v1
            </button>
            <button
                onClick={() => setVersion("InStepsV2")}
                style={{ 
                    ...buttonStyle,
                    background: version === "InStepsV2" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v2
            </button>
            <button
                onClick={() => setVersion("InStepsV3")}
                style={{ 
                    ...buttonStyle,
                    background: version === "InStepsV3" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v3
            </button>
            <button
                onClick={() => setVersion("InStepsV4")}
                style={{ 
                    ...buttonStyle,
                    background: version === "InStepsV4" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v4
            </button>
            <button
                onClick={() => setVersion("InStepsV5")}
                style={{ 
                    ...buttonStyle,
                    background: version === "InStepsV5" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v5
            </button>
        </>
    )
}