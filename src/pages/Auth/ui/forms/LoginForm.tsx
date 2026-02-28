import { useTranslation } from "react-i18next";
import {
  AccentButton,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~shared/ui";
import { useLoginForm } from "~pages/Auth/model/hooks";
import { FieldSet } from "~/shared/ui/field";
import { FormField } from "~/shared/components";
import { UISpinner } from "~/shared/ui";
import { SHARED_KEYS } from "~/shared/i18n";

export const LoginForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, onSubmit, isPending } =
    useLoginForm();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card className="w-[400px] relative">
        {isPending && (
          <UISpinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        )}
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {t(SHARED_KEYS.TITLES.WHO_IS_TRACKING)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FormField
              label={t(SHARED_KEYS.FIELDS.EMAIL)}
              name="email"
              type="email"
              placeholder={t(SHARED_KEYS.PLACEHOLDERS.EMAIL)}
              inputProps={{
                ...register("email"),
              }}
              error={errors.email?.message}
            />
            <FormField
              label={t(SHARED_KEYS.FIELDS.PASSWORD)}
              name="password"
              type="password"
              placeholder={t(SHARED_KEYS.PLACEHOLDERS.PASSWORD)}
              inputProps={{
                ...register("password"),
              }}
              error={errors.password?.message}
            />
          </FieldSet>
        </CardContent>
        <CardFooter>
          <AccentButton
            className="w-full"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {t(SHARED_KEYS.ACTIONS.SIGN_IN)}
          </AccentButton>
        </CardFooter>
      </Card>
    </div>
  );
};
