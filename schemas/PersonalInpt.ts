import z from "zod";

export const schema = z.object({
    name: z.string().min(1, "이름을 입력해주세요"),
    residentRegistrationFront: z.
        string()
        .min(6, "주민번호 앞자리를 6자리를 입력해주세요")
        .regex(/^\d+$/, "숫자만 입력 가능합니다."),
    residentRegistrationBack: z.
        string()
        .min(1, "주민번호 뒷자리를 입력해주세요")
        .regex(/^\d+$/, "숫자만 입력 가능합니다."),
    phone: z
        .string()
        .min(1, "휴대폰번호를 입력해주세요.")
        .regex(/^01[0-9]-?\d{3,4}-?\d{4}$/, "휴대폰번호 형식이 올바르지 않습니다."),
    carrier: z
        .string()
        .min(1, "통신사를 선택해주세요.")
})