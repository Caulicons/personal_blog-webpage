import {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from '../../../utils/cn';
import { ThemeSchema } from '../../../schemas/theme/theme.schema';
import { themeService } from '../../../services/theme/theme.service';
import { UseFormSetValue } from 'react-hook-form';

type ThemeInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | boolean;
  showError?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
};

const LabeledThemeInput = forwardRef<HTMLInputElement, ThemeInputProps>(
  (
    { error, name, className, onChange, setValue, ...props }: ThemeInputProps,
    ref,
  ) => {
    const [themes, setThemes] = useState<ThemeSchema[]>([] as ThemeSchema[]);
    const [themeName, setThemeName] = useState<string>(
      (props.value as string) ?? '',
    );
    //const [id, setId] = useState<number>();
    useEffect(() => {
      (async () => {
        setThemes(await themeService.getAll());
      })();
    }, []);

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
            value={themeName}
            {...props}
            onChange={(e) => {
              onChange?.({ ...e, target: { ...e.target, value: themeName } });
              setThemeName(e.target.value);
            }}
          />
          <label
            htmlFor={name}
            className={cn(
              'select-non absolute left-2 z-20 -translate-y-1/2 bg-white px-2 text-sm font-medium text-black transition-all duration-500 peer-placeholder-shown:top-6 peer-placeholder-shown:cursor-text peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-black',
              className,
            )}
            onClick={() => myRef.current?.focus()}
          >
            {props.label}
          </label>
          <ul className="my-2 flex max-h-48 w-full flex-col gap-2 overflow-x-auto  rounded-md bg-white">
            {themeName !== '' &&
              !themes.some(
                (theme) => theme.name.toLowerCase() === themeName.toLowerCase(),
              ) &&
              themes
                .filter((theme) =>
                  theme.name.toLowerCase().includes(themeName.toLowerCase()),
                )
                .map((theme) => (
                  <li
                    key={theme.id}
                    className="flex items-center justify-between rounded-lg border-2 border-gray-300  p-2 px-4 hover:cursor-pointer hover:border-green-600"
                    onClick={() => {
                      setValue('theme', theme.name);
                      setThemeName(theme.name);
                    }}
                  >
                    <span>{theme.name}</span>
                  </li>
                ))}
          </ul>
        </div>
        {error && typeof error === 'string' && (
          <span className="ml-2 text-sm text-red-500">* {error}</span>
        )}
      </div>
    );
  },
);

LabeledThemeInput.displayName = 'LabeledInput';

export default LabeledThemeInput;
