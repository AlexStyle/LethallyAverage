interface StepListProps {
  steps: string[];
}

const StepList = ({ steps }: StepListProps) => {
  return (
    <ol className="relative ml-4 space-y-6">
      {/* Vertical connecting line */}
      <div className="absolute left-3 top-1 bottom-1 w-px bg-la-gray" />

      {steps.map((step, index) => (
        <li key={index} className="relative flex items-start gap-4 pl-6">
          {/* Step number */}
          <span className="absolute left-0 flex items-center justify-center w-6 h-6 rounded-full bg-la-red text-la-white font-display text-xs shrink-0">
            {index + 1}
          </span>
          <span className="font-body text-sm text-la-muted leading-relaxed pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
