import { NextPage } from "next";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface AIStudio {
  id: string;
  img: string | StaticImport;
  title: string;
  description: string;
}

const StudioItem: NextPage<AIStudio> = ({ id, img, title, description }) => {
  return (
    <article
      className="flex flex-col gap-2  max-sm:items-center"
      role="region"
      aria-labelledby={`${id}-title`}
    >
      <Image
        src={img}
        alt={`${title} - Studio image`}
        className="rounded-lg shadow-lg max-sm:w-full"
        width={300}
        height={200}
        loading="lazy"
      />
      <div className="mt-2 max-sm:w-[100%]">
        <h3
          id={`${id}-title`}
          className="text-[#028484] font-medium uppercase tracking-wide"
          style={{
            fontFamily: "Heebo, sans-serif",
            marginTop: "0.5rem",
          }}
        >
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

export default StudioItem;
