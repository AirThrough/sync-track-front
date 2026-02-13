import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~shared/ui";
import { useLoginForm } from "~pages/Auth/model/hooks";
import { FieldSet } from "~/shared/ui/field";
import { FormField } from "~/shared/components";

export const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldSet>
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              inputProps={{
                ...register("email"),
              }}
              error={errors.email?.message}
            />
          </FieldSet>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
