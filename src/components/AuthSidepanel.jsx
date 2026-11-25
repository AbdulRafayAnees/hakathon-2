import Image from "next/image";
import {
  FaQuoteLeft,
  FaBuilding,
  FaUser,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";

const AuthSidepanel= () => {
  return (
    <div className="relative hidden lg:flex w-1/2  overflow-hidden bg-white flex-col justify-between p-12">
    
      <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-purple-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-tr from-purple-100 via-purple-50 to-white rounded-t-[50%]" />


      <div className="relative z-10 mt-16 max-w-xl mx-auto w-full">
        <FaQuoteLeft
          size={42}
          className="text-primary mb-6"
        />

        <h2 className="text-3xl xl:text-4xl font-bold leading-tight text-slate-950">
          Streamline your HR & workforce management with{" "}
          <span className="text-primary">HCM Lite.</span>
        </h2>

        <p className="text-lg text-slate-500 mt-5 leading-relaxed">
          A smarter, simpler and more efficient way to manage your team,
          anytime, anywhere.
        </p>

 
        <div className="flex items-center gap-4 mt-10">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-start overflow-hidden justify-center">
           <Image src="/authPic.png" alt="Auth Picture" width={56} height={56} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Muhammad Bilal</h3>
            <p className="text-sm text-slate-500">HR Manager</p>
          </div>
        </div>
      </div>

      {/* HR Illustration */}
      <div className="relative z-10 mt-12 flex-1 flex items-end justify-center">
        <div className="relative w-full max-w-xl h-97.5">
          {/* Background People */}
          <div className="absolute bottom-10 left-5 w-16 h-16 rounded-full bg-primary/40" />
          <div className="absolute bottom-16 right-10 w-20 h-20 rounded-full bg-purple-200/70" />

          {/* Buildings */}
          <div className="absolute bottom-0 left-10 w-28 h-64 rounded-t-xl bg-purple-200 border-t-8 border-primary/60 p-4">
            <FaBuilding className="text-primary mb-4" size={35} />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-7 rounded-sm bg-primary/50" />
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-36 w-24 h-44 rounded-t-xl bg-purple-300/70 p-4">
            <div className="grid grid-cols-2 gap-3 mt-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-6 rounded bg-primary/40" />
              ))}
            </div>
          </div>

          {/* Clipboard */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 h-72 rounded-2xl border-[7px] border-primary/80 bg-white shadow-xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-7 rounded-lg bg-primary" />

            <div className="flex justify-center mt-12">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                <FaUsers size={32} className="text-primary" />
              </div>
            </div>

            <div className="space-y-5 mt-7 px-5">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle
                    size={25}
                    className="text-primary shrink-0"
                  />
                  <div className="h-2 rounded-full bg-purple-200 flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Clock */}
          <div className="absolute top-5 right-5 w-28 h-28 rounded-full border-[7px] border-primary bg-white flex items-center justify-center shadow-lg">
            <FaClock size={65} className="text-primary" />
          </div>

          {/* Floating Check Icon */}
          <div className="absolute bottom-24 right-2 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg">
            <FaClipboardCheck size={30} />
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="relative z-10 text-center mt-5">
        <p className="text-sm text-slate-400">Smart HR. Better Workplace.</p>
      </div>
    </div>
  );
};

export default AuthSidepanel;
