export type ThemeConfig = DocProviderProps & {
  /**
   * @description socails config: like github & discord
   */
  social?: SocialMap;
  /**
   * @description splitor of helmet generate word: ${themeConfig.title} ${helmetIcon} ${subTitle}
   */
  helmetIcon?: string;
  /**
   * @description head meta description
   */
  description?: string;
  /**
   * @description head meta keywords
   */
  keywords?: string[];
  /**
   * @description head meta author
   */
  author?: string;
  /**
   * @description whether use search feature, when boolean, open or close. use object to config more
   * @default true
   */
  search?: boolean | Search;
  /**
   * @description announcementBar of top container setting
   */
  announcementBar?: AnnouncementBarConfig;
  /**
   * @description hero setting for homepage
   */
  hero?: HeroConfig;
  /**
   * @description doc body background image. if boolean. use default background image
   * @default false
   */
  thumbBackground?: boolean | string;
  /**
   * @description setting panel visiblity
   * @default false
   */
  settingPanelVisible?: boolean;
  /**
   * @description <SourceCode /> setting
   */
  code?: {
    /**
     * @description prism themes
     * @default { dark: PRISMTHEME.VSDARK, light: PRISMTHEME.VSLIGHT }
     */
    theme?: CodeTheme;
  };
};
