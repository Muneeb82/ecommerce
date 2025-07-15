import titleIcon from '../assets/title-icon2.png';

export default function Products() {
  return (
    <div className="relative overflow-hidden pt-20 pb-20">
        <div className="px-[150px]">
            <div className="flex flex-wrap">
                <div className="grow shrink-0 basis-0">
                    <div className="flex items-center justify-between text-start mb-10">
                        <div className="flex items-center">
                            <h2>Top selling products</h2>
                            <p className="max-w-full ml-[30px] size-[18px] leading-none font-light">
                                <span className="inline-block mr-[30px] max-w-[50px]">
                                    <img src={titleIcon} alt="title-icon" />
                                </span>
                                Fresh and fabulous from farm to table!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
