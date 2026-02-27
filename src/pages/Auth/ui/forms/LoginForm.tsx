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
            {t("auth.login.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FormField
              label={t("auth.login.email")}
              name="email"
              type="email"
              placeholder={t("auth.login.emailPlaceholder")}
              inputProps={{
                ...register("email"),
              }}
              error={errors.email?.message}
            />
            <FormField
              label={t("auth.login.password")}
              name="password"
              type="password"
              placeholder={t("auth.login.passwordPlaceholder")}
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
            {t("auth.login.submit")}
          </AccentButton>
        </CardFooter>
      </Card>
    </div>
  );
};
