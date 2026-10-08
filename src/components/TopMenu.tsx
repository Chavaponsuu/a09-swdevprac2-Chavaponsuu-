import TopMenuItem from "./TopMenuItem"

export default function TopMenu() {

return (
<div className="h-[70px] w-full fixed top-0 bg-white z-50 text-black border-4  border-gray-300 flex flex-row justify-end px-5 py-0">

    <div className="flex items-center gap-1">
      <TopMenuItem title="Booking" pageRef="/booking"/>

      <img
  className="h-full w-auto object-contain"
  src="/images/logo.png"
  alt="logo"
/>
    </div>

 
</div>
  
      
  
);
}