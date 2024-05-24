import { InputHTMLAttributes, forwardRef, useRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | boolean;
  showError?: boolean;
};

const LabeledInput = forwardRef<HTMLInputElement, InputProps>(
  ({ error, name, ...props }: InputProps, ref) => {
    /* TODO: Line two 19 at 24 Understand this better https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref */
    const myRef = useRef<HTMLInputElement | null>(null);
    return (
      <div className="text-start">
        {/* TODO: Study about relative and absolute again 😭 */}
        {/* I have the put this here */}
        <div className="relative">
          <input
            ref={(node) => {
              myRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            name={name}
            placeholder=""
            className={`peer h-12 w-full rounded-md border-2 p-4 placeholder:text-transparent placeholder-shown:border-gray-300  ${error ? 'border-red-500 focus:border-red-500' : 'border-green-600 focus:border-green-600'}`}
            {...props}
          />
          <label
            htmlFor={name}
            className="select-non absolute left-2 z-20 -translate-y-1/2 bg-white px-2 text-sm font-medium text-black transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-black"
            onClick={() => myRef.current?.focus()}
          >
            {props.label}
          </label>
        </div>
        {error && typeof error === 'string' && (
          <span className="ml-2 text-sm text-red-500">* {error}</span>
        )}
      </div>
    );
  },
);

LabeledInput.displayName = 'LabeledInput';

export default LabeledInput;
