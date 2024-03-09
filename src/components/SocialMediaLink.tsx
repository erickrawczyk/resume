import clsx from 'clsx';

interface SocialMediaLinkProps extends SocialMedia {
  className?: string;
  Icon: React.FunctionComponent<any>;
}

export default function SocialMediaLink({
  className,
  label,
  url,
  Icon,
}: SocialMediaLinkProps) {
  return (
    <a className={clsx('block', className)} href={url} target="_blank">
      <Icon className="h-4 w-4 mr-2 inline-block" />
      <span className="text-sm">{label}</span>
    </a>
  );
}
