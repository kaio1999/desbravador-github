import * as React from "react";

const LoadingDots: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="6"
      viewBox="0 0 120 30"
      fill="white"
      className="flex justify-center items-center"
      {...props}
    >
      <circle cx="15" cy="15" r="12">
        <animate
          attributeName="r"
          from="12"
          to="12"
          begin="0s"
          dur="0.8s"
          values="12; 6; 12"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="12">
        <animate
          attributeName="r"
          from="12"
          to="12"
          begin="0.2s"
          dur="0.8s"
          values="12; 6; 12"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="12">
        <animate
          attributeName="r"
          from="12"
          to="12"
          begin="0.4s"
          dur="0.8s"
          values="12; 6; 12"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );

  export default LoadingDots;