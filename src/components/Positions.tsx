function formatDate(date?: string) {
  if (!date) return '';
  const [year, month] = date.split('-');

  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

interface PositionsProps {
  positions: Position[];
}

export function Positions({ positions }: PositionsProps) {
  const sorted = positions.sort((a, b) => {
    if (a.startDate > b.startDate) return -1;
    if (a.startDate < b.startDate) return 1;
    return 0;
  });

  return (
    <ul className="mb-1">
      {sorted.map((position) => (
        <li key={position.title}>
          <div className="flex justify-between align-middle">
            <p className="text-xs">{position.title}</p>
            <hr className="grow mx-4 my-auto" />
            <p className="text-xs">
              {formatDate(position.startDate)} -&nbsp;
              {formatDate(position.endDate) || 'Present'}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
