<ReGlide translateX={-(formStep * 100)} hidden={formStep !== 0}>
              <Step1 />
            </ReGlide>
            <ReGlide translateX={100 - formStep * 100} hidden={formStep === 0}>
              {/* password */}
              <RePassInput />
              {/* confirm password */}
              <RePassInput
                name="confirmPassword"
                disabled={watch('password') === '' || passwordError}
              />
            </ReGlide>
            <ReGlide hidden={formStep !== 2} translateX={200 - formStep * 100}>
              <OtpVerification />
            </ReGlide>