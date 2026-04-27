"use client";

import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import PdfAgreementOverlay from "./PdfAgreementOverlay";

export default function ConsentItem({
    label,
    required = false,
}: {
    label: string;
    required?: boolean;
}) {
    const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
    const [viewPdf, setViewPdf] = useState(false);
    const handlerPdf = (label: string) => {
        setSelectedAgreement(label);
        setViewPdf(true);
    }
    return (
        <>
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4" onClick={() => handlerPdf(label)}>
                <div className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-slate-400">
                        <Check size={12} strokeWidth={3} />
                    </span>

                    <span className="text-sm text-slate-800">
                        <span className={required ? "mr-1 text-blue-600" : "mr-1 text-slate-400"}>
                            [{required ? "필수" : "선택"}]
                        </span>
                        {label}
                    </span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
            {viewPdf && <PdfAgreementOverlay title={selectedAgreement!} fileUrl="/pdf/loan_consent_sample.pdf" onClose={() => setViewPdf(false)} onAgree={() => {
                setViewPdf(false);
                setSelectedAgreement(null);
            }} />}
        </>
    );
}