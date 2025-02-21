export interface ApiError {
  data?: {
    message: string;
  };
  status?: number;
}

export interface CustomPhoneNumberInputProps {
  type: string;
  id?: string;
  name: string;
  value?: any;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode?: string;
  flag?: React.ReactNode;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  errorMessage?: string;
  label: string;
  width?: string;
  height?: string;
}

export interface InputProps {
  type: string;
  id?: string;
  value?: any;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  placeHolder?: string;
  header: string;
  name?: string;
  iconTwo?: React.ReactNode;
  iconThree?: React.ReactNode;
  width?: string;
  height?: string;
  pl?: string | 3;
  borders: string | "1px solid gray";
}
