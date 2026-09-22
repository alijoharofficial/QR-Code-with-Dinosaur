export interface Language {
  id: string
  englishName: string
  nativeName: string
  rtl?: boolean
}

export const languages: Language[] = [
  { id: 'en', englishName: 'English', nativeName: 'English' },
  { id: 'zh', englishName: 'Chinese', nativeName: '中文' },
  { id: 'es', englishName: 'Spanish', nativeName: 'Español' },
  { id: 'ar', englishName: 'Arabic', nativeName: 'العربية', rtl: true },
  { id: 'fr', englishName: 'French', nativeName: 'Français' },
  { id: 'pt', englishName: 'Portuguese', nativeName: 'Português' },
  { id: 'de', englishName: 'German', nativeName: 'Deutsch' },
]

export const defaultLanguageId = 'en'
