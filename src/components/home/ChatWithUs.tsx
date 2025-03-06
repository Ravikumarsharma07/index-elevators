import React from "react";

const ChatWithUs = () => {
  return (
    <a
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=%2B918920878094&text=Hi+I+am+interested+in+ordering+from+Index+Elevators.&type=phone_number&app_absent=0"
      className="group fixed z-50 bottom-12 right-8 flex-center bg-green-500 hover:bg-green-600 rounded-full px-2 py-2 hover:gap-2 gap-0 cursor-pointer hover:shadow-2xl transition-all ease-in delay-200 duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        className="bi bi-whatsapp text-white"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
      <p className="text-white font-sans text-xl h-0 w-0 overflow-hidden group-hover:w-[120px] text-nowrap group-hover:h-max transition-all duration-300">
        Chat with us
      </p>
    </a>
  );
};

export default ChatWithUs;
