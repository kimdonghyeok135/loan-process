"use client";

import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";


export default function VerificationCodeTimer() {
    const [timeLeft, setTimeLeft] = useState(180)
    const [resetCnt, setResetCnt] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [resetCnt]);
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    const formattedTime = `${minutes}:${seconds}`;
    const onClickResend = () => {
        setTimeLeft(180)
        setResetCnt((prev) => prev + 1);
    }
    return (<>
        <div className="mt-4">
            {/* 타이머 + 재요청 영역 */}
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
                <div className="flex items-center gap-1 text-sm text-gray-700">
                    {/* 시계 아이콘 */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <span>인증번호 유효시간</span>
                    <span className="font-semibold text-blue-600">{formattedTime}</span>
                </div>

                <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 active:scale-90
                    transition duration-150 ease-out"
                    onClick={onClickResend}
                >
                    재요청
                    {/* 새로고침 아이콘 */}
                    <RefreshCw className="w-4 h-4" />
                </button>

            </div>

            {/* 안내 문구 */}
            <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                <li>• 인증번호를 받지 못하셨나요? ‘재요청’을 눌러주세요.</li>
                <li>• 인증번호는 발송 후 3분간 유효합니다.</li>
            </ul>
        </div>
    </>)
}