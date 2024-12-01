import Image from "next/image";

type CoverProps = {
  title: string;
  cover: string;
};

export const Cover = ({ title, cover }: CoverProps) => {
  return (
    <div>
      <div className="relative overflow-hidden rounded-md sm:w-36 sm:h-56 w-full h-40">
        <Image
          src={cover}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          loading="lazy"
        />
      </div>
    </div>
  );
};
