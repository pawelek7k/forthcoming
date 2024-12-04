import Image from "next/legacy/image";
import { ChangeEvent, useRef, useState } from "react";

type CoverType = {
  name: string;
  onChange: (value: string) => void;
  value?: string;
};

export const CoverPicker = ({ name, onChange, value }: CoverType) => {
  const [pickedImage, setPickedImage] = useState<string | null>(value || null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      onChange("");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const imageUrl = fileReader.result as string;
      setPickedImage(imageUrl);
      onChange(imageUrl);
    };
    fileReader.readAsDataURL(file);
  };

  const handleImageClick = () => imageInput.current?.click();

  return (
    <div className="z-10">
      <div className="bg-black/60 borderborder-rose-950">
        <div
          className="w-[9rem] h-[14rem] md:w-[12rem] md:h-[18rem] relative cursor-pointer z-10"
          onClick={handleImageClick}
        >
          {!pickedImage && ""}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The cover selected by the user"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name={name}
          className="hidden"
          onChange={handleImageChange}
          ref={imageInput}
        />
      </div>
    </div>
  );
};
