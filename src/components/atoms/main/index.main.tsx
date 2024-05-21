function Main({
  children,
  className,
}: {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
}) {
  return <main className={className}>{children}</main>;
}

export default Main;
