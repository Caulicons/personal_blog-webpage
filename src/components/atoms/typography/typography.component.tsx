import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import cn from '../../../utils/cn';

type Tag = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'p';
};

type TypographyProps = {
  children: React.ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'subtitle'
    | 'p'
    | 'pBold'
    | 'pHGL'
    | 'citation';
} & React.HtmlHTMLAttributes<HTMLParagraphElement> &
  Tag;

const variants = cva('font-thin', {
  variants: {
    variant: {
      h1: [
        'uppercase text-2xl font-semibold tablet:extrabold tablet:text-3xl desktop:text-[35px] tracking-[5px] desktop:leading-heading',
      ],
      h2: [
        ' desktop:leading-heading uppercase font-bold text-[21px] tablet:font-extrabold tablet:text-3xl desktop:text-[42px]	 tracking-[4px]',
      ],
      h3: [
        'leading-heading uppercase font-bold text-xl  tablet:text-[27px]  tracking-[4px] ',
      ],
      subtitle: ['uppercase font-bold text-sm tablet:text-lg tracking-[9px]'],
      p: ['tracking-wide'],
      pBold: [''],
      pHGL: [''],
      citation: ['uppercase font-normal tracking-[1.5px]'],
      cardTitle: [
        ' text-left text-lg tablet:text-xl font-bold uppercase tracking-[2px]',
      ],
      cardBody: [
        ' w-full p-2 tablet:p-4 text-center font-medium tracking-wide ',
      ],
      anchor: [''],
      footerHeader: ['text-2xl font-bold text-black uppercase tracking-[2px]'],
      span: [''],
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(function T(
  { children, tag = 'p', variant = 'p', className, ...props },
  ref,
) {
  const Tag = tag;
  return (
    <Tag ref={ref} className={cn(variants({ variant }), className)} {...props}>
      {children}
    </Tag>
  );
});

export default Typography;
