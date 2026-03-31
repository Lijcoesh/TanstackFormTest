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
                onClick={() => setVersion("v1")}
                style={{ 
                    ...buttonStyle,
                    background: version === "v1" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v1
            </button>
            <button
                onClick={() => setVersion("v2")}
                style={{ 
                    ...buttonStyle,
                    background: version === "v2" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v2
            </button>
            <button
                onClick={() => setVersion("v3")}
                style={{ 
                    ...buttonStyle,
                    background: version === "v3" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v3
            </button>
            <button
                onClick={() => setVersion("v4")}
                style={{ 
                    ...buttonStyle,
                    background: version === "v4" ? "#2563eb" : "#e5e7eb"
                }}
            >
                v4
            </button>
        </>
    )
}