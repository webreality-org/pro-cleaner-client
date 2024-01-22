import Image from 'next/image';
import Link from 'next/link';

type TItem = { icon: string; content: string };
type TItemSocial = { isSocial: boolean; links: TItem[] };
type TReIconPlusProps = { items: TItem | TItem[] | TItemSocial };
export const ReIcon = ({ item }: { item: TItem }) => {
  return (
    <div className="flex-center gap-2">
      <Image className="icon-light" src={item.icon} height={20} width={20} alt="" />
      {item.content}
    </div>
  );
};

const ReIconPlus = ({ items }: TReIconPlusProps) => {
  return (
    <div className="flex flex-col items-start md:flex-row md:items-center">
      {Array.isArray(items) ? (
        <div className="flex flex-col items-start">
          {items.map((item, index) => (
            <ReIcon key={index} item={item} />
          ))}
        </div>
      ) : (items as TItemSocial).isSocial ? (
        <div className="flex flex-col gap-1">
          <p className="ml-1.5">follow us on</p>
          <div className="flex  gap-2  md:gap-4">
            {(items as TItemSocial).links.map((item, index) => (
              <Link href={item.content} key={index} className="">
                <Image className="icon-light" src={item.icon} height={20} width={20} alt="" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <ReIcon item={items as TItem} />
      )}
    </div>
  );
};

export default ReIconPlus;
