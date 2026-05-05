import { Term } from "@/types/terms";

export const initialRequiredTerms: Term[] = [
    {
        title: "개인정보 수집 및 이용 동의",
        value: "agree1",
        checked: false,
        required: true
    },
    {
        title: "고유식별정보 처리 동의",
        value: "agree2",
        checked: false,
        required: true
    },
    {
        title: "통신사 이용약관 동의",
        value: "agree3",
        checked: false,
        required: true
    },
    {
        title: "본인확인 서비스 이용약관 동의",
        value: "agree4",
        checked: false,
        required: true
    },
    {
        title: "마케팅 정보 수신 동의",
        value: "agree5",
        checked: false,
        required: false
    },
    {
        title: "혜택 및 이벤트 안내 동의",
        value: "agree6",
        checked: false,
        required: false
    },
]