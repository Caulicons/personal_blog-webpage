import { cn } from '../../../utils';

type SectionProps = {
  sectionRef?: React.Ref<HTMLElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Section({
  className,
  children,
  sectionRef,
  ...props
}: SectionProps) {
  return (
    <section ref={sectionRef} className={cn('', className)} {...props}>
      {children}
    </section>
  );
}
