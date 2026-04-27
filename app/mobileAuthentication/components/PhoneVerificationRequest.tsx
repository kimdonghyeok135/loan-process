import NextBtn from "@/components/NextBtn";
import { phoneVerificationRequestSchema } from "@/schemas/VerificationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import z from "zod";

//유효성을 통해서 타입 추론
type FormValues = z.infer<typeof phoneVerificationRequestSchema>

type Action =
    | { type: "REQUEST_VERIFICATION" }
    | { type: "VERIFY_CODE" }

export default function PhoneVerificationRequest({ phone, dispatch }: { phone: string; dispatch: React.Dispatch<Action> }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(phoneVerificationRequestSchema)
    });

    const onSubmit = (data: FormValues) => {
        console.log(data)
        dispatch({ type: "REQUEST_VERIFICATION" })
    }
    return (<>

        <form className="flex flex-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
            <section className="space-y-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-800"
                    >
                        이름
                    </label>
                    <input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-900"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-800">
                        주민등록번호
                    </label>
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="생년월일 6자리"
                            autoComplete="off"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-900"
                            {...register("residentRegistrationFront")}
                        />
                        <span className="shrink-0 text-lg font-semibold text-gray-500">
                            -
                        </span>
                        <div className="flex w-full items-center gap-2">
                            <input
                                type="password"
                                inputMode="numeric"
                                maxLength={1}
                                placeholder="●"
                                autoComplete="off"
                                className="w-14 rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-base text-gray-900 outline-none transition focus:border-gray-900"
                                {...register("residentRegistrationBack")}
                            />
                            <div className="flex items-center gap-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                            </div>
                        </div>
                    </div>
                    {errors.residentRegistrationFront != null ? <p className="text-red-500 text-sm">{errors.residentRegistrationFront.message}</p>
                        : errors.residentRegistrationBack != null ? <p className="text-red-500 text-sm">{errors.residentRegistrationBack.message}</p> : <div></div>}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-800"
                    >
                        휴대폰번호
                    </label>
                    <input
                        type="text"
                        inputMode="numeric"
                        placeholder="'-' 없이 입력해주세요"
                        autoComplete="tel"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-900"
                        {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="carrier"
                        className="text-sm font-medium text-gray-800"
                    >
                        통신사
                    </label>
                    <select
                        defaultValue=""
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-gray-900"
                        {...register("carrier")}
                    >
                        <option value="" disabled>
                            통신사를 선택해주세요
                        </option>
                        <option value="SKT">SKT</option>
                        <option value="KT">KT</option>
                        <option value="LG U+">LG U+</option>
                        <option value="알뜰폰">알뜰폰</option>
                    </select>
                    {errors.carrier && <p className="text-red-500 text-sm">{errors.carrier.message}</p>}
                </div>
            </section>
            <NextBtn title="인증번호 받기" />
        </form>


    </>)
}
