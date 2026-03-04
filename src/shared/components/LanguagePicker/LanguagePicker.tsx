import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/ui/select";
import { languages, type Language } from "~/shared/i18n";
import { cn } from "~/shared/utils";

const LANGUAGE_LABELS: Record<Language, string> = {
  en: "English",
  ru: "Русский",
  ja: "日本語",
};

interface LanguagePickerProps {
  className?: string;
}

export const LanguagePicker = ({ className }: LanguagePickerProps) => {
  const { i18n } = useTranslation();

  const currentLanguage = (
    languages.includes(i18n.language as Language) ? i18n.language : "en"
  ) as Language;

  return (
    <Select
      value={currentLanguage}
      onValueChange={(value) => {
        if (value) {
          void i18n.changeLanguage(value);
        }
      }}
      items={LANGUAGE_LABELS}
    >
      <SelectTrigger className={cn(className)} size="sm">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {languages.map((language) => (
          <SelectItem key={language} value={language}>
            {LANGUAGE_LABELS[language]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
