"use client";

type Props = {
    title: string;
    fileUrl: string;
    onClose: () => void;
    onAgree: () => void;
};

export default function PdfAgreementOverlay({
    title,
    fileUrl,
    onClose,
    onAgree,
}: Props) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
            <header className="flex items-center justify-between border-b px-4 py-3">
                <button
                    type="button"
                    onClick={onClose}
                    className="text-sm font-medium text-gray-600"
                >
                    닫기
                </button>

                <h2 className="text-base font-semibold text-gray-900">
                    {title}
                </h2>

                <div className="w-8" />
            </header>

            <main className="flex-1 bg-gray-100 p-3">
                <iframe
                    src={fileUrl}
                    className="h-full w-full rounded-xl border bg-white"
                />
            </main>

            <footer className="border-t bg-white p-4">
                <button
                    type="button"
                    onClick={onAgree}
                    className="w-full rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white active:scale-[0.98]"
                >
                    내용을 확인하고 동의합니다
                </button>
            </footer>
        </div>
    );
}