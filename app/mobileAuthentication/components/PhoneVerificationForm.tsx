"use client";

import { verificationCodeSchema } from "@/schemas/VerificationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import VerificationCodeTimer from "./VerificationCodeTimer";

//유효성을 통해서 타입 추론
type FormValues = z.infer<typeof verificationCodeSchema>

export default function PhoneVerificationRequest() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(verificationCodeSchema)
    });
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (<>

        <form className="flex flex-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
            <section className="space-y-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-800"
                    >
                        인증번호
                    </label>
                    <input
                        type="text"
                        placeholder="인증번호를 6자리 입력해주세요"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-base text-gray-900 outline-none transition focus:border-gray-900 mt-2"
                        {...register("code")}
                    />
                    {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
                </div>
            </section>
            <VerificationCodeTimer />
            <div className="mt-auto pt-8">
                <button
                    type="submit"
                    className="w-full rounded-2xl bg-gray-900 px-4 py-4 text-base font-semibold text-white transition hover:bg-black"
                >
                    다음
                </button>
            </div>
        </form>

    </>)
}

