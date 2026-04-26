import ConsentItem from "@/components/terms/ConsetnItem";

export default function RequiredTermsSection() {
    return (<>
        <div className="space-y-3">
            <ConsentItem required label="개인정보 수집 및 이용 동의" />
            <ConsentItem required label="고유식별정보 처리 동의" />
            <ConsentItem required label="통신사 이용약관 동의" />
            <ConsentItem required label="본인확인 서비스 이용약관 동의" />
        </div>
    </>)
}