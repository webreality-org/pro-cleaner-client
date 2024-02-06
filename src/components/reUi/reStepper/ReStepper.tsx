import './stepper.css';

type TStepperProps = {
  currentStep: number;
  completedSteps?: number;
  steps: string[];
};

const ReStepper = ({ currentStep, completedSteps = 0, steps = [] }: TStepperProps) => {
  return (
    <div className="flex justify-between">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStep === i && 'active'} ${
            i < completedSteps && 'complete'
          } `}
        >
          <div className="step">{i < completedSteps ? i + 1 : i + 1}</div>
          <p className="text-gray-500">{step}</p>
        </div>
      ))}
    </div>
  );
};

export { ReStepper };
