import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-20 h-20 border-4 border-[#141416] border-dashed rounded-full animate-spin"></div>
        <p className="text-4xl font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
