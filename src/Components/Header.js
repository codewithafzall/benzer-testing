import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed pt-12 px-4 sm:px-10 sm:pt-8 xl:pt-16 top-0 left-0 w-full z-50">
      <div className="lg:mx-6 xl:mx-10 2xl:mx-14 p-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center p-2 bg-[#2B2631] opacity-[80%] rounded-tl-xl rounded-br-xl"
            >
              <svg
                className="w-9 h-9"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4946 26.3047C22.4438 26.954 20.9848 27.1319 20.9848 27.1319H5.30902C5.22445 25.6418 7.13156 25.9917 7.13156 25.9917C6.65819 25.9363 4.68693 22.9969 4.68693 22.9969C4.72872 24.3325 4.31173 27.1309 4.31173 27.1309H1.63964C1.69602 26.6439 2.03039 26.5195 2.18203 26.3795C2.33464 26.2396 2.96256 25.7263 2.96256 25.7263C2.96256 25.7263 2.97714 23.1651 2.94895 21.674C2.93146 20.7661 2.47266 19.067 1.87487 17.4671C1.86418 17.4603 1.84377 17.4282 1.81947 17.3689C1.39372 16.4095 1.18182 16.9733 1.18182 16.9733C0.957283 16.5349 1.18182 16.1053 1.18182 16.1053C0.793011 16.0314 0.652068 16.5048 0.652068 16.5048C0.494601 15.5979 0.752186 15.3743 0.752186 15.3743C0.504321 15.4258 0.328385 15.8924 0.328385 15.8924C-0.0730598 13.2087 0.683173 12.1404 0.686089 12.1365C1.0088 11.529 1.41122 11.1353 1.41122 11.1353C1.41122 11.1353 3.10351 8.99203 3.4233 8.67126C3.7431 8.35049 3.98027 7.37555 4.21647 6.05263C4.45267 4.73166 4.55084 4.31369 5.136 3.9103C5.72019 3.50691 5.90195 2.92078 5.90195 2.92078L6.3277 1.10602L6.89925 0.982572L7.01589 1.43165L7.68464 0.805664L8.34659 1.01562C8.34659 1.01562 7.95389 4.76082 7.95389 4.80164C7.95389 4.84247 8.37283 5.484 8.37283 5.484L8.44282 8.00348C8.44282 8.00348 9.08824 8.70139 9.39637 9.24281C9.70158 9.78617 8.9784 10.7611 8.9784 10.7611C8.70623 10.0681 8.03651 9.95141 7.60299 10.5298C7.11892 11.3589 8.30285 12.5681 8.30285 12.5681C8.30285 12.5681 8.30285 12.57 8.30285 12.572C8.46226 12.7207 8.69749 12.8986 8.96285 12.9618C8.96285 12.9618 8.71693 13.4701 8.29021 13.4973C8.29021 13.4973 8.42046 13.7355 8.64791 13.682C8.64791 13.682 8.49822 14.0475 8.16093 14.0903C8.13857 14.0932 8.11913 14.0864 8.10067 14.0747C8.09483 14.5918 8.12691 15.2489 8.2455 16.0751C8.65763 17.7587 9.60147 19.3402 10.4102 20.0536C11.6126 21.1083 11.9751 21.674 12.3698 22.8501C12.607 23.7629 12.396 24.8642 12.2697 25.4882C14.7094 23.3429 17.6576 23.9213 20.2538 23.7143C20.5591 23.687 21.6322 23.55 21.8227 22.9337C21.8227 22.9337 22.0463 23.0999 21.9977 23.2438C21.9977 23.2438 22.6081 22.889 22.5614 22.2232C22.5614 22.2232 22.8414 22.3874 22.854 22.6411C23.9271 21.4932 23.931 19.8252 23.931 19.8252C26.5224 23.0222 24.5492 25.6554 23.4955 26.3037L23.4946 26.3047Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="hidden md:block bg-[#2B2631] py-2 px-5 lg:px-8 opacity-[80%] rounded-tl-xl rounded-br-xl text-white capitalize exp-reg">
            <div className="flex items-baseline gap-x-4 lg:gap-x-10">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                Work
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                About
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                Career
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 bg-[#2B2631] opacity-[80%] rounded-tl-xl rounded-br-xl z-50 ${
                isOpen ? "hidden" : ""
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <h1 className="none">.</h1>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#2B2631] opacity-[95%] z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-6 text-white inline-flex items-center justify-center p-2 bg-[#2B2631] opacity-[60%] border-2 rounded-tl-xl rounded-br-xl z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-7 h-7 text-whtie"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
