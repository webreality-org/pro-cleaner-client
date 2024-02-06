import './stepper.css';

type TStepperProps = {
  currentStep: number;
  completedSteps?: number;
  steps: string[];
  setFormStep: (value: number) => void;
};

const ReStepper = ({ currentStep, completedSteps = 0, steps = [], setFormStep }: TStepperProps) => {
  const handleStepClick = (index: number) => () => {
    if (currentStep === 2) return;
    if (completedSteps >= index) {
      setFormStep(index);
    }
  };
  return (
    <div className="flex justify-between">
      {steps.map((step, i) => (
        <button
          type="button"
          onClick={handleStepClick(i)}
          key={i}
          className={`step-item ${currentStep === i && 'active'} ${
            i < completedSteps && 'complete'
          } `}
        >
          <div className="step">{i < completedSteps ? i + 1 : i + 1}</div>
          <p className="text-gray-500">{step}</p>
        </button>
      ))}
    </div>
  );
};

export { ReStepper };
