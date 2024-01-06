import { faFaceMehBlank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import Images from "../../utils/images/images";

export const AuthGoogle = () => {
  const log = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });
  return (
    <button
      onClick={log}
      className="rounded-lg items-center bg-[#fff] transition-all flex  w-full min-h-[50px] text-gray-700 hover:bg-[#fff]/80 focus:ring-2 focus:outline-none
                               font-medium sm:text-sm text-xs sm:px-5 sm:px-3 px-[3px]
                              sm:py-2 py-1 justify-center sm:justify-start"
    >
      <img src={Images.iconGoogle} alt="" className="h-[25px] mr-2.5" />
      Inciar sesión con google
    </button>
  );
};
