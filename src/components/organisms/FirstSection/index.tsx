type FirstSectionProps = {
  title: string;
  image: string;
};

export function FirstSection({ title, image }: FirstSectionProps) {
  return (
    <>
      {title}
      <img src={image} alt={title} />
    </>
  );
}
