'use client';

import { useRouter } from 'next/navigation';
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/')}
      className="
        rounded-full
        h-14
        w-14
        p-4
        mb-6
        flex
        items-center
        justify-center
        bg-sky-400
        hover:bg-opacity-90
        cursor-pointer
        transition
      "
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
