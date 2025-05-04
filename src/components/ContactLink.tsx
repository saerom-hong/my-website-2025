export default function ContactLink({
  link,
  children,
}: {
  link: string;
  children: string;
}) {
  const isMailto = link.startsWith('mailto:');

  return (
    <li className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="inline-block underline"
      >
        <path
          d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
          fill="currentColor"
        />
      </svg>
      <a
        href={link}
        {...(!isMailto && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        className="underline font-semibold hover:scale-110 transition-transform"
      >
        {children}
      </a>
    </li>
  );
}
