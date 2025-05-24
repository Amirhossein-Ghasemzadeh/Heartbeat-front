export function Footer() {
  return (
    <footer className='bg-[#e1e1e1] shadow-md fixed z-10 bottom-0 w-full'>
      <div className='px-4 py-6 text-center text-sm text-gray-800'>
        &copy; {new Date().getFullYear()} Heartino. All rights reserved.
      </div>
    </footer>
  );
}
