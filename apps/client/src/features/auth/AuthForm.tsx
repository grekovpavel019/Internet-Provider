import React from "react";

import { ROLES } from "@packages/models/auth";

const AuthForm = (): React.JSX.Element => {
    return (
        <form>
            <select name="" id="">
                {
                    Object.entries(ROLES).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                    ))
                }
            </select>
        </form>
    );
};

export default AuthForm;