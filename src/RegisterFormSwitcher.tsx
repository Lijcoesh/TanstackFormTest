import { useState } from "react";
import RegisterFormV1 from "./RegisterFormV1/RegisterForm";
import RegisterFormV2 from "./RegisterFormV2/RegisterForm";
import RegisterFormV3 from "./RegisterFormV3/RegisterFormV3";
import RegisterFormV4 from "./RegisterFormV4/RegisterFormV4";

const buttonStyle = {
    color: "#111827",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: 600
}

export default function RegisterFormSwitcher() {
    const [version, setVersion] = useState<"v1" | "v2" | "v3" | "v4">("v1");

    return (
    <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
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
                V3
            </button>
            <button 
                onClick={() => setVersion("v4")}
                style={{
                    ...buttonStyle,
                    background: version === "v4" ? "#2563eb" : "#e5e7eb"
                }}
            >
                V4
            </button>
        </div>
        {version === "v1" ? <RegisterFormV1 /> : version === "v2" ? <RegisterFormV2 /> : version === "v3" ? <RegisterFormV3 /> : <RegisterFormV4 />}
    </div>
    );
}