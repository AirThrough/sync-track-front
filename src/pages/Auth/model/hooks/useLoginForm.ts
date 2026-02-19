import { useForm, type SubmitHandler } from "react-hook-form";
import {
  loginFormSchema,
  type LoginFormSchema,
} from "../config/LoginForm.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authApiService } from "~/shared/api/auth.service";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (data: LoginFormSchema) => {
      return await authApiService.login({ data });
    },
    onSuccess: (response) => {
      localStorage.setItem("accessToken", response.accessToken);
    },
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => login(data);

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    isPending,
  };
};
