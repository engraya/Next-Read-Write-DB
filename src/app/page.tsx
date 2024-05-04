import Image from "next/image";
import ContactPage from "./contact/page";
import DatabasesPage from "./databases/page";

export default function Home() {
  return (
    <>
        <div className="relative">
      <div className="px-4 sm:px-10">
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">Keep safe your 
            Integrated Informatio with Read & Write DB</h1>
          <p className="text-base">Embark on a gastronomic journey with our curated dishes, delivered promptly to your
            doorstep. Elevate your dining experience today. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="mt-10">
            <button className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">Get started
              today</button>
          </div>
        </div>
        <hr className="my-12 border-gray-300" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
          <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
          <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
          <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
          <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
        </div>
      </div>
      <img src="https://readymadeui.com/bg-effect.svg" className="absolute inset-0 w-full h-full" />
    </div>
    <div className="px-4 sm:px-10">
      <DatabasesPage/>
      <div className="mt-32 bg-white rounded-md px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
          <div className="max-md:text-center">
            <h2 className="md:text-4xl text-3xl font-extrabold mb-6">Unlock Premium Features</h2>
            <p>Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
              occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
            <button type="button" className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800 mt-10">
              Try it today
            </button>
          </div>
          <div>
            <img src="https://www.faria.org/wp-content/uploads/2021/03/activity-management.png" alt="Premium Benefits" className="w-full mx-auto" />
          </div>
        </div>
      </div>
      <div className="mt-32">

      </div>
      <ContactPage/>
    </div>
    </>
  );
}
