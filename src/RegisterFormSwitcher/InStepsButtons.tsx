import type { FormVersion } from "./FormVersion"

const buttonStyle = {
    color: "#111827",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: 600
}

interface FormButtonsProps {
    version: FormVersion
    setVersion: (version: FormVersion) => void
}

export default function FormButtons({ version, setVersion }: FormButtonsProps) {
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
        </>
    )
}