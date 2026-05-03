import { Check } from "lucide-react";

type ConsentAllToggleProps = {
    allChecked: boolean,
    setAllChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ConsentAllToggle({ allChecked, setAllChecked }: ConsentAllToggleProps) {
    console.log("전체 동의 버튼 상태 ::" + allChecked)
    return (<>
        <button className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4" onClick={() => { setAllChecked((prev) => !prev) }}>
            <span className={`flex h-6 w-6 items-center justify-center rounded-full ${allChecked ? "bg-slate-900 text-white" : "border-slate-300 text-slate-400"}`}>
                <Check size={14} strokeWidth={3} />
            </span>
            <span className="text-base font-semibold text-slate-900">
                필수 선택만 전체 동의
            </span>
        </button>
    </>)
}