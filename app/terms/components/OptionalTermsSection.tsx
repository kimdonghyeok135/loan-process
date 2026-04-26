import ConsentItem from "@/components/terms/ConsetnItem";

export default function OptionalTermsSection() {
    return (<>

        <div className="space-y-3">
            <ConsentItem label="마케팅 정보 수신 동의" />
            <ConsentItem label="혜택 및 이벤트 안내 동의" />
        </div>
    </>)
}