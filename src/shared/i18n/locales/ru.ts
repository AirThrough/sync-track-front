export default {
  shared: {
    fields: {
      email: "Email",
      password: "Пароль",
    },
    placeholders: {
      email: "your@email.com",
      password: "secretpassword123",
    },
  },
  actions: {
    sign_in: "Войти",
  },
  titles: {
    who_is_tracking: "Кто отслеживает?",
  },
  notifications: {
    login_success: "Вход выполнен",
  },
} as const;
