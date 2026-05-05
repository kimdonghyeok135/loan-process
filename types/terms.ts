export type Term = {
    title: string;
    value: string;
    checked: boolean;
    required: boolean;
};
export type RequiredTermsProps = {
    terms: Term[];
    onTermChange: (value: string, checked: boolean) => void;
};