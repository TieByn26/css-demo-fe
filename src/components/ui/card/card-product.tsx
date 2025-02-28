import { Link } from "../link";
import { Button } from "../button";
import { cva, VariantProps } from "class-variance-authority";
import { ProductProps } from "src/types/product";

const cardVariants = cva("relative overflow-hidden bg-white w-[240px] h-[320px]  rounded-lg shadow  flex flex-col items-center");

/**
 * CardProduct component props.
 * @typedef {Object} CardProductProps
 */
export type CardProductProps = VariantProps<typeof cardVariants> & {
  product?: string;
  className?: string;
};

/**
 * CardProduct component.
 */
export const CardProduct = ({ product, className }: CardProductProps) => {
  return (
    <div className={cardVariants({ className })}>
        <div className="h-[70%] w-[150%] z-[0] rotate-[-20deg] bg-[#a8e6ff] absolute top-[-21%] left-[-29%]">
        </div>
        <div className="flex z-[1] justify-stretch items-center gap-[9px] px-[16px] py-[16px]">
            <div className="flex flex-col ">
              <span className="text-[18px] font-bold text-blue-800 italic">
                Title here
              </span>
              <span className="text-[12px] font-bold text-white">
                Lorem ipsum dolor sit, amet consectetur
              </span>
            </div>
            <span className="text-[18px] font-bold text-blue-800 bg-pink-200 px-[10px] py-[13px] rounded-[999px]">
              $80
            </span>
        </div>
        <div className="absolute w-[160px] h-[160px] rounded-[999px] bg-pink-200 top-[27%] right-[12%]"></div>
        <div className="z-10 w-[160px] h-[160px] overflow-hidden rounded-[999px]">
            <img src="https://giaycaosmartmen.com/wp-content/uploads/2020/12/cach-chup-giay-dep-5.jpg" alt="" />
        </div>
        <div className="flex w-full justify-between items-center px-[16px] pt-[28px]" >
          <span className="flex gap-[8px] ">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-[10px] h-[10px] bg-orange-400  rounded-full"></div>
            ))}
          </span>
          <Button className="w-[100px] h-[20px] text-[12px]">
            more detail»
          </Button>
        </div>
    </div>
  );
};
