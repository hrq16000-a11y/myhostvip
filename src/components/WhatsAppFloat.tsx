import { WHATSAPP_URL } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 sm:px-5 py-3 text-black shadow-lg shadow-black/40 hosting-press"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-current" aria-hidden="true"
    >
      <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.924 15.924 0 008.832 2.666C24.826 31.998 32 24.822 32 16.004 32 7.176 24.826 0 16.004 0zm9.534 22.61c-.396 1.116-2.318 2.134-3.198 2.27-.88.134-1.702.396-5.724-1.194C12.596 21.7 10.016 17.324 9.828 17.074c-.188-.25-1.538-2.044-1.538-3.9s.972-2.768 1.318-3.148c.346-.38.758-.474.972-.474.284 0 .568.002.818.016.262.012.616-.1.964.736.354.85 1.214 2.95 1.322 3.164.106.214.178.464.036.75-.142.284-.214.464-.428.714s-.45.556-.642.748c-.214.214-.436.446-.188.874s1.102 1.82 2.368 2.948c1.628 1.45 3 1.898 3.428 2.112.428.214.678.178.928-.106.25-.286 1.072-1.25 1.358-1.68.286-.428.572-.356.964-.214s2.502 1.18 2.93 1.394c.428.214.714.322.82.5.108.178.108 1.036-.288 2.152z" />
    </svg>
    <span className="text-sm font-semibold hidden sm:inline">
      Fale Conosco
    </span>
  </a>
);

export default WhatsAppFloat;
