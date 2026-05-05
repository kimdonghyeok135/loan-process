"use client";

import { Check, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import PdfAgreementOverlay from "./PdfAgreementOverlay";

type ConsentItemProps = {
    label: string,
    required: boolean,
    allChecked: boolean,
    value: string
    handleRequiredTermChange: (value: string, checked: boolean) => void
}

export default function ConsentItem({
    label,
    required = false,
    allChecked,
    value,
    handleRequiredTermChange
}: ConsentItemProps) {

    const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
    const [viewPdf, setViewPdf] = useState(false);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(allChecked)
    }, [allChecked])

    const handlerPdf = (label: string) => {
        setSelectedAgreement(label);
        setViewPdf(true);
    }
    const onChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked((prev) => !prev)
        handleRequiredTermChange(e.currentTarget.value, e.currentTarget.checked)
    }
    return (
        <>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4" >
                <label className="flex w-full cursor-pointer items-center gap-3 text-left transition active:scale-[0.98]">
                    <input
                        type="checkbox"
                        value={value}
                        checked={checked}
                        onChange={onChangeTerm}
                        className="sr-only"
                    />

                    <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border 
      ${checked ? "bg-slate-900 text-white" : "border-slate-300 text-slate-400"}`}
                    >
                        <Check size={12} strokeWidth={3} />
                    </span>

                    <span className="text-sm text-slate-800">
                        <span className={required ? "mr-1 text-blue-600" : "mr-1 text-slate-400"}>
                            [{required ? "필수" : "선택"}]
                        </span>
                        {label}
                    </span>
                </label>

                <ChevronRight onClick={() => handlerPdf(label)} className="h-4 w-4 text-slate-400" />
            </div>
            {viewPdf && <PdfAgreementOverlay title={selectedAgreement!} fileUrl="/pdf/loan_consent_sample.pdf" onClose={() => setViewPdf(false)} onAgree={() => {
                setViewPdf(false);
                setSelectedAgreement(null);
            }} />}
        </>
    );
}