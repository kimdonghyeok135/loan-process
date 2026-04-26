"use client";
import RequiredTermsSection from "./components/RequiredTermsSection";
import OptionalTermsSection from "./components/OptionalTermsSection";
import ConsentAllToggle from "./components/ConsentAllToggle";

export default function Terms() {
    return (
        <main className="min-h-screen bg-[#F7F8FA] px-5 pt-8 pb-32">
            <section className="mb-10">
                <h1 className="text-3xl font-bold leading-snug text-slate-900">
                    서비스 이용을 위해
                    <br />
                    약관에 동의해주세요
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-600">
                    필수 약관에 동의해야 다음 단계로 진행할 수 있습니다.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                {/* 필수동의에 대한 전체동의 버튼 */}
                <ConsentAllToggle />

                <GroupTitle title="필수 동의" />
                <RequiredTermsSection />

                <div className="my-6 h-px bg-slate-100" />

                <GroupTitle title="선택 동의" />
                <OptionalTermsSection />
            </section>

            <div className="fixed bottom-6 left-0 w-full px-5">
                <button className="h-14 w-full rounded-2xl bg-gray-900 text-lg font-semibold text-white
                hover:text-gray-700 active:scale-90
                    duration-150 ease-out
                ">
                    다음
                </button>
            </div>
        </main>
    );
}

function GroupTitle({ title }: { title: string }) {
    return (
        <h2 className="mb-3 text-sm font-semibold text-slate-500">
            {title}
        </h2>
    );
}

