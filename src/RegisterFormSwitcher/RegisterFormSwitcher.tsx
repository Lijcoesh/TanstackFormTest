import { useState } from "react";
import RegisterFormV1 from "../RegisterFormV1/RegisterForm";
import RegisterFormV2 from "../RegisterFormV2/RegisterForm";
import RegisterFormV3 from "../RegisterFormV3/RegisterFormV3";
import RegisterFormV4 from "../RegisterFormV4/RegisterFormV4";
import RegisterFormInStepsV1 from "../RegisterFormInStepsV1/RegisterFormInSteps";
import FormButtons from "./FormButtons";
import type { FormVersion } from "./FormVersion";
import InStepsButtons from "./InStepsButtons";
import RegisterFormInStepsV2 from "../RegisterFormInStepsV2/RegisterFormInSteps";
import RegisterFormInStepsV3 from "../RegisterFormInStepsV3/RegisterFormInSteps";
import RegisterFormInStepsV4 from "../RegisterFormInStepsV4/RegisterFormInSteps";
import RegisterFormInStepsV5 from "../RegisterFormInStepsV5/RegisterFormInSteps";

export default function RegisterFormSwitcher() {
    const [version, setVersion] = useState<FormVersion>("InStepsV5");

    return (
    <div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            Form: 
            <FormButtons version={version} setVersion={setVersion} />
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            In steps: 
            <InStepsButtons version={version} setVersion={setVersion} />
        </div>
        {version === "v1" ? <RegisterFormV1 /> 
        : version === "v2" ? <RegisterFormV2 />
        : version === "v3" ? <RegisterFormV3 /> 
        : version === "v4" ? <RegisterFormV4 /> 
        : version === "InStepsV1" ? <RegisterFormInStepsV1 />
        : version === "InStepsV2" ? <RegisterFormInStepsV2 />
        : version === "InStepsV3" ? <RegisterFormInStepsV3 />
        : version === "InStepsV4" ? <RegisterFormInStepsV4 />
        : <RegisterFormInStepsV5 />
        }
    </div>
    );
}