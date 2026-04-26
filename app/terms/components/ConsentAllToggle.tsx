import { Check } from "lucide-react";

export default function ConsentAllToggle() {
    return (<>
        <button className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
                <Check size={14} strokeWidth={3} />
            </span>
            <span className="text-base font-semibold text-slate-900">
                필수 선택만 전체 동의
            </span>
        </button>
    </>)
}