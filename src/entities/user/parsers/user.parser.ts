import { userSchema, type UserDto } from "../dtos";
import { z } from "zod";

const createUserParser = () => {
  return {
    fromResponse: (data: any): UserDto => {
      try {
        return userSchema.parse(data);
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error(error.issues);
        }
      }
    },
  };
};

export const userParser = createUserParser();
