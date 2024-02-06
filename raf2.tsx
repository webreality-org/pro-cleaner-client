<motion.div
className={cn('space-y-3', {})}
animate={{
  translateX: `-${formStep * 100}%`,
}}
transition={{
  ease: 'easeInOut',
}}
>
<Step1 />
</motion.div>
<motion.div
className={cn('space-y-3 absolute top-0 left-0 right-0', {
  hidden: formStep === 0,
})}
animate={{
  translateX: `${100 - formStep * 100}%`,
}}
transition={{
  ease: 'easeInOut',
}}
>
{/* password */}
<RePassInput />
{/* <RePassInput isValidationDrop /> */}
{/* confirm password */}
<RePassInput
  name="confirmPassword"
  disabled={watch('password') === '' || passwordError}
/>
</motion.div>
<motion.div
className={cn('space-y-3 absolute top-0 left-0 right-0', {
  hidden: formStep !== 2,
})}
animate={{
  translateX: `${200 - formStep * 100}%`,
}}
transition={{
  ease: 'easeInOut',
}}
>
<OtpVerification />
</motion.div>
