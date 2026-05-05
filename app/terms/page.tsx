"use client";

import RequiredTermsSection from "./components/RequiredTermsSection";
import OptionalTermsSection from "./components/OptionalTermsSection";
import ConsentAllToggle from "./components/ConsentAllToggle";
import NextBtn from "@/components/NextBtn";
import { useEffect, useState } from "react";
import { Term } from "@/types/terms";
import { initialRequiredTerms } from "@/constants/terms";
/**
 * 약관 동의 페이지
 * - 필수 동의 항목과 선택 동의 항목으로 구분하여 표시
 * - react-pdf 라이브러리를 사용하여 약관 내용을 PDF로 표시
 * 
 */



export default function Terms() {
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [requiredTerms, setRequiredTerms] = useState<Term[]>(initialRequiredTerms);
    const isActive = requiredTerms.filter((term) => term.required).every((term) => term.checked);
    const handleRequiredTermChange = (value: string, checked: boolean) => {
        setRequiredTerms((prev) =>
            prev.map((term) =>
                term.value === value
                    ? { ...term, checked }
                    : term
            )
        );
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8 pb-28">
                <header className="mb-8">
                    <p className="text-sm text-gray-500">약관 동의</p>
                    <h1 className="mt-2 text-2xl font-bold leading-snug text-gray-900">
                        서비스 이용을 위해
                        <br />
                        약관에 동의해주세요
                    </h1>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                        필수 약관에 동의해야 다음 단계로 진행할 수 있습니다.
                    </p>
                </header>

                <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <ConsentAllToggle allChecked={allChecked} setAllChecked={setAllChecked} />

                    <GroupTitle title="필수 동의" />

                    <RequiredTermsSection allChecked={allChecked} handleRequiredTermChange={handleRequiredTermChange} />

                    <div className="my-6 h-px bg-gray-100" />

                    <GroupTitle title="선택 동의" />
                    <OptionalTermsSection handleRequiredTermChange={handleRequiredTermChange} />
                </section>
                <NextBtn title="다음"
                    isActive={isActive} />
            </div>
        </main>
    );
}

function GroupTitle({ title }: { title: string }) {
    return (
        <h2 className="mb-3 text-sm font-semibold text-gray-500">
            {title}
        </h2>
    );
}
