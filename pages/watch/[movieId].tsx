// import useMovie from "@/hooks/useMovie";
// import { useRouter } from "next/router";
// import React from "react";
// import { AiOutlineArrowLeft } from "react-icons/ai";

// const Watch = () => {
//   const router = useRouter();
//   const { movieId } = router.query;

//   const { data } = useMovie(movieId as string);

//   return (
//     <div className="h-screen w-screen bg-black">
//       <nav
//         className="
//         fixed
//         w-full
//         p-4
//         z-10
//         flex
//         flex-row
//         items-center
//         gap-8
//         bg-black/[0.7]
//         "
//       >
//         <AiOutlineArrowLeft size={40} />
//         <p className="text-1xl md:text-3xl font-bold">
//           <span className="font-light">Watching:</span>
//           {data?.title}
//         </p>
//       </nav>
//       {
//         <video
//           autoPlay
//           controls
//           className="h-full w-full"
//           src={data?.videoUrl}
//         ></video>
//       }
//     </div>
//   );
// };

// export default Watch;

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch =  () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);
  console.log(data)

  return (
    <div className="h-screen w-screen bg-black">
      {data && (
        <>
          <nav
            className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black/[0.7]
            "
          >
            <AiOutlineArrowLeft className="cursor-pointer" onClick={()=>router.push('/')} size={40} />
            <p className="text-1xl md:text-3xl font-bold">
              <span className="font-light mr-4">Watching:</span>
              {data.title}
            </p>
          </nav>
          <video
            autoPlay
            controls
            className="h-full w-full"
            src={data.videoUrl}
          ></video>
        </>
      )}
    </div>
  );
};

export default Watch;
