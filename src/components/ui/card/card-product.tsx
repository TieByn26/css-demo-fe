import { Button } from "../button";
import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "relative overflow-hidden shadow flex flex-col justify-between items-center bg-white rounded-lg w-full h-[360px] max-[540px]:h-[320px] max-[420px]:h-[370px]"
);

export type CardProductProps = VariantProps<typeof cardVariants> & {
  product?: number;
  className?: string;
};

export const CardProduct = ({ product, className }: CardProductProps) => {
  if (product){
    
  }
  return (
    <div className={cardVariants({ className })}>
      <div className="absolute top-[-21%] left-[-29%] w-[150%] h-[70%] bg-[#a8e6ff] rotate-[-20deg] z-0"></div>
      
      <div className="flex z-10 items-center gap-2 p-4">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-blue-800 italic">Title here</span>
          <span className="text-xs font-bold text-black">Lorem ipsum dolor sit, amet consectetur</span>
        </div>
        <span className="text-lg font-bold text-blue-800 bg-pink-200 px-3 py-2 rounded-full">$80</span>
      </div>
      
      <div className="absolute top-[22%] right-[8%] max-[540px]:top-[27%] max-[540px]:right-[14%] w-48 h-48 max-[540px]:w-36
       max-[540px]:h-36 max-[420px]:w-[220px] max-[420px]:h-[220px] max-[420px]:top-[20%] max-[420px]:right-[18%] bg-pink-200 rounded-full"></div>
      
      <div className="z-10 w-48 h-48 max-[540px]:w-36 max-[540px]:h-36 max-[420px]:w-[220px] max-[420px]:h-[220px]   rounded-full overflow-hidden">
        <img src="https://www.gstatic.com/webp/gallery/2.sm.webp" alt="Product" />
      </div>
      
      <div className="flex w-full justify-between items-center px-4 py-7 md:pt-10 gap-2 ">
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
          ))}
        </div>
        <Button className="w-20 h-5 text-xs">more detail»</Button>
      </div>
    </div>
  );
};
