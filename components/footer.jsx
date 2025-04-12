export function Footer(){
    return(
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p classname=""></p>
        </div>

        <div className="text-sm text-center md:text-right space-y-1">
          <p>Email: <a href="mailto:youremail@example.com" className="text-blue-400 hover:underline">bbattuvshin5@gnail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+976 86799770</a></p>
          <p>Location: Ulaanbaatar, Mongolia</p>
          <div className="flex justify-center md:justify-end space-x-4 mt-2">
            <a href="https://github.com/battuvshin1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
