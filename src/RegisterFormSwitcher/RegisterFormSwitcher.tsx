import { useState } from "react";
import RegisterFormV1 from "../RegisterFormV1/RegisterForm";
import RegisterFormV2 from "../RegisterFormV2/RegisterForm";
import RegisterFormV3 from "../RegisterFormV3/RegisterFormV3";
import RegisterFormV4 from "../RegisterFormV4/RegisterFormV4";
import RegisterFormInSteps from "../RegisterFormInSteps/RegisterFormInSteps";
import FormButtons from "./FormButtons";
import type { FormVersion } from "./FormVersion";

const buttonStyle = {
    color: "#111827",
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: 600
}

export default function RegisterFormSwitcher() {
    const [version, setVersion] = useState<FormVersion>("InSteps");

    return (
    <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            Form: 
            <FormButtons version={version} setVersion={setVersion} />
        </div>
        <div>
            In steps: 
            <button
                onClick={() => setVersion("InSteps")}
                style={{
                    ...buttonStyle,
                    background: version === "InSteps" ? "#2563eb" : "#e5e7eb"
                }}
            >
                V1
            </button>
        </div>
        {version === "v1" ? <RegisterFormV1 /> : version === "v2" ? <RegisterFormV2 /> : version === "v3" ? <RegisterFormV3 /> : version === "v4" ? <RegisterFormV4 /> : <RegisterFormInSteps />}
    </div>
    );
}