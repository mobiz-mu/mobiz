import type { SVGProps } from "react";

type IconProps =
  SVGProps<SVGSVGElement>;

export function FacebookIcon(
  props: IconProps,
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M13.5 22v-9h3l.45-3.5H13.5V7.27c0-1.01.28-1.7 1.75-1.7H17.1V2.44c-.32-.04-1.42-.14-2.7-.14-2.67 0-4.5 1.63-4.5 4.62V9.5H7v3.5h2.9v9h3.6Z" />
    </svg>
  );
}

export function InstagramIcon(
  props: IconProps,
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
      {...props}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function TikTokIcon(
  props: IconProps,
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M14.1 3h3.15c.23 1.3.95 2.46 2 3.22A6.15 6.15 0 0 0 22 7.36v3.22a9.08 9.08 0 0 1-4.96-1.5v6.25A5.67 5.67 0 1 1 12.16 9.7v3.27a2.49 2.49 0 1 0 1.94 2.43V3Z" />
    </svg>
  );
}

export function LinkedInIcon(
  props: IconProps,
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M5.34 7.68A2.34 2.34 0 1 0 5.34 3a2.34 2.34 0 0 0 0 4.68ZM3.32 21h4.04V9.55H3.32V21ZM9.56 9.55V21h4.04v-6.38c0-1.68.32-3.3 2.4-3.3 2.04 0 2.07 1.91 2.07 3.41V21h4.04v-7.07c0-3.47-.75-6.14-4.8-6.14-1.95 0-3.25 1.07-3.78 2.09h-.05V9.55H9.56Z" />
    </svg>
  );
}

export function WhatsAppBrandIcon(
  props: IconProps,
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.92L2 22l5.22-1.56A9.9 9.9 0 1 0 12.04 2Zm0 17.94a8.02 8.02 0 0 1-4.09-1.12l-.29-.17-3.1.92.94-3.02-.19-.31A8 8 0 1 1 12.04 19.94Zm4.4-5.99c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}