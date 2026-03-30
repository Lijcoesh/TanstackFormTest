import { useState } from "react";
import RegisterFormV1 from "./RegisterFormV1/RegisterForm";
import RegisterFormV2 from "./RegisterFormV2/RegisterForm";

export default function RegisterFormSwitcher() {
    const [version, setVersion] = useState<"v1" | "v2">("v1");

    return (
    <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button
            onClick={() => setVersion("v1")}
            style={{
            background: version === "v1" ? "#2563eb" : "#e5e7eb",
            color: version === "v1" ? "#fff" : "#111",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: 600
            }}
        >
            v1
        </button>
        <button
            onClick={() => setVersion("v2")}
            style={{
            background: version === "v2" ? "#2563eb" : "#e5e7eb",
            color: version === "v2" ? "#fff" : "#111",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: 600
            }}
        >
            v2
        </button>
        </div>
        {version === "v1" ? <RegisterFormV1 /> : <RegisterFormV2 />}
    </div>
    );
}
