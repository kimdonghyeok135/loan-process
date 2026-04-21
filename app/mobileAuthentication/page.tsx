"use client"

import React from "react";
import PhoneVerificationRequest from "./components/PhoneVerificationRequest";
import PhoneVerificationForm from "./components/PhoneVerificationForm";

type State = {
    phone: string
}

type Action =
    | { type: "REQUEST_VERIFICATION" }
    | { type: "VERIFY_CODE" }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "REQUEST_VERIFICATION":
            return { phone: "request" }
        case "VERIFY_CODE":
            return { phone: "verify" }
        default:
            throw new Error("Unknown action type")
    }
}

export default function MobileAuthentication() {
    const [state, dispatch] = React.useReducer(reducer, { phone: "" })
    return (
        <>
            <main className="min-h-screen bg-gray-50">
                <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8">
                    <header className="mb-8">
                        <p className="text-sm text-gray-500">본인 확인</p>
                        <h1 className="mt-2 text-2xl font-bold text-gray-900">
                            고객 정보를 입력해주세요
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            이름, 주민등록번호, 휴대폰번호, 통신사 정보를 입력한 뒤 본인확인을
                            진행합니다.
                        </p>
                    </header>
                    {state.phone === "" && <PhoneVerificationRequest phone={state.phone} dispatch={dispatch} />}
                    {state.phone === "request" && <PhoneVerificationForm />}
                </div>
            </main>

        </>)
}