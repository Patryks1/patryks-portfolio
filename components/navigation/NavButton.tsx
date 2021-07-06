import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  path: string;
  label: string;
}

const NavButton = (props: IProps): JSX.Element => {
  const { path, label } = props;
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`flex justify-around items-center cursor-pointer px-4 py-2 ${
          router.pathname === path ? 'bg-red-500' : ''
        }`}>
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  );
};

export default NavButton;
