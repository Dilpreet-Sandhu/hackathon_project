
import Image from 'next/image'
import logo from '@/assets/logo.png';
import AuthButtons from './AuthButtons';

export default function TopBar() {
  return (
    <div className="w-full h-20 py-3">

        <div className='w-full px-2 h-full  flex items-center justify-between'>

            <div className="flex items-center gap-3">
                <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                />
                <p className="text-xl text-white">
                    Habitron
                </p>
            </div>

            <AuthButtons/>

        </div>
      
    </div>
  )
}
