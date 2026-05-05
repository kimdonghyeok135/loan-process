import ConsentItem from "@/components/terms/ConsetnItem";
import { initialRequiredTerms } from "@/constants/terms";

type OptionalTermsSectionProps = {
    handleRequiredTermChange: (value: string, checked: boolean) => void
}

export default function OptionalTermsSection({ handleRequiredTermChange }: OptionalTermsSectionProps) {
    return (<>

        <div className="space-y-3">
            {initialRequiredTerms.filter((term) => !term.required).map((item) => (
                <div key={item.value}>
                    <ConsentItem required={false} label={item.title} value={item.value}
                        allChecked={false}

                        handleRequiredTermChange={handleRequiredTermChange} />
                </div>
            ))}
        </div>
    </>)
}

// constants/terms.ts에서 정의한 약관 동의문만 그리게 수정